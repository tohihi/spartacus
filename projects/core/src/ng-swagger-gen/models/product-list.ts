/* tslint:disable */
import { Product } from './product';
export interface ProductList {
  catalog?: string;
  currentPage?: number;
  products?: Array<Product>;
  totalPageCount?: number;
  totalProductCount?: number;
  version?: string;
}
