/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductExpressUpdateElementList } from '../models/product-express-update-element-list';
import { ProductSearchPage } from '../models/product-search-page';
import { SuggestionList } from '../models/suggestion-list';
import { Product } from '../models/product';
import { ProductReferenceList } from '../models/product-reference-list';
import { ReviewList } from '../models/review-list';
import { Review } from '../models/review';
import { StoreFinderStockSearchPage } from '../models/store-finder-stock-search-page';
import { Stock } from '../models/stock';

/**
 * Products Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductsService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns products added to the express update feed. Returns only elements updated after the provided timestamp. The queue is cleared using a defined cronjob.
   * @param params The `ProductsService.ExpressUpdateParams` containing the following parameters:
   *
   * - `timestamp`: Only items newer than the given parameter are retrieved from the queue. This parameter should be in ISO-8601 format.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `catalog`: Only products from this catalog are returned. Format: catalogId:catalogVersion
   *
   * @return OK
   */
  expressUpdateResponse(params: ProductsService.ExpressUpdateParams): __Observable<__StrictHttpResponse<ProductExpressUpdateElementList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.timestamp != null) __params = __params.set('timestamp', params.timestamp.toString());

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.catalog != null) __params = __params.set('catalog', params.catalog.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/products/expressupdate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductExpressUpdateElementList>;
      })
    );
  }
  /**
   * Returns products added to the express update feed. Returns only elements updated after the provided timestamp. The queue is cleared using a defined cronjob.
   * @param params The `ProductsService.ExpressUpdateParams` containing the following parameters:
   *
   * - `timestamp`: Only items newer than the given parameter are retrieved from the queue. This parameter should be in ISO-8601 format.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `catalog`: Only products from this catalog are returned. Format: catalogId:catalogVersion
   *
   * @return OK
   */
  expressUpdate(params: ProductsService.ExpressUpdateParams): __Observable<ProductExpressUpdateElementList> {
    return this.expressUpdateResponse(params).pipe(
      __map(_r => _r.body as ProductExpressUpdateElementList)
    );
  }

  /**
   * Returns a list of products and additional data, such as available facets, available sorting, and pagination options. It can also include spelling suggestions. To make spelling suggestions work, you need to make sure that "enableSpellCheck" on the SearchQuery is set to "true" (by default, it should already be set to "true"). You also need to have indexed properties configured to be used for spellchecking.
   * @param params The `ProductsService.SearchProductsParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `sort`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `searchQueryContext`: searchQueryContext
   *
   * - `query`: Serialized query, free text search, facets. The format of a serialized query: freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2
   *
   * - `pageSize`: The number of results returned per page.
   *
   * - `fields`: The context to be used in the search query.
   *
   * - `currentPage`: The current result page requested.
   *
   * @return OK
   */
  searchProductsResponse(params: ProductsService.SearchProductsParams): __Observable<__StrictHttpResponse<ProductSearchPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.searchQueryContext != null) __params = __params.set('searchQueryContext', params.searchQueryContext.toString());
    if (params.query != null) __params = __params.set('query', params.query.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.currentPage != null) __params = __params.set('currentPage', params.currentPage.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/products/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductSearchPage>;
      })
    );
  }
  /**
   * Returns a list of products and additional data, such as available facets, available sorting, and pagination options. It can also include spelling suggestions. To make spelling suggestions work, you need to make sure that "enableSpellCheck" on the SearchQuery is set to "true" (by default, it should already be set to "true"). You also need to have indexed properties configured to be used for spellchecking.
   * @param params The `ProductsService.SearchProductsParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `sort`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `searchQueryContext`: searchQueryContext
   *
   * - `query`: Serialized query, free text search, facets. The format of a serialized query: freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2
   *
   * - `pageSize`: The number of results returned per page.
   *
   * - `fields`: The context to be used in the search query.
   *
   * - `currentPage`: The current result page requested.
   *
   * @return OK
   */
  searchProducts(params: ProductsService.SearchProductsParams): __Observable<ProductSearchPage> {
    return this.searchProductsResponse(params).pipe(
      __map(_r => _r.body as ProductSearchPage)
    );
  }

  /**
   * In the response header, the "x-total-count" indicates the total number of products satisfying a query.
   * @param params The `ProductsService.CountSearchProductsParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `query`: Serialized query, free text search, facets. The format of a serialized query: freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2
   */
  countSearchProductsResponse(params: ProductsService.CountSearchProductsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.query != null) __params = __params.set('query', params.query.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/${params.baseSiteId}/products/search`,
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
   * In the response header, the "x-total-count" indicates the total number of products satisfying a query.
   * @param params The `ProductsService.CountSearchProductsParams` containing the following parameters:
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `query`: Serialized query, free text search, facets. The format of a serialized query: freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2
   */
  countSearchProducts(params: ProductsService.CountSearchProductsParams): __Observable<null> {
    return this.countSearchProductsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns a list of all available suggestions related to a given term and limits the results to a specific value of the max parameter.
   * @param params The `ProductsService.GetSuggestionsParams` containing the following parameters:
   *
   * - `term`: Specified term
   *
   * - `max`: Specifies the limit of results.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getSuggestionsResponse(params: ProductsService.GetSuggestionsParams): __Observable<__StrictHttpResponse<SuggestionList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.term != null) __params = __params.set('term', params.term.toString());
    if (params.max != null) __params = __params.set('max', params.max.toString());

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/products/suggestions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SuggestionList>;
      })
    );
  }
  /**
   * Returns a list of all available suggestions related to a given term and limits the results to a specific value of the max parameter.
   * @param params The `ProductsService.GetSuggestionsParams` containing the following parameters:
   *
   * - `term`: Specified term
   *
   * - `max`: Specifies the limit of results.
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getSuggestions(params: ProductsService.GetSuggestionsParams): __Observable<SuggestionList> {
    return this.getSuggestionsResponse(params).pipe(
      __map(_r => _r.body as SuggestionList)
    );
  }

  /**
   * Returns details of a single product according to a product code.
   * @param params The `ProductsService.GetProductByCodeParams` containing the following parameters:
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getProductByCodeResponse(params: ProductsService.GetProductByCodeParams): __Observable<__StrictHttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/products/${params.productCode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Product>;
      })
    );
  }
  /**
   * Returns details of a single product according to a product code.
   * @param params The `ProductsService.GetProductByCodeParams` containing the following parameters:
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getProductByCode(params: ProductsService.GetProductByCodeParams): __Observable<Product> {
    return this.getProductByCodeResponse(params).pipe(
      __map(_r => _r.body as Product)
    );
  }

  /**
   * Returns references for a product with a given product code. Reference type specifies which references to return.
   * @param params The `ProductsService.ExportProductReferencesParams` containing the following parameters:
   *
   * - `referenceType`: Reference type according to enum ProductReferenceTypeEnum
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `pageSize`: Maximum size of returned results.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  exportProductReferencesResponse(params: ProductsService.ExportProductReferencesParams): __Observable<__StrictHttpResponse<ProductReferenceList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.referenceType != null) __params = __params.set('referenceType', params.referenceType.toString());


    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/products/${params.productCode}/references`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductReferenceList>;
      })
    );
  }
  /**
   * Returns references for a product with a given product code. Reference type specifies which references to return.
   * @param params The `ProductsService.ExportProductReferencesParams` containing the following parameters:
   *
   * - `referenceType`: Reference type according to enum ProductReferenceTypeEnum
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `pageSize`: Maximum size of returned results.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  exportProductReferences(params: ProductsService.ExportProductReferencesParams): __Observable<ProductReferenceList> {
    return this.exportProductReferencesResponse(params).pipe(
      __map(_r => _r.body as ProductReferenceList)
    );
  }

  /**
   * Returns the reviews for a product with a given product code.
   * @param params The `ProductsService.GetProductReviewsParams` containing the following parameters:
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `maxCount`: Maximum count of reviews
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getProductReviewsResponse(params: ProductsService.GetProductReviewsParams): __Observable<__StrictHttpResponse<ReviewList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.maxCount != null) __params = __params.set('maxCount', params.maxCount.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/products/${params.productCode}/reviews`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReviewList>;
      })
    );
  }
  /**
   * Returns the reviews for a product with a given product code.
   * @param params The `ProductsService.GetProductReviewsParams` containing the following parameters:
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `maxCount`: Maximum count of reviews
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getProductReviews(params: ProductsService.GetProductReviewsParams): __Observable<ReviewList> {
    return this.getProductReviewsResponse(params).pipe(
      __map(_r => _r.body as ReviewList)
    );
  }

  /**
   * Creates a new customer review as an anonymous user.
   * @param params The `ProductsService.CreateReviewPrimParams` containing the following parameters:
   *
   * - `review`: Object contains review details like : rating, alias, headline, comment
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  createReviewPrimResponse(params: ProductsService.CreateReviewPrimParams): __Observable<__StrictHttpResponse<Review>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.review;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/products/${params.productCode}/reviews`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Review>;
      })
    );
  }
  /**
   * Creates a new customer review as an anonymous user.
   * @param params The `ProductsService.CreateReviewPrimParams` containing the following parameters:
   *
   * - `review`: Object contains review details like : rating, alias, headline, comment
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return Created
   */
  createReviewPrim(params: ProductsService.CreateReviewPrimParams): __Observable<Review> {
    return this.createReviewPrimResponse(params).pipe(
      __map(_r => _r.body as Review)
    );
  }

  /**
   * Returns a product's stock levels sorted by distance from the specified location, which is provided using the free-text "location" parameter, or by using the longitude and latitude parameters. The following two sets of parameters are available: location (required), currentPage (optional), pageSize (optional); or longitude (required), latitude (required), currentPage (optional), pageSize(optional).
   * @param params The `ProductsService.SearchProductStockByLocationParams` containing the following parameters:
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `pageSize`: The number of results returned per page.
   *
   * - `longitude`: Longitude location parameter.
   *
   * - `location`: Free-text location
   *
   * - `latitude`: Latitude location parameter.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: The current result page requested.
   *
   * @return OK
   */
  searchProductStockByLocationResponse(params: ProductsService.SearchProductStockByLocationParams): __Observable<__StrictHttpResponse<StoreFinderStockSearchPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.longitude != null) __params = __params.set('longitude', params.longitude.toString());
    if (params.location != null) __params = __params.set('location', params.location.toString());
    if (params.latitude != null) __params = __params.set('latitude', params.latitude.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.currentPage != null) __params = __params.set('currentPage', params.currentPage.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/products/${params.productCode}/stock`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StoreFinderStockSearchPage>;
      })
    );
  }
  /**
   * Returns a product's stock levels sorted by distance from the specified location, which is provided using the free-text "location" parameter, or by using the longitude and latitude parameters. The following two sets of parameters are available: location (required), currentPage (optional), pageSize (optional); or longitude (required), latitude (required), currentPage (optional), pageSize(optional).
   * @param params The `ProductsService.SearchProductStockByLocationParams` containing the following parameters:
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `pageSize`: The number of results returned per page.
   *
   * - `longitude`: Longitude location parameter.
   *
   * - `location`: Free-text location
   *
   * - `latitude`: Latitude location parameter.
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * - `currentPage`: The current result page requested.
   *
   * @return OK
   */
  searchProductStockByLocation(params: ProductsService.SearchProductStockByLocationParams): __Observable<StoreFinderStockSearchPage> {
    return this.searchProductStockByLocationResponse(params).pipe(
      __map(_r => _r.body as StoreFinderStockSearchPage)
    );
  }

  /**
   * In the response header, the "x-total-count" indicates the total number of a product's stock levels. The following two sets of parameters are available: location (required); or longitude (required), and latitude (required).
   * @param params The `ProductsService.CountSearchProductStockByLocationParams` containing the following parameters:
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `longitude`: Longitude location parameter.
   *
   * - `location`: Free-text location
   *
   * - `latitude`: Latitude location parameter.
   */
  countSearchProductStockByLocationResponse(params: ProductsService.CountSearchProductStockByLocationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.longitude != null) __params = __params.set('longitude', params.longitude.toString());
    if (params.location != null) __params = __params.set('location', params.location.toString());
    if (params.latitude != null) __params = __params.set('latitude', params.latitude.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/${params.baseSiteId}/products/${params.productCode}/stock`,
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
   * In the response header, the "x-total-count" indicates the total number of a product's stock levels. The following two sets of parameters are available: location (required); or longitude (required), and latitude (required).
   * @param params The `ProductsService.CountSearchProductStockByLocationParams` containing the following parameters:
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `longitude`: Longitude location parameter.
   *
   * - `location`: Free-text location
   *
   * - `latitude`: Latitude location parameter.
   */
  countSearchProductStockByLocation(params: ProductsService.CountSearchProductStockByLocationParams): __Observable<null> {
    return this.countSearchProductStockByLocationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns a product's stock level for a particular store (in other words, for a particular point of sale).
   * @param params The `ProductsService.GetStockDataParams` containing the following parameters:
   *
   * - `storeName`: Store identifier
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getStockDataResponse(params: ProductsService.GetStockDataParams): __Observable<__StrictHttpResponse<Stock>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/${params.baseSiteId}/products/${params.productCode}/stock/${params.storeName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Stock>;
      })
    );
  }
  /**
   * Returns a product's stock level for a particular store (in other words, for a particular point of sale).
   * @param params The `ProductsService.GetStockDataParams` containing the following parameters:
   *
   * - `storeName`: Store identifier
   *
   * - `productCode`: Product identifier
   *
   * - `baseSiteId`: Base site identifier
   *
   * - `fields`: Response configuration. This is the list of fields that should be returned in the response body.
   *
   * @return OK
   */
  getStockData(params: ProductsService.GetStockDataParams): __Observable<Stock> {
    return this.getStockDataResponse(params).pipe(
      __map(_r => _r.body as Stock)
    );
  }
}

