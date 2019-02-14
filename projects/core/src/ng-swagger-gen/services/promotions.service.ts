/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PromotionList } from '../models/promotion-list';
import { Promotion } from '../models/promotion';

/**
 * Promotions Controller
 */
@Injectable({
  providedIn: 'root',
})
class PromotionsService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns promotions defined for a current base site. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers and therefore some of them are currently not compatible with the new promotion engine.
   * @param params The `PromotionsService.GetPromotionsPrimParams` containing the following parameters:
   *
   * - `type`: Defines what type of promotions should be returned. Values supported for that parameter are: <ul><li>all: All available promotions are returned</li><li>product: Only product promotions are returned</li><li>order: Only order promotions are returned</li></ul>
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `promotionGroup`: Only promotions from this group are returned
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getPromotionsPrimResponse(params: PromotionsService.GetPromotionsPrimParams): __Observable<__StrictHttpResponse<PromotionList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.type != null) __params = __params.set('type', params.type.toString());

    if (params.promotionGroup != null) __params = __params.set('promotionGroup', params.promotionGroup.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/promotions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PromotionList>;
      })
    );
  }
  /**
   * Returns promotions defined for a current base site. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers and therefore some of them are currently not compatible with the new promotion engine.
   * @param params The `PromotionsService.GetPromotionsPrimParams` containing the following parameters:
   *
   * - `type`: Defines what type of promotions should be returned. Values supported for that parameter are: <ul><li>all: All available promotions are returned</li><li>product: Only product promotions are returned</li><li>order: Only order promotions are returned</li></ul>
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `promotionGroup`: Only promotions from this group are returned
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getPromotionsPrim(params: PromotionsService.GetPromotionsPrimParams): __Observable<PromotionList> {
    return this.getPromotionsPrimResponse(params).pipe(
      __map(_r => _r.body as PromotionList)
    );
  }

  /**
   * Returns details of a single promotion specified by a promotion code. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers and therefore some of them are currently not compatible with the new promotion engine.
   * @param params The `PromotionsService.GetPromotionByCodeParams` containing the following parameters:
   *
   * - `code`: Promotion identifier (code)
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getPromotionByCodeResponse(params: PromotionsService.GetPromotionByCodeParams): __Observable<__StrictHttpResponse<Promotion>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/promotions/${params.code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Promotion>;
      })
    );
  }
  /**
   * Returns details of a single promotion specified by a promotion code. Requests pertaining to promotions have been developed for the previous version of promotions and vouchers and therefore some of them are currently not compatible with the new promotion engine.
   * @param params The `PromotionsService.GetPromotionByCodeParams` containing the following parameters:
   *
   * - `code`: Promotion identifier (code)
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getPromotionByCode(params: PromotionsService.GetPromotionByCodeParams): __Observable<Promotion> {
    return this.getPromotionByCodeResponse(params).pipe(
      __map(_r => _r.body as Promotion)
    );
  }
}

module PromotionsService {

  /**
   * Parameters for getPromotionsPrim
   */
  export interface GetPromotionsPrimParams {

    /**
     * Defines what type of promotions should be returned. Values supported for that parameter are: <ul><li>all: All available promotions are returned</li><li>product: Only product promotions are returned</li><li>order: Only order promotions are returned</li></ul>
     */
    type: 'all' | 'product' | 'order';

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Only promotions from this group are returned
     */
    promotionGroup?: string;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for getPromotionByCode
   */
  export interface GetPromotionByCodeParams {

    /**
     * Promotion identifier (code)
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

export { PromotionsService }
