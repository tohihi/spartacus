import { AddressVerificationEffect } from './address-verification.effect';
import { CardTypesEffects } from './card-types.effect';
import { CheckoutEffects } from './checkout.effect';
import { RecipientTypesEffects } from './recipient-type.effect';

export const effects: any[] = [
  CheckoutEffects,
  AddressVerificationEffect,
  CardTypesEffects,
  RecipientTypesEffects,
];

export * from './address-verification.effect';
export * from './card-types.effect';
export * from './checkout.effect';
export * from './recipient-type.effect';
