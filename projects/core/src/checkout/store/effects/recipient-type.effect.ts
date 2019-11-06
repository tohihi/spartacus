import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CheckoutActions } from '../actions/index';
import { CheckoutTaxInvoiceConnector } from '../../connectors/tax-invoice/checkout-tax-invoice.connector';

@Injectable()
export class RecipientTypesEffects {
  @Effect()
  loadSupportedRecipientTypes$: Observable<
    | CheckoutActions.LoadSupportedRecipientTypesFail
    | CheckoutActions.LoadSupportedRecipientTypesSuccess
  > = this.actions$.pipe(
    ofType(CheckoutActions.LOAD_SUPPORTED_RECIPIENT_TYPES),
    mergeMap(() => {
      return this.checkoutTaxInvoiceConnector
        .loadSupportedRecipientTypes()
        .pipe(
          map(recipientTypes => {
            return new CheckoutActions.LoadSupportedRecipientTypesSuccess(
              recipientTypes
            );
          }),
          catchError(error =>
            of(
              new CheckoutActions.LoadSupportedRecipientTypesFail(
                makeErrorSerializable(error)
              )
            )
          )
        );
    })
  );

  constructor(
    private actions$: Actions,
    private checkoutTaxInvoiceConnector: CheckoutTaxInvoiceConnector
  ) {}
}
