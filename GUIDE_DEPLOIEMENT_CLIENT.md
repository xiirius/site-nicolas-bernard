# 🚀 Guide complet : Déployer le site sur le compte du client

## 📋 Vue d'ensemble

**Objectif** : Le client héberge le site sur SON compte Vercel/Railway et paie directement l'hébergeur. Vous gardez l'accès technique.

**Temps total** : 30-45 minutes
**Coût pour le client** : 0-20€/mois (gratuit au début)

---

## PARTIE 1 : Préparation (VOUS - 10 minutes)

### Étape 1 : Exporter le code depuis Emergent

**Option A : Via GitHub (RECOMMANDÉ)**
1. Sur Emergent, cliquez sur **"Save to GitHub"** (en haut à droite)
2. Connectez votre compte GitHub si demandé
3. Le code sera sauvegardé automatiquement
4. Notez le nom du repository créé

**Option B : Export manuel**
1. Téléchargez tous les fichiers du projet
2. Créez un repository GitHub
3. Uploadez tout le code

### Étape 2 : Préparer le fichier .env.example

Créez un fichier `.env.example` avec :
```bash
# À remplir par le client
STRIPE_API_KEY=sk_test_VOTRE_CLE_STRIPE
STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_STRIPE
SENDGRID_API_KEY=SG_VOTRE_CLE_SENDGRID
SENDER_EMAIL=email@exemple.com
SENDER_NAME=Nicolas Bernard Thérapie
FRONTEND_URL=https://votre-domaine.com
MONGO_URL=mongodb://localhost:27017/
DB_NAME=emergent_db
```

### Étape 3 : Créer un README pour le client

Document simple expliquant :
- Ce qu'est le site
- Comment créer son compte Vercel
- Comment vous inviter

---

## PARTIE 2 : Instructions pour le CLIENT (15-20 minutes)

### 📧 Email à envoyer au client :

```
Bonjour [Nom du client],

Votre site de thérapie est terminé et prêt à être mis en ligne !

Pour l'hébergement, je vous recommande Vercel - c'est gratuit pour votre usage 
et très fiable. Vous allez créer VOTRE compte (vous gardez le contrôle total), 
et je vais configurer le site pour vous.

Voici les étapes simples à suivre :

ÉTAPE 1 : Créer votre compte Vercel (5 minutes)
-----------------------------------------------
1. Allez sur : https://vercel.com/signup
2. Cliquez sur "Continue with GitHub" (recommandé) ou "Continue with Email"
3. Remplissez vos informations
4. Vérifiez votre email si demandé
5. Vous êtes maintenant sur votre Dashboard Vercel

ÉTAPE 2 : M'inviter comme collaborateur (2 minutes)
---------------------------------------------------
1. Cliquez sur votre photo/avatar en haut à droite
2. Allez dans "Settings"
3. Cliquez sur "Members" dans le menu de gauche
4. Cliquez sur "Invite Member"
5. Entrez mon email : [VOTRE_EMAIL]
6. Rôle : "Member" (accès technique)
7. Cliquez "Invite"

ÉTAPE 3 : Me prévenir (1 minute)
---------------------------------
Répondez à cet email pour me confirmer que c'est fait.
Je vais ensuite déployer votre site (cela prend ~15 minutes de mon côté).

ÉTAPE 4 : Fournir vos clés API Stripe et SendGrid
--------------------------------------------------
Suivez les guides que je vous ai envoyés :
- GUIDE_STRIPE_CLIENT.md
- GUIDE_EMAIL_CLIENT.md

Une fois que vous avez vos clés, envoyez-les moi (par email sécurisé).

Questions fréquentes :
- C'est gratuit ? Oui, jusqu'à ~100 000 visites/mois (largement suffisant)
- Je paierai quoi ? Seulement si vous dépassez (très rare), ~20$/mois max
- Vous aurez accès à mes données ? Non, je suis juste collaborateur technique
- Je peux vous retirer l'accès ? Oui, à tout moment depuis votre compte

À très vite !
[Votre nom]
```

---

## PARTIE 3 : Déploiement (VOUS - 15 minutes)

### Une fois que le client vous a invité :

### Étape 1 : Accepter l'invitation
1. Vous recevez un email de Vercel
2. Cliquez sur "Accept Invitation"
3. Vous voyez maintenant l'équipe du client

### Étape 2 : Importer le projet

**Sur le compte du client (via votre accès) :**

1. Allez sur https://vercel.com
2. En haut à gauche, **sélectionnez l'équipe du client** (pas votre compte perso)
3. Cliquez sur "Add New..." → "Project"
4. Cliquez sur "Import Git Repository"
5. Sélectionnez le repository GitHub du projet
6. Cliquez "Import"

### Étape 3 : Configuration du projet

**Framework Preset :** React (détecté automatiquement)

**Root Directory :** `frontend`

**Build Command :** 
```bash
yarn build
```

**Output Directory :** 
```bash
build
```

**Install Command :**
```bash
yarn install
```

### Étape 4 : Configurer les variables d'environnement

1. Avant de déployer, cliquez sur "Environment Variables"
2. Ajoutez les clés API que le client vous a fournies :

```
REACT_APP_BACKEND_URL = https://[le-backend-url]
```

