/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
import { UserSignUp } from '../models/user-sign-up';
import { AddressList } from '../models/address-list';
import { Address } from '../models/address';
import { AddressValidation } from '../models/address-validation';
import { UserGroupList } from '../models/user-group-list';
import { PaymentDetailsList } from '../models/payment-details-list';
import { PaymentDetails } from '../models/payment-details';

/**
 * Users Controller
 */
@Injectable({
  providedIn: 'root',
})
class UsersService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Registers a customer. There are two options for registering a customer. The first option requires the following parameters: login, password, firstName, lastName, titleCode. The second option converts a guest to a customer. In this case, the required parameters are: guid, password.
   * @param params The `UsersService.RegisterUserPrimParams` containing the following parameters:
   *
   * - `user`: User's object.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  registerUserPrimResponse(params: UsersService.RegisterUserPrimParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.user;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Registers a customer. There are two options for registering a customer. The first option requires the following parameters: login, password, firstName, lastName, titleCode. The second option converts a guest to a customer. In this case, the required parameters are: guid, password.
   * @param params The `UsersService.RegisterUserPrimParams` containing the following parameters:
   *
   * - `user`: User's object.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  registerUserPrim(params: UsersService.RegisterUserPrimParams): __Observable<User> {
    return this.registerUserPrimResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Returns customer profile.
   * @param params The `UsersService.GetUserParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getUserResponse(params: UsersService.GetUserParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Returns customer profile.
   * @param params The `UsersService.GetUserParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getUser(params: UsersService.GetUserParams): __Observable<User> {
    return this.getUserResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Updates customer profile. Attributes not provided in the request body will be defined again (set to null or default).
   * @param params The `UsersService.PutUserPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `user`: User's object
   *
   * - `baseSiteId`: Base site identifier
   */
  putUserPrimResponse(params: UsersService.PutUserPrimParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.user;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}`,
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
   * Updates customer profile. Attributes not provided in the request body will be defined again (set to null or default).
   * @param params The `UsersService.PutUserPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `user`: User's object
   *
   * - `baseSiteId`: Base site identifier
   */
  putUserPrim(params: UsersService.PutUserPrimParams): __Observable<null> {
    return this.putUserPrimResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Removes customer profile.
   * @param params The `UsersService.DeactivateUserParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   */
  deactivateUserResponse(params: UsersService.DeactivateUserParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}`,
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
   * Removes customer profile.
   * @param params The `UsersService.DeactivateUserParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   */
  deactivateUser(params: UsersService.DeactivateUserParams): __Observable<null> {
    return this.deactivateUserResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates customer profile. Only attributes provided in the request body will be changed.
   * @param params The `UsersService.UpdateUserPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `user`: User's object.
   *
   * - `baseSiteId`: Base site identifier
   */
  updateUserPrimResponse(params: UsersService.UpdateUserPrimParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.user;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}`,
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
   * Updates customer profile. Only attributes provided in the request body will be changed.
   * @param params The `UsersService.UpdateUserPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `user`: User's object.
   *
   * - `baseSiteId`: Base site identifier
   */
  updateUserPrim(params: UsersService.UpdateUserPrimParams): __Observable<null> {
    return this.updateUserPrimResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns customer's addresses.
   * @param params The `UsersService.GetAddressesParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getAddressesResponse(params: UsersService.GetAddressesParams): __Observable<__StrictHttpResponse<AddressList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/addresses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AddressList>;
      })
    );
  }
  /**
   * Returns customer's addresses.
   * @param params The `UsersService.GetAddressesParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getAddresses(params: UsersService.GetAddressesParams): __Observable<AddressList> {
    return this.getAddressesResponse(params).pipe(
      __map(_r => _r.body as AddressList)
    );
  }

  /**
   * Creates a new address.
   * @param params The `UsersService.CreateAddressPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `address`: Address object.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  createAddressPrimResponse(params: UsersService.CreateAddressPrimParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.address;
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/addresses`,
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
   * Creates a new address.
   * @param params The `UsersService.CreateAddressPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `address`: Address object.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  createAddressPrim(params: UsersService.CreateAddressPrimParams): __Observable<Address> {
    return this.createAddressPrimResponse(params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * Verifies address.
   * @param params The `UsersService.VerifyAddressPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `address`: Address object.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  verifyAddressPrimResponse(params: UsersService.VerifyAddressPrimParams): __Observable<__StrictHttpResponse<AddressValidation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.address;
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/addresses/verification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AddressValidation>;
      })
    );
  }
  /**
   * Verifies address.
   * @param params The `UsersService.VerifyAddressPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `address`: Address object.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  verifyAddressPrim(params: UsersService.VerifyAddressPrimParams): __Observable<AddressValidation> {
    return this.verifyAddressPrimResponse(params).pipe(
      __map(_r => _r.body as AddressValidation)
    );
  }

  /**
   * Returns detailed information about address with a given id.
   * @param params The `UsersService.GetAddressParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `addressId`: Address identifier.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getAddressResponse(params: UsersService.GetAddressParams): __Observable<__StrictHttpResponse<Address>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/addresses/${params.addressId}`,
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
   * Returns detailed information about address with a given id.
   * @param params The `UsersService.GetAddressParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `addressId`: Address identifier.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getAddress(params: UsersService.GetAddressParams): __Observable<Address> {
    return this.getAddressResponse(params).pipe(
      __map(_r => _r.body as Address)
    );
  }

  /**
   * Updates the address. Attributes not provided in the request will be defined again (set to null or default).
   * @param params The `UsersService.PutAddressPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `addressId`: Address identifier.
   *
   * - `address`: Address object.
   */
  putAddressPrimResponse(params: UsersService.PutAddressPrimParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.address;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/addresses/${params.addressId}`,
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
   * Updates the address. Attributes not provided in the request will be defined again (set to null or default).
   * @param params The `UsersService.PutAddressPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `addressId`: Address identifier.
   *
   * - `address`: Address object.
   */
  putAddressPrim(params: UsersService.PutAddressPrimParams): __Observable<null> {
    return this.putAddressPrimResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Removes customer's address.
   * @param params The `UsersService.DeleteAddressParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `addressId`: Address identifier.
   */
  deleteAddressResponse(params: UsersService.DeleteAddressParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/addresses/${params.addressId}`,
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
   * Removes customer's address.
   * @param params The `UsersService.DeleteAddressParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `addressId`: Address identifier.
   */
  deleteAddress(params: UsersService.DeleteAddressParams): __Observable<null> {
    return this.deleteAddressResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates the address. Only attributes provided in the request body will be changed.
   * @param params The `UsersService.PatchAddressPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `addressId`: Address identifier.
   *
   * - `address`: Address object
   */
  patchAddressPrimResponse(params: UsersService.PatchAddressPrimParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.address;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/addresses/${params.addressId}`,
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
   * Updates the address. Only attributes provided in the request body will be changed.
   * @param params The `UsersService.PatchAddressPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `addressId`: Address identifier.
   *
   * - `address`: Address object
   */
  patchAddressPrim(params: UsersService.PatchAddressPrimParams): __Observable<null> {
    return this.patchAddressPrimResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns all customer groups of a customer.
   * @param params The `UsersService.GetAllCustomerGroupsForCustomerParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getAllCustomerGroupsForCustomerResponse(params: UsersService.GetAllCustomerGroupsForCustomerParams): __Observable<__StrictHttpResponse<UserGroupList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/customergroups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserGroupList>;
      })
    );
  }
  /**
   * Returns all customer groups of a customer.
   * @param params The `UsersService.GetAllCustomerGroupsForCustomerParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getAllCustomerGroupsForCustomer(params: UsersService.GetAllCustomerGroupsForCustomerParams): __Observable<UserGroupList> {
    return this.getAllCustomerGroupsForCustomerResponse(params).pipe(
      __map(_r => _r.body as UserGroupList)
    );
  }

  /**
   * Changes a customer's login name. Requires the customer's current password.
   * @param params The `UsersService.ChangeLoginParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `password`: Customer's current password.
   *
   * - `newLogin`: Customer's new login name. Customer login is case insensitive.
   *
   * - `baseSiteId`: Base site identifier
   */
  changeLoginResponse(params: UsersService.ChangeLoginParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.password != null) __params = __params.set('password', params.password.toString());
    if (params.newLogin != null) __params = __params.set('newLogin', params.newLogin.toString());

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/login`,
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
   * Changes a customer's login name. Requires the customer's current password.
   * @param params The `UsersService.ChangeLoginParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `password`: Customer's current password.
   *
   * - `newLogin`: Customer's new login name. Customer login is case insensitive.
   *
   * - `baseSiteId`: Base site identifier
   */
  changeLogin(params: UsersService.ChangeLoginParams): __Observable<null> {
    return this.changeLoginResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Changes customer's password.
   * @param params The `UsersService.ChangePasswordParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `new`: New password.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `old`: Old password. Required only for ROLE_CUSTOMERGROUP
   */
  changePasswordResponse(params: UsersService.ChangePasswordParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.new != null) __params = __params.set('new', params.new.toString());

    if (params.old != null) __params = __params.set('old', params.old.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/password`,
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
   * Changes customer's password.
   * @param params The `UsersService.ChangePasswordParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `new`: New password.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `old`: Old password. Required only for ROLE_CUSTOMERGROUP
   */
  changePassword(params: UsersService.ChangePasswordParams): __Observable<null> {
    return this.changePasswordResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Return customer's credit card payment details list.
   * @param params The `UsersService.GetPaymentInfosParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `saved`: Type of payment details.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getPaymentInfosResponse(params: UsersService.GetPaymentInfosParams): __Observable<__StrictHttpResponse<PaymentDetailsList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.saved != null) __params = __params.set('saved', params.saved.toString());

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/paymentdetails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PaymentDetailsList>;
      })
    );
  }
  /**
   * Return customer's credit card payment details list.
   * @param params The `UsersService.GetPaymentInfosParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `saved`: Type of payment details.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getPaymentInfos(params: UsersService.GetPaymentInfosParams): __Observable<PaymentDetailsList> {
    return this.getPaymentInfosResponse(params).pipe(
      __map(_r => _r.body as PaymentDetailsList)
    );
  }

  /**
   * Returns a customer's credit card payment details for the specified paymentDetailsId.
   * @param params The `UsersService.GetPaymentDetailsParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetailsId`: Payment details identifier.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getPaymentDetailsResponse(params: UsersService.GetPaymentDetailsParams): __Observable<__StrictHttpResponse<PaymentDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/paymentdetails/${params.paymentDetailsId}`,
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
   * Returns a customer's credit card payment details for the specified paymentDetailsId.
   * @param params The `UsersService.GetPaymentDetailsParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetailsId`: Payment details identifier.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getPaymentDetails(params: UsersService.GetPaymentDetailsParams): __Observable<PaymentDetails> {
    return this.getPaymentDetailsResponse(params).pipe(
      __map(_r => _r.body as PaymentDetails)
    );
  }

  /**
   * Updates existing customer's credit card payment info based on the payment info ID. Attributes not given in request will be defined again (set to null or default).
   * @param params The `UsersService.PutPaymentInfoPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetailsId`: Payment details identifier.
   *
   * - `paymentDetails`: Payment details object.
   *
   * - `baseSiteId`: Base site identifier
   */
  putPaymentInfoPrimResponse(params: UsersService.PutPaymentInfoPrimParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.paymentDetails;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/paymentdetails/${params.paymentDetailsId}`,
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
   * Updates existing customer's credit card payment info based on the payment info ID. Attributes not given in request will be defined again (set to null or default).
   * @param params The `UsersService.PutPaymentInfoPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetailsId`: Payment details identifier.
   *
   * - `paymentDetails`: Payment details object.
   *
   * - `baseSiteId`: Base site identifier
   */
  putPaymentInfoPrim(params: UsersService.PutPaymentInfoPrimParams): __Observable<null> {
    return this.putPaymentInfoPrimResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Removes a customer's credit card payment details based on a specified paymentDetailsId.
   * @param params The `UsersService.DeletePaymentInfoParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetailsId`: Payment details identifier.
   *
   * - `baseSiteId`: Base site identifier
   */
  deletePaymentInfoResponse(params: UsersService.DeletePaymentInfoParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/paymentdetails/${params.paymentDetailsId}`,
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
   * Removes a customer's credit card payment details based on a specified paymentDetailsId.
   * @param params The `UsersService.DeletePaymentInfoParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetailsId`: Payment details identifier.
   *
   * - `baseSiteId`: Base site identifier
   */
  deletePaymentInfo(params: UsersService.DeletePaymentInfoParams): __Observable<null> {
    return this.deletePaymentInfoResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates an existing customer's credit card payment details based on the specified paymentDetailsId. Only those attributes provided in the request will be updated.
   * @param params The `UsersService.UpdatePaymentInfoPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetailsId`: Payment details identifier.
   *
   * - `paymentDetails`: Payment details object
   *
   * - `baseSiteId`: Base site identifier
   */
  updatePaymentInfoPrimResponse(params: UsersService.UpdatePaymentInfoPrimParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.paymentDetails;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/${params.baseSiteId}/users/${params.userId}/paymentdetails/${params.paymentDetailsId}`,
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
   * Updates an existing customer's credit card payment details based on the specified paymentDetailsId. Only those attributes provided in the request will be updated.
   * @param params The `UsersService.UpdatePaymentInfoPrimParams` containing the following parameters:
   *
   * - `userId`: User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
   *
   * - `paymentDetailsId`: Payment details identifier.
   *
   * - `paymentDetails`: Payment details object
   *
   * - `baseSiteId`: Base site identifier
   */
  updatePaymentInfoPrim(params: UsersService.UpdatePaymentInfoPrimParams): __Observable<null> {
    return this.updatePaymentInfoPrimResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UsersService {

  /**
   * Parameters for registerUserPrim
   */
  export interface RegisterUserPrimParams {

    /**
     * User's object.
     */
    user: UserSignUp;

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
   * Parameters for getUser
   */
  export interface GetUserParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

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
   * Parameters for putUserPrim
   */
  export interface PutUserPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * User's object
     */
    user: User;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for deactivateUser
   */
  export interface DeactivateUserParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for updateUserPrim
   */
  export interface UpdateUserPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * User's object.
     */
    user: User;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for getAddresses
   */
  export interface GetAddressesParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

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
   * Parameters for createAddressPrim
   */
  export interface CreateAddressPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Address object.
     */
    address: Address;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for verifyAddressPrim
   */
  export interface VerifyAddressPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Address object.
     */
    address: Address;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for getAddress
   */
  export interface GetAddressParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Address identifier.
     */
    addressId: string;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for putAddressPrim
   */
  export interface PutAddressPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Address identifier.
     */
    addressId: string;

    /**
     * Address object.
     */
    address: Address;
  }

  /**
   * Parameters for deleteAddress
   */
  export interface DeleteAddressParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Address identifier.
     */
    addressId: string;
  }

  /**
   * Parameters for patchAddressPrim
   */
  export interface PatchAddressPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Address identifier.
     */
    addressId: string;

    /**
     * Address object
     */
    address: Address;
  }

  /**
   * Parameters for getAllCustomerGroupsForCustomer
   */
  export interface GetAllCustomerGroupsForCustomerParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

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
   * Parameters for changeLogin
   */
  export interface ChangeLoginParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Customer's current password.
     */
    password: string;

    /**
     * Customer's new login name. Customer login is case insensitive.
     */
    newLogin: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for changePassword
   */
  export interface ChangePasswordParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * New password.
     */
    new: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Old password. Required only for ROLE_CUSTOMERGROUP
     */
    old?: string;
  }

  /**
   * Parameters for getPaymentInfos
   */
  export interface GetPaymentInfosParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Type of payment details.
     */
    saved: boolean;

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
   * Parameters for getPaymentDetails
   */
  export interface GetPaymentDetailsParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Payment details identifier.
     */
    paymentDetailsId: string;

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
   * Parameters for putPaymentInfoPrim
   */
  export interface PutPaymentInfoPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Payment details identifier.
     */
    paymentDetailsId: string;

    /**
     * Payment details object.
     */
    paymentDetails: PaymentDetails;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for deletePaymentInfo
   */
  export interface DeletePaymentInfoParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Payment details identifier.
     */
    paymentDetailsId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for updatePaymentInfoPrim
   */
  export interface UpdatePaymentInfoPrimParams {

    /**
     * User identifier or one of the literals : 'current' for currently authenticated user, 'anonymous' for anonymous user
     */
    userId: string;

    /**
     * Payment details identifier.
     */
    paymentDetailsId: string;

    /**
     * Payment details object
     */
    paymentDetails: PaymentDetails;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }
}

export { UsersService }
