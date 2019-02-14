/* tslint:disable */
import { VariantCategory } from './variant-category';
export interface VariantValueCategory {
  name?: string;
  sequence?: number;
  superCategories?: Array<VariantCategory>;
}
