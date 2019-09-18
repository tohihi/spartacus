import { Injectable } from '@angular/core';
import { OrderManagementAdapter } from './order-management.adapter';
import { Observable } from 'rxjs';
import { OrderCancellation } from '../../../model/oms.model';

@Injectable({
  providedIn: 'root',
})
export class OrderManagementConnector {
  constructor(protected adapter: OrderManagementAdapter) {}

  cancelOrder(
    userId: string,
    orderCode: string
  ): Observable<OrderCancellation> {
    return this.adapter.cancelOrder(userId, orderCode);
  }
}
