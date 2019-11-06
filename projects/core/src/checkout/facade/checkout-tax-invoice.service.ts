import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  filter,
  pluck,
  shareReplay,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { CartDataService } from '../../cart/facade/cart-data.service';
import { Address, AddressValidation } from '../../model/address.model';
import { DeliveryMode } from '../../model/order.model';
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
import { StateWithProcess } from '../../process/store/process-state';
import { getProcessStateFactory } from '../../process/store/selectors/process-group.selectors';
import { LoaderState } from '../../state/utils/loader/loader-state';
import { CheckoutActions } from '../store/actions/index';
import {
  SET_DELIVERY_ADDRESS_PROCESS_ID,
  SET_DELIVERY_MODE_PROCESS_ID,
  SET_SUPPORTED_DELIVERY_MODE_PROCESS_ID,
  StateWithCheckout,
  LOAD_SUPPORTED_RECIPIENT_TYPES_PROCESS_ID,
} from '../store/checkout-state';
import { CheckoutSelectors } from '../store/selectors/index';
import { RecipientType, TaxInvoice } from '../../model/tax-invoice.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutDeliveryService {
  constructor(
    protected checkoutStore: Store<StateWithCheckout | StateWithProcess<void>>,
    protected cartData: CartDataService
  ) {}

  /**
   * Load supported recipient type
   */
  loadSupportedRecipientTypes(): void {
    this.checkoutStore.dispatch(
      new CheckoutActions.LoadSupportedRecipientTypes()
    );
  }
  /**
   * Get all supported recipient types
   */
  getSupportedRecipientTypes(): Observable<RecipientType[]> {
    return this.checkoutStore.pipe(select(CheckoutSelectors.getRecipientTypes));
  }

  /**
   * Set tax invoice
   * @param taxInvoice : The tax invoice to be set
   */
  setTaxInvoice(taxInvoice: TaxInvoice): void {
    if (this.actionAllowed()) {
      this.checkoutStore.dispatch(
        new CheckoutActions.SetTaxInvoice({
          userId: this.cartData.userId,
          cartId: this.cartData.cartId,
          taxInvoice: taxInvoice,
        })
      );
    }
  }

  /**
   * Remove tax invoice
   */
  removeaxInvoice(): void {
    if (this.actionAllowed()) {
      this.checkoutStore.dispatch(
        new CheckoutActions.RemoveTaxInvoice({
          userId: this.cartData.userId,
          cartId: this.cartData.cartId,
        })
      );
    }
  }

  //   /**
  //    * Get address verification results
  //    */
  //   getAddressVerificationResults(): Observable<AddressValidation | string> {
  //     return this.checkoutStore.pipe(
  //       select(CheckoutSelectors.getAddressVerificationResults),
  //       filter(results => Object.keys(results).length !== 0)
  //     );
  //   }

  protected actionAllowed(): boolean {
    return (
      this.cartData.userId !== OCC_USER_ID_ANONYMOUS ||
      this.cartData.isGuestCart
    );
  }
}
