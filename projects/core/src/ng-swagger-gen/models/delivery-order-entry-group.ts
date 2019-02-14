/* tslint:disable */
import { Address } from './address';
import { OrderEntry } from './order-entry';
import { Price } from './price';
export interface DeliveryOrderEntryGroup {
  deliveryAddress?: Address;
  entries?: Array<OrderEntry>;
  quantity?: number;
  totalPriceWithTax?: Price;
}
