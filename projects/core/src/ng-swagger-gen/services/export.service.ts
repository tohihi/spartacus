/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductList } from '../models/product-list';

/**
 * Export Controller
 */
@Injectable({
  providedIn: 'root',
})
class ExportService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Used for product export. Depending on the timestamp parameter, it can return all products or only products modified after the given time.
   * @param params The `ExportService.ExportProductsParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `version`: The catalog version. The catalog version must be provided along with the catalog.
   *
   * - `timestamp`: When this parameter is set, only products modified after the given time will be returned. This parameter should be in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
   *
   * - `pageSize`: The number of results returned per page.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: The current result page requested.
   *
   * - `catalog`: The catalog to retrieve products from. The catalog must be provided along with the version.
   *
   * @return OK
   */
  exportProductsResponse(params: ExportService.ExportProductsParams): __Observable<__StrictHttpResponse<ProductList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.version != null) __params = __params.set('version', params.version.toString());
    if (params.timestamp != null) __params = __params.set('timestamp', params.timestamp.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.currentPage != null) __params = __params.set('currentPage', params.currentPage.toString());
    if (params.catalog != null) __params = __params.set('catalog', params.catalog.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/export/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductList>;
      })
    );
  }
  /**
   * Used for product export. Depending on the timestamp parameter, it can return all products or only products modified after the given time.
   * @param params The `ExportService.ExportProductsParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `version`: The catalog version. The catalog version must be provided along with the catalog.
   *
   * - `timestamp`: When this parameter is set, only products modified after the given time will be returned. This parameter should be in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
   *
   * - `pageSize`: The number of results returned per page.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: The current result page requested.
   *
   * - `catalog`: The catalog to retrieve products from. The catalog must be provided along with the version.
   *
   * @return OK
   */
  exportProducts(params: ExportService.ExportProductsParams): __Observable<ProductList> {
    return this.exportProductsResponse(params).pipe(
      __map(_r => _r.body as ProductList)
    );
  }
}

module ExportService {

  /**
   * Parameters for exportProducts
   */
  export interface ExportProductsParams {

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * The catalog version. The catalog version must be provided along with the catalog.
     */
    version?: string;

    /**
     * When this parameter is set, only products modified after the given time will be returned. This parameter should be in ISO-8601 format (for example, 2018-01-09T16:28:45+0000).
     */
    timestamp?: string;

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

    /**
     * The catalog to retrieve products from. The catalog must be provided along with the version.
     */
    catalog?: string;
  }
}

export { ExportService }
