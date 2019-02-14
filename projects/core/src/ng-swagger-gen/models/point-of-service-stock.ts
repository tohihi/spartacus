/* tslint:disable */
import { Image } from './image';
import { Address } from './address';
import { GeoPoint } from './geo-point';
import { OpeningSchedule } from './opening-schedule';
import { Stock } from './stock';
export interface PointOfServiceStock {
  mapIcon?: Image;
  address?: Address;
  displayName?: string;
  distanceKm?: number;
  features?: {[key: string]: string};
  formattedDistance?: string;
  geoPoint?: GeoPoint;
  description?: string;
  name?: string;
  openingHours?: OpeningSchedule;
  stockInfo?: Stock;
  storeContent?: string;
  storeImages?: Array<Image>;
  url?: string;
}
