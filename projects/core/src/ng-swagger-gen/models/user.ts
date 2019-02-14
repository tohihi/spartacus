/* tslint:disable */
import { Language } from './language';
import { Currency } from './currency';
import { Address } from './address';
export interface User {
  language?: Language;
  currency?: Currency;
  deactivationDate?: string;
  defaultAddress?: Address;
  displayUid?: string;
  firstName?: string;
  customerId?: string;
  lastName?: string;
  name?: string;
  title?: string;
  titleCode?: string;
  uid?: string;
}
