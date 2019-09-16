import { OmsOrderCancellationAdapter } from './oms-order-cancellation.adapter';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { OccConfig } from '@spartacus/core';
import { mockOccModuleConfig } from '../../occ/adapters/user/unit-test.helper';
import { OmsEndpointsService } from '../services/oms-endpoints.service';
import { Type } from '@angular/core';

const MockOmsEndpointsService = {
  getUrl() {
    return 'order/1/cancel';
  },
};

describe('OmsOrderCancellationAdapter', () => {
  let httpMock: HttpTestingController;
  let adapter: OmsOrderCancellationAdapter;
  let omsEndpointsService: OmsEndpointsService;
  let userId: 'warehouseManager';
  let orderData: {
    code: '123';
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        OmsOrderCancellationAdapter,
        { provide: OccConfig, useValue: mockOccModuleConfig },
        {
          provide: OmsEndpointsService,
          useClass: MockOmsEndpointsService,
        },
      ],
    });

    adapter = TestBed.get(OmsOrderCancellationAdapter as Type<
      OmsOrderCancellationAdapter
    >);

    omsEndpointsService = TestBed.get(OmsEndpointsService as Type<
      OmsEndpointsService
    >);

    httpMock = TestBed.get(HttpTestingController as Type<
      HttpTestingController
    >);
  });

  it('should create an instance', () => {
    expect(adapter).toBeTruthy();
  });

  describe('cancelOrder', () => {
    it('should cancel an order', () => {
      adapter.cancelOrder(userId, orderData.code).subscribe();
      httpMock.expectOne(req => req.method === 'POST').flush({});
      expect(omsEndpointsService.getUrl).toHaveBeenCalledWith('orderCancel', {
        orderId: orderData.code,
      });
    });
  });
});
