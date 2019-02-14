/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OrderStatusUpdateElementList } from '../models/order-status-update-element-list';

/**
 * Feeds Controller
 */
@Injectable({
  providedIn: 'root',
})
class FeedsService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns the orders that have changed status. Returns only the elements from the current baseSite that have been updated after the provided timestamp.
   * @param params The `FeedsService.OrderStatusFeedParams` containing the following parameters:
   *
   * - `timestamp`: Only items newer than the given parameter are retrieved. This parameter should be in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  orderStatusFeedResponse(params: FeedsService.OrderStatusFeedParams): __Observable<__StrictHttpResponse<OrderStatusUpdateElementList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.timestamp != null) __params = __params.set('timestamp', params.timestamp.toString());

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/feeds/orders/statusfeed`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderStatusUpdateElementList>;
      })
    );
  }
  /**
   * Returns the orders that have changed status. Returns only the elements from the current baseSite that have been updated after the provided timestamp.
   * @param params The `FeedsService.OrderStatusFeedParams` containing the following parameters:
   *
   * - `timestamp`: Only items newer than the given parameter are retrieved. This parameter should be in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  orderStatusFeed(params: FeedsService.OrderStatusFeedParams): __Observable<OrderStatusUpdateElementList> {
    return this.orderStatusFeedResponse(params).pipe(
      __map(_r => _r.body as OrderStatusUpdateElementList)
    );
  }
}

module FeedsService {

  /**
   * Parameters for orderStatusFeed
   */
  export interface OrderStatusFeedParams {

    /**
     * Only items newer than the given parameter are retrieved. This parameter should be in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
     */
    timestamp: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }
}

export { FeedsService }
