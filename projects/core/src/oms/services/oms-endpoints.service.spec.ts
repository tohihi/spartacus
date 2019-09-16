import { OmsConfig } from '../config/OmsConfig';
import { OmsEndpointsService } from './oms-endpoints.service';
import { TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';

fdescribe('OmsEndpointsService', () => {
  const cancelEndpointName = 'cancelOrder';
  const omsConfig = {
    backend: {
      oms: {
        prefix: 'oms',
        endpoints: {
          cancelOrder: '/orders/${orderId}/cancel',
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

  it('should return empty endpoint when no config', () => {
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
      configFragment.prefix + configFragment.endpoints.cancelOrder
    );
  });
});
