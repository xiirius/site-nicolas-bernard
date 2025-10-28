import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { mockStripePayment, mockSendConfirmationEmail } from '../mock';
import { useToast } from '../hooks/use-toast';

const ReservationPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    lieuPreference: 'presentiel',
    message: '',
    paiementMode: 'cb-online'
  });

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
      // Mock payment processing
      const paymentResult = await mockStripePayment(15, {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email
      });

      if (paymentResult.success) {
        // Mock email sending
        const emailResult = await mockSendConfirmationEmail({
          to: formData.email,
          subject: 'Confirmation de réservation',
          content: `Bonjour ${formData.prenom},\n\nVotre réservation a bien été confirmée.\n\nNicolas Bernard`
        });

        if (emailResult.success) {
          setShowSuccess(true);
          toast({
            title: "Réservation confirmée !",
            description: "Un email de confirmation vous a été envoyé."
          });
        }
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="heading-1 mb-4">Réservation confirmée !</h2>
            <p className="body-large text-gray-600 mb-6">
              Merci pour votre confiance. Un email de confirmation a été envoyé à <strong>{formData.email}</strong>.
            </p>
            <p className="body-medium text-gray-700 mb-8">
              Je vous répondrai rapidement pour fixer notre rencontre.<br />
              Aucune pression : c'est la relation humaine qui prime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="btn-primary">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
            <p className="body-small text-gray-500 mt-8">
              <strong>Note :</strong> Les paiements et emails sont actuellement simulés (mode démo).
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

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
                          Paiement CB sécurisé en ligne avant la séance
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
                          Réservation en ligne (15 € d'acompte CB) + paiement complémentaire en espèces sur place
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
                        Traitement en cours...
                      </>
                    ) : (
                      'Confirmer ma réservation'
                    )}
                  </Button>
                </div>

                {/* Demo Notice */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="body-small text-gray-700">
                    <strong>Mode démo :</strong> Les paiements Stripe et l'envoi d'emails sont actuellement simulés. 
                    L'intégration réelle sera activée prochainement avec vos clés API.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Placeholder */}
          <div className="mt-8 text-center">
            <p className="body-small text-gray-600">
              Envoyer à : <span className="font-medium">[votre adresse email]</span>
            </p>
            <p className="body-small text-gray-600 mt-1">
              Ou par SMS : <span className="font-medium">[votre numéro]</span>
            </p>
          </div>
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
