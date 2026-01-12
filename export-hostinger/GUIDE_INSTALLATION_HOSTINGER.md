# 📦 GUIDE DE MIGRATION COMPLÈTE VERS HOSTINGER

## ✅ FICHIERS D'EXPORT FOURNIS

Vous disposez de 2 fichiers essentiels :

1. **site-therapie-complet.tar.gz** (231 KB)
   - Tout le code Frontend (React)
   - Tout le code Backend (FastAPI)
   - Fichiers de configuration
   - Dépendances (package.json, requirements.txt)

2. **mongodb-backup.tar.gz** (1.4 KB)
   - Export complet de la base de données MongoDB
   - Collections : reservations, payment_transactions
   - Format : BSON (format natif MongoDB)

---

## 🚀 ÉTAPES D'INSTALLATION SUR HOSTINGER VPS

### PRÉREQUIS

- VPS Hostinger commandé (VPS 1 minimum, VPS 2 recommandé)
- Accès SSH (IP + mot de passe reçus par email)
- Terminal ouvert (PowerShell sur Windows, Terminal sur Mac/Linux)

---

## ÉTAPE 1 : SE CONNECTER AU VPS HOSTINGER

```bash
ssh root@[VOTRE_IP_HOSTINGER]
# Entrez le mot de passe quand demandé
```

---

## ÉTAPE 2 : INSTALLER L'ENVIRONNEMENT COMPLET

### A) Mise à jour du système

```bash
apt update && apt upgrade -y
```

### B) Installer Python 3.10+

```bash
apt install python3 python3-pip python3-venv -y
```

### C) Installer Node.js et Yarn

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs
npm install -g yarn
```

### D) Installer MongoDB

```bash
# Ajouter le repository MongoDB
curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list

apt update
apt install -y mongodb-org

# Démarrer MongoDB
systemctl start mongod
systemctl enable mongod
```

### E) Installer Nginx (serveur web)

```bash
apt install nginx -y
systemctl start nginx
systemctl enable nginx
```

---

## ÉTAPE 3 : TRANSFÉRER LES FICHIERS SUR LE SERVEUR

### Option A : Via SCP (depuis votre ordinateur)

**Ouvrez un nouveau terminal** (pas celui connecté au serveur) :

```bash
# Uploader le code
scp site-therapie-complet.tar.gz root@[IP_HOSTINGER]:/root/

# Uploader la base de données
scp mongodb-backup.tar.gz root@[IP_HOSTINGER]:/root/
```

### Option B : Via FileZilla (interface graphique)

1. Téléchargez FileZilla : https://filezilla-project.org/
2. Créez une nouvelle connexion :
   - Hôte : sftp://[VOTRE_IP_HOSTINGER]
   - Utilisateur : root
   - Mot de passe : [votre mot de passe SSH]
   - Port : 22
3. Uploadez les 2 fichiers .tar.gz dans le dossier /root/

---

## ÉTAPE 4 : EXTRAIRE LES FICHIERS SUR LE SERVEUR

**Retournez dans votre terminal SSH** :

```bash
# Créer le dossier de destination
mkdir -p /var/www/therapie-site

# Extraire le code du site
cd /root
tar -xzf site-therapie-complet.tar.gz -C /var/www/therapie-site/

# Vérifier l'extraction
ls /var/www/therapie-site/
# Vous devez voir : frontend/ backend/
```

---

## ÉTAPE 5 : RESTAURER LA BASE DE DONNÉES

```bash
# Extraire le backup MongoDB
cd /root
tar -xzf mongodb-backup.tar.gz

# Restaurer dans MongoDB
mongorestore --drop mongodb-backup/

# Vérifier la restauration
mongosh
use emergent_db
show collections
# Vous devez voir : reservations, payment_transactions
exit
```

---

## ÉTAPE 6 : CONFIGURER LE BACKEND

```bash
cd /var/www/therapie-site/backend

# Créer l'environnement virtuel Python
python3 -m venv venv
source venv/bin/activate

# Installer les dépendances
pip install -r requirements.txt

# Créer le fichier de configuration
nano .env
```

**Copiez-collez ce contenu dans .env :**

```bash
MONGO_URL=mongodb://localhost:27017/
DB_NAME=emergent_db

