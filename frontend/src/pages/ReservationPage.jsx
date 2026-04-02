import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Loader2, User, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ReservationPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    typeConsultation: 'seul',
    lieuPreference: 'presentiel',
    message: '',
    paiementMode: 'cb-online'
  });

  // Calcul du prix en fonction du type de consultation
  const getPrix = () => {
    return formData.typeConsultation === 'duo' ? 30 : 15;
  };

  const getPrixAcompte = () => {
    return formData.typeConsultation === 'duo' ? 30 : 15;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Appeler le backend pour créer la session Stripe
      const response = await axios.post(`${API}/reservations/create-checkout-session`, formData);

      if (response.data.success) {
        // Rediriger vers Stripe Checkout
        window.location.href = response.data.sessionUrl;
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast({
        title: "Erreur",
        description: error.response?.data?.detail || "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="body-small">Retour à l'accueil</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-hero mb-4">Formulaire de Réservation & Paiement</h1>
            <p className="body-large text-gray-600">
              Merci pour votre confiance.
            </p>
            <p className="body-medium text-gray-700 mt-2">
              Je vous propose ici un espace d'écoute libre, sans contrainte ni jugement.<br />
              Veuillez remplir ce petit formulaire pour réserver votre consultation.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="heading-2">Vos informations</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone (SMS ou appel pour confirmer le rdv) *</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    placeholder="06 12 34 56 78"
                  />
                </div>

                {/* Type de consultation: Seul ou Duo */}
                <div className="space-y-3">
                  <Label>Type de consultation *</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, typeConsultation: 'seul' }))}
                      className={`relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.typeConsultation === 'seul' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 bg-white hover:border-green-300'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        formData.typeConsultation === 'seul' ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        <User className={`w-6 h-6 ${formData.typeConsultation === 'seul' ? 'text-green-600' : 'text-gray-500'}`} />
                      </div>
                      <span className="font-semibold text-gray-800">
                        Consultation seul(e)
                      </span>
                      <p className="text-lg font-bold text-green-600 mt-1">15 € / heure</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, typeConsultation: 'duo' }))}
                      className={`relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.typeConsultation === 'duo' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 bg-white hover:border-green-300'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        formData.typeConsultation === 'duo' ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        <Users className={`w-6 h-6 ${formData.typeConsultation === 'duo' ? 'text-green-600' : 'text-gray-500'}`} />
                      </div>
                      <span className="font-semibold text-gray-800">
                        Consultation en duo
                      </span>
                      <p className="text-lg font-bold text-green-600 mt-1">30 € / heure</p>
                      <p className="text-xs text-gray-500">(15 € par personne)</p>
                    </button>
                  </div>
                </div>

                {/* Location Preference */}
                <div className="space-y-3">
                  <Label>Préférence pour le lieu de la consultation *</Label>
                  <RadioGroup
                    value={formData.lieuPreference}
                    onValueChange={(value) => handleRadioChange('lieuPreference', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="presentiel" id="presentiel" />
                      <Label htmlFor="presentiel" className="font-normal cursor-pointer">
                        En présentiel (lieu calme, café, domicile, à convenir ensemble)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="en-ligne" id="en-ligne" />
                      <Label htmlFor="en-ligne" className="font-normal cursor-pointer">
                        En ligne (audio ou visio)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cabinet" id="cabinet" />
                      <Label htmlFor="cabinet" className="font-normal cursor-pointer">
                        À mon cabinet (si disponible)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Souhaitez-vous me préciser brièvement ce qui vous amène ? (facultatif)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Partagez ce que vous souhaitez..."
                  />
                </div>

                {/* Payment Mode */}
                <div className="space-y-3">
                  <Label>Choisissez votre mode de paiement *</Label>
                  <RadioGroup
                    value={formData.paiementMode}
                    onValueChange={(value) => handleRadioChange('paiementMode', value)}
                  >
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="cb-online" id="cb-online" className="mt-1" />
                      <div>
                        <Label htmlFor="cb-online" className="font-normal cursor-pointer">
                          Paiement CB sécurisé en ligne avant la séance ({getPrix()} €)
                        </Label>
                        <p className="body-small text-gray-500 ml-0 mt-1">
                          Je vous enverrai un lien par e-mail ou SMS (Stripe, Lydia, SumUp...)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="acompte" id="acompte" className="mt-1" />
                      <div>
                        <Label htmlFor="acompte" className="font-normal cursor-pointer">
                          Réservation en ligne ({getPrixAcompte()} € d'acompte CB) + paiement complémentaire en espèces sur place
                        </Label>
                        <p className="body-small text-gray-500 ml-0 mt-1">
                          Je vous envoie un lien pour verser l'acompte, le reste se fait dans la confiance lors de notre rencontre.
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Info Box */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="body-medium text-gray-700">
                    Une fois ce formulaire envoyé, je vous réponds rapidement pour fixer notre rencontre.
                  </p>
                  <p className="body-medium text-gray-700 mt-2 font-medium">
                    Aucune pression : c'est la relation humaine qui prime.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Redirection vers le paiement...
                      </>
                    ) : (
                      'Confirmer ma réservation'
                    )}
                  </Button>
                </div>

              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="body-small">© 2025 Nicolas Bernard - Thérapeute & Coach de Santé et de Vie</p>
        </div>
      </footer>
    </div>
  );
};

export default ReservationPage;
