import { Observable } from 'rxjs';
import { OrderCancellation } from '../../../model/oms.model';

export abstract class OrderManagementAdapter {
  /**
   * Cancels a user order
   * @param userId
   * @param orderCode
   */
  abstract cancelOrder(
    userId: string,
    orderCode: string
  ): Observable<OrderCancellation>;
}
