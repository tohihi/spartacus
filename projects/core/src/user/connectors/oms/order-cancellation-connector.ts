import { Injectable } from '@angular/core';
import { OrderCancellationAdapter } from './order-cancellation.adapter';
import { Observable } from 'rxjs';
import { OrderCancellation } from '../../../model/oms.model';

@Injectable({
  providedIn: 'root',
})
export class OrderCancellationConnector {
  constructor(protected adapter: OrderCancellationAdapter) {}

  cancelOrder(
    userId: string,
    orderCode: string
  ): Observable<OrderCancellation> {
    return this.adapter.cancelOrder(userId, orderCode);
  }
}
