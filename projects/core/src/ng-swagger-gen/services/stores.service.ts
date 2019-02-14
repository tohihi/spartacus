/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StoreFinderSearchPage } from '../models/store-finder-search-page';
import { PointOfService } from '../models/point-of-service';

/**
 * Stores Controller
 */
@Injectable({
  providedIn: 'root',
})
class StoresService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Lists all store locations that are near the location specified in a query or based on latitude and longitude.
   * @param params The `StoresService.LocationSearchParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `sort`: Sorting method applied to the return results.
   *
   * - `radius`: Radius in meters. Max value: 40075000.0 (Earth's perimeter).
   *
   * - `query`: Location in natural language i.e. city or country.
   *
   * - `pageSize`: The number of results returned per page.
   *
   * - `longitude`: Coordinate that specifies the east-west position of a point on the Earth's surface.
   *
   * - `latitude`: Coordinate that specifies the north-south position of a point on the Earth's surface.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: The current result page requested.
   *
   * - `accuracy`: Accuracy in meters.
   *
   * @return OK
   */
  locationSearchResponse(params: StoresService.LocationSearchParams): __Observable<__StrictHttpResponse<StoreFinderSearchPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.radius != null) __params = __params.set('radius', params.radius.toString());
    if (params.query != null) __params = __params.set('query', params.query.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.longitude != null) __params = __params.set('longitude', params.longitude.toString());
    if (params.latitude != null) __params = __params.set('latitude', params.latitude.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.currentPage != null) __params = __params.set('currentPage', params.currentPage.toString());
    if (params.accuracy != null) __params = __params.set('accuracy', params.accuracy.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/stores`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StoreFinderSearchPage>;
      })
    );
  }
  /**
   * Lists all store locations that are near the location specified in a query or based on latitude and longitude.
   * @param params The `StoresService.LocationSearchParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `sort`: Sorting method applied to the return results.
   *
   * - `radius`: Radius in meters. Max value: 40075000.0 (Earth's perimeter).
   *
   * - `query`: Location in natural language i.e. city or country.
   *
   * - `pageSize`: The number of results returned per page.
   *
   * - `longitude`: Coordinate that specifies the east-west position of a point on the Earth's surface.
   *
   * - `latitude`: Coordinate that specifies the north-south position of a point on the Earth's surface.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: The current result page requested.
   *
   * - `accuracy`: Accuracy in meters.
   *
   * @return OK
   */
  locationSearch(params: StoresService.LocationSearchParams): __Observable<StoreFinderSearchPage> {
    return this.locationSearchResponse(params).pipe(
      __map(_r => _r.body as StoreFinderSearchPage)
    );
  }

  /**
   * In the response header, the "x-total-count" indicates the number of all store locations that are near the location specified in a query, or based on latitude and longitude.
   * @param params The `StoresService.CountLocationSearchParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `radius`: Radius in meters. Max value: 40075000.0 (Earth's perimeter).
   *
   * - `query`: Location in natural language i.e. city or country.
   *
   * - `longitude`: Coordinate that specifies the east-west position of a point on the Earth's surface.
   *
   * - `latitude`: Coordinate that specifies the north-south position of a point on the Earth's surface.
   *
   * - `accuracy`: Accuracy in meters.
   */
  countLocationSearchResponse(params: StoresService.CountLocationSearchParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.radius != null) __params = __params.set('radius', params.radius.toString());
    if (params.query != null) __params = __params.set('query', params.query.toString());
    if (params.longitude != null) __params = __params.set('longitude', params.longitude.toString());
    if (params.latitude != null) __params = __params.set('latitude', params.latitude.toString());
    if (params.accuracy != null) __params = __params.set('accuracy', params.accuracy.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/${params.baseSiteId}/stores`,
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
   * In the response header, the "x-total-count" indicates the number of all store locations that are near the location specified in a query, or based on latitude and longitude.
   * @param params The `StoresService.CountLocationSearchParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `radius`: Radius in meters. Max value: 40075000.0 (Earth's perimeter).
   *
   * - `query`: Location in natural language i.e. city or country.
   *
   * - `longitude`: Coordinate that specifies the east-west position of a point on the Earth's surface.
   *
   * - `latitude`: Coordinate that specifies the north-south position of a point on the Earth's surface.
   *
   * - `accuracy`: Accuracy in meters.
   */
  countLocationSearch(params: StoresService.CountLocationSearchParams): __Observable<null> {
    return this.countLocationSearchResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns store location based on its unique name.
   * @param params The `StoresService.LocationDetailsParams` containing the following parameters:
   *
   * - `storeId`: Store identifier (currently store name)
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  locationDetailsResponse(params: StoresService.LocationDetailsParams): __Observable<__StrictHttpResponse<PointOfService>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/stores/${params.storeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PointOfService>;
      })
    );
  }
  /**
   * Returns store location based on its unique name.
   * @param params The `StoresService.LocationDetailsParams` containing the following parameters:
   *
   * - `storeId`: Store identifier (currently store name)
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  locationDetails(params: StoresService.LocationDetailsParams): __Observable<PointOfService> {
    return this.locationDetailsResponse(params).pipe(
      __map(_r => _r.body as PointOfService)
    );
  }
}

module StoresService {

  /**
   * Parameters for locationSearch
   */
  export interface LocationSearchParams {

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Sorting method applied to the return results.
     */
    sort?: string;

    /**
     * Radius in meters. Max value: 40075000.0 (Earth's perimeter).
     */
    radius?: number;

    /**
     * Location in natural language i.e. city or country.
     */
    query?: string;

    /**
     * The number of results returned per page.
     */
    pageSize?: number;

    /**
     * Coordinate that specifies the east-west position of a point on the Earth's surface.
     */
    longitude?: number;

    /**
     * Coordinate that specifies the north-south position of a point on the Earth's surface.
     */
    latitude?: number;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';

    /**
     * The current result page requested.
     */
    currentPage?: number;

    /**
     * Accuracy in meters.
     */
    accuracy?: number;
  }

  /**
   * Parameters for countLocationSearch
   */
  export interface CountLocationSearchParams {

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Radius in meters. Max value: 40075000.0 (Earth's perimeter).
     */
    radius?: number;

    /**
     * Location in natural language i.e. city or country.
     */
    query?: string;

    /**
     * Coordinate that specifies the east-west position of a point on the Earth's surface.
     */
    longitude?: number;

    /**
     * Coordinate that specifies the north-south position of a point on the Earth's surface.
     */
    latitude?: number;

    /**
     * Accuracy in meters.
     */
    accuracy?: number;
  }

  /**
   * Parameters for locationDetails
   */
  export interface LocationDetailsParams {

    /**
     * Store identifier (currently store name)
     */
    storeId: string;

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

export { StoresService }