module ProductsService {

  /**
   * Parameters for expressUpdate
   */
  export interface ExpressUpdateParams {

    /**
     * Only items newer than the given parameter are retrieved from the queue. This parameter should be in ISO-8601 format.
     */
    timestamp: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';

    /**
     * Only products from this catalog are returned. Format: catalogId:catalogVersion
     */
    catalog?: string;
  }

  /**
   * Parameters for searchProducts
   */
  export interface SearchProductsParams {

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    sort?: 'BASIC' | 'DEFAULT' | 'FULL';

    /**
     * searchQueryContext
     */
    searchQueryContext?: string;

    /**
     * Serialized query, free text search, facets. The format of a serialized query: freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2
     */
    query?: string;

    /**
     * The number of results returned per page.
     */
    pageSize?: number;

    /**
     * The context to be used in the search query.
     */
    fields?: string;

    /**
     * The current result page requested.
     */
    currentPage?: number;
  }

  /**
   * Parameters for countSearchProducts
   */
  export interface CountSearchProductsParams {

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Serialized query, free text search, facets. The format of a serialized query: freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2
     */
    query?: string;
  }

  /**
   * Parameters for getSuggestions
   */
  export interface GetSuggestionsParams {

    /**
     * Specified term
     */
    term: string;

    /**
     * Specifies the limit of results.
     */
    max: number;

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
   * Parameters for getProductByCode
   */
  export interface GetProductByCodeParams {

