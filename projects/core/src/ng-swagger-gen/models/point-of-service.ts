/* tslint:disable */
import { GeoPoint } from './geo-point';
import { Address } from './address';
import { Image } from './image';
import { OpeningSchedule } from './opening-schedule';
export interface PointOfService {
  geoPoint?: GeoPoint;
  address?: Address;
  displayName?: string;
  distanceKm?: number;
  features?: {[key: string]: string};
  formattedDistance?: string;
  description?: string;
  mapIcon?: Image;
  name?: string;
  openingHours?: OpeningSchedule;
  storeContent?: string;
  storeImages?: Array<Image>;
  url?: string;
}
