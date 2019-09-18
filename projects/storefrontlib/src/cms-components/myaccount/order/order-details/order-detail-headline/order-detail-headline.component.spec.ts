import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { I18nTestingModule, Order } from '@spartacus/core';
import { of } from 'rxjs';
import { OrderDetailsService } from '../order-details.service';
import { OrderDetailHeadlineComponent } from './order-detail-headline.component';

const mockOrder: Order = {
  code: '1',
  statusDisplay: 'orderDetails.statusDisplay context:READY',
  deliveryAddress: {
    firstName: 'John',
    lastName: 'Smith',
    line1: 'Buckingham Street 5',
    line2: '1A',
    phone: '(+11) 111 111 111',
    postalCode: 'MA8902',
    town: 'London',
    country: {
      isocode: 'UK',
    },
  },
  deliveryMode: {
    name: 'Standard order-detail-shipping',
    description: '3-5 days',
  },
  paymentInfo: {
    accountHolderName: 'John Smith',
    cardNumber: '************6206',
    expiryMonth: '12',
    expiryYear: '2026',
    cardType: {
      name: 'Visa',
    },
    billingAddress: {
      firstName: 'John',
      lastName: 'Smith',
      line1: 'Buckingham Street 5',
      line2: '1A',
      phone: '(+11) 111 111 111',
      postalCode: 'MA8902',
      town: 'London',
      country: {
        isocode: 'UK',
      },
    },
  },
  created: new Date('2019-02-11T13:02:58+0000'),
};

describe('OrderDetailHeadlineComponent', () => {
  let component: OrderDetailHeadlineComponent;
  let fixture: ComponentFixture<OrderDetailHeadlineComponent>;
  let mockOrderDetailsService: OrderDetailsService;
  let el: DebugElement;

  beforeEach(async(() => {
    mockOrderDetailsService = <OrderDetailsService>{
      getOrderDetails() {
        return of(mockOrder);
      },
      isOrderCancellable(order: Order) {
        return order.status === undefined;
      },
    };

    TestBed.configureTestingModule({
      imports: [I18nTestingModule],
      providers: [
        { provide: OrderDetailsService, useValue: mockOrderDetailsService },
      ],
      declarations: [OrderDetailHeadlineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailHeadlineComponent);
    el = fixture.debugElement;

    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component', () => {
    fixture.detectChanges();
    let order: Order;
    component.order$
      .subscribe(value => {
        order = value;
      })
      .unsubscribe();
    expect(order).toEqual(mockOrder);
  });

  it('should render order details headline', () => {
    fixture.detectChanges();
    expect(el.query(By.css('.cx-header .cx-detail-row'))).toBeTruthy();

    const codeElement: DebugElement = el.query(
      By.css('.cx-header .cx-detail-row:first-of-type .cx-detail-value')
    );
    expect(codeElement.nativeElement.textContent).toEqual(mockOrder.code);

    const dateElement: DebugElement = el.query(
      By.css('.cx-header div:nth-child(2) > div.cx-detail-value')
    );
    expect(dateElement.nativeElement.textContent).toEqual('Feb 11, 2019');

    const element: DebugElement = el.query(
      By.css('.cx-detail-row:last-of-type .cx-detail-value')
    );
    expect(element.nativeElement.textContent).toContain(
      mockOrder.statusDisplay
    );
  });

  it('should not display cancel button', () => {
    fixture.detectChanges();
    const element: DebugElement = el.query(
      By.css('.cx-order-details-footer .btn-cancel')
    );
    expect(element).toBeTruthy();
  });
});
