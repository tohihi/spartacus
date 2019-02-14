/* tslint:disable */
import { OrderHistory } from './order-history';
import { Pagination } from './pagination';
import { Sort } from './sort';
export interface OrderHistoryList {
  orders?: Array<OrderHistory>;
  pagination?: Pagination;
  sorts?: Array<Sort>;
}
