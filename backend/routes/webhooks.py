from fastapi import APIRouter, Request, HTTPException
from emergentintegrations.payments.stripe.checkout import StripeCheckout
import os
from datetime import datetime

router = APIRouter(prefix="/api/webhooks", tags=["webhooks"])

# MongoDB will be injected via dependency
from server import db

@router.post("/stripe")
async def stripe_webhook(request: Request):
    """
    Webhook Stripe pour gérer les événements de paiement
    """
    try:
        # Lire le body du webhook
        body = await request.body()
        signature = request.headers.get("Stripe-Signature")
        
        if not signature:
            raise HTTPException(status_code=400, detail="Signature manquante")
        
        # Initialiser Stripe Checkout
        stripe_api_key = os.getenv('STRIPE_API_KEY')
        host_url = str(request.base_url)
        webhook_url = f"{host_url}api/webhooks/stripe"
        
        stripe_checkout = StripeCheckout(
            api_key=stripe_api_key,
            webhook_url=webhook_url
        )
        
        # Gérer le webhook
        webhook_response = await stripe_checkout.handle_webhook(body, signature)
        
        # Traiter l'événement selon son type
        if webhook_response.event_type == "checkout.session.completed":
            session_id = webhook_response.session_id
            payment_status = webhook_response.payment_status
            
            # Récupérer la transaction
            transaction = await db.payment_transactions.find_one({"session_id": session_id})
            
            if not transaction:
                return {"success": False, "message": "Transaction non trouvée"}
            
            # Vérifier si déjà traité pour éviter les doublons
            if transaction["payment_status"] == "completed":
                return {"success": True, "message": "Déjà traité"}
            
            # Mettre à jour la transaction
            await db.payment_transactions.update_one(
                {"session_id": session_id},
                {"$set": {
                    "payment_status": "completed" if payment_status == "paid" else "failed",
                    "updatedAt": datetime.utcnow()
                }}
            )
            
            # Mettre à jour la réservation
            reservation_id = transaction["reservation_id"]
            reservation = await db.reservations.find_one({"id": reservation_id})
            
            if reservation and payment_status == "paid":
                await db.reservations.update_one(
                    {"id": reservation_id},
                    {"$set": {
                        "stripePaymentStatus": "completed",
                        "updatedAt": datetime.utcnow()
                    }}
                )
                print(f"Paiement confirmé pour {reservation['email']}")
        
        return {
            "success": True,
            "event_type": webhook_response.event_type,
            "session_id": webhook_response.session_id
        }
        
    except Exception as e:
        print(f"Erreur webhook: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Erreur webhook: {str(e)}")
