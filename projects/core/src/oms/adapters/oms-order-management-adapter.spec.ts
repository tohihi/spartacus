import { OmsOrderManagementAdapter } from './oms-order-management.adapter';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { OmsConfig } from '../config/oms-config';
import { OmsEndpointsService } from '../services/oms-endpoints.service';
import { Type } from '@angular/core';
import createSpy = jasmine.createSpy;

class MockOmsEndpointsService extends OmsEndpointsService {
  getEndpoint = createSpy('omsEndpointsService.cancelOrder').and.callFake(
    () => {
      return '/order/1/cancel';
    }
  );

  getUrl = createSpy('omsEndpointsService.getUrl').and.callFake(() => {
    return 'order/1/cancel';
  });
}

const mockOmsConfig: OmsConfig = {
  backend: {
    oms: {
      prefix: 'oms',
      endpoints: {
        cancelOrder: 'orders/${orderId}/cancel',
      },
    },
  },
};

describe('OmsOrderManagementAdapter', () => {
  let httpMock: HttpTestingController;
  let adapter: OmsOrderManagementAdapter;
  let omsEndpointsService: OmsEndpointsService;

  const userId = 'warehouseManager';
  const orderData = {
    code: '123',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        OmsOrderManagementAdapter,
        { provide: OmsConfig, useValue: mockOmsConfig },
        {
          provide: OmsEndpointsService,
          useClass: MockOmsEndpointsService,
        },
      ],
    });

    adapter = TestBed.get(OmsOrderManagementAdapter as Type<
      OmsOrderManagementAdapter
    >);

    omsEndpointsService = TestBed.get(OmsEndpointsService as Type<
      OmsEndpointsService
    >);

    httpMock = TestBed.get(HttpTestingController as Type<
      HttpTestingController
    >);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('cancelOrder', () => {
    it('should cancel an order', () => {
      adapter.cancelOrder(userId, orderData.code).subscribe();
      httpMock.expectOne(req => req.method === 'POST').flush({});
      expect(omsEndpointsService.getUrl).toHaveBeenCalledWith('cancelOrder', {
        orderId: orderData.code,
      });
    });
  });
});
