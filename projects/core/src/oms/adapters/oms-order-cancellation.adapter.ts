import { Observable } from 'rxjs';
import { OrderCancellation } from '../../../src/model/oms.model';
import { Injectable } from '@angular/core';
import { OrderCancellationAdapter } from '../../user/connectors/oms/order-cancellation.adapter';
import { HttpClient } from '@angular/common/http';
import { OmsEndpointsService } from '../services/oms-endpoints.service';

@Injectable()
export class OmsOrderCancellationAdapter implements OrderCancellationAdapter {
  constructor(
    protected httpClient: HttpClient,
    protected omsEndpointsService: OmsEndpointsService
  ) {}

  cancelOrder(
    userId: string,
    orderCode: string
  ): Observable<OrderCancellation> {
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

    return this.httpClient.post<OrderCancellation>(url, payload);
  }
}
