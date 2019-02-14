/* tslint:disable */
import { Price } from './price';
export interface OrderHistory {
  code?: string;
  guid?: string;
  placed?: string;
  status?: string;
  statusDisplay?: string;
  total?: Price;
}
