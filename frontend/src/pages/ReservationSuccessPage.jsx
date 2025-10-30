import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Check, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ReservationSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [reservation, setReservation] = useState(null);
  const [error, setError] = useState(null);
  const [pollCount, setPollCount] = useState(0);
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      setError("Session invalide");
      setLoading(false);
      return;
    }

    // Fonction de polling pour v\u00e9rifier le statut du paiement
    const checkPaymentStatus = async () => {
      try {
        const response = await axios.get(`${API}/reservations/checkout-status/${sessionId}`);
        
        if (response.data.success) {
          if (response.data.payment_status === 'paid') {
            // Paiement confirm\u00e9, r\u00e9cup\u00e9rer les d\u00e9tails de la r\u00e9servation
            const reservationResponse = await axios.get(`${API}/reservations/success?session_id=${sessionId}`);
            setReservation(reservationResponse.data.reservation);
            setLoading(false);
          } else if (pollCount < 5) {
            // Continuer le polling (max 5 tentatives)
            setTimeout(() => {
              setPollCount(prev => prev + 1);
              checkPaymentStatus();
            }, 2000);
          } else {
            setError("V\u00e9rification du paiement expir\u00e9e. Veuillez v\u00e9rifier votre email.");
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("Erreur lors de la v\u00e9rification:", err);
        setError("Erreur lors de la v\u00e9rification du paiement");
        setLoading(false);
      }
    };

    checkPaymentStatus();
  }, [sessionId, pollCount]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full">
          <CardContent className="p-12 text-center">
            <Loader2 className="w-16 h-16 text-green-600 animate-spin mx-auto mb-6" />
            <h2 className="heading-2 mb-4">V\u00e9rification de votre paiement...</h2>
            <p className="body-medium text-gray-600">
              Veuillez patienter pendant que nous confirmons votre r\u00e9servation.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full border-red-200">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">❌</span>
            </div>
            <h2 className="heading-1 mb-4 text-red-700">Erreur</h2>
            <p className="body-large text-gray-600 mb-8">{error}</p>
            <Link to="/reservation">
              <Button className="btn-primary">Retour à la réservation</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="heading-1 mb-4">Réservation confirmée !</h2>
          {reservation && (
            <>
              <p className="body-large text-gray-600 mb-6">
                Merci pour votre confiance. Un email de confirmation a été envoyé à{' '}
                <strong>{reservation.email}</strong>.
              </p>
              <p className="body-medium text-gray-700 mb-8">
                Je vous répondrai rapidement pour fixer notre rencontre.<br />
                Aucune pression : c'est la relation humaine qui prime.
              </p>
            </>
          )}
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

export default ReservationSuccessPage;
