import { CheckoutActions } from '../actions/index';
import { RecipientTypesState } from '../checkout-state';
import { RecipientType } from '../../../model/tax-invoice.model';

export const initialState: RecipientTypesState = {
  recipientTypes: [],
};

export function reducer(
  state = initialState,
  action: CheckoutActions.RecipientTypeAction
): RecipientTypesState {
  switch (action.type) {
    case CheckoutActions.LOAD_SUPPORTED_RECIPIENT_TYPES_SUCCESS: {
      const recipientTypes: RecipientType[] = action.payload;
      return {
        ...state,
        recipientTypes,
      };
    }
  }
  return state;
}

export const getRecipientTypes = (state: RecipientTypesState) =>
  state.recipientTypes;
