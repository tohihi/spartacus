/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CardTypeList } from '../models/card-type-list';
import { CurrencyList } from '../models/currency-list';
import { CountryList } from '../models/country-list';
import { LanguageList } from '../models/language-list';
import { TitleList } from '../models/title-list';

/**
 * Miscs Controller
 */
@Injectable({
  providedIn: 'root',
})
class MiscsService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Lists supported payment card types.
   * @param params The `MiscsService.GetCardTypesParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCardTypesResponse(params: MiscsService.GetCardTypesParams): __Observable<__StrictHttpResponse<CardTypeList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/cardtypes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CardTypeList>;
      })
    );
  }
  /**
   * Lists supported payment card types.
   * @param params The `MiscsService.GetCardTypesParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCardTypes(params: MiscsService.GetCardTypesParams): __Observable<CardTypeList> {
    return this.getCardTypesResponse(params).pipe(
      __map(_r => _r.body as CardTypeList)
    );
  }

  /**
   * Lists all available currencies (all usable currencies for the current store). If the list of currencies for a base store is empty, a list of all currencies available in the system is returned.
   * @param params The `MiscsService.GetCurrenciesParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCurrenciesResponse(params: MiscsService.GetCurrenciesParams): __Observable<__StrictHttpResponse<CurrencyList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/currencies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CurrencyList>;
      })
    );
  }
  /**
   * Lists all available currencies (all usable currencies for the current store). If the list of currencies for a base store is empty, a list of all currencies available in the system is returned.
   * @param params The `MiscsService.GetCurrenciesParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCurrencies(params: MiscsService.GetCurrenciesParams): __Observable<CurrencyList> {
    return this.getCurrenciesResponse(params).pipe(
      __map(_r => _r.body as CurrencyList)
    );
  }

  /**
   * Lists all supported delivery countries for the current store. The list is sorted alphabetically.
   * @param params The `MiscsService.GetDeliveryCountriesParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getDeliveryCountriesResponse(params: MiscsService.GetDeliveryCountriesParams): __Observable<__StrictHttpResponse<CountryList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/deliverycountries`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CountryList>;
      })
    );
  }
  /**
   * Lists all supported delivery countries for the current store. The list is sorted alphabetically.
   * @param params The `MiscsService.GetDeliveryCountriesParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getDeliveryCountries(params: MiscsService.GetDeliveryCountriesParams): __Observable<CountryList> {
    return this.getDeliveryCountriesResponse(params).pipe(
      __map(_r => _r.body as CountryList)
    );
  }

  /**
   * Lists all available languages (all languages used for a particular store). If the list of languages for a base store is empty, a list of all languages available in the system will be returned.
   * @param params The `MiscsService.GetLanguagesParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getLanguagesResponse(params: MiscsService.GetLanguagesParams): __Observable<__StrictHttpResponse<LanguageList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/languages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LanguageList>;
      })
    );
  }
  /**
   * Lists all available languages (all languages used for a particular store). If the list of languages for a base store is empty, a list of all languages available in the system will be returned.
   * @param params The `MiscsService.GetLanguagesParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getLanguages(params: MiscsService.GetLanguagesParams): __Observable<LanguageList> {
    return this.getLanguagesResponse(params).pipe(
      __map(_r => _r.body as LanguageList)
    );
  }

  /**
   * Lists all localized titles.
   * @param params The `MiscsService.GetTitlesParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getTitlesResponse(params: MiscsService.GetTitlesParams): __Observable<__StrictHttpResponse<TitleList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/titles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TitleList>;
      })
    );
  }
  /**
   * Lists all localized titles.
   * @param params The `MiscsService.GetTitlesParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getTitles(params: MiscsService.GetTitlesParams): __Observable<TitleList> {
    return this.getTitlesResponse(params).pipe(
      __map(_r => _r.body as TitleList)
    );
  }
}

module MiscsService {

  /**
   * Parameters for getCardTypes
   */
  export interface GetCardTypesParams {

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
   * Parameters for getCurrencies
   */
  export interface GetCurrenciesParams {

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
   * Parameters for getDeliveryCountries
   */
  export interface GetDeliveryCountriesParams {

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
   * Parameters for getLanguages
   */
  export interface GetLanguagesParams {

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
   * Parameters for getTitles
   */
  export interface GetTitlesParams {

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

export { MiscsService }
