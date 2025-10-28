// Mock functions for Stripe payment and email sending

export const mockStripePayment = async (amount, customerInfo) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate successful payment
  return {
    success: true,
    transactionId: `mock_${Date.now()}`,
    amount: amount,
    timestamp: new Date().toISOString(),
    message: 'Paiement simulé réussi'
  };
};

export const mockSendConfirmationEmail = async (emailData) => {
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    success: true,
    emailId: `email_${Date.now()}`,
    message: 'Email de confirmation simulé envoyé',
    recipient: emailData.to
  };
};

export const consultationTypes = [
  {
    id: 'individual',
    name: 'Consultation individuelle',
    description: 'Temps libre (30min - 2h)',
    price: 15
  },
  {
    id: 'duo',
    name: 'Consultation en duo',
    description: '15€ par personne/heure',
    price: 30
  },
  {
    id: 'nomade',
    name: 'Consultation nomade',
    description: 'À votre lieu de choix',
    price: 15
  }
];
