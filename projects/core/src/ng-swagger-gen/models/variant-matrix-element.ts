/* tslint:disable */
import { VariantCategory } from './variant-category';
import { VariantOption } from './variant-option';
import { VariantValueCategory } from './variant-value-category';
export interface VariantMatrixElement {
  elements?: Array<VariantMatrixElement>;
  isLeaf?: boolean;
  parentVariantCategory?: VariantCategory;
  variantOption?: VariantOption;
  variantValueCategory?: VariantValueCategory;
}
