import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  RecipientTypesState,
  CheckoutState,
  StateWithCheckout,
} from '../checkout-state';
import * as fromRecipientTypesReducer from './../reducers/recipient-type.reducer';
import { getCheckoutState } from './checkout.selectors';
import { RecipientType } from '../../../model/tax-invoice.model';

export const getRecipientTypesState: MemoizedSelector<
  StateWithCheckout,
  RecipientTypesState
> = createSelector(
  getCheckoutState,
  (state: CheckoutState) => state.recipientTypes
);

export const getRecipientTypes: MemoizedSelector<
  StateWithCheckout,
  RecipientType[]
> = createSelector(
  getRecipientTypesState,
  fromRecipientTypesReducer.getRecipientTypes
);
