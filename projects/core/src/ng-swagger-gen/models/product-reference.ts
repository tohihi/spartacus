/* tslint:disable */
import { Product } from './product';
export interface ProductReference {
  description?: string;
  preselected?: boolean;
  quantity?: number;
  referenceType?: string;
  target?: Product;
}
