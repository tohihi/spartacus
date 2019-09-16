import { Observable } from 'rxjs';
import { Order, OrderHistoryList } from '../../../model/order.model';

export abstract class UserOrderAdapter {
  /**
   * Loads order data.
   *
   * @param userId The `userId` for given user
   * @param orderCode The `orderCode` for given order
   */
  abstract load(userId: string, orderCode: string): Observable<Order>;

  /**
   * Loads the order history for a user.
   *
   * @param userId The `userId` for given user
   * @param pageSize
   * @param currentPage
   * @param sort Sorting method
   */
  abstract loadHistory(
    userId: string,
    pageSize: number,
    currentPage: number,
    sort: string
  ): Observable<OrderHistoryList>;
}
