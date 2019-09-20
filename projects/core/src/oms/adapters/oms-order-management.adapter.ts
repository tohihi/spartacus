import { Observable } from 'rxjs';
import {
  OrderCancellation,
  OrderCancellationResponse,
} from '../../../src/model/oms.model';
import { Injectable } from '@angular/core';
import { OrderManagementAdapter } from '../../user/connectors/oms/order-management.adapter';
import { HttpClient } from '@angular/common/http';
import { OmsEndpointsService } from '../services/oms-endpoints.service';

@Injectable()
export class OmsOrderManagementAdapter implements OrderManagementAdapter {
  constructor(
    protected httpClient: HttpClient,
    protected omsEndpointsService: OmsEndpointsService
  ) {}

  cancelOrder(
    userId: string,
    orderCode: string
  ): Observable<OrderCancellationResponse> {
    const url = this.omsEndpointsService.getUrl('cancelOrder', {
      orderId: orderCode,
    });

    const payload: OrderCancellation = {
      userId: userId,
      entries: [
        {
          orderEntryNumber: 0,
          cancelQuantity: '1',
          notes: 'Cancelling reason',
          cancelReason: 'Other',
        },
      ],
    };

    return this.httpClient.post<OrderCancellationResponse>(url, payload);
  }
}
