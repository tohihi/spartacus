/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Voucher } from '../models/voucher';

/**
 * Vouchers Controller
 */
@Injectable({
  providedIn: 'root',
})
class VouchersService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns details of a single voucher that is specified by its voucher identification code.
   * @param params The `VouchersService.GetVoucherByCodeParams` containing the following parameters:
   *
   * - `code`: Voucher identifier (code)
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getVoucherByCodeResponse(params: VouchersService.GetVoucherByCodeParams): __Observable<__StrictHttpResponse<Voucher>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/vouchers/${params.code}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Voucher>;
      })
    );
  }
  /**
   * Returns details of a single voucher that is specified by its voucher identification code.
   * @param params The `VouchersService.GetVoucherByCodeParams` containing the following parameters:
   *
   * - `code`: Voucher identifier (code)
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getVoucherByCode(params: VouchersService.GetVoucherByCodeParams): __Observable<Voucher> {
    return this.getVoucherByCodeResponse(params).pipe(
      __map(_r => _r.body as Voucher)
    );
  }
}

module VouchersService {

  /**
   * Parameters for getVoucherByCode
   */
  export interface GetVoucherByCodeParams {

    /**
     * Voucher identifier (code)
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

export { VouchersService }
