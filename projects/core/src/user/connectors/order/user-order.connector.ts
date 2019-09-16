import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserOrderAdapter } from './user-order.adapter';
import { Order, OrderHistoryList } from '../../../model/order.model';

@Injectable({
  providedIn: 'root',
})
export class UserOrderConnector {
  constructor(protected adapter: UserOrderAdapter) {}

  get(userId: string, orderCode: string): Observable<Order> {
    return this.adapter.load(userId, orderCode);
  }

  getHistory(
    userId: string,
    pageSize?: number,
    currentPage?: number,
    sort?: string
  ): Observable<OrderHistoryList> {
    return this.adapter.loadHistory(userId, pageSize, currentPage, sort);
  }
}
