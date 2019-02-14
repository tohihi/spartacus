/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserGroupList } from '../models/user-group-list';
import { UserGroup } from '../models/user-group';
import { MemberList } from '../models/member-list';

/**
 * Customer Groups Controller
 */
@Injectable({
  providedIn: 'root',
})
class CustomerGroupsService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns all customer groups that are direct subgroups of a customergroup.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.GetAllCustomerGroupsParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `pageSize`: Number of customer group returned in one page.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: Current page number (starts with 0).
   *
   * @return OK
   */
  getAllCustomerGroupsResponse(params: CustomerGroupsService.GetAllCustomerGroupsParams): __Observable<__StrictHttpResponse<UserGroupList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.currentPage != null) __params = __params.set('currentPage', params.currentPage.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/customergroups`,
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
   * Returns all customer groups that are direct subgroups of a customergroup.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.GetAllCustomerGroupsParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `pageSize`: Number of customer group returned in one page.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: Current page number (starts with 0).
   *
   * @return OK
   */
  getAllCustomerGroups(params: CustomerGroupsService.GetAllCustomerGroupsParams): __Observable<UserGroupList> {
    return this.getAllCustomerGroupsResponse(params).pipe(
      __map(_r => _r.body as UserGroupList)
    );
  }

  /**
   * Creates a new customer group that is a direct subgroup of a customergroup.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.CreateNewCustomerGroupPrimParams` containing the following parameters:
   *
   * - `userGroup`: User group object with id and name.
   *
   * - `baseSiteId`: Base site identifier
   */
  createNewCustomerGroupPrimResponse(params: CustomerGroupsService.CreateNewCustomerGroupPrimParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.userGroup;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/customergroups`,
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
   * Creates a new customer group that is a direct subgroup of a customergroup.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.CreateNewCustomerGroupPrimParams` containing the following parameters:
   *
   * - `userGroup`: User group object with id and name.
   *
   * - `baseSiteId`: Base site identifier
   */
  createNewCustomerGroupPrim(params: CustomerGroupsService.CreateNewCustomerGroupPrimParams): __Observable<null> {
    return this.createNewCustomerGroupPrimResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns a customer group with a specific groupId.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.GetCustomerGroupParams` containing the following parameters:
   *
   * - `groupId`: Group identifier.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCustomerGroupResponse(params: CustomerGroupsService.GetCustomerGroupParams): __Observable<__StrictHttpResponse<UserGroup>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/customergroups/${params.groupId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserGroup>;
      })
    );
  }
  /**
   * Returns a customer group with a specific groupId.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.GetCustomerGroupParams` containing the following parameters:
   *
   * - `groupId`: Group identifier.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCustomerGroup(params: CustomerGroupsService.GetCustomerGroupParams): __Observable<UserGroup> {
    return this.getCustomerGroupResponse(params).pipe(
      __map(_r => _r.body as UserGroup)
    );
  }

  /**
   * Sets members for a user group. The list of existing members is overwritten with a new one.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.SetUserListForCustomerGroupPrimParams` containing the following parameters:
   *
   * - `members`: List of users to set for customer group.
   *
   * - `groupId`: Group identifier.
   *
   * - `baseSiteId`: Base site identifier
   */
  setUserListForCustomerGroupPrimResponse(params: CustomerGroupsService.SetUserListForCustomerGroupPrimParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.members;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/${params.baseSiteId}/customergroups/${params.groupId}/members`,
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
   * Sets members for a user group. The list of existing members is overwritten with a new one.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.SetUserListForCustomerGroupPrimParams` containing the following parameters:
   *
   * - `members`: List of users to set for customer group.
   *
   * - `groupId`: Group identifier.
   *
   * - `baseSiteId`: Base site identifier
   */
  setUserListForCustomerGroupPrim(params: CustomerGroupsService.SetUserListForCustomerGroupPrimParams): __Observable<null> {
    return this.setUserListForCustomerGroupPrimResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Assigns user(s) to a customer group.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.AssignUserToCustomerGroupPrimParams` containing the following parameters:
   *
   * - `members`: List of users to assign to customer group.
   *
   * - `groupId`: Group identifier.
   *
   * - `baseSiteId`: Base site identifier
   */
  assignUserToCustomerGroupPrimResponse(params: CustomerGroupsService.AssignUserToCustomerGroupPrimParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.members;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/${params.baseSiteId}/customergroups/${params.groupId}/members`,
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
   * Assigns user(s) to a customer group.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.AssignUserToCustomerGroupPrimParams` containing the following parameters:
   *
   * - `members`: List of users to assign to customer group.
   *
   * - `groupId`: Group identifier.
   *
   * - `baseSiteId`: Base site identifier
   */
  assignUserToCustomerGroupPrim(params: CustomerGroupsService.AssignUserToCustomerGroupPrimParams): __Observable<null> {
    return this.assignUserToCustomerGroupPrimResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Removes user from a customer group.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.RemoveUsersFromCustomerGroupParams` containing the following parameters:
   *
   * - `userId`: User identifier.
   *
   * - `groupId`: Group identifier.
   *
   * - `baseSiteId`: Base site identifier
   */
  removeUsersFromCustomerGroupResponse(params: CustomerGroupsService.RemoveUsersFromCustomerGroupParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/${params.baseSiteId}/customergroups/${params.groupId}/members/${params.userId}`,
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
   * Removes user from a customer group.
   *
   * To try out the methods of the Customer Groups controller, you must authorize a user who belongs to the “customermanagergroup”.
   * @param params The `CustomerGroupsService.RemoveUsersFromCustomerGroupParams` containing the following parameters:
   *
   * - `userId`: User identifier.
   *
   * - `groupId`: Group identifier.
   *
   * - `baseSiteId`: Base site identifier
   */
  removeUsersFromCustomerGroup(params: CustomerGroupsService.RemoveUsersFromCustomerGroupParams): __Observable<null> {
    return this.removeUsersFromCustomerGroupResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CustomerGroupsService {

  /**
   * Parameters for getAllCustomerGroups
   */
  export interface GetAllCustomerGroupsParams {

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Number of customer group returned in one page.
     */
    pageSize?: number;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';

    /**
     * Current page number (starts with 0).
     */
    currentPage?: number;
  }

  /**
   * Parameters for createNewCustomerGroupPrim
   */
  export interface CreateNewCustomerGroupPrimParams {

    /**
     * User group object with id and name.
     */
    userGroup: UserGroup;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for getCustomerGroup
   */
  export interface GetCustomerGroupParams {

    /**
     * Group identifier.
     */
    groupId: string;

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
   * Parameters for setUserListForCustomerGroupPrim
   */
  export interface SetUserListForCustomerGroupPrimParams {

    /**
     * List of users to set for customer group.
     */
    members: MemberList;

    /**
     * Group identifier.
     */
    groupId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for assignUserToCustomerGroupPrim
   */
  export interface AssignUserToCustomerGroupPrimParams {

    /**
     * List of users to assign to customer group.
     */
    members: MemberList;

    /**
     * Group identifier.
     */
    groupId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }

  /**
   * Parameters for removeUsersFromCustomerGroup
   */
  export interface RemoveUsersFromCustomerGroupParams {

    /**
     * User identifier.
     */
    userId: string;

    /**
     * Group identifier.
     */
    groupId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }
}

export { CustomerGroupsService }
