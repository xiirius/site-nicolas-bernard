# 📦 PACKAGE D'EXPORT COMPLET POUR HOSTINGER

## ✅ CONTENU DU PACKAGE

Ce dossier contient TOUT ce dont vous avez besoin pour migrer le site de thérapie vers Hostinger.

---

## 📄 FICHIERS INCLUS

### 1. **site-therapie-complet.tar.gz** (231 KB)

**Contenu :**
- ✅ Frontend complet (React + Shadcn UI)
- ✅ Backend complet (FastAPI + Python)
- ✅ Fichiers de configuration
- ✅ package.json (dépendances Node.js)
- ✅ requirements.txt (dépendances Python)
- ✅ Toute la logique métier (réservations, paiements, emails)

**Structure :**
```
frontend/
  ├── src/
  │   ├── pages/
  │   │   ├── HomePage.jsx
  │   │   ├── ReservationPage.jsx
  │   │   └── ReservationSuccessPage.jsx
  │   ├── components/
  │   ├── App.js
  │   ├── App.css
  │   └── mock.js
  ├── package.json
  └── .env.example

backend/
  ├── server.py
  ├── models.py
  ├── email_service.py
  ├── routes/
  │   ├── reservations.py
  │   └── webhooks.py
  ├── requirements.txt
  └── .env.example
```

---

### 2. **mongodb-backup.tar.gz** (1.4 KB)

**Contenu :**
- ✅ Export complet de la base de données MongoDB
- ✅ Collection : reservations (structure des réservations)
- ✅ Collection : payment_transactions (transactions de paiement)
- ✅ Collection : status_checks (tests système)
- ✅ Format BSON (format natif MongoDB)

**Note :** Les données actuelles sont des données de test/développement. En production, la base sera vide au départ.

---

### 3. **GUIDE_INSTALLATION_HOSTINGER.md**

Guide complet étape par étape pour :
- ✅ Commander le VPS Hostinger
- ✅ Installer l'environnement complet
- ✅ Uploader et extraire les fichiers
- ✅ Restaurer la base de données
- ✅ Configurer le backend et frontend
- ✅ Créer les services systemd
- ✅ Configurer Nginx
- ✅ Configurer le nom de domaine
- ✅ Installer SSL/HTTPS gratuit
- ✅ Dépannage et maintenance

---

## 🚀 COMMENT UTILISER CE PACKAGE

### Étape 1 : Télécharger les fichiers

Téléchargez depuis `/app/export-hostinger/` :
- `site-therapie-complet.tar.gz`
- `mongodb-backup.tar.gz`
- `GUIDE_INSTALLATION_HOSTINGER.md`

### Étape 2 : Commander VPS Hostinger

- Allez sur hostinger.fr
- Choisissez VPS 2 (5,99€/mois recommandé)
- Système : Ubuntu 22.04 LTS

### Étape 3 : Suivre le guide

Ouvrez `GUIDE_INSTALLATION_HOSTINGER.md` et suivez les 13 étapes.

**Temps estimé :** 45-60 minutes pour tout installer

---

## 💡 ALTERNATIVES PLUS SIMPLES

Si la configuration VPS vous semble trop technique, considérez :

### Option A : Vercel + Railway (RECOMMANDÉ)
- ✅ Configuration en 15 minutes
- ✅ Pas de ligne de commande complexe
- ✅ Le client crée son compte et paie directement
- ✅ Vous gardez l'accès technique
- 💰 Coût : 5-10€/mois

### Option B : Emergent Deploy
- ✅ 1 clic pour déployer
- ✅ Tout est déjà configuré
- ✅ 10 minutes chrono
- 💰 Coût : 50 crédits/mois (inclus dans abonnement)

**Guide Vercel/Railway disponible dans :** `/app/GUIDE_DEPLOIEMENT_CLIENT.md`

---

## 📋 CHECKLIST AVANT DE COMMENCER

### Vous avez besoin de :

- [ ] Compte Hostinger avec VPS commandé
- [ ] Accès SSH (IP + mot de passe reçus)
- [ ] Terminal/PowerShell sur votre ordinateur
- [ ] FileZilla (optionnel, pour upload graphique)
- [ ] 1 heure de temps disponible
- [ ] Nom de domaine acheté (optionnel mais recommandé)

### Le client aura besoin de :

- [ ] Clés API Stripe (voir GUIDE_STRIPE_CLIENT.md)
- [ ] Clés API SendGrid (voir GUIDE_EMAIL_CLIENT.md)

---

## 🔐 INFORMATIONS IMPORTANTES

### Sécurité

Les fichiers d'export **NE CONTIENNENT PAS** :
- ❌ Clés API (à configurer après installation)
- ❌ Mots de passe
- ❌ Données clients réelles
- ❌ Secrets de production

Les clés doivent être ajoutées **manuellement** dans les fichiers `.env` après installation.

### Base de données

Le backup MongoDB contient **uniquement la structure** et des données de test. En production, commencez avec une base vide en ne restaurant pas le backup, ou restaurez-le puis supprimez les données de test.

---

## 📊 COMPARAISON DES OPTIONS D'HÉBERGEMENT

| Solution | Difficulté | Temps | Coût/mois | Support |
|----------|-----------|-------|-----------|---------|
| **Hostinger VPS** | ⭐⭐⭐⭐ | 60 min | 6€ | Vous-même |
| **Vercel + Railway** | ⭐⭐ | 15 min | 5-10€ | Inclus |
| **Emergent** | ⭐ | 10 min | Inclus | Inclus |

---

## 🆘 BESOIN D'AIDE ?

### Support Hostinger
- Site : https://www.hostinger.fr/contact
- Chat : Disponible 24/7
- Email : support@hostinger.com

### Documentation technique
- Guide MongoDB : https://www.mongodb.com/docs/
- Guide Nginx : https://nginx.org/en/docs/
- Guide Python/FastAPI : https://fastapi.tiangolo.com/

---

## ✅ APRÈS L'INSTALLATION

Une fois le site installé sur Hostinger :

1. **Testez** toutes les fonctionnalités
2. **Configurez** les clés API Stripe et SendGrid
3. **Activez** SSL/HTTPS
4. **Configurez** le nom de domaine
5. **Testez** le formulaire de réservation
6. **Livrez** au client avec les accès

---

## 📞 CONTACT

Pour toute question sur le code ou l'architecture :
- Consultez `/app/contracts.md` (documentation technique complète)
- Consultez `/app/README_ACTIVATION.md` (activation des intégrations)

---

**Bon déploiement ! 🚀**
