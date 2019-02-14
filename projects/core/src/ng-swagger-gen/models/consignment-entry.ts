/* tslint:disable */
import { OrderEntry } from './order-entry';
export interface ConsignmentEntry {
  orderEntry?: OrderEntry;
  quantity?: number;
  shippedQuantity?: number;
}
