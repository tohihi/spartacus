import { OrderManagementAdapter } from './order-management.adapter';
import { OrderManagementConnector } from './order-management.connector';
import { TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';
import createSpy = jasmine.createSpy;
import { of } from 'rxjs';

class MockOrderManagementAdapter implements OrderManagementAdapter {
  cancelOrder = createSpy('OrderManagement.cancelOrder').and.callFake(
    (userId, orderCode) => of(`cancelOrder-${userId}-${orderCode}`)
  );
}

describe('OrderManagementConnector', () => {
  let connector: OrderManagementConnector;
  let adapter: OrderManagementAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: OrderManagementAdapter,
          useClass: MockOrderManagementAdapter,
        },
      ],
    });

    connector = TestBed.get(OrderManagementConnector as Type<
      OrderManagementConnector
    >);
    adapter = TestBed.get(OrderManagementAdapter as Type<
      OrderManagementAdapter
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
