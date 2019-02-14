/* tslint:disable */
import { PointOfService } from './point-of-service';
import { OrderEntry } from './order-entry';
import { Price } from './price';
export interface PickupOrderEntryGroup {
  deliveryPointOfService?: PointOfService;
  distance?: number;
  entries?: Array<OrderEntry>;
  quantity?: number;
  totalPriceWithTax?: Price;
}
