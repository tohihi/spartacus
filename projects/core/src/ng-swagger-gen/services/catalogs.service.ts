/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CatalogList } from '../models/catalog-list';
import { Catalog } from '../models/catalog';
import { CatalogVersion } from '../models/catalog-version';
import { CategoryHierarchy } from '../models/category-hierarchy';

/**
 * Catalogs Controller
 */
@Injectable({
  providedIn: 'root',
})
class CatalogsService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns all catalogs with versions defined for the base store.
   * @param params The `CatalogsService.GetCatalogsParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCatalogsResponse(params: CatalogsService.GetCatalogsParams): __Observable<__StrictHttpResponse<CatalogList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/catalogs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CatalogList>;
      })
    );
  }
  /**
   * Returns all catalogs with versions defined for the base store.
   * @param params The `CatalogsService.GetCatalogsParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCatalogs(params: CatalogsService.GetCatalogsParams): __Observable<CatalogList> {
    return this.getCatalogsResponse(params).pipe(
      __map(_r => _r.body as CatalogList)
    );
  }

  /**
   * Returns information about a catalog based on its ID, along with the versions defined for the current base store.
   * @param params The `CatalogsService.GetCatalogParams` containing the following parameters:
   *
   * - `catalogId`: Catalog identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCatalogResponse(params: CatalogsService.GetCatalogParams): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/catalogs/${params.catalogId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Catalog>;
      })
    );
  }
  /**
   * Returns information about a catalog based on its ID, along with the versions defined for the current base store.
   * @param params The `CatalogsService.GetCatalogParams` containing the following parameters:
   *
   * - `catalogId`: Catalog identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCatalog(params: CatalogsService.GetCatalogParams): __Observable<Catalog> {
    return this.getCatalogResponse(params).pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * Returns information about the catalog version that exists for the current base store.
   * @param params The `CatalogsService.GetCatalogVersionParams` containing the following parameters:
   *
   * - `catalogVersionId`: Catalog version identifier
   *
   * - `catalogId`: Catalog identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCatalogVersionResponse(params: CatalogsService.GetCatalogVersionParams): __Observable<__StrictHttpResponse<CatalogVersion>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/catalogs/${params.catalogId}/${params.catalogVersionId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CatalogVersion>;
      })
    );
  }
  /**
   * Returns information about the catalog version that exists for the current base store.
   * @param params The `CatalogsService.GetCatalogVersionParams` containing the following parameters:
   *
   * - `catalogVersionId`: Catalog version identifier
   *
   * - `catalogId`: Catalog identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCatalogVersion(params: CatalogsService.GetCatalogVersionParams): __Observable<CatalogVersion> {
    return this.getCatalogVersionResponse(params).pipe(
      __map(_r => _r.body as CatalogVersion)
    );
  }

  /**
   * Returns information about a specified category that exists in a catalog version available for the current base store.
   * @param params The `CatalogsService.GetCategoriesParams` containing the following parameters:
   *
   * - `categoryId`: Category identifier
   *
   * - `catalogVersionId`: Catalog version identifier
   *
   * - `catalogId`: Catalog identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCategoriesResponse(params: CatalogsService.GetCategoriesParams): __Observable<__StrictHttpResponse<CategoryHierarchy>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/catalogs/${params.catalogId}/${params.catalogVersionId}/categories/${params.categoryId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryHierarchy>;
      })
    );
  }
  /**
   * Returns information about a specified category that exists in a catalog version available for the current base store.
   * @param params The `CatalogsService.GetCategoriesParams` containing the following parameters:
   *
   * - `categoryId`: Category identifier
   *
   * - `catalogVersionId`: Catalog version identifier
   *
   * - `catalogId`: Catalog identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getCategories(params: CatalogsService.GetCategoriesParams): __Observable<CategoryHierarchy> {
    return this.getCategoriesResponse(params).pipe(
      __map(_r => _r.body as CategoryHierarchy)
    );
  }
}

module CatalogsService {

  /**
   * Parameters for getCatalogs
   */
  export interface GetCatalogsParams {

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
   * Parameters for getCatalog
   */
  export interface GetCatalogParams {

    /**
     * Catalog identifier
     */
    catalogId: string;

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
   * Parameters for getCatalogVersion
   */
  export interface GetCatalogVersionParams {

    /**
     * Catalog version identifier
     */
    catalogVersionId: string;

    /**
     * Catalog identifier
     */
    catalogId: string;

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
   * Parameters for getCategories
   */
  export interface GetCategoriesParams {

    /**
     * Category identifier
     */
    categoryId: string;

    /**
     * Catalog version identifier
     */
    catalogVersionId: string;

    /**
     * Catalog identifier
     */
    catalogId: string;

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

export { CatalogsService }
