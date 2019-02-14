/* tslint:disable */
import { Pagination } from './pagination';
import { Product } from './product';
import { Sort } from './sort';
import { PointOfServiceStock } from './point-of-service-stock';
export interface StoreFinderStockSearchPage {
  pagination?: Pagination;
  boundEastLongitude?: number;
  boundSouthLatitude?: number;
  boundWestLongitude?: number;
  locationText?: string;
  boundNorthLatitude?: number;
  product?: Product;
  sorts?: Array<Sort>;
  sourceLatitude?: number;
  sourceLongitude?: number;
  stores?: Array<PointOfServiceStock>;
}
