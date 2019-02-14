/* tslint:disable */
import { PointOfService } from './point-of-service';
import { ConsignmentEntry } from './consignment-entry';
import { Address } from './address';
export interface Consignment {
  code?: string;
  deliveryPointOfService?: PointOfService;
  entries?: Array<ConsignmentEntry>;
  shippingAddress?: Address;
  status?: string;
  statusDate?: string;
  trackingID?: string;
}
