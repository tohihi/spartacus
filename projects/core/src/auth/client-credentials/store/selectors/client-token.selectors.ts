import { createSelector, MemoizedSelector } from '@ngrx/store';
import { LoaderState } from '../../../../state/utils/loader/loader-state';
import { AuthState, StateWithAuth } from '../../../store/auth-state';
import { getAuthState } from '../../../store/selectors/feature.selector';
import { ClientToken } from '../../models/client-token.model';

export const getClientTokenState: MemoizedSelector<
  StateWithAuth,
  LoaderState<ClientToken>
> = createSelector(
  getAuthState,
  (state: AuthState) => state.clientToken
);