# Clés Stripe (à remplir par le client)
STRIPE_API_KEY=sk_test_emergent
STRIPE_PUBLISHABLE_KEY=

# Clés SendGrid (à remplir par le client)
SENDGRID_API_KEY=
SENDER_EMAIL=
SENDER_NAME=Nicolas Bernard Thérapie

# URL du frontend
FRONTEND_URL=http://[VOTRE_IP_HOSTINGER]
```

**Remplacez [VOTRE_IP_HOSTINGER] par votre vraie IP**

Sauvegardez : **Ctrl+X**, puis **Y**, puis **Entrée**

---

## ÉTAPE 7 : CONFIGURER LE FRONTEND

```bash
cd /var/www/therapie-site/frontend

# Installer les dépendances
yarn install

# Créer le fichier de configuration
nano .env
```

**Contenu du .env frontend :**

```bash
REACT_APP_BACKEND_URL=http://[VOTRE_IP_HOSTINGER]
```

**Remplacez [VOTRE_IP_HOSTINGER] par votre vraie IP**

Sauvegardez : **Ctrl+X**, **Y**, **Entrée**

**Builder l'application React :**

```bash
yarn build
```

Cela prend 1-2 minutes. Vous verrez un dossier `build/` créé.

---

## ÉTAPE 8 : CRÉER LE SERVICE BACKEND (pour qu'il tourne en continu)

```bash
nano /etc/systemd/system/therapie-backend.service
```

**Copiez-collez :**

```ini
[Unit]
Description=Therapie Backend API
After=network.target

[Service]
User=root
WorkingDirectory=/var/www/therapie-site/backend
Environment="PATH=/var/www/therapie-site/backend/venv/bin"
ExecStart=/var/www/therapie-site/backend/venv/bin/uvicorn server:app --host 0.0.0.0 --port 8001
Restart=always

[Install]
WantedBy=multi-user.target
```

**Activer et démarrer le service :**

```bash
systemctl daemon-reload
systemctl start therapie-backend
systemctl enable therapie-backend

