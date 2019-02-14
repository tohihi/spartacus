/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Order } from '../models/order';
import { OrderHistoryList } from '../models/order-history-list';

/**
 * Orders Controller
 */
@Injectable({
  providedIn: 'root',
})
class OrdersService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns details of a specific order based on the order GUID (Globally Unique Identifier) or the order CODE. The response contains detailed order information.
   * @param params The `OrdersService.GetOrderParams` containing the following parameters:
   *
   * - `code`: Order GUID (Globally Unique Identifier) or order CODE
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getOrderResponse(params: OrdersService.GetOrderParams): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/orders/${params.code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * Returns details of a specific order based on the order GUID (Globally Unique Identifier) or the order CODE. The response contains detailed order information.
   * @param params The `OrdersService.GetOrderParams` containing the following parameters:
   *
   * - `code`: Order GUID (Globally Unique Identifier) or order CODE
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getOrder(params: OrdersService.GetOrderParams): __Observable<Order> {
    return this.getOrderResponse(params).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * Returns order history data for all orders placed by a specified user for a specified base store. The response can display the results across multiple pages, if required.
   * @param params The `OrdersService.GetOrdersForUserParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `statuses`: Filters only certain order statuses. For example, statuses=CANCELLED,CHECKED_VALID would only return orders with status CANCELLED or CHECKED_VALID.
   *
   * - `sort`: Sorting method applied to the return results.
   *
   * - `pageSize`: The number of results returned per page.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: The current result page requested.
   *
   * @return OK
   */
  getOrdersForUserResponse(params: OrdersService.GetOrdersForUserParams): __Observable<__StrictHttpResponse<OrderHistoryList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.statuses != null) __params = __params.set('statuses', params.statuses.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.currentPage != null) __params = __params.set('currentPage', params.currentPage.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderHistoryList>;
      })
    );
  }
  /**
   * Returns order history data for all orders placed by a specified user for a specified base store. The response can display the results across multiple pages, if required.
   * @param params The `OrdersService.GetOrdersForUserParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `statuses`: Filters only certain order statuses. For example, statuses=CANCELLED,CHECKED_VALID would only return orders with status CANCELLED or CHECKED_VALID.
   *
   * - `sort`: Sorting method applied to the return results.
   *
   * - `pageSize`: The number of results returned per page.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: The current result page requested.
   *
   * @return OK
   */
  getOrdersForUser(params: OrdersService.GetOrdersForUserParams): __Observable<OrderHistoryList> {
    return this.getOrdersForUserResponse(params).pipe(
      __map(_r => _r.body as OrderHistoryList)
    );
  }

  /**
   * In the response header, the "x-total-count" indicates the total number of orders placed by a specified user for a specified base store.
   * @param params The `OrdersService.GetCountOrdersForUserParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `statuses`: Filters only certain order statuses. For example, statuses=CANCELLED,CHECKED_VALID would only return orders with status CANCELLED or CHECKED_VALID.
   */
  getCountOrdersForUserResponse(params: OrdersService.GetCountOrdersForUserParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.statuses != null) __params = __params.set('statuses', params.statuses.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * In the response header, the "x-total-count" indicates the total number of orders placed by a specified user for a specified base store.
   * @param params The `OrdersService.GetCountOrdersForUserParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `statuses`: Filters only certain order statuses. For example, statuses=CANCELLED,CHECKED_VALID would only return orders with status CANCELLED or CHECKED_VALID.
   */
  getCountOrdersForUser(params: OrdersService.GetCountOrdersForUserParams): __Observable<null> {
    return this.getCountOrdersForUserResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Authorizes the cart and places the order. The response contains the new order data.
   * @param params The `OrdersService.PlaceOrderParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart code for logged in user, cart GUID for guest checkout
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `securityCode`: CCV security code.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  placeOrderResponse(params: OrdersService.PlaceOrderParams): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.cartId != null) __params = __params.set('cartId', params.cartId.toString());

    if (params.securityCode != null) __params = __params.set('securityCode', params.securityCode.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/orders`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * Authorizes the cart and places the order. The response contains the new order data.
   * @param params The `OrdersService.PlaceOrderParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart code for logged in user, cart GUID for guest checkout
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `securityCode`: CCV security code.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  placeOrder(params: OrdersService.PlaceOrderParams): __Observable<Order> {
    return this.placeOrderResponse(params).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * Returns specific order details based on a specific order code. The response contains detailed order information.
   * @param params The `OrdersService.GetOrderForUserByCodeParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `code`: Order GUID (Globally Unique Identifier) or order CODE
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getOrderForUserByCodeResponse(params: OrdersService.GetOrderForUserByCodeParams): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/orders/${params.code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * Returns specific order details based on a specific order code. The response contains detailed order information.
   * @param params The `OrdersService.GetOrderForUserByCodeParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `code`: Order GUID (Globally Unique Identifier) or order CODE
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getOrderForUserByCode(params: OrdersService.GetOrderForUserByCodeParams): __Observable<Order> {
    return this.getOrderForUserByCodeResponse(params).pipe(
      __map(_r => _r.body as Order)
    );
  }
}

module OrdersService {

  /**
   * Parameters for getOrder
   */
  export interface GetOrderParams {

    /**
     * Order GUID (Globally Unique Identifier) or order CODE
     */
    code: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for getOrdersForUser
   */
  export interface GetOrdersForUserParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Filters only certain order statuses. For example, statuses=CANCELLED,CHECKED_VALID would only return orders with status CANCELLED or CHECKED_VALID.
     */
    statuses?: string;

    /**
     * Sorting method applied to the return results.
     */
    sort?: string;

    /**
     * The number of results returned per page.
     */
    pageSize?: number;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';

    /**
     * The current result page requested.
     */
    currentPage?: number;
  }

  /**
   * Parameters for getCountOrdersForUser
   */
  export interface GetCountOrdersForUserParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Filters only certain order statuses. For example, statuses=CANCELLED,CHECKED_VALID would only return orders with status CANCELLED or CHECKED_VALID.
     */
    statuses?: string;
  }

  /**
   * Parameters for placeOrder
   */
  export interface PlaceOrderParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Cart code for logged in user, cart GUID for guest checkout
     */
    cartId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * CCV security code.
     */
    securityCode?: string;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for getOrderForUserByCode
   */
  export interface GetOrderForUserByCodeParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Order GUID (Globally Unique Identifier) or order CODE
     */
    code: string;

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

export { OrdersService }
