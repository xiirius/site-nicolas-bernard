import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const CancelPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <X className="w-10 h-10 text-red-600" />
          </div>
          <h2 className="heading-1 mb-4">Paiement annulé</h2>
          <p className="body-large text-gray-600 mb-6">
            Votre paiement a été annulé. Aucun montant n'a été débité.
          </p>
          <p className="body-medium text-gray-700 mb-8">
            Vous pouvez reprendre votre réservation à tout moment.<br />
            N'hésitez pas à me contacter si vous avez des questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservation">
              <Button className="btn-primary">
                Reprendre ma réservation
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CancelPage;