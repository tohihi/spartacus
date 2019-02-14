/* tslint:disable */
import { VariantOption } from './variant-option';
export interface BaseOption {
  options?: Array<VariantOption>;
  selected?: VariantOption;
  variantType?: string;
}
