/* tslint:disable */
import { CardType } from './card-type';
import { Address } from './address';
export interface PaymentDetails {
  expiryYear?: string;
  accountHolderName?: string;
  cardNumber?: string;
  cardType?: CardType;
  defaultPayment?: boolean;
  expiryMonth?: string;
  billingAddress?: Address;
  id?: string;
  issueNumber?: string;
  saved?: boolean;
  startMonth?: string;
  startYear?: string;
  subscriptionId?: string;
}
