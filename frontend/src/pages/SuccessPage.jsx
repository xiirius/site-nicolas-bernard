import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="heading-1 mb-4">Réservation confirmée !</h2>
          <p className="body-large text-gray-600 mb-6">
            Merci pour votre confiance. Votre paiement a été traité avec succès.
          </p>
          <p className="body-medium text-gray-700 mb-8">
            Je vous répondrai rapidement pour fixer notre rencontre.<br />
            Un email de confirmation vous sera envoyé sous peu.<br />
            Aucune pression : c'est la relation humaine qui prime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-primary">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessPage;