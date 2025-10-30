# Guide d'installation SendGrid (Service d'envoi d'emails)

## Pourquoi SendGrid ?

SendGrid est un service qui permet d'envoyer des emails automatiques de confirmation aux clients. C'est :
- ✅ **Gratuit** jusqu'à 100 emails/jour
- ✅ **Simple** à configurer
- ✅ **Fiable** (emails ne finissent pas en spam)

## Étape 1 : Créer votre compte SendGrid (5 minutes)

1. Allez sur : **https://sendgrid.com/**
2. Cliquez sur **"Start for Free"** ou **"Essai gratuit"**
3. Remplissez le formulaire :
   - Email professionnel (exemple : nicolas.bernard@votredomaine.com)
   - Mot de passe sécurisé
   - Nom complet

4. Vérifiez votre email

## Étape 2 : Vérifier votre identité d'expéditeur

SendGrid demande de vérifier votre email pour éviter le spam.

1. Dans le Dashboard SendGrid, allez dans **Settings** → **Sender Authentication**
2. Cliquez sur **"Verify a Single Sender"**
3. Remplissez :
   - **From Name** : Nicolas Bernard Thérapie
   - **From Email Address** : votre email professionnel
   - **Reply To** : le même email
   - **Address, City, Country** : votre adresse professionnelle

4. Cliquez sur **"Create"**
5. Vous recevrez un email de confirmation → cliquez sur le lien

✅ Votre adresse email est maintenant vérifiée pour envoyer des emails !

## Étape 3 : Créer votre clé API

1. Dans le Dashboard, allez dans **Settings** → **API Keys**
2. Cliquez sur **"Create API Key"**
3. Donnez-lui un nom : `Site Thérapie`
4. Choisissez **"Full Access"** (accès complet)
5. Cliquez sur **"Create & View"**

6. **IMPORTANT** : Copiez immédiatement la clé qui apparaît
   ```
   Elle ressemble à : SG.xxxxxxxxxxxxxxxxxxxxx
   ```
   ⚠️ Elle ne s'affichera qu'une seule fois !

7. Conservez cette clé en lieu sûr

## Étape 4 : Informations à transmettre à votre développeur

Envoyez ce message à votre développeur :

```
Bonjour,

Voici mes informations SendGrid pour l'envoi d'emails automatiques :

Clé API SendGrid :
SG.XXXXXXXXXXXXXXXXXXXXXXXXXX

Email expéditeur vérifié :
votre.email@exemple.com

Nom expéditeur :
Nicolas Bernard Thérapie

Merci de configurer les emails de confirmation avec ces informations.

Cordialement,
Nicolas Bernard
```

## Alternative : Resend (encore plus simple)

Si SendGrid est trop complexe, vous pouvez utiliser **Resend** :

1. Allez sur : **https://resend.com/**
2. Créez un compte (gratuit : 3 000 emails/mois)
3. Allez dans **API Keys** → **Create API Key**
4. Copiez la clé : `re_xxxxxxxxxxxxx`
5. Envoyez-la à votre développeur

**Avantage** : Plus simple, pas besoin de vérifier l'email expéditeur en mode test

---

## Questions fréquentes

**Q : Combien d'emails puis-je envoyer gratuitement ?**
R : 
- SendGrid : 100 emails/jour gratuits
- Resend : 3 000 emails/mois gratuits

**Q : Les clients recevront-ils vraiment les emails ?**
R : Oui, ces services sont configurés pour éviter les spams. Les emails arrivent bien.

**Q : Et si je dépasse le quota gratuit ?**
R : Les plans payants commencent à environ 15-20 €/mois pour plusieurs milliers d'emails.

**Q : Puis-je changer de service après ?**
R : Oui, votre développeur peut facilement changer de service d'emailing.

---

**Récapitulatif pour le client :**

1. ✅ Créer compte Stripe → récupérer clés TEST
2. ✅ Créer compte SendGrid ou Resend → récupérer clé API
3. ✅ Envoyer les 3 éléments au développeur :
   - Clé publique Stripe
   - Clé secrète Stripe  
   - Clé API SendGrid/Resend + email expéditeur
4. ✅ Tester le site en mode TEST
5. ✅ Basculer sur les clés PRODUCTION une fois validé
