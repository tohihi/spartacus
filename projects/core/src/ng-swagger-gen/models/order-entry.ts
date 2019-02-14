/* tslint:disable */
import { Price } from './price';
import { DeliveryMode } from './delivery-mode';
import { PointOfService } from './point-of-service';
import { Product } from './product';
export interface OrderEntry {
  basePrice?: Price;
  deliveryMode?: DeliveryMode;
  deliveryPointOfService?: PointOfService;
  entryNumber?: number;
  product?: Product;
  quantity?: number;
  totalPrice?: Price;
  updateable?: boolean;
}
