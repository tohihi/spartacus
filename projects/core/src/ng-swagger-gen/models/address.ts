/* tslint:disable */
import { Country } from './country';
import { Region } from './region';
export interface Address {
  line2?: string;
  companyName?: string;
  defaultAddress?: boolean;
  email?: string;
  firstName?: string;
  formattedAddress?: string;
  id?: string;
  lastName?: string;
  line1?: string;
  country?: Country;
  phone?: string;
  postalCode?: string;
  region?: Region;
  shippingAddress?: boolean;
  title?: string;
  titleCode?: string;
  town?: string;
  visibleInAddressBook?: boolean;
}
