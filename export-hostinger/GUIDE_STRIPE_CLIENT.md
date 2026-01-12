# Guide d'installation Stripe pour Nicolas Bernard

## Étape 1 : Créer votre compte Stripe (5 minutes)

1. Allez sur : **https://stripe.com/fr**
2. Cliquez sur **"Commencer"** ou **"S'inscrire"**
3. Remplissez vos informations :
   - Email professionnel
   - Mot de passe sécurisé
   - Nom de votre activité : "Nicolas Bernard - Thérapie"

4. Vérifiez votre email (Stripe vous enverra un lien)

## Étape 2 : Compléter votre profil (10 minutes)

Stripe va vous demander :
- Informations personnelles (nom, prénom, date de naissance)
- Adresse professionnelle
- SIRET/SIREN (si vous en avez un)
- RIB (pour recevoir les paiements)
- Pièce d'identité (pour vérification)

**Important :** Ces informations sont obligatoires pour recevoir des paiements réels.

## Étape 3 : Récupérer vos clés API

### 🔴 ATTENTION : Mode Test vs Mode Production

Stripe a 2 modes :
- **Mode Test** : Pour tester le site sans vrais paiements (utilisez d'abord celui-ci)
- **Mode Production** : Pour les vrais paiements clients (à activer après tests)

### Pour récupérer vos clés de TEST :

1. Connectez-vous à votre compte Stripe : **https://dashboard.stripe.com**
2. En haut à droite, vérifiez que vous êtes en **"Mode test"** (petit interrupteur)
3. Allez dans : **Développeurs** → **Clés API**
4. Vous verrez 2 clés :

   **a) Clé publique (Publishable key)** - commence par `pk_test_...`
   ```
   Exemple : pk_test_51Abc123xyz...
   ```

   **b) Clé secrète (Secret key)** - commence par `sk_test_...`
   ```
   Exemple : sk_test_51Abc123xyz...
   ```

5. Cliquez sur **"Révéler la clé de test"** pour voir la clé secrète
6. **Copiez les 2 clés** et envoyez-les à votre développeur

### ⚠️ Règles de sécurité importantes :

✅ **À FAIRE :**
- Envoyer les clés par email sécurisé ou messagerie chiffrée
- Utiliser d'abord les clés de TEST
- Garder vos clés confidentielles

❌ **À NE PAS FAIRE :**
- Ne JAMAIS publier vos clés sur les réseaux sociaux
- Ne JAMAIS partager votre mot de passe Stripe
- Ne pas confondre clés TEST et clés PRODUCTION

## Étape 4 : Configuration des emails de confirmation Stripe

Stripe envoie automatiquement des emails de confirmation aux clients après paiement.

Pour personnaliser ces emails :
1. Allez dans **Paramètres** → **Emails clients**
2. Activez **"Reçus de paiement"**
3. Personnalisez le message (optionnel)

## Étape 5 : Activer le mode Production (APRÈS les tests)

Une fois que votre développeur a testé le site avec les clés TEST :

1. Retournez dans **Développeurs** → **Clés API**
2. Basculez en **"Mode production"** (interrupteur en haut)
3. Récupérez vos **clés de production** :
   - Clé publique : `pk_live_...`
   - Clé secrète : `sk_live_...`
4. Envoyez ces nouvelles clés à votre développeur
5. Il remplacera les clés TEST par les clés PRODUCTION

## Tarifs Stripe

Stripe prélève une commission sur chaque transaction :
- **2,9% + 0,25 €** par transaction en Europe
- Exemple : Pour une consultation à 15 €, vous recevez ~14,42 €
- Aucun frais mensuel, vous payez uniquement quand vous recevez des paiements

## Support

- **Aide Stripe :** https://support.stripe.com/
- **Téléphone :** +33 1 76 36 45 45
- **Dashboard :** https://dashboard.stripe.com

---

## 📧 Message type à envoyer à votre développeur

Une fois vos clés récupérées, envoyez ce message :

```
Bonjour,

Voici mes clés Stripe de TEST pour commencer l'intégration :

Clé publique (Publishable key) :
pk_test_XXXXXXXXXXXXX

Clé secrète (Secret key) :
sk_test_XXXXXXXXXXXXX

Merci de tester le site avec ces clés. Une fois validé, je vous enverrai les clés de PRODUCTION.

Cordialement,
Nicolas Bernard
```

---

**Questions fréquentes :**

**Q : Est-ce que le développeur peut accéder à mon argent ?**
R : Non, les clés API permettent uniquement de créer des paiements. Le développeur ne peut pas retirer d'argent ni modifier votre compte Stripe.

**Q : Combien de temps pour recevoir l'argent ?**
R : Les premiers paiements arrivent sous 7 jours. Ensuite, c'est automatique sous 2-3 jours ouvrés.

**Q : Et si je perds mes clés ?**
R : Vous pouvez les régénérer à tout moment dans le Dashboard Stripe. Les anciennes deviennent invalides.

**Q : Dois-je déclarer ces revenus ?**
R : Oui, Stripe génère des rapports comptables dans votre Dashboard pour faciliter votre déclaration.
