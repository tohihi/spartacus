/* tslint:disable */
import { ComponentAdaptedData } from './component-adapted-data';
import { Pagination } from './pagination';
import { Sort } from './sort';
export interface ListAdaptedComponents {
  components?: Array<ComponentAdaptedData>;
  pagination?: Pagination;
  sorts?: Array<Sort>;
}
