from fastapi import APIRouter, Request, HTTPException
import stripe
import os
from datetime import datetime

router = APIRouter(prefix="/api/webhooks", tags=["webhooks"])

# MongoDB will be injected via dependency
from server import db

# Initialize Stripe
stripe.api_key = os.getenv('STRIPE_API_KEY')
webhook_secret = os.getenv('STRIPE_WEBHOOK_SECRET')

@router.post("/stripe")
async def stripe_webhook(request: Request):
    """
    Webhook Stripe pour gérer les événements de paiement
    """
    try:
        # Lire le body du webhook
        payload = await request.body()
        signature = request.headers.get("Stripe-Signature")
        
        if not signature:
            raise HTTPException(status_code=400, detail="Signature manquante")
        
        # Vérifier la signature du webhook
        try:
            event = stripe.Webhook.construct_event(
                payload, signature, webhook_secret
            )
        except stripe.error.SignatureVerificationError:
            raise HTTPException(status_code=400, detail="Signature invalide")
        
        # Traiter l'événement selon son type
        if event['type'] == "checkout.session.completed":
            session = event['data']['object']
            session_id = session['id']
            payment_status = session['payment_status']
            
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
            "event_type": event['type']
        }
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"Erreur webhook: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Erreur webhook: {str(e)}")
