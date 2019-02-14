/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CMSPage } from '../models/cmspage';

/**
 * Page Controller
 */
@Injectable({
  providedIn: 'root',
})
class PageService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Given a page identifier, return the page data with a list of cms content slots, each of which contains a list of cms component data.
   * @param params The `PageService.GetPageDataParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `pageType`: page type
   *
   * - `pageLabelOrId`: Page Label or Id
   *
   * - `fields`: Response configuration (list of fields, which should be returned in response)
   *
   * - `code`: If pageType is ProductPage, code should be product code; if pageType is CategoryPage, code should be category code; if pageType is CatalogPage, code should be catalog code
   *
   * @return OK
   */
  getPageDataResponse(params: PageService.GetPageDataParams): __Observable<__StrictHttpResponse<CMSPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.pageType != null) __params = __params.set('pageType', params.pageType.toString());
    if (params.pageLabelOrId != null) __params = __params.set('pageLabelOrId', params.pageLabelOrId.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.code != null) __params = __params.set('code', params.code.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/cms/pages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CMSPage>;
      })
    );
  }
  /**
   * Given a page identifier, return the page data with a list of cms content slots, each of which contains a list of cms component data.
   * @param params The `PageService.GetPageDataParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `pageType`: page type
   *
   * - `pageLabelOrId`: Page Label or Id
   *
   * - `fields`: Response configuration (list of fields, which should be returned in response)
   *
   * - `code`: If pageType is ProductPage, code should be product code; if pageType is CategoryPage, code should be category code; if pageType is CatalogPage, code should be catalog code
   *
   * @return OK
   */
  getPageData(params: PageService.GetPageDataParams): __Observable<CMSPage> {
    return this.getPageDataResponse(params).pipe(
      __map(_r => _r.body as CMSPage)
    );
  }
}

module PageService {

  /**
   * Parameters for getPageData
   */
  export interface GetPageDataParams {

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * page type
     */
    pageType?: 'ContentPage' | 'ProductPage' | 'CategoryPage' | 'CatalogPage';

    /**
     * Page Label or Id
     */
    pageLabelOrId?: string;

    /**
     * Response configuration (list of fields, which should be returned in response)
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';

    /**
     * If pageType is ProductPage, code should be product code; if pageType is CategoryPage, code should be category code; if pageType is CatalogPage, code should be catalog code
     */
    code?: string;
  }
}

export { PageService }
