from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
from typing import Optional

class EmailDeliveryError(Exception):
    pass

def send_confirmation_email(reservation_data: dict) -> bool:
    """
    Envoie un email de confirmation de réservation au client
    
    Args:
        reservation_data: Dictionnaire contenant les informations de réservation
    
    Returns:
        bool: True si l'email a été envoyé avec succès
    """
    sendgrid_key = os.getenv('SENDGRID_API_KEY')
    sender_email = os.getenv('SENDER_EMAIL')
    sender_name = os.getenv('SENDER_NAME', 'Nicolas Bernard Thérapie')
    
    # Si pas de clé SendGrid, on simule l'envoi (mode démo)
    if not sendgrid_key or not sender_email:
        print(f"[DEMO MODE] Email simulation: {reservation_data.get('email')}")
        return True
    
    # Préparer le contenu de l'email
    prenom = reservation_data.get('prenom', '')
    nom = reservation_data.get('nom', '')
    email = reservation_data.get('email', '')
    telephone = reservation_data.get('telephone', '')
    lieu = reservation_data.get('lieuPreference', '')
    message_client = reservation_data.get('message', '')
    montant = reservation_data.get('montant', 15)
    
    # Traduction du lieu de préférence
    lieu_text = {
        'presentiel': 'En présentiel (lieu calme, café, domicile)',
        'en-ligne': 'En ligne (audio ou visio)',
        'cabinet': 'À mon cabinet'
    }.get(lieu, lieu)
    
    subject = f"Confirmation de votre réservation - {sender_name}"
    
    html_content = f"""
    <html>
        <head>
            <style>
                body {{
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
                    line-height: 1.6;
                    color: #2C3E2C;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }}
                .header {{
                    background: linear-gradient(135deg, #E8F5E9 0%, #F1F8F4 100%);
                    padding: 30px;
                    border-radius: 8px;
                    text-align: center;
                    margin-bottom: 30px;
                }}
                .header h1 {{
                    color: #2C3E2C;
                    margin: 0;
                    font-size: 24px;
                }}
                .content {{
                    background: #FFFFFF;
                    padding: 30px;
                    border: 1px solid #E5E7EB;
                    border-radius: 8px;
                }}
                .info-block {{
                    background: #F9FAF9;
                    padding: 15px;
                    border-left: 4px solid #7FB069;
                    margin: 20px 0;
                }}
                .info-block strong {{
                    color: #2C3E2C;
                }}
                .footer {{
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #E5E7EB;
                    color: #6B7B6B;
                    font-size: 14px;
                }}
            </style>
        </head>
        <body>
            <div class="header">
                <h1>✓ Réservation confirmée</h1>
            </div>
            
            <div class="content">
                <p>Bonjour <strong>{prenom}</strong>,</p>
                
                <p>Merci pour votre confiance.</p>
                
                <p>Votre réservation a bien été confirmée et le paiement a été effectué avec succès.</p>
                
                <div class="info-block">
                    <h3 style="margin-top: 0; color: #2C3E2C;">Récapitulatif de votre réservation :</h3>
                    <p><strong>Nom :</strong> {nom} {prenom}</p>
                    <p><strong>Email :</strong> {email}</p>
                    <p><strong>Téléphone :</strong> {telephone}</p>
                    <p><strong>Préférence de lieu :</strong> {lieu_text}</p>
                    {f'<p><strong>Votre message :</strong> {message_client}</p>' if message_client else ''}
                    <p><strong>Montant payé :</strong> {montant} €</p>
                </div>
                
                <p>Je vous répondrai rapidement par email ou téléphone pour fixer notre rencontre.</p>
                
                <p style="font-weight: 600; color: #7FB069;">Aucune pression : c'est la relation humaine qui prime.</p>
                
                <p>À très bientôt,<br>
                <strong>Nicolas Bernard</strong><br>
                Thérapeute & Coach de Santé et de Vie</p>
            </div>
            
            <div class="footer">
                <p>Si vous avez des questions, répondez simplement à cet email.</p>
                <p>&copy; 2025 Nicolas Bernard - Accompagnement bienveillant et solidaire</p>
            </div>
        </body>
    </html>
    """
    
    try:
        message = Mail(
            from_email=(sender_email, sender_name),
            to_emails=email,
            subject=subject,
            html_content=html_content
        )
        
        sg = SendGridAPIClient(sendgrid_key)
        response = sg.send(message)
        
        return response.status_code == 202
    except Exception as e:
        raise EmailDeliveryError(f"Échec de l'envoi d'email: {str(e)}")
