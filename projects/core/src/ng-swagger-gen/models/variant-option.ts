/* tslint:disable */
import { Price } from './price';
import { Stock } from './stock';
import { VariantOptionQualifier } from './variant-option-qualifier';
export interface VariantOption {
  code?: string;
  priceData?: Price;
  stock?: Stock;
  url?: string;
  variantOptionQualifiers?: Array<VariantOptionQualifier>;
}
