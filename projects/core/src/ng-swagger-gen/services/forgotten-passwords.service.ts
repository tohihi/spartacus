/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { OccApiConfiguration as __Configuration } from '../occ-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Forgotten Passwords Controller
 */
@Injectable({
  providedIn: 'root',
})
class ForgottenPasswordsService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Generates a token to restore a customer's forgotten password.
   * @param params The `ForgottenPasswordsService.RestorePasswordParams` containing the following parameters:
   *
   * - `userId`: Customer's user id. Customer user id is case insensitive.
   *
   * - `baseSiteId`: Base site identifier
   */
  restorePasswordResponse(params: ForgottenPasswordsService.RestorePasswordParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userId != null) __params = __params.set('userId', params.userId.toString());

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/${params.baseSiteId}/forgottenpasswordtokens`,
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
   * Generates a token to restore a customer's forgotten password.
   * @param params The `ForgottenPasswordsService.RestorePasswordParams` containing the following parameters:
   *
   * - `userId`: Customer's user id. Customer user id is case insensitive.
   *
   * - `baseSiteId`: Base site identifier
   */
  restorePassword(params: ForgottenPasswordsService.RestorePasswordParams): __Observable<null> {
    return this.restorePasswordResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ForgottenPasswordsService {

  /**
   * Parameters for restorePassword
   */
  export interface RestorePasswordParams {

    /**
     * Customer's user id. Customer user id is case insensitive.
     */
    userId: string;

    /**
     * Base site identifier
     */
    baseSiteId: string;
  }
}

export { ForgottenPasswordsService }
