import { OmsConfig } from '../config/oms-config';
import { OmsEndpointsService } from './oms-endpoints.service';
import { TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';

describe('OmsEndpointsService', () => {
  const cancelEndpointName = 'cancelOrder';
  const omsConfig = {
    backend: {
      oms: {
        baseUrl: 'https://www.spartacus.com',
        prefix: 'oms',
        endpoints: {
          cancelOrder: 'orders/${orderId}/cancel',
        },
      },
    },
  };

  let service: OmsEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: OmsConfig, useValue: omsConfig }],
    });
    service = TestBed.get(OmsEndpointsService as Type<OmsEndpointsService>);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty endpoint with invalid config', () => {
    let omsService = new OmsEndpointsService(undefined);
    expect(omsService.getEndpoint(cancelEndpointName)).toBe('');

    omsService = new OmsEndpointsService({});
    expect(omsService.getEndpoint(cancelEndpointName)).toBe('');

    omsService = new OmsEndpointsService({ backend: {} });
    expect(omsService.getEndpoint(cancelEndpointName)).toBe('');

    omsService = new OmsEndpointsService({
      backend: { oms: { prefix: 'oms' } },
    });
    expect(omsService.getEndpoint(cancelEndpointName)).toBe('');

    omsService = new OmsEndpointsService({
      backend: { oms: { endpoints: {} } },
    });
    expect(omsService.getEndpoint(cancelEndpointName)).toBe('');

    omsService = new OmsEndpointsService({
      backend: { oms: { prefix: 'oms', endpoints: {} } },
    });
    expect(omsService.getEndpoint(cancelEndpointName)).toBe('');
  });

  it('should getEndpoint', () => {
    const url = service.getEndpoint('cancelOrder');
    const configFragment = omsConfig.backend.oms;
    expect(url).toEqual(
      configFragment.baseUrl +
        '/' +
        configFragment.prefix +
        '/' +
        configFragment.endpoints.cancelOrder
    );
  });

  it('should get empty url with invalid endpoint', () => {
    const omsService = new OmsEndpointsService(undefined);
    const url = omsService.getUrl('cancelOrder', { orderId: '1' });
    expect(url).toEqual('');
  });

  it('should get empty url with invalid params', () => {
    const url = service.getUrl('cancelOrder', { orderCode: '1' });
    expect(url).toEqual('');
  });

  it('should get url', () => {
    const url = service.getUrl('cancelOrder', { orderId: '1' });
    expect(url).toEqual('https://www.spartacus.com/oms/orders/1/cancel');
  });
});
