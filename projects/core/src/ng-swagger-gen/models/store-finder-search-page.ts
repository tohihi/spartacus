/* tslint:disable */
import { Pagination } from './pagination';
import { Sort } from './sort';
import { PointOfService } from './point-of-service';
export interface StoreFinderSearchPage {
  boundEastLongitude?: number;
  boundNorthLatitude?: number;
  boundSouthLatitude?: number;
  boundWestLongitude?: number;
  locationText?: string;
  pagination?: Pagination;
  sorts?: Array<Sort>;
  sourceLatitude?: number;
  sourceLongitude?: number;
  stores?: Array<PointOfService>;
}
