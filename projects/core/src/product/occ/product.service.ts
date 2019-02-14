import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { OccConfig } from '../../occ/config/occ-config';
import { Product, ReviewList, Review } from '../../occ/occ-models/occ.models';
import { ProductsService } from '../../ng-swagger-gen/services';

const ENDPOINT_PRODUCT = 'products';

@Injectable()
export class OccProductService {
  constructor(
    private http: HttpClient,
    private config: OccConfig,
    private occApiProductsService: ProductsService
  ) {}

  protected getProductEndpoint(): string {
    return (
      (this.config.server.baseUrl || '') +
      this.config.server.occPrefix +
      this.config.site.baseSite +
      '/' +
      ENDPOINT_PRODUCT
    );
  }

  loadProduct(productCode: string): Observable<Product> {
    const params = new HttpParams({
      fromString:
        'fields=DEFAULT,averageRating,images(FULL),classifications,numberOfReviews'
    });

    return this.http
      .get(this.getProductEndpoint() + `/${productCode}`, { params: params })
      .pipe(catchError((error: any) => throwError(error.json())));

    // spike new:
    // const params = ({
    //   productCode,
    //   fields:
    //     'DEFAULT,averageRating,images(FULL),classifications,numberOfReviews',
    //   baseSiteId: this.config.site.baseSite
    // } as any) as ProductsService.GetProductByCodeParams;
    // return (this.occApiProductsService.getProductByCode(
    //   params
    // ) as unknown) as Observable<Product>;
  }

  loadProductReviews(
    productCode: string,
    maxCount?: number
  ): Observable<ReviewList> {
    let url = this.getProductEndpoint() + `/${productCode}/reviews`;
    if (maxCount && maxCount > 0) {
      url += `?maxCount=${maxCount}`;
    }

    return this.http
      .get(url)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  public postProductReview(
    productCode: string,
    review: any
  ): Observable<Review> {
    // spike old:

    // const url = this.getProductEndpoint() + `/${productCode}/reviews`;

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });

    // const body = new URLSearchParams();
    // body.append('headline', review.headline);
    // body.append('comment', review.comment);
    // body.append('rating', review.rating.toString());
    // body.append('alias', review.alias);

    // return this.http
    //   .post(url, body.toString(), { headers })
    //   .pipe(catchError((error: any) => throwError(error.json())));

    //spike new:

    const params: ProductsService.CreateReviewPrimParams = {
      baseSiteId: this.config.site.baseSite,
      review, // spike maybe we should make rating to string
      productCode
    };
    return (this.occApiProductsService
      .createReviewPrim(params)
      .pipe(
        catchError((error: any) => throwError(error.json()))
      ) as unknown) as Observable<Review>;
  }
}
