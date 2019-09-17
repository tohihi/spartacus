import { OrderCancellationAdapter } from './order-cancellation.adapter';
import { OrderCancellationConnector } from './order-cancellation.connector';
import { TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';
import createSpy = jasmine.createSpy;
import { of } from 'rxjs';

class MockOrderCancellationAdapter implements OrderCancellationAdapter {
  cancelOrder = createSpy('OrderCancellationAdapter.cancelOrder').and.callFake(
    (userId, orderCode) => of(`cancelOrder-${userId}-${orderCode}`)
  );
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
    expect(result).toEqual('cancelOrder-John-1');
    expect(adapter.cancelOrder).toHaveBeenCalledWith('John', '1');
  });
});