# Vérifier que ça tourne
systemctl status therapie-backend
```

Vous devez voir **"active (running)"** en vert.

---

## ÉTAPE 9 : CONFIGURER NGINX (serveur web)

```bash
nano /etc/nginx/sites-available/therapie
```

**Copiez-collez :**

```nginx
server {
    listen 80;
    server_name [VOTRE_IP_HOSTINGER];

    # Frontend React
    location / {
        root /var/www/therapie-site/frontend/build;
        try_files $uri /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

**Remplacez [VOTRE_IP_HOSTINGER] par votre IP**

**Activer la configuration :**

```bash
ln -s /etc/nginx/sites-available/therapie /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
```

---

## ÉTAPE 10 : TESTER LE SITE

**Ouvrez votre navigateur et allez sur :**

```
http://[VOTRE_IP_HOSTINGER]
```

✅ Vous devez voir le site de thérapie !

**Testez l'API :**

```
http://[VOTRE_IP_HOSTINGER]/api/
```

✅ Vous devez voir : `{"message": "Hello World"}`

---

## ÉTAPE 11 : CONFIGURER VOTRE NOM DE DOMAINE

### A) Chez votre registraire de domaine

1. Connectez-vous à votre compte OVH/Namecheap/etc.
2. Allez dans la gestion DNS de votre domaine
3. Ajoutez un enregistrement A :

```
Type: A
Nom/Host: @
Valeur/Target: [VOTRE_IP_HOSTINGER]
TTL: 300
```

4. Sauvegardez

### B) Mettre à jour Nginx avec le domaine

```bash
nano /etc/nginx/sites-available/therapie
```

Changez la ligne :
```nginx
server_name [VOTRE_IP_HOSTINGER];
```

Par :
```nginx
server_name votre-domaine.com www.votre-domaine.com;
```

**Redémarrez Nginx :**

```bash
nginx -t
systemctl restart nginx
```

**Attendez 15min-1h** pour la propagation DNS.

---

## ÉTAPE 12 : INSTALLER SSL/HTTPS (gratuit avec Let's Encrypt)

```bash
# Installer Certbot
apt install certbot python3-certbot-nginx -y

# Obtenir le certificat SSL
certbot --nginx -d votre-domaine.com -d www.votre-domaine.com

# Suivre les instructions à l'écran
# Choisir "2" pour rediriger automatiquement HTTP vers HTTPS
```

✅ Votre site est maintenant en **HTTPS** !

---

## ÉTAPE 13 : ACTIVER LES VRAIES INTÉGRATIONS

### Une fois que votre client a ses clés API :

**Mettre à jour le backend .env :**

```bash
nano /var/www/therapie-site/backend/.env
```

Modifiez :
```bash
STRIPE_API_KEY=sk_live_VRAIE_CLE_DU_CLIENT
STRIPE_PUBLISHABLE_KEY=pk_live_VRAIE_CLE_DU_CLIENT
SENDGRID_API_KEY=SG.VRAIE_CLE_DU_CLIENT
SENDER_EMAIL=email@client.com
FRONTEND_URL=https://votre-domaine.com
```

**Redémarrer le backend :**

```bash
systemctl restart therapie-backend
```

**Mettre à jour le frontend .env :**

```bash
nano /var/www/therapie-site/frontend/.env
```

Modifiez :
```bash
REACT_APP_BACKEND_URL=https://votre-domaine.com
```

**Rebuilder le frontend :**

```bash
cd /var/www/therapie-site/frontend
yarn build
```

---

## 🔧 COMMANDES UTILES DE MAINTENANCE

### Vérifier les logs du backend

```bash
journalctl -u therapie-backend -f
```

### Redémarrer les services

```bash
systemctl restart therapie-backend
systemctl restart nginx
```

### Vérifier l'état des services

```bash
systemctl status therapie-backend
systemctl status nginx
systemctl status mongod
```

### Voir les logs Nginx

```bash
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

### Sauvegarder la base de données

```bash
mongodump --uri="mongodb://localhost:27017/emergent_db" --out=/root/backup-$(date +%Y%m%d)
```

---

## 📊 RÉCAPITULATIF

| Élément | Emplacement |
|---------|-------------|
| **Code Frontend** | /var/www/therapie-site/frontend/ |
| **Code Backend** | /var/www/therapie-site/backend/ |
| **Base de données** | MongoDB (localhost:27017) |
| **Logs Backend** | journalctl -u therapie-backend |
| **Logs Nginx** | /var/log/nginx/ |
| **Config Nginx** | /etc/nginx/sites-available/therapie |
| **Service Backend** | /etc/systemd/system/therapie-backend.service |

---

## 🆘 DÉPANNAGE

### Le site ne charge pas

```bash
# Vérifier Nginx
systemctl status nginx
nginx -t

# Vérifier le backend
systemctl status therapie-backend
journalctl -u therapie-backend -n 50
```

### Erreur 502 Bad Gateway

Le backend ne tourne pas :

```bash
systemctl restart therapie-backend
journalctl -u therapie-backend -f
```

### MongoDB ne démarre pas

```bash
systemctl status mongod
journalctl -u mongod -n 50
```

### Le formulaire ne fonctionne pas

Vérifier les variables d'environnement :

```bash
cat /var/www/therapie-site/backend/.env
```

---

## ✅ CHECKLIST DE MIGRATION RÉUSSIE

- [ ] VPS Hostinger commandé et accessible via SSH
- [ ] 2 fichiers uploadés sur le serveur
- [ ] Environnement installé (Python, Node, MongoDB, Nginx)
- [ ] Code extrait dans /var/www/therapie-site/
- [ ] Base de données restaurée
- [ ] Backend configuré (.env)
- [ ] Frontend configuré (.env) et buildé
- [ ] Service backend actif
- [ ] Nginx configuré et actif
- [ ] Site accessible via IP
- [ ] Domaine configuré (DNS)
- [ ] SSL/HTTPS installé
- [ ] Clés API Stripe et SendGrid ajoutées (quand disponibles)

---

## 💰 COÛTS MENSUELS

| Service | Coût |
|---------|------|
| VPS Hostinger VPS 2 | ~5,99€/mois |
| Nom de domaine | ~1€/mois (12€/an) |
| **TOTAL** | **~7€/mois** |

---

## 📞 SUPPORT

**Si vous rencontrez un problème :**

1. Vérifiez les logs (commandes ci-dessus)
2. Consultez la section Dépannage
3. Support Hostinger : https://www.hostinger.fr/contact

---

**Votre site de thérapie est maintenant hébergé sur Hostinger !** 🎉
