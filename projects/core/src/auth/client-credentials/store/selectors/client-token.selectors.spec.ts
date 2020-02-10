import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { select, Store, StoreModule } from '@ngrx/store';
import { LoaderState } from '../../../../state';
import { AUTH_FEATURE, StateWithAuth } from '../../../store/auth-state';
import * as fromReducers from '../../../store/reducers/index';
import { AuthSelectors } from '../../../store/selectors/index';
import { ClientToken } from '../../models/client-token.model';
import * as ClientCredentialsActions from '../actions/client-token.action';

const mockClientToken = {
  access_token: 'xxx',
} as ClientToken;

describe('ClientToken Selectors', () => {
  let store: Store<StateWithAuth>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(AUTH_FEATURE, fromReducers.getReducers()),
      ],
    });

    store = TestBed.get(Store as Type<Store<StateWithAuth>>);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getClientTokenState', () => {
    it('should return the client token state', () => {
      store.dispatch(
        new ClientCredentialsActions.LoadClientTokenSuccess(mockClientToken)
      );

      let result: LoaderState<ClientToken>;
      store
        .pipe(select(AuthSelectors.getClientTokenState))
        .subscribe(value => (result = value))
        .unsubscribe();

      expect(result).toEqual({
        error: false,
        loading: false,
        success: true,
        value: mockClientToken,
      } as LoaderState<ClientToken>);
    });
  });
});
