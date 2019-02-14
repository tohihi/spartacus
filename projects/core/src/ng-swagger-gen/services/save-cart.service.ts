/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SaveCartResult } from '../models/save-cart-result';

/**
 * Save Cart Controller
 */
@Injectable({
  providedIn: 'root',
})
class SaveCartService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Explicitly clones a cart.
   * @param params The `SaveCartService.CloneSaveCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `name`: The name that should be applied to the cloned cart.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `description`: The description that should be applied to the cloned cart.
   *
   * @return OK
   */
  cloneSaveCartResponse(params: SaveCartService.CloneSaveCartParams): __Observable<__StrictHttpResponse<SaveCartResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/clonesavedcart`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SaveCartResult>;
      })
    );
  }
  /**
   * Explicitly clones a cart.
   * @param params The `SaveCartService.CloneSaveCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `name`: The name that should be applied to the cloned cart.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `description`: The description that should be applied to the cloned cart.
   *
   * @return OK
   */
  cloneSaveCart(params: SaveCartService.CloneSaveCartParams): __Observable<SaveCartResult> {
    return this.cloneSaveCartResponse(params).pipe(
      __map(_r => _r.body as SaveCartResult)
    );
  }

  /**
   * Flags a cart for deletion (the cart doesn't have corresponding save cart attributes anymore). The cart is not actually deleted from the database. But with the removal of the saved cart attributes, this cart will be taken care of by the cart removal job just like any other cart.
   * @param params The `SaveCartService.FlagForDeletionParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  flagForDeletionResponse(params: SaveCartService.FlagForDeletionParams): __Observable<__StrictHttpResponse<SaveCartResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/flagForDeletion`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SaveCartResult>;
      })
    );
  }
  /**
   * Flags a cart for deletion (the cart doesn't have corresponding save cart attributes anymore). The cart is not actually deleted from the database. But with the removal of the saved cart attributes, this cart will be taken care of by the cart removal job just like any other cart.
   * @param params The `SaveCartService.FlagForDeletionParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  flagForDeletion(params: SaveCartService.FlagForDeletionParams): __Observable<SaveCartResult> {
    return this.flagForDeletionResponse(params).pipe(
      __map(_r => _r.body as SaveCartResult)
    );
  }

  /**
   * Restore a saved cart.
   * @param params The `SaveCartService.RestoreSavedCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  restoreSavedCartResponse(params: SaveCartService.RestoreSavedCartParams): __Observable<__StrictHttpResponse<SaveCartResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/restoresavedcart`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SaveCartResult>;
      })
    );
  }
  /**
   * Restore a saved cart.
   * @param params The `SaveCartService.RestoreSavedCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  restoreSavedCart(params: SaveCartService.RestoreSavedCartParams): __Observable<SaveCartResult> {
    return this.restoreSavedCartResponse(params).pipe(
      __map(_r => _r.body as SaveCartResult)
    );
  }

  /**
   * Explicitly saves a cart.
   * @param params The `SaveCartService.SaveCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `saveCartName`: The name that should be applied to the saved cart.
   *
   * - `saveCartDescription`: The description that should be applied to the saved cart.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  saveCartResponse(params: SaveCartService.SaveCartParams): __Observable<__StrictHttpResponse<SaveCartResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.saveCartName != null) __params = __params.set('saveCartName', params.saveCartName.toString());
    if (params.saveCartDescription != null) __params = __params.set('saveCartDescription', params.saveCartDescription.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SaveCartResult>;
      })
    );
  }
  /**
   * Explicitly saves a cart.
   * @param params The `SaveCartService.SaveCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `saveCartName`: The name that should be applied to the saved cart.
   *
   * - `saveCartDescription`: The description that should be applied to the saved cart.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  saveCart(params: SaveCartService.SaveCartParams): __Observable<SaveCartResult> {
    return this.saveCartResponse(params).pipe(
      __map(_r => _r.body as SaveCartResult)
    );
  }

  /**
   * Returns a saved cart for an authenticated user. The cart is identified using the "cartId" parameter.
   * @param params The `SaveCartService.GetSavedCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getSavedCartResponse(params: SaveCartService.GetSavedCartParams): __Observable<__StrictHttpResponse<SaveCartResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/savedcart`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SaveCartResult>;
      })
    );
  }
  /**
   * Returns a saved cart for an authenticated user. The cart is identified using the "cartId" parameter.
   * @param params The `SaveCartService.GetSavedCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getSavedCart(params: SaveCartService.GetSavedCartParams): __Observable<SaveCartResult> {
    return this.getSavedCartResponse(params).pipe(
      __map(_r => _r.body as SaveCartResult)
    );
  }
}

module SaveCartService {

  /**
   * Parameters for cloneSaveCart
   */
  export interface CloneSaveCartParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * The name that should be applied to the cloned cart.
     */
    name?: string;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';

    /**
     * The description that should be applied to the cloned cart.
     */
    description?: string;
  }

  /**
   * Parameters for flagForDeletion
   */
  export interface FlagForDeletionParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

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
   * Parameters for restoreSavedCart
   */
  export interface RestoreSavedCartParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

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
   * Parameters for saveCart
   */
  export interface SaveCartParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * The name that should be applied to the saved cart.
     */
    saveCartName?: string;

    /**
     * The description that should be applied to the saved cart.
     */
    saveCartDescription?: string;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for getSavedCart
   */
  export interface GetSavedCartParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

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

export { SaveCartService }
