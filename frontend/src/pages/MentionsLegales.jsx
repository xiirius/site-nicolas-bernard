import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mentions Légales</h1>
          
          {/* Éditeur du site */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
              1. Éditeur du site
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Nom :</strong> Nicolas Bernard</p>
              <p><strong>Profession :</strong> Thérapeute, Coach de Santé et de Vie, Psychopraticien</p>
              <p><strong>Statut :</strong> Auto-entrepreneur / Micro-entreprise</p>
              <p><strong>Adresse :</strong> [À compléter]</p>
              <p><strong>Email :</strong> [À compléter]</p>
              <p><strong>Téléphone :</strong> [À compléter]</p>
              <p><strong>SIRET :</strong> [À compléter]</p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
              2. Hébergement
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Hébergeur :</strong> [À compléter - ex: Vercel, OVH, etc.]</p>
              <p><strong>Adresse :</strong> [À compléter]</p>
              <p><strong>Site web :</strong> [À compléter]</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
              3. Propriété intellectuelle
            </h2>
            <p className="text-gray-700 leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse de l'éditeur.
            </p>
          </section>

          {/* Données personnelles et RGPD */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
              4. Protection des données personnelles (RGPD)
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, 
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p><strong>Données collectées :</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Informations de paiement (traitées de manière sécurisée par Stripe)</li>
              </ul>
              <p><strong>Finalité :</strong> Ces données sont collectées uniquement dans le cadre de la prise de rendez-vous et du suivi des consultations.</p>
              <p><strong>Conservation :</strong> Vos données sont conservées pendant la durée nécessaire à la gestion de notre relation et conformément aux obligations légales.</p>
              <p><strong>Exercer vos droits :</strong> Pour toute demande concernant vos données personnelles, contactez-nous à l'adresse email indiquée ci-dessus.</p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
              5. Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site utilise des cookies strictement nécessaires au fonctionnement du site (cookies de session, préférences). 
              Aucun cookie publicitaire ou de tracking n'est utilisé. En naviguant sur ce site, vous acceptez l'utilisation de ces cookies techniques.
            </p>
          </section>

          {/* Responsabilité */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
              6. Responsabilité
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Les informations fournies sur ce site le sont à titre informatif. L'éditeur ne saurait garantir l'exactitude, la complétude, 
                l'actualité des informations diffusées sur le site.
              </p>
              <p>
                <strong>Important :</strong> Les consultations proposées ne se substituent en aucun cas à un suivi médical ou psychologique. 
                En cas de troubles graves, il est recommandé de consulter un professionnel de santé qualifié.
              </p>
            </div>
          </section>

          {/* Paiement sécurisé */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
              7. Paiement sécurisé
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Les paiements en ligne sont sécurisés par la plateforme Stripe, leader mondial du paiement en ligne. 
              Vos informations bancaires sont cryptées et ne sont jamais stockées sur nos serveurs.
            </p>
          </section>

          {/* Droit applicable */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
              8. Droit applicable
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          {/* Date de mise à jour */}
          <div className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-200">
            <p>Dernière mise à jour : Janvier 2025</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-300">© 2025 Nicolas Bernard - Thérapeute & Coach de Santé et de Vie</p>
        </div>
      </footer>
    </div>
  );
};

export default MentionsLegales;
