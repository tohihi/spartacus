/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CartList } from '../models/cart-list';
import { Cart } from '../models/cart';
import { Address } from '../models/address';
import { DeliveryMode } from '../models/delivery-mode';
import { DeliveryModeList } from '../models/delivery-mode-list';
import { OrderEntryList } from '../models/order-entry-list';
import { CartModification } from '../models/cart-modification';
import { OrderEntry } from '../models/order-entry';
import { PaymentDetails } from '../models/payment-details';
import { PromotionResultList } from '../models/promotion-result-list';
import { VoucherList } from '../models/voucher-list';

/**
 * Carts Controller
 */
@Injectable({
  providedIn: 'root',
})
class CartsService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Lists all customer carts.
   * @param params The `CartsService.GetCartsParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `sort`: Optional sort criterion in case of savedCartsOnly == true. No default value.
   *
   * - `savedCartsOnly`: Optional parameter. If the parameter is provided and its value is true, only saved carts are returned.
   *
   * - `pageSize`: Optional {@link PaginationData} parameter in case of savedCartsOnly == true. Default value 20.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: Optional pagination parameter in case of savedCartsOnly == true. Default value 0.
   *
   * @return OK
   */
  getCartsResponse(params: CartsService.GetCartsParams): __Observable<__StrictHttpResponse<CartList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.savedCartsOnly != null) __params = __params.set('savedCartsOnly', params.savedCartsOnly.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.currentPage != null) __params = __params.set('currentPage', params.currentPage.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CartList>;
      })
    );
  }
  /**
   * Lists all customer carts.
   * @param params The `CartsService.GetCartsParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `sort`: Optional sort criterion in case of savedCartsOnly == true. No default value.
   *
   * - `savedCartsOnly`: Optional parameter. If the parameter is provided and its value is true, only saved carts are returned.
   *
   * - `pageSize`: Optional {@link PaginationData} parameter in case of savedCartsOnly == true. Default value 20.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: Optional pagination parameter in case of savedCartsOnly == true. Default value 0.
   *
   * @return OK
   */
  getCarts(params: CartsService.GetCartsParams): __Observable<CartList> {
    return this.getCartsResponse(params).pipe(
      __map(_r => _r.body as CartList)
    );
  }

  /**
   * Creates a new cart or restores an anonymous cart as a user's cart (if an old Cart Id is given in the request).
   * @param params The `CartsService.CreateCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `toMergeCartGuid`: The GUID of the user's cart that will be merged with the anonymous cart.
   *
   * - `oldCartId`: Anonymous cart GUID.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  createCartResponse(params: CartsService.CreateCartParams): __Observable<__StrictHttpResponse<Cart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.toMergeCartGuid != null) __params = __params.set('toMergeCartGuid', params.toMergeCartGuid.toString());
    if (params.oldCartId != null) __params = __params.set('oldCartId', params.oldCartId.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Cart>;
      })
    );
  }
  /**
   * Creates a new cart or restores an anonymous cart as a user's cart (if an old Cart Id is given in the request).
   * @param params The `CartsService.CreateCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `toMergeCartGuid`: The GUID of the user's cart that will be merged with the anonymous cart.
   *
   * - `oldCartId`: Anonymous cart GUID.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  createCart(params: CartsService.CreateCartParams): __Observable<Cart> {
    return this.createCartResponse(params).pipe(
      __map(_r => _r.body as Cart)
    );
  }

  /**
   * Returns the cart with a given identifier.
   * @param params The `CartsService.GetCartParams` containing the following parameters:
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
  getCartResponse(params: CartsService.GetCartParams): __Observable<__StrictHttpResponse<Cart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Cart>;
      })
    );
  }
  /**
   * Returns the cart with a given identifier.
   * @param params The `CartsService.GetCartParams` containing the following parameters:
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
  getCart(params: CartsService.GetCartParams): __Observable<Cart> {
    return this.getCartResponse(params).pipe(
      __map(_r => _r.body as Cart)
    );
  }

  /**
   * Deletes a cart with a given cart id.
   * @param params The `CartsService.DeleteCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  deleteCartResponse(params: CartsService.DeleteCartParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}`,
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
   * Deletes a cart with a given cart id.
   * @param params The `CartsService.DeleteCartParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  deleteCart(params: CartsService.DeleteCartParams): __Observable<null> {
    return this.deleteCartResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Creates an address and assigns it to the cart as the delivery address.
   * @param params The `CartsService.CreateAndSetAddressPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `address`: Request body parameter that contains details such as the customer's first name (firstName), the customer's last name (lastName), the customer's title (titleCode), the country (country.isocode), the first part of the address (line1), the second part of the address (line2), the town (town), the postal code (postalCode), and the region (region.isocode).
   *
   *   The DTO is in XML or .json format.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  createAndSetAddressPrimResponse(params: CartsService.CreateAndSetAddressPrimParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.address;
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/addresses/delivery`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Address>;
      })
    );
  }
  /**
   * Creates an address and assigns it to the cart as the delivery address.
   * @param params The `CartsService.CreateAndSetAddressPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `address`: Request body parameter that contains details such as the customer's first name (firstName), the customer's last name (lastName), the customer's title (titleCode), the country (country.isocode), the first part of the address (line1), the second part of the address (line2), the town (town), the postal code (postalCode), and the region (region.isocode).
   *
   *   The DTO is in XML or .json format.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  createAndSetAddressPrim(params: CartsService.CreateAndSetAddressPrimParams): __Observable<Address> {
    return this.createAndSetAddressPrimResponse(params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * Sets a delivery address for the cart. The address country must be placed among the delivery countries of the current base store.
   * @param params The `CartsService.SetCartDeliveryAddressParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `addressId`: Address identifier
   */
  setCartDeliveryAddressResponse(params: CartsService.SetCartDeliveryAddressParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.addressId != null) __params = __params.set('addressId', params.addressId.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/addresses/delivery`,
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
   * Sets a delivery address for the cart. The address country must be placed among the delivery countries of the current base store.
   * @param params The `CartsService.SetCartDeliveryAddressParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `addressId`: Address identifier
   */
  setCartDeliveryAddress(params: CartsService.SetCartDeliveryAddressParams): __Observable<null> {
    return this.setCartDeliveryAddressResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Removes the delivery address from the cart.
   * @param params The `CartsService.RemoveCartDeliveryAddressParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  removeCartDeliveryAddressResponse(params: CartsService.RemoveCartDeliveryAddressParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/addresses/delivery`,
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
   * Removes the delivery address from the cart.
   * @param params The `CartsService.RemoveCartDeliveryAddressParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  removeCartDeliveryAddress(params: CartsService.RemoveCartDeliveryAddressParams): __Observable<null> {
    return this.removeCartDeliveryAddressResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns the delivery mode selected for the cart.
   * @param params The `CartsService.GetCartDeliveryModeParams` containing the following parameters:
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
  getCartDeliveryModeResponse(params: CartsService.GetCartDeliveryModeParams): __Observable<__StrictHttpResponse<DeliveryMode>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/deliverymode`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeliveryMode>;
      })
    );
  }
  /**
   * Returns the delivery mode selected for the cart.
   * @param params The `CartsService.GetCartDeliveryModeParams` containing the following parameters:
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
  getCartDeliveryMode(params: CartsService.GetCartDeliveryModeParams): __Observable<DeliveryMode> {
    return this.getCartDeliveryModeResponse(params).pipe(
      __map(_r => _r.body as DeliveryMode)
    );
  }

  /**
   * Sets the delivery mode with a given identifier for the cart.
   * @param params The `CartsService.SetCartDeliveryModeParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `deliveryModeId`: Delivery mode identifier (code)
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  setCartDeliveryModeResponse(params: CartsService.SetCartDeliveryModeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.deliveryModeId != null) __params = __params.set('deliveryModeId', params.deliveryModeId.toString());


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/deliverymode`,
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
   * Sets the delivery mode with a given identifier for the cart.
   * @param params The `CartsService.SetCartDeliveryModeParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `deliveryModeId`: Delivery mode identifier (code)
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  setCartDeliveryMode(params: CartsService.SetCartDeliveryModeParams): __Observable<null> {
    return this.setCartDeliveryModeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Removes the delivery mode from the cart.
   * @param params The `CartsService.RemoveDeliveryModeParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  removeDeliveryModeResponse(params: CartsService.RemoveDeliveryModeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/deliverymode`,
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
   * Removes the delivery mode from the cart.
   * @param params The `CartsService.RemoveDeliveryModeParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  removeDeliveryMode(params: CartsService.RemoveDeliveryModeParams): __Observable<null> {
    return this.removeDeliveryModeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns all delivery modes supported for the current base store and cart delivery address. A delivery address must be set for the cart, otherwise an empty list will be returned.
   * @param params The `CartsService.GetSupportedDeliveryModesParams` containing the following parameters:
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
  getSupportedDeliveryModesResponse(params: CartsService.GetSupportedDeliveryModesParams): __Observable<__StrictHttpResponse<DeliveryModeList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/deliverymodes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeliveryModeList>;
      })
    );
  }
  /**
   * Returns all delivery modes supported for the current base store and cart delivery address. A delivery address must be set for the cart, otherwise an empty list will be returned.
   * @param params The `CartsService.GetSupportedDeliveryModesParams` containing the following parameters:
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
  getSupportedDeliveryModes(params: CartsService.GetSupportedDeliveryModesParams): __Observable<DeliveryModeList> {
    return this.getSupportedDeliveryModesResponse(params).pipe(
      __map(_r => _r.body as DeliveryModeList)
    );
  }

  /**
   * Assigns an email to the cart. This step is required to make a guest checkout.
   * @param params The `CartsService.GuestLoginParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `email`: Email of the guest user. It will be used during the checkout process.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  guestLoginResponse(params: CartsService.GuestLoginParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.email != null) __params = __params.set('email', params.email.toString());


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/email`,
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
   * Assigns an email to the cart. This step is required to make a guest checkout.
   * @param params The `CartsService.GuestLoginParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `email`: Email of the guest user. It will be used during the checkout process.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  guestLogin(params: CartsService.GuestLoginParams): __Observable<null> {
    return this.guestLoginResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns cart entries.
   * @param params The `CartsService.GetCartEntriesParams` containing the following parameters:
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
  getCartEntriesResponse(params: CartsService.GetCartEntriesParams): __Observable<__StrictHttpResponse<OrderEntryList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/entries`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderEntryList>;
      })
    );
  }
  /**
   * Returns cart entries.
   * @param params The `CartsService.GetCartEntriesParams` containing the following parameters:
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
  getCartEntries(params: CartsService.GetCartEntriesParams): __Observable<OrderEntryList> {
    return this.getCartEntriesResponse(params).pipe(
      __map(_r => _r.body as OrderEntryList)
    );
  }

  /**
   * Adds a product to the cart.
   * @param params The `CartsService.AddCartEntryPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `entry`: Request body parameter that contains details such as the product code (product.code), the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name).
   *
   *   The DTO is in XML or .json format.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  addCartEntryPrimResponse(params: CartsService.AddCartEntryPrimParams): __Observable<__StrictHttpResponse<CartModification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.entry;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/entries`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CartModification>;
      })
    );
  }
  /**
   * Adds a product to the cart.
   * @param params The `CartsService.AddCartEntryPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `entry`: Request body parameter that contains details such as the product code (product.code), the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name).
   *
   *   The DTO is in XML or .json format.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  addCartEntryPrim(params: CartsService.AddCartEntryPrimParams): __Observable<CartModification> {
    return this.addCartEntryPrimResponse(params).pipe(
      __map(_r => _r.body as CartModification)
    );
  }

  /**
   * Returns the details of the cart entries.
   * @param params The `CartsService.GetCartEntryParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `entryNumber`: The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCartEntryResponse(params: CartsService.GetCartEntryParams): __Observable<__StrictHttpResponse<OrderEntry>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/entries/${params.entryNumber}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderEntry>;
      })
    );
  }
  /**
   * Returns the details of the cart entries.
   * @param params The `CartsService.GetCartEntryParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `entryNumber`: The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCartEntry(params: CartsService.GetCartEntryParams): __Observable<OrderEntry> {
    return this.getCartEntryResponse(params).pipe(
      __map(_r => _r.body as OrderEntry)
    );
  }

  /**
   * Updates the quantity of a single cart entry and the details of the store where the cart entry will be picked up. Attributes not provided in request will be defined again (set to null or default)
   * @param params The `CartsService.SetCartEntryPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `entryNumber`: The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
   *
   * - `entry`: Request body parameter that contains details such as the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name)
   *
   *   The DTO is in XML or .json format.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  setCartEntryPrimResponse(params: CartsService.SetCartEntryPrimParams): __Observable<__StrictHttpResponse<CartModification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.entry;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/entries/${params.entryNumber}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CartModification>;
      })
    );
  }
  /**
   * Updates the quantity of a single cart entry and the details of the store where the cart entry will be picked up. Attributes not provided in request will be defined again (set to null or default)
   * @param params The `CartsService.SetCartEntryPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `entryNumber`: The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
   *
   * - `entry`: Request body parameter that contains details such as the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name)
   *
   *   The DTO is in XML or .json format.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  setCartEntryPrim(params: CartsService.SetCartEntryPrimParams): __Observable<CartModification> {
    return this.setCartEntryPrimResponse(params).pipe(
      __map(_r => _r.body as CartModification)
    );
  }

  /**
   * Deletes cart entry.
   * @param params The `CartsService.RemoveCartEntryParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `entryNumber`: The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  removeCartEntryResponse(params: CartsService.RemoveCartEntryParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/entries/${params.entryNumber}`,
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
   * Deletes cart entry.
   * @param params The `CartsService.RemoveCartEntryParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `entryNumber`: The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  removeCartEntry(params: CartsService.RemoveCartEntryParams): __Observable<null> {
    return this.removeCartEntryResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates the quantity of a single cart entry and the details of the store where the cart entry will be picked up.
   * @param params The `CartsService.UpdateCartEntryPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `entryNumber`: The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
   *
   * - `entry`: Request body parameter that contains details such as the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name)
   *
   *   The DTO is in XML or .json format.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  updateCartEntryPrimResponse(params: CartsService.UpdateCartEntryPrimParams): __Observable<__StrictHttpResponse<CartModification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.entry;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/entries/${params.entryNumber}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CartModification>;
      })
    );
  }
  /**
   * Updates the quantity of a single cart entry and the details of the store where the cart entry will be picked up.
   * @param params The `CartsService.UpdateCartEntryPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `entryNumber`: The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
   *
   * - `entry`: Request body parameter that contains details such as the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name)
   *
   *   The DTO is in XML or .json format.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  updateCartEntryPrim(params: CartsService.UpdateCartEntryPrimParams): __Observable<CartModification> {
    return this.updateCartEntryPrimResponse(params).pipe(
      __map(_r => _r.body as CartModification)
    );
  }

  /**
   * Defines the details of a new credit card, and assigns this payment option to the cart.
   * @param params The `CartsService.AddPaymentDetailsPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetails`: Request body parameter that contains details such as the name on the card (accountHolderName), the card number (cardNumber), the card type (cardType.code), the month of the expiry date (expiryMonth), the year of the expiry date (expiryYear), whether the payment details should be saved (saved), whether the payment details should be set as default (defaultPaymentInfo), and the billing address (billingAddress.firstName, billingAddress.lastName, billingAddress.titleCode, billingAddress.country.isocode, billingAddress.line1, billingAddress.line2, billingAddress.town, billingAddress.postalCode, billingAddress.region.isocode)
   *
   *   The DTO is in XML or .json format.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  addPaymentDetailsPrimResponse(params: CartsService.AddPaymentDetailsPrimParams): __Observable<__StrictHttpResponse<PaymentDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.paymentDetails;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/paymentdetails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaymentDetails>;
      })
    );
  }
  /**
   * Defines the details of a new credit card, and assigns this payment option to the cart.
   * @param params The `CartsService.AddPaymentDetailsPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetails`: Request body parameter that contains details such as the name on the card (accountHolderName), the card number (cardNumber), the card type (cardType.code), the month of the expiry date (expiryMonth), the year of the expiry date (expiryYear), whether the payment details should be saved (saved), whether the payment details should be set as default (defaultPaymentInfo), and the billing address (billingAddress.firstName, billingAddress.lastName, billingAddress.titleCode, billingAddress.country.isocode, billingAddress.line1, billingAddress.line2, billingAddress.town, billingAddress.postalCode, billingAddress.region.isocode)
   *
   *   The DTO is in XML or .json format.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  addPaymentDetailsPrim(params: CartsService.AddPaymentDetailsPrimParams): __Observable<PaymentDetails> {
    return this.addPaymentDetailsPrimResponse(params).pipe(
      __map(_r => _r.body as PaymentDetails)
    );
  }

  /**
   * Sets credit card payment details for the cart.
   * @param params The `CartsService.SetPaymentDetailsParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetailsId`: Payment details identifier.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  setPaymentDetailsResponse(params: CartsService.SetPaymentDetailsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.paymentDetailsId != null) __params = __params.set('paymentDetailsId', params.paymentDetailsId.toString());


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/paymentdetails`,
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
   * Sets credit card payment details for the cart.
   * @param params The `CartsService.SetPaymentDetailsParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetailsId`: Payment details identifier.
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  setPaymentDetails(params: CartsService.SetPaymentDetailsParams): __Observable<null> {
    return this.setPaymentDetailsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns information about the promotions applied on the cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers, and as a result, some of them are currently not compatible with the new promotions engine.
   * @param params The `CartsService.GetPromotionsParams` containing the following parameters:
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
  getPromotionsResponse(params: CartsService.GetPromotionsParams): __Observable<__StrictHttpResponse<PromotionResultList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/promotions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PromotionResultList>;
      })
    );
  }
  /**
   * Returns information about the promotions applied on the cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers, and as a result, some of them are currently not compatible with the new promotions engine.
   * @param params The `CartsService.GetPromotionsParams` containing the following parameters:
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
  getPromotions(params: CartsService.GetPromotionsParams): __Observable<PromotionResultList> {
    return this.getPromotionsResponse(params).pipe(
      __map(_r => _r.body as PromotionResultList)
    );
  }

  /**
   * Enables a promotion for the order based on the promotionId defined for the cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers, and as a result, some of them are currently not compatible with the new promotions engine.
   * @param params The `CartsService.ApplyPromotionParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `promotionId`: Promotion identifier (code)
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  applyPromotionResponse(params: CartsService.ApplyPromotionParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.promotionId != null) __params = __params.set('promotionId', params.promotionId.toString());


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/promotions`,
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
   * Enables a promotion for the order based on the promotionId defined for the cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers, and as a result, some of them are currently not compatible with the new promotions engine.
   * @param params The `CartsService.ApplyPromotionParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `promotionId`: Promotion identifier (code)
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  applyPromotion(params: CartsService.ApplyPromotionParams): __Observable<null> {
    return this.applyPromotionResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns information about a promotion (with a specific promotionId), that has been applied on the cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers, and as a result, some of them are currently not compatible with the new promotions engine.
   * @param params The `CartsService.GetPromotionParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `promotionId`: Promotion identifier (code)
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getPromotionResponse(params: CartsService.GetPromotionParams): __Observable<__StrictHttpResponse<PromotionResultList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/promotions/${params.promotionId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PromotionResultList>;
      })
    );
  }
  /**
   * Returns information about a promotion (with a specific promotionId), that has been applied on the cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers, and as a result, some of them are currently not compatible with the new promotions engine.
   * @param params The `CartsService.GetPromotionParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `promotionId`: Promotion identifier (code)
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getPromotion(params: CartsService.GetPromotionParams): __Observable<PromotionResultList> {
    return this.getPromotionResponse(params).pipe(
      __map(_r => _r.body as PromotionResultList)
    );
  }

  /**
   * Disables the promotion for the order based on the promotionId defined for the cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers, and as a result, some of them are currently not compatible with the new promotions engine.
   * @param params The `CartsService.RemovePromotionParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `promotionId`: Promotion identifier (code)
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  removePromotionResponse(params: CartsService.RemovePromotionParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/promotions/${params.promotionId}`,
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
   * Disables the promotion for the order based on the promotionId defined for the cart. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers, and as a result, some of them are currently not compatible with the new promotions engine.
   * @param params The `CartsService.RemovePromotionParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `promotionId`: Promotion identifier (code)
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  removePromotion(params: CartsService.RemovePromotionParams): __Observable<null> {
    return this.removePromotionResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns a list of vouchers applied to the cart.
   * @param params The `CartsService.GetVouchersParams` containing the following parameters:
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
  getVouchersResponse(params: CartsService.GetVouchersParams): __Observable<__StrictHttpResponse<VoucherList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/vouchers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VoucherList>;
      })
    );
  }
  /**
   * Returns a list of vouchers applied to the cart.
   * @param params The `CartsService.GetVouchersParams` containing the following parameters:
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
  getVouchers(params: CartsService.GetVouchersParams): __Observable<VoucherList> {
    return this.getVouchersResponse(params).pipe(
      __map(_r => _r.body as VoucherList)
    );
  }

  /**
   * Applies a voucher based on the voucherId defined for the cart.
   * @param params The `CartsService.ApplyVoucherForCartParams` containing the following parameters:
   *
   * - `voucherId`: Voucher identifier (code)
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  applyVoucherForCartResponse(params: CartsService.ApplyVoucherForCartParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.voucherId != null) __params = __params.set('voucherId', params.voucherId.toString());



    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/vouchers`,
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
   * Applies a voucher based on the voucherId defined for the cart.
   * @param params The `CartsService.ApplyVoucherForCartParams` containing the following parameters:
   *
   * - `voucherId`: Voucher identifier (code)
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  applyVoucherForCart(params: CartsService.ApplyVoucherForCartParams): __Observable<null> {
    return this.applyVoucherForCartResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Removes a voucher based on the voucherId defined for the current cart.
   * @param params The `CartsService.ReleaseVoucherFromCartParams` containing the following parameters:
   *
   * - `voucherId`: Voucher identifier (code)
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  releaseVoucherFromCartResponse(params: CartsService.ReleaseVoucherFromCartParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/carts/${params.cartId}/vouchers/${params.voucherId}`,
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
   * Removes a voucher based on the voucherId defined for the current cart.
   * @param params The `CartsService.ReleaseVoucherFromCartParams` containing the following parameters:
   *
   * - `voucherId`: Voucher identifier (code)
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `cartId`: Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
   *
   * - `baseSiteId`: Base site identifier
   */
  releaseVoucherFromCart(params: CartsService.ReleaseVoucherFromCartParams): __Observable<null> {
    return this.releaseVoucherFromCartResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CartsService {

  /**
   * Parameters for getCarts
   */
  export interface GetCartsParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Optional sort criterion in case of savedCartsOnly == true. No default value.
     */
    sort?: string;

    /**
     * Optional parameter. If the parameter is provided and its value is true, only saved carts are returned.
     */
    savedCartsOnly?: boolean;

    /**
     * Optional {@link PaginationData} parameter in case of savedCartsOnly == true. Default value 20.
     */
    pageSize?: number;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';

    /**
     * Optional pagination parameter in case of savedCartsOnly == true. Default value 0.
     */
    currentPage?: number;
  }

  /**
   * Parameters for createCart
   */
  export interface CreateCartParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * The GUID of the user's cart that will be merged with the anonymous cart.
     */
    toMergeCartGuid?: string;

    /**
     * Anonymous cart GUID.
     */
    oldCartId?: string;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for getCart
   */
  export interface GetCartParams {

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
   * Parameters for deleteCart
   */
  export interface DeleteCartParams {

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
  }

  /**
   * Parameters for createAndSetAddressPrim
   */
  export interface CreateAndSetAddressPrimParams {

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
     * Request body parameter that contains details such as the customer's first name (firstName), the customer's last name (lastName), the customer's title (titleCode), the country (country.isocode), the first part of the address (line1), the second part of the address (line2), the town (town), the postal code (postalCode), and the region (region.isocode).
     *
     * The DTO is in XML or .json format.
     */
    address: Address;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for setCartDeliveryAddress
   */
  export interface SetCartDeliveryAddressParams {

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
     * Address identifier
     */
    addressId: string;
  }

  /**
   * Parameters for removeCartDeliveryAddress
   */
  export interface RemoveCartDeliveryAddressParams {

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
  }

  /**
   * Parameters for getCartDeliveryMode
   */
  export interface GetCartDeliveryModeParams {

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
   * Parameters for setCartDeliveryMode
   */
  export interface SetCartDeliveryModeParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Delivery mode identifier (code)
     */
    deliveryModeId: string;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for removeDeliveryMode
   */
  export interface RemoveDeliveryModeParams {

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
  }

  /**
   * Parameters for getSupportedDeliveryModes
   */
  export interface GetSupportedDeliveryModesParams {

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
   * Parameters for guestLogin
   */
  export interface GuestLoginParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Email of the guest user. It will be used during the checkout process.
     */
    email: string;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for getCartEntries
   */
  export interface GetCartEntriesParams {

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
   * Parameters for addCartEntryPrim
   */
  export interface AddCartEntryPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Request body parameter that contains details such as the product code (product.code), the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name).
     *
     * The DTO is in XML or .json format.
     */
    entry: OrderEntry;

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
   * Parameters for getCartEntry
   */
  export interface GetCartEntryParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
     */
    entryNumber: number;

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
   * Parameters for setCartEntryPrim
   */
  export interface SetCartEntryPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
     */
    entryNumber: number;

    /**
     * Request body parameter that contains details such as the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name)
     *
     * The DTO is in XML or .json format.
     */
    entry: OrderEntry;

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
   * Parameters for removeCartEntry
   */
  export interface RemoveCartEntryParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
     */
    entryNumber: number;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for updateCartEntryPrim
   */
  export interface UpdateCartEntryPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * The entry number. Each entry in a cart has an entry number. Cart entries are numbered in ascending order, starting with zero (0).
     */
    entryNumber: number;

    /**
     * Request body parameter that contains details such as the quantity of product (quantity), and the pickup store name (deliveryPointOfService.name)
     *
     * The DTO is in XML or .json format.
     */
    entry: OrderEntry;

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
   * Parameters for addPaymentDetailsPrim
   */
  export interface AddPaymentDetailsPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Request body parameter that contains details such as the name on the card (accountHolderName), the card number (cardNumber), the card type (cardType.code), the month of the expiry date (expiryMonth), the year of the expiry date (expiryYear), whether the payment details should be saved (saved), whether the payment details should be set as default (defaultPaymentInfo), and the billing address (billingAddress.firstName, billingAddress.lastName, billingAddress.titleCode, billingAddress.country.isocode, billingAddress.line1, billingAddress.line2, billingAddress.town, billingAddress.postalCode, billingAddress.region.isocode)
     *
     * The DTO is in XML or .json format.
     */
    paymentDetails: PaymentDetails;

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
   * Parameters for setPaymentDetails
   */
  export interface SetPaymentDetailsParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Payment details identifier.
     */
    paymentDetailsId: string;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for getPromotions
   */
  export interface GetPromotionsParams {

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
   * Parameters for applyPromotion
   */
  export interface ApplyPromotionParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Promotion identifier (code)
     */
    promotionId: string;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for getPromotion
   */
  export interface GetPromotionParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Promotion identifier (code)
     */
    promotionId: string;

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
   * Parameters for removePromotion
   */
  export interface RemovePromotionParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Promotion identifier (code)
     */
    promotionId: string;

    /**
     * Cart identifier: cart code for logged in user, cart guid for anonymous user, 'current' for the last modified cart
     */
    cartId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for getVouchers
   */
  export interface GetVouchersParams {

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
   * Parameters for applyVoucherForCart
   */
  export interface ApplyVoucherForCartParams {

    /**
     * Voucher identifier (code)
     */
    voucherId: string;

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
  }

  /**
   * Parameters for releaseVoucherFromCart
   */
  export interface ReleaseVoucherFromCartParams {

    /**
     * Voucher identifier (code)
     */
    voucherId: string;

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
  }
}

export { CartsService }
