/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ListAdaptedComponents } from '../models/list-adapted-components';
import { ComponentIDList } from '../models/component-idlist';
import { ComponentAdaptedData } from '../models/component-adapted-data';

/**
 * Component Controller
 */
@Injectable({
  providedIn: 'root',
})
class ComponentService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Given a list of component identifiers in body, return cms component data.
   * @param params The `ComponentService.GetComponentByIdListParams` containing the following parameters:
   *
   * - `componentIdList`: List of Component identifiers
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `sort`: Optional sort criterion. No default value.
   *
   * - `productCode`: Product code
   *
   * - `pageSize`: Optional pagination parameter. Default value 10.
   *
   * - `fields`: Response configuration (list of fields, which should be returned in response)
   *
   * - `currentPage`: Optional pagination parameter. Default value 0.
   *
   * - `categoryCode`: Category code
   *
   * - `catalogCode`: Catalog code
   *
   * @return OK
   */
  getComponentByIdListResponse(params: ComponentService.GetComponentByIdListParams): __Observable<__StrictHttpResponse<ListAdaptedComponents>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.componentIdList;

    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.productCode != null) __params = __params.set('productCode', params.productCode.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.currentPage != null) __params = __params.set('currentPage', params.currentPage.toString());
    if (params.categoryCode != null) __params = __params.set('categoryCode', params.categoryCode.toString());
    if (params.catalogCode != null) __params = __params.set('catalogCode', params.catalogCode.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/cms/components`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ListAdaptedComponents>;
      })
    );
  }
  /**
   * Given a list of component identifiers in body, return cms component data.
   * @param params The `ComponentService.GetComponentByIdListParams` containing the following parameters:
   *
   * - `componentIdList`: List of Component identifiers
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `sort`: Optional sort criterion. No default value.
   *
   * - `productCode`: Product code
   *
   * - `pageSize`: Optional pagination parameter. Default value 10.
   *
   * - `fields`: Response configuration (list of fields, which should be returned in response)
   *
   * - `currentPage`: Optional pagination parameter. Default value 0.
   *
   * - `categoryCode`: Category code
   *
   * - `catalogCode`: Catalog code
   *
   * @return OK
   */
  getComponentByIdList(params: ComponentService.GetComponentByIdListParams): __Observable<ListAdaptedComponents> {
    return this.getComponentByIdListResponse(params).pipe(
      __map(_r => _r.body as ListAdaptedComponents)
    );
  }

  /**
   * Given a component identifier, return cms component data.
   * @param params The `ComponentService.GetComponentByIdParams` containing the following parameters:
   *
   * - `componentId`: Component identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `productCode`: Product code
   *
   * - `fields`: Response configuration (list of fields, which should be returned in response)
   *
   * - `categoryCode`: Category code
   *
   * - `catalogCode`: Catalog code
   *
   * @return OK
   */
  getComponentByIdResponse(params: ComponentService.GetComponentByIdParams): __Observable<__StrictHttpResponse<ComponentAdaptedData>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.productCode != null) __params = __params.set('productCode', params.productCode.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.categoryCode != null) __params = __params.set('categoryCode', params.categoryCode.toString());
    if (params.catalogCode != null) __params = __params.set('catalogCode', params.catalogCode.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/cms/components/${params.componentId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ComponentAdaptedData>;
      })
    );
  }
  /**
   * Given a component identifier, return cms component data.
   * @param params The `ComponentService.GetComponentByIdParams` containing the following parameters:
   *
   * - `componentId`: Component identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `productCode`: Product code
   *
   * - `fields`: Response configuration (list of fields, which should be returned in response)
   *
   * - `categoryCode`: Category code
   *
   * - `catalogCode`: Catalog code
   *
   * @return OK
   */
  getComponentById(params: ComponentService.GetComponentByIdParams): __Observable<ComponentAdaptedData> {
    return this.getComponentByIdResponse(params).pipe(
      __map(_r => _r.body as ComponentAdaptedData)
    );
  }
}

module ComponentService {

  /**
   * Parameters for getComponentByIdList
   */
  export interface GetComponentByIdListParams {

    /**
     * List of Component identifiers
     */
    componentIdList: ComponentIDList;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Optional sort criterion. No default value.
     */
    sort?: string;

    /**
     * Product code
     */
    productCode?: string;

    /**
     * Optional pagination parameter. Default value 10.
     */
    pageSize?: number;

    /**
     * Response configuration (list of fields, which should be returned in response)
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';

    /**
     * Optional pagination parameter. Default value 0.
     */
    currentPage?: number;

    /**
     * Category code
     */
    categoryCode?: string;

    /**
     * Catalog code
     */
    catalogCode?: string;
  }

  /**
   * Parameters for getComponentById
   */
  export interface GetComponentByIdParams {

    /**
     * Component identifier
     */
    componentId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Product code
     */
    productCode?: string;

    /**
     * Response configuration (list of fields, which should be returned in response)
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';

    /**
     * Category code
     */
    categoryCode?: string;

    /**
     * Catalog code
     */
    catalogCode?: string;
  }
}

export { ComponentService }