### Étape 5 : Déployer le Frontend
1. Cliquez "Deploy"
2. Attendez 2-3 minutes
3. ✅ Frontend déployé !

### Étape 6 : Déployer le Backend sur Railway

**Pourquoi Railway pour le backend ?**
- Vercel ne supporte pas Python/FastAPI en full
- Railway est simple et adapté pour backend + MongoDB

**Processus :**

1. Le client crée un compte Railway : https://railway.app/
2. Le client vous invite (similaire à Vercel)
3. Vous déployez le backend sur Railway :
   - New Project → Deploy from GitHub
   - Sélectionnez le repo
   - Root Directory : `backend`
   - Railway détecte Python automatiquement

4. Ajoutez les variables d'environnement backend sur Railway :
```
STRIPE_API_KEY=sk_test_xxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
SENDGRID_API_KEY=SG.xxx
SENDER_EMAIL=email@client.com
SENDER_NAME=Nicolas Bernard Thérapie
FRONTEND_URL=https://[frontend-vercel-url]
MONGO_URL=[mongo-connection-string]
DB_NAME=emergent_db
```

5. Railway fournit une URL backend (ex: `https://backend.railway.app`)

### Étape 7 : Lier Frontend et Backend

1. Retournez sur Vercel (frontend)
2. Allez dans Settings → Environment Variables
3. Modifiez `REACT_APP_BACKEND_URL` avec l'URL Railway backend
4. Redéployez le frontend (Deployments → Redeploy)

### Étape 8 : Configurer MongoDB

**Option A : MongoDB Atlas (Recommandé - Gratuit)**
1. Le client crée un compte : https://www.mongodb.com/cloud/atlas/register
2. Créez un cluster gratuit (M0)
3. Créez un utilisateur de base de données
4. Whitelist toutes les IPs (0.0.0.0/0) pour Railway
5. Copiez la connection string
6. Ajoutez-la dans Railway (`MONGO_URL`)

**Option B : Railway MongoDB**
1. Sur Railway, cliquez "New"
2. "Database" → "Add MongoDB"
3. Railway fournit automatiquement `MONGO_URL`

---

## PARTIE 4 : Configuration du domaine (5 minutes)

### Une fois le site déployé :

1. **Le client** va dans les paramètres DNS de son domaine (OVH, Namecheap, etc.)

2. **Vous** fournissez les informations depuis Vercel :
   - Allez dans Settings → Domains
   - Cliquez "Add Domain"
   - Entrez le domaine du client
   - Vercel affiche les enregistrements DNS à configurer

3. **Le client** ajoute les enregistrements DNS :
```
Type: A
Name: @
Value: [IP fournie par Vercel]
TTL: 300
```

4. Attendez 15min-24h pour la propagation DNS

5. ✅ Le site est accessible sur le domaine du client !

---

## 📊 Récapitulatif des coûts pour le client

| Service | Coût mensuel | Usage |
|---------|--------------|-------|
| **Vercel** (Frontend) | Gratuit | Jusqu'à 100GB bande passante |
| **Railway** (Backend) | $5-10 | Backend + MongoDB |
| **MongoDB Atlas** (si séparé) | Gratuit | Jusqu'à 512MB |
| **Nom de domaine** | ~1€/mois | Chez OVH/Namecheap |
| **TOTAL** | **~6-12€/mois** | |

---

## 🔧 Maintenance future

### Vous gardez l'accès pour :
- ✅ Corriger des bugs
- ✅ Ajouter des fonctionnalités
- ✅ Mettre à jour le code
- ✅ Vérifier les logs
- ✅ Gérer les déploiements

### Le client contrôle :
- ✅ La facturation
- ✅ Les variables d'environnement sensibles (peut les cacher)
- ✅ Peut vous retirer l'accès quand il veut
- ✅ Propriétaire de l'infrastructure

---

## ❓ Questions fréquentes

**Q : Et si le client veut changer de développeur plus tard ?**
R : Il invite le nouveau dev et vous retire. Simple.

**Q : Le client peut voir mon code ?**
R : Oui, c'est normal - il paie pour. Mais vous pouvez garder certains éléments privés.

**Q : Que se passe-t-il si je ne suis plus disponible ?**
R : Le site continue de tourner. Le client peut inviter quelqu'un d'autre.

**Q : Le client peut casser le site ?**
R : Non, il n'a pas accès au code de déploiement, juste à la facturation.

---

## ✅ Checklist finale

Avant de livrer au client :

- [ ] Code exporté sur GitHub
- [ ] .env.example créé et documenté
- [ ] Guides clients envoyés (Stripe, SendGrid)
- [ ] Email d'instructions envoyé au client
- [ ] Client a créé son compte Vercel
- [ ] Client a créé son compte Railway  
- [ ] Client vous a invité sur les deux
- [ ] Frontend déployé sur Vercel
- [ ] Backend déployé sur Railway
- [ ] MongoDB configuré
- [ ] Variables d'environnement configurées
- [ ] Domaine configuré
- [ ] Site testé et fonctionnel
- [ ] Documentation remise au client

---

**Voilà ! Votre client héberge son site, paie directement, et vous gardez le contrôle technique.** 🎉
