import { StateLoaderActions } from '../../../../state/utils/index';
import { CLIENT_TOKEN_DATA } from '../../../store/auth-state';
import { ClientToken } from '../../models/client-token.model';
import * as ClientCredentialsActions from '../actions/client-token.action';

const clientToken: ClientToken = {
  access_token: 'xxx',
  token_type: 'xxx',
  expires_in: 1,
  scope: 'xxx',
};

describe('Client Token Actions', () => {
  describe('LoadClientToken', () => {
    it('should create the action', () => {
      const action = new ClientCredentialsActions.LoadClientToken();
      expect({ ...action }).toEqual({
        type: ClientCredentialsActions.LOAD_CLIENT_TOKEN,
        meta: StateLoaderActions.loadMeta(CLIENT_TOKEN_DATA),
      });
    });
  });

  describe('LoadClientTokenFail', () => {
    it('should create the action', () => {
      const error = 'anError';
      const action = new ClientCredentialsActions.LoadClientTokenFail(error);
      expect({ ...action }).toEqual({
        type: ClientCredentialsActions.LOAD_CLIENT_TOKEN_FAIL,
        payload: error,
        meta: StateLoaderActions.failMeta(CLIENT_TOKEN_DATA, error),
      });
    });
  });

  describe('LoadClientTokenSuccess', () => {
    it('should create the action', () => {
      const action = new ClientCredentialsActions.LoadClientTokenSuccess(
        clientToken
      );

      expect({ ...action }).toEqual({
        type: ClientCredentialsActions.LOAD_CLIENT_TOKEN_SUCCESS,
        payload: clientToken,
        meta: StateLoaderActions.successMeta(CLIENT_TOKEN_DATA),
      });
    });
  });
});
