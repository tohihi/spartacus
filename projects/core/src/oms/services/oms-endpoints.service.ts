import { Injectable } from '@angular/core';
import { OmsConfig } from '../config/OmsConfig';

@Injectable({
  providedIn: 'root',
})
export class OmsEndpointsService {
  constructor(private config: OmsConfig) {}

  getEndpoint(endpoint: string): string {
    if (
      !this.config ||
      !this.config.backend ||
      !this.config.backend.oms ||
      !this.config.backend.oms.prefix ||
      !this.config.backend.oms.endpoints
    ) {
      return '';
    }
    endpoint = this.config.backend.oms.endpoints[endpoint];

    if (endpoint) {
      if (!endpoint.startsWith('/')) {
        endpoint = '/' + endpoint;
      }
      return this.config.backend.oms.prefix + endpoint;
    }

    return '';
  }
}
