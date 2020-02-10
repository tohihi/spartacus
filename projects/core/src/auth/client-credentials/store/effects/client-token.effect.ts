import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../../util/serialization-utils';
import { ClientToken } from '../../models/client-token.model';
import { ClientAuthenticationTokenService } from '../../services/client-authentication/client-authentication-token.service';
import * as ClientCredentialsActions from '../actions/client-token.action';

@Injectable()
export class ClientTokenEffect {
  @Effect()
  loadClientToken$: Observable<
    ClientCredentialsActions.ClientTokenAction
  > = this.actions$.pipe(
    ofType(ClientCredentialsActions.LOAD_CLIENT_TOKEN),
    exhaustMap(() => {
      return this.clientAuthenticationTokenService
        .loadClientAuthenticationToken()
        .pipe(
          map((token: ClientToken) => {
            return new ClientCredentialsActions.LoadClientTokenSuccess(token);
          }),
          catchError(error =>
            of(
              new ClientCredentialsActions.LoadClientTokenFail(
                makeErrorSerializable(error)
              )
            )
          )
        );
    })
  );

  constructor(
    private actions$: Actions,
    private clientAuthenticationTokenService: ClientAuthenticationTokenService
  ) {}
}
