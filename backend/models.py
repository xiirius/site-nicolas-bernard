from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid

class ReservationCreate(BaseModel):
    nom: str
    prenom: str
    email: EmailStr
    telephone: str
    lieuPreference: str  # 'presentiel' | 'en-ligne' | 'cabinet'
    message: Optional[str] = ""
    paiementMode: str  # 'cb-online' | 'acompte'

class Reservation(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nom: str
    prenom: str
    email: str
    telephone: str
    lieuPreference: str
    message: Optional[str] = ""
    paiementMode: str
    montant: float
    stripeSessionId: Optional[str] = None
    stripePaymentStatus: str = "pending"  # 'pending' | 'completed' | 'failed'
    emailSent: bool = False
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class PaymentTransaction(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    session_id: str
    amount: float
    currency: str = "eur"
    payment_status: str = "pending"  # 'pending' | 'completed' | 'failed' | 'expired'
    reservation_id: str
    customer_email: str
    metadata: Optional[dict] = {}
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)
