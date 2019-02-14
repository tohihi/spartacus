/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for OccApi services
 */
@Injectable({
  providedIn: 'root',
})
export class OccApiConfiguration {
  rootUrl: string = '//backoffice.christian-spartacus1-s2-public.model-t.myhybris.cloud/rest/v2';
}
