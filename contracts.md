# Contrats API - Site Thérapie Nicolas Bernard

## Vue d'ensemble
Le frontend envoie les données de réservation au backend, qui :
1. Crée une session de paiement Stripe
2. Enregistre la réservation en base de données
3. Envoie un email de confirmation au client

## Données mockées actuellement (mock.js)
- `mockStripePayment()` : Simulation paiement Stripe
- `mockSendConfirmationEmail()` : Simulation envoi email
- `consultationTypes` : Types de consultations (individual, duo, nomade)

## Backend à implémenter

### 1. Modèle MongoDB : Reservation
```python
{
    "id": "uuid",
    "nom": "string",
    "prenom": "string", 
    "email": "string",
    "telephone": "string",
    "lieuPreference": "presentiel | en-ligne | cabinet",
    "message": "string (optional)",
    "paiementMode": "cb-online | acompte",
    "montant": "number",
    "stripeSessionId": "string",
    "stripePaymentStatus": "pending | completed | failed",
    "emailSent": "boolean",
    "createdAt": "datetime",
    "updatedAt": "datetime"
}
```

### 2. Variables d'environnement (.env)
```
STRIPE_PUBLISHABLE_KEY=pk_test_xxx (ou pk_live_xxx)
STRIPE_SECRET_KEY=sk_test_xxx (ou sk_live_xxx)
SENDGRID_API_KEY=SG.xxx ou RESEND_API_KEY=re_xxx
EMAIL_FROM=email.client@exemple.com
EMAIL_FROM_NAME=Nicolas Bernard Thérapie
FRONTEND_URL=http://localhost:3000 (pour redirections Stripe)
```

### 3. API Endpoints

#### POST /api/reservations/create-checkout-session
**Description** : Crée une session de paiement Stripe et enregistre la réservation

**Request Body** :
```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "email": "jean.dupont@exemple.com",
  "telephone": "0612345678",
  "lieuPreference": "presentiel",
  "message": "Je souhaite...",
  "paiementMode": "cb-online",
  "montant": 15
}
```

**Response Success (200)** :
```json
{
  "success": true,
  "sessionId": "cs_test_xxx",
  "sessionUrl": "https://checkout.stripe.com/xxx",
  "reservationId": "uuid"
}
```

**Response Error (400/500)** :
```json
{
  "success": false,
  "error": "Message d'erreur"
}
```

#### GET /api/reservations/success?session_id=xxx
**Description** : Page de succès après paiement Stripe

**Query Params** :
- `session_id` : ID de session Stripe

**Response** :
```json
{
  "success": true,
  "reservation": {
    "id": "uuid",
    "nom": "Dupont",
    "prenom": "Jean",
    "email": "jean.dupont@exemple.com",
    "paiementStatus": "completed"
  }
}
```

#### POST /api/webhooks/stripe
**Description** : Webhook Stripe pour confirmer les paiements

**Utilisé par** : Stripe (événement `checkout.session.completed`)

**Action** :
- Met à jour le statut de paiement
- Envoie l'email de confirmation
- Marque `emailSent = true`

### 4. Service d'envoi d'emails

**Fonction** : `send_confirmation_email(reservation)`

**Template email** :
```
Sujet : Confirmation de votre réservation - Nicolas Bernard Thérapie

Bonjour [Prénom],

Merci pour votre confiance.

Votre réservation a bien été confirmée et le paiement a été effectué avec succès.

Récapitulatif :
- Nom : [Nom] [Prénom]
- Email : [Email]
- Téléphone : [Téléphone]
- Préférence de lieu : [Lieu]
- Montant : [Montant] €

Je vous répondrai rapidement par email ou téléphone pour fixer notre rencontre.

Aucune pression : c'est la relation humaine qui prime.

À très bientôt,
Nicolas Bernard
Thérapeute & Coach de Santé et de Vie

---
Si vous avez des questions, répondez simplement à cet email.
```

## Intégration Frontend/Backend

### Changements dans ReservationPage.jsx

**Avant (mock)** :
```javascript
const paymentResult = await mockStripePayment(15, {...});
```

**Après (réel)** :
```javascript
const response = await axios.post(`${API}/reservations/create-checkout-session`, formData);
if (response.data.success) {
  // Rediriger vers Stripe Checkout
  window.location.href = response.data.sessionUrl;
}
```

### Flux complet

1. **Client remplit formulaire** → Frontend
2. **Frontend envoie POST** → `/api/reservations/create-checkout-session`
3. **Backend crée réservation** → MongoDB (statut: pending)
4. **Backend crée session Stripe** → Stripe API
5. **Backend retourne URL** → Frontend
6. **Frontend redirige** → Page Stripe Checkout
7. **Client paie sur Stripe** → Stripe traite le paiement
8. **Stripe envoie webhook** → `/api/webhooks/stripe`
9. **Backend reçoit confirmation** → Met à jour MongoDB (statut: completed)
10. **Backend envoie email** → SendGrid/Resend
11. **Stripe redirige client** → `/reservation/success?session_id=xxx`
12. **Frontend affiche succès** → Composant SuccessPage

## Gestion des 2 modes de paiement

### Mode 1 : Paiement CB complet en ligne
- Montant : 15 € (ou calculé selon durée)
- Stripe : `mode: 'payment'`

### Mode 2 : Acompte 15 € + reste en espèces
- Montant Stripe : 15 € (acompte)
- Note dans l'email : "Acompte payé, reste à régler en espèces lors de la consultation"

## Sécurité

1. **Validation des données** : Vérifier tous les champs côté backend
2. **Webhook signature** : Vérifier la signature Stripe pour éviter les faux webhooks
3. **Variables d'environnement** : Jamais de clés en dur dans le code
4. **HTTPS** : Obligatoire en production pour Stripe

## Tests

### Avec clés TEST Stripe :
- Carte test : `4242 4242 4242 4242`
- Date : n'importe quelle date future
- CVC : n'importe quel 3 chiffres

### Vérifications :
1. ✅ Réservation créée dans MongoDB
2. ✅ Session Stripe créée
3. ✅ Redirection vers Stripe fonctionne
4. ✅ Webhook reçu après paiement
5. ✅ Email envoyé
6. ✅ Page de succès affichée
