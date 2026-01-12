# Site de Thérapie Nicolas Bernard - Instructions Finales

## ✅ Ce qui est déjà fait

Votre site est **entièrement fonctionnel** avec :

### Frontend (Page Utilisateur)
- ✅ Page d'accueil avec présentation complète
- ✅ Page de réservation avec formulaire détaillé
- ✅ Design blanc/vert minimaliste et professionnel
- ✅ Navigation fluide
- ✅ Page de succès après paiement
- ✅ Responsive (mobile/tablette/desktop)

### Backend (Serveur)
- ✅ API de création de réservations
- ✅ Intégration Stripe pour les paiements
- ✅ Système d'envoi d'emails automatiques  
- ✅ Base de données MongoDB pour stocker les réservations
- ✅ Webhooks Stripe pour confirmer les paiements

---

## 🔑 Ce qu'il reste à faire : Ajouter vos clés API

Pour activer les **vrais paiements Stripe** et les **emails automatiques**, vous devez :

### Étape 1 : Obtenir vos clés API

Suivez les 2 guides que nous avons créés pour vous :

1. **`GUIDE_STRIPE_CLIENT.md`** → Créer votre compte Stripe et récupérer les clés
2. **`GUIDE_EMAIL_CLIENT.md`** → Créer votre compte SendGrid (ou Resend) pour les emails

**Temps estimé** : 15-20 minutes au total

---

### Étape 2 : Ajouter les clés dans le fichier `.env`

Une fois que vous avez récupéré vos clés API, votre développeur doit les ajouter dans le fichier **`/app/backend/.env`** :

```bash
# Stripe Configuration
STRIPE_API_KEY=sk_test_VOTRE_CLE_STRIPE_TEST     # À remplir avec votre clé Stripe
STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_PUB    # À remplir

# SendGrid Configuration  
SENDGRID_API_KEY=SG.VOTRE_CLE_SENDGRID          # À remplir avec votre clé SendGrid
SENDER_EMAIL=votre.email@exemple.com             # Votre email vérifié
SENDER_NAME=Nicolas Bernard Thérapie             # Déjà configuré
```

**Important** : 
- Commencez par les **clés TEST** de Stripe (`sk_test_...` et `pk_test_...`)
- Une fois que tout fonctionne, remplacez par les **clés PRODUCTION** (`sk_live_...` et `pk_live_...`)

---

### Étape 3 : Redémarrer le serveur backend

Après avoir ajouté les clés, le développeur doit redémarrer le backend :

```bash
cd /app/backend
sudo supervisorctl restart backend
```

---

## 🧪 Comment tester avec les clés TEST Stripe

Une fois les clés TEST configurées :

1. Allez sur votre site → Page de réservation
2. Remplissez le formulaire
3. Cliquez sur "Confirmer ma réservation"
4. Vous serez redirigé vers Stripe Checkout
5. Utilisez la **carte de test** :
   - Numéro : `4242 4242 4242 4242`
   - Date d'expiration : n'importe quelle date future
   - CVC : n'importe quel 3 chiffres

6. Validez le paiement
7. Vous serez redirigé vers la page de succès
8. Un email de confirmation sera envoyé automatiquement

---

## 📊 Vérifier que tout fonctionne

### Vérifier les paiements Stripe
- Connectez-vous à votre **Stripe Dashboard** : https://dashboard.stripe.com
- Allez dans **"Paiements"** → Vous devriez voir votre paiement test

### Vérifier les emails SendGrid
- Connectez-vous à votre **SendGrid Dashboard** : https://app.sendgrid.com
- Allez dans **"Activity"** → Vous devriez voir votre email envoyé

### Vérifier les réservations (MongoDB)
- Les réservations sont stockées automatiquement dans MongoDB
- Votre développeur peut les consulter via la base de données

---

## 🚀 Passer en PRODUCTION (quand vous êtes prêt)

### 1. Activer le mode Production dans Stripe
- Allez dans votre **Stripe Dashboard**
- Basculez en **"Mode Production"** (interrupteur en haut à droite)
- Récupérez vos **clés de production** (`sk_live_...` et `pk_live_...`)

### 2. Remplacer les clés dans `/app/backend/.env`
```bash
STRIPE_API_KEY=sk_live_VOTRE_CLE_PRODUCTION
STRIPE_PUBLISHABLE_KEY=pk_live_VOTRE_CLE_PRODUCTION_PUB
```

### 3. Redémarrer le backend
```bash
sudo supervisorctl restart backend
```

✅ **C'est tout !** Votre site est maintenant prêt à accepter de vrais paiements.

---

## 💰 Tarifs Stripe

Stripe prélève automatiquement sa commission sur chaque paiement :
- **2,9% + 0,25 €** par transaction en Europe
- **Exemple** : Pour une consultation à 15 €, vous recevez environ **14,42 €**
- **Pas de frais mensuels**, vous payez uniquement quand vous recevez des paiements

L'argent arrive directement sur votre compte bancaire sous **2-3 jours ouvrés**.

---

## 📞 Besoin d'aide ?

### Support Stripe
- Site : https://support.stripe.com/
- Téléphone : +33 1 76 36 45 45

### Support SendGrid
- Site : https://support.sendgrid.com/

### Pour votre développeur
- Toute la documentation technique est dans `/app/contracts.md`
- Les playbooks d'intégration sont déjà suivis

---

## 🎨 Modifications futures du site

Si vous voulez changer :
- **Les textes** : Fichiers `/app/frontend/src/pages/HomePage.jsx` et `ReservationPage.jsx`
- **Les couleurs** : Fichier `/app/frontend/src/App.css`
- **Les tarifs** : Fichier `/app/backend/routes/reservations.py` (variable `TARIFS`)
- **L'email de confirmation** : Fichier `/app/backend/email_service.py`

Votre développeur peut facilement faire ces modifications.

---

## 📝 Résumé de ce qui a été créé

### Frontend (React)
- `HomePage.jsx` - Page d'accueil complète
- `ReservationPage.jsx` - Formulaire de réservation et paiement
- `ReservationSuccessPage.jsx` - Page de confirmation
- `App.css` - Styles personnalisés blanc/vert
- `mock.js` - Données de démonstration (non utilisé en production)

### Backend (FastAPI + Python)
- `server.py` - Serveur principal
- `models.py` - Structure des données (Réservation, Transaction)
- `email_service.py` - Service d'envoi d'emails
- `routes/reservations.py` - API de réservations et paiements
- `routes/webhooks.py` - Webhook Stripe pour confirmer les paiements
- `.env` - Configuration (clés API à remplir)

### Documentation
- `GUIDE_STRIPE_CLIENT.md` - Guide pour créer compte Stripe
- `GUIDE_EMAIL_CLIENT.md` - Guide pour créer compte SendGrid
- `contracts.md` - Documentation technique complète
- `README_ACTIVATION.md` - Ce fichier

---

## ✨ Félicitations !

Votre site de thérapie est prêt à être utilisé. Il vous suffit maintenant de :
1. Suivre les guides pour obtenir vos clés API
2. Les transmettre à votre développeur
3. Tester avec les clés TEST
4. Passer en PRODUCTION quand vous êtes prêt

**Bonne chance avec votre activité de thérapie !** 🌿
