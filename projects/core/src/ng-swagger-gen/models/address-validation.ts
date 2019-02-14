/* tslint:disable */
import { ErrorList } from './error-list';
import { Address } from './address';
export interface AddressValidation {
  decision?: string;
  errors?: ErrorList;
  suggestedAddresses?: Array<Address>;
}
