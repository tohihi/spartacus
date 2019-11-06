import { StateEntityLoaderActions } from '../../../state/utils/index';
import { PROCESS_FEATURE } from '../../../process/store/process-state';
import { LOAD_SUPPORTED_RECIPIENT_TYPES_PROCESS_ID } from '../checkout-state';

export const LOAD_SUPPORTED_RECIPIENT_TYPES =
  '[Checkout] Load Supported Recipient Types';
export const LOAD_SUPPORTED_RECIPIENT_TYPES_FAIL =
  '[Checkout] Load Supported Recipient Types Fail';
export const LOAD_SUPPORTED_RECIPIENT_TYPES_SUCCESS =
  '[Checkout] Load Supported Recipient Types Success';

export class LoadSupportedRecipientTypes extends StateEntityLoaderActions.EntityLoadAction {
  readonly type = LOAD_SUPPORTED_RECIPIENT_TYPES;
  constructor() {
    super(PROCESS_FEATURE, LOAD_SUPPORTED_RECIPIENT_TYPES_PROCESS_ID);
  }
}

export class LoadSupportedRecipientTypesFail extends StateEntityLoaderActions.EntityFailAction {
  readonly type = LOAD_SUPPORTED_RECIPIENT_TYPES_FAIL;
  constructor(public payload: any) {
    super(PROCESS_FEATURE, LOAD_SUPPORTED_RECIPIENT_TYPES_PROCESS_ID, payload);
  }
}

export class LoadSupportedRecipientTypesSuccess extends StateEntityLoaderActions.EntitySuccessAction {
  readonly type = LOAD_SUPPORTED_RECIPIENT_TYPES_SUCCESS;
  constructor(public payload: any) {
    super(PROCESS_FEATURE, LOAD_SUPPORTED_RECIPIENT_TYPES_PROCESS_ID, payload);
  }
}

export type RecipientTypeAction =
  | LoadSupportedRecipientTypes
  | LoadSupportedRecipientTypesFail
  | LoadSupportedRecipientTypesSuccess;
