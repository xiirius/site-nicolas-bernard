# PRD - Site Thérapie Nicolas Bernard

## Problème Original
Site professionnel de thérapie pour Nicolas Bernard, construit pour un freelancer. Landing page avec services/philosophie, système de réservation avec paiement Stripe, design minimaliste vert nature + typographie Cormorant Garamond, motifs feuilles de Ginkgo.

## Stack Technique
- Frontend: React, Tailwind CSS, Google Fonts (Cormorant Garamond)
- Backend: FastAPI, Motor (Async MongoDB), Stripe SDK
- Database: MongoDB
- Déploiement: GitHub -> Railway

## Architecture
```
/app
├── backend/
│   ├── server.py, models.py, .env
│   └── routes/ (reservations.py, webhooks.py)
├── frontend/
│   ├── public/index.html
│   └── src/
│       ├── pages/ (HomePage, ReservationPage, ReservationSuccessPage, MentionsLegales)
│       ├── App.js, App.css
│       └── components/ui/
└── GUIDE_CLES_API_CLIENT.md
```

## Fonctionnalités Implémentées
- [x] Landing page complète avec philosophie, services, section IA, résumé
- [x] Background Ginkgo fixe (SVG dans React + CSS body)
- [x] Typographie Cormorant Garamond (weight 500)
- [x] Cadres décoratifs sur TOUS les titres (y compris hero)
- [x] Couleurs violet pâles sur tout le site
- [x] Fond continu flouté (backdrop-blur 8px) sur toute la page (sauf "En résumé")
- [x] Page de réservation avec tarification Seul/En duo + Stripe Checkout
- [x] Page Mentions Légales
- [x] Footer avec lien Mentions Légales
- [x] SendGrid retiré (Stripe gère les reçus natifs)

## Tâches Restantes
- P1: Compléter les infos manquantes dans MentionsLegales.jsx (adresse, email, tel, SIRET)
- P2: Clés Stripe live (quand le client aura son compte)
- P3: Configuration domaine personnalisé (optionnel)

## Intégrations
- Stripe (Payments) — clés test temporaires, en attente du compte client

## DB Schema
- reservations: {name, email, date, serviceType, consultation_mode, amount, payment_status, stripe_session_id}
