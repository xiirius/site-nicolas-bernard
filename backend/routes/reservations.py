from fastapi import APIRouter, HTTPException, Request
from motor.motor_asyncio import AsyncIOMotorClient
from emergentintegrations.payments.stripe.checkout import (
    StripeCheckout,
    CheckoutSessionRequest,
    CheckoutSessionResponse,
    CheckoutStatusResponse
)
from models import ReservationCreate, Reservation, PaymentTransaction
from email_service import send_confirmation_email, EmailDeliveryError
import os
from datetime import datetime

router = APIRouter(prefix="/api/reservations", tags=["reservations"])

# MongoDB will be injected via dependency
from server import db

# Tarifs fixes (sécurité: montants définis côté backend)
TARIFS = {
    "acompte": 15.0,  # Acompte fixe
    "consultation_heure": 15.0  # Tarif horaire
}

@router.post("/create-checkout-session")
async def create_checkout_session(reservation: ReservationCreate, request: Request):
    """
    Crée une session de paiement Stripe et enregistre la réservation
    """
    try:
        # 1. Déterminer le montant (défini côté backend pour sécurité)
        if reservation.paiementMode == "acompte":
            montant = TARIFS["acompte"]
        else:  # cb-online
            montant = TARIFS["consultation_heure"]
        
        # 2. Obtenir l'URL frontend depuis le header Origin
        origin_url = request.headers.get("origin", os.getenv('FRONTEND_URL', 'http://localhost:3000'))
        
        # 3. Construire les URLs de succès et d'annulation
        success_url = f"{origin_url}/reservation/success?session_id={{CHECKOUT_SESSION_ID}}"
        cancel_url = f"{origin_url}/reservation"
        
        # 4. Créer l'entrée de réservation dans MongoDB
        reservation_dict = reservation.dict()
        reservation_obj = Reservation(
            **reservation_dict,
            montant=montant,
            stripePaymentStatus="pending"
        )
        
        result = await db.reservations.insert_one(reservation_obj.dict())
        reservation_id = str(result.inserted_id)
        
        # 5. Initialiser Stripe Checkout
        stripe_api_key = os.getenv('STRIPE_API_KEY')
        host_url = str(request.base_url)
        webhook_url = f"{host_url}api/webhooks/stripe"
        
        stripe_checkout = StripeCheckout(
            api_key=stripe_api_key,
            webhook_url=webhook_url
        )
        
        # 6. Créer la session de paiement Stripe
        checkout_request = CheckoutSessionRequest(
            amount=montant,
            currency="eur",
            success_url=success_url,
            cancel_url=cancel_url,
            metadata={
                "reservation_id": reservation_obj.id,
                "customer_name": f"{reservation.prenom} {reservation.nom}",
                "customer_email": reservation.email,
                "payment_mode": reservation.paiementMode
            }
        )
        
        session: CheckoutSessionResponse = await stripe_checkout.create_checkout_session(checkout_request)
        
        # 7. Créer l'entrée de transaction de paiement
        payment_transaction = PaymentTransaction(
            session_id=session.session_id,
            amount=montant,
            currency="eur",
            payment_status="pending",
            reservation_id=reservation_obj.id,
            customer_email=reservation.email,
            metadata=checkout_request.metadata
        )
        
        await db.payment_transactions.insert_one(payment_transaction.dict())
        
        # 8. Mettre à jour la réservation avec le session_id
        await db.reservations.update_one(
            {"id": reservation_obj.id},
            {"$set": {
                "stripeSessionId": session.session_id,
                "updatedAt": datetime.utcnow()
            }}
        )
        
        return {
            "success": True,
            "sessionId": session.session_id,
            "sessionUrl": session.url,
            "reservationId": reservation_obj.id
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de la création de la session: {str(e)}")

@router.get("/checkout-status/{session_id}")
async def get_checkout_status(session_id: str, request: Request):
    """
    Vérifie le statut d'une session de paiement Stripe
    """
    try:
        # Initialiser Stripe Checkout
        stripe_api_key = os.getenv('STRIPE_API_KEY')
        host_url = str(request.base_url)
        webhook_url = f"{host_url}api/webhooks/stripe"
        
        stripe_checkout = StripeCheckout(
            api_key=stripe_api_key,
            webhook_url=webhook_url
        )
        
        # Récupérer le statut depuis Stripe
        status: CheckoutStatusResponse = await stripe_checkout.get_checkout_status(session_id)
        
        # Vérifier si le paiement est déjà traité
        existing_transaction = await db.payment_transactions.find_one({"session_id": session_id})
        
        if not existing_transaction:
            raise HTTPException(status_code=404, detail="Transaction non trouvée")
        
        # Si le paiement est complété et pas encore traité
        if status.payment_status == "paid" and existing_transaction["payment_status"] != "completed":
            # Mettre à jour la transaction
            await db.payment_transactions.update_one(
                {"session_id": session_id},
                {"$set": {
                    "payment_status": "completed",
                    "updatedAt": datetime.utcnow()
                }}
            )
            
            # Mettre à jour la réservation
            reservation_id = existing_transaction["reservation_id"]
            reservation = await db.reservations.find_one({"id": reservation_id})
            
            if reservation:
                await db.reservations.update_one(
                    {"id": reservation_id},
                    {"$set": {
                        "stripePaymentStatus": "completed",
                        "updatedAt": datetime.utcnow()
                    }}
                )
                
                # Envoyer l'email de confirmation (si pas déjà envoyé)
                if not reservation.get("emailSent", False):
                    try:
                        email_sent = send_confirmation_email(reservation)
                        if email_sent:
                            await db.reservations.update_one(
                                {"id": reservation_id},
                                {"$set": {
                                    "emailSent": True,
                                    "updatedAt": datetime.utcnow()
                                }}
                            )
                    except EmailDeliveryError as e:
                        print(f"Erreur envoi email: {str(e)}")
        
        return {
            "success": True,
            "status": status.status,
            "payment_status": status.payment_status,
            "amount_total": status.amount_total,
            "currency": status.currency
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de la vérification du statut: {str(e)}")

@router.get("/success")
async def reservation_success(session_id: str):
    """
    Page de succès après paiement (appelée par le frontend)
    """
    try:
        # Récupérer la transaction
        transaction = await db.payment_transactions.find_one({"session_id": session_id})
        
        if not transaction:
            raise HTTPException(status_code=404, detail="Transaction non trouvée")
        
        # Récupérer la réservation
        reservation = await db.reservations.find_one({"id": transaction["reservation_id"]})
        
        if not reservation:
            raise HTTPException(status_code=404, detail="Réservation non trouvée")
        
        return {
            "success": True,
            "reservation": {
                "id": reservation["id"],
                "nom": reservation["nom"],
                "prenom": reservation["prenom"],
                "email": reservation["email"],
                "paiementStatus": reservation["stripePaymentStatus"],
                "emailSent": reservation.get("emailSent", False)
            }
        }
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur: {str(e)}")