    /**
     * Product identifier
     */
    productCode: string;

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
   * Parameters for exportProductReferences
   */
  export interface ExportProductReferencesParams {

    /**
     * Reference type according to enum ProductReferenceTypeEnum
     */
    referenceType: string;

    /**
     * Product identifier
     */
    productCode: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Maximum size of returned results.
     */
    pageSize?: number;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for getProductReviews
   */
  export interface GetProductReviewsParams {

    /**
     * Product identifier
     */
    productCode: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Maximum count of reviews
     */
    maxCount?: number;

    /**
     * Response configuration. This is the list of fields that should be returned in the response body.
     */
    fields?: 'BASIC' | 'DEFAULT' | 'FULL';
  }

  /**
   * Parameters for createReviewPrim
   */
  export interface CreateReviewPrimParams {

    /**
     * Object contains review details like : rating, alias, headline, comment
     */
    review: Review;

    /**
     * Product identifier
     */
    productCode: string;

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
   * Parameters for searchProductStockByLocation
   */
  export interface SearchProductStockByLocationParams {

    /**
     * Product identifier
     */
    productCode: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * The number of results returned per page.
     */
    pageSize?: number;

    /**
     * Longitude location parameter.
     */
    longitude?: number;

    /**
     * Free-text location
     */
    location?: string;

    /**
     * Latitude location parameter.
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
  }

  /**
   * Parameters for countSearchProductStockByLocation
   */
  export interface CountSearchProductStockByLocationParams {

    /**
     * Product identifier
     */
    productCode: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;

    /**
     * Longitude location parameter.
     */
    longitude?: number;

    /**
     * Free-text location
     */
    location?: string;

    /**
     * Latitude location parameter.
     */
    latitude?: number;
  }

  /**
   * Parameters for getStockData
   */
  export interface GetStockDataParams {

    /**
     * Store identifier
     */
    storeName: string;

    /**
     * Product identifier
     */
    productCode: string;

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

export { ProductsService }
