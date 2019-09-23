import { Component, OnInit } from '@angular/core';
import {
  GlobalMessageService,
  GlobalMessageType,
  Order,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../order-details.service';

@Component({
  selector: 'cx-order-details-headline',
  templateUrl: './order-detail-headline.component.html',
})
export class OrderDetailHeadlineComponent implements OnInit {
  constructor(orderDetailsService: OrderDetailsService);

  constructor(
    private orderDetailsService: OrderDetailsService,
    protected globalMessageService?: GlobalMessageService
  ) {}

  order$: Observable<Order>;

  ngOnInit() {
    this.order$ = this.orderDetailsService.getOrderDetails();
  }

  isOrderCancellable(order: Order): boolean {
    return this.orderDetailsService.isOrderCancellable(order);
  }

  cancel(order: Order) {
    this.orderDetailsService.cancelOrder(order).subscribe(response => {
      if (response.cancelResult === 'FULL') {
        this.globalMessageService.add(
          'Your request for order cancellation has been issued',
          GlobalMessageType.MSG_TYPE_CONFIRMATION
        );
      }
    });
  }
}
