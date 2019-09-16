import { OrderCancellationAdapter } from './order-cancellation.adapter';
import { OrderCancellationConnector } from './order-cancellation-connector';
import { TestBed } from '@angular/core/testing';
import { OrderCancellation } from '../../../model/oms.model';
import { Observable, of } from 'rxjs';
import { Type } from '@angular/core';

class MockOrderCancellationAdapter implements OrderCancellationAdapter {
  cancelOrder(
    userId: string,
    orderCode: string
  ): Observable<OrderCancellation> {
    return of({
      userId: userId,
      entries: [],
    });
  }
}

describe('OrderCancellationConnector', () => {
  let connector: OrderCancellationConnector;
  let adapter: OrderCancellationAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: OrderCancellationAdapter,
          useClass: MockOrderCancellationAdapter,
        },
      ],
    });

    connector = TestBed.get(OrderCancellationConnector as Type<
      OrderCancellationConnector
    >);
    adapter = TestBed.get(OrderCancellationAdapter as Type<
      OrderCancellationAdapter
    >);
  });

  it('should be created', () => {
    expect(connector).toBeTruthy();
  });

  it('should cancel order', () => {
    let result;
    connector.cancelOrder('John', '1').subscribe(res => (result = res));
    expect(result).toEqual({
      userId: 'John',
      entries: [],
    });
    expect(adapter.cancelOrder).toHaveBeenCalledWith('John', '1');
  });
});
