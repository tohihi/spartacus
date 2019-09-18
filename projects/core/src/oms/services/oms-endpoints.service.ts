import { Injectable } from '@angular/core';
import { OmsConfig } from '../config/oms-config';
import { DynamicTemplate } from '../../config/utils/dynamic-template';

@Injectable({
  providedIn: 'root',
})
export class OmsEndpointsService {
  constructor(private config: OmsConfig) {}

  /**
   * Returns base oms endpoint (baseUrl + prefix)
   */
  private getBaseUrl(): string {
    if (
      !this.config ||
      !this.config.backend ||
      !this.config.backend.oms ||
      !this.config.backend.oms.baseUrl
    ) {
      return '';
    }

    return this.config.backend.oms.baseUrl;
  }

  /**
   * Returns an OMS endpoint
   * @param endpoint Name of the endpoint on the config
   * @return endpoint
   */
  getEndpoint(endpoint: string): string {
    const baseUrl = this.getBaseUrl();
    if (baseUrl !== '') {
      let prefix = this.config.backend.oms.prefix;
      if (prefix) {
        prefix = this.addStartSlash(prefix);
        endpoint = this.config.backend.oms.endpoints[endpoint];
        if (endpoint) {
          endpoint = this.addStartSlash(endpoint);
          return baseUrl + prefix + endpoint;
        }
      }
    }
    return '';
  }

  /**
   * Gets an endpoint as a URL with parameter substitution
   * @param endpointName Name of the endpoint on the config
   * @param urlParams Flat object with url parameter names and values
   * @return url
   */
  getUrl(endpointName: string, urlParams?: object): string {
    const rawEndpoint = this.getEndpoint(endpointName);
    if (rawEndpoint !== '') {
      if (urlParams) {
        const endpoint = DynamicTemplate.resolve(rawEndpoint, urlParams);
        if (endpoint !== rawEndpoint) {
          return endpoint;
        }
      }
    }
    return '';
  }

  private addStartSlash(endpoint: string): string {
    return !endpoint.startsWith('/') ? '/' + endpoint : endpoint;
  }
}
