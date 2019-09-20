import { Observable } from 'rxjs';
import { OrderCancellationResponse } from '../../../model/oms.model';

export abstract class OrderManagementAdapter {
  /**
   * Cancels a user order
   * @param userId
   * @param orderCode
   */
  abstract cancelOrder(
    userId: string,
    orderCode: string
  ): Observable<OrderCancellationResponse>;
}
