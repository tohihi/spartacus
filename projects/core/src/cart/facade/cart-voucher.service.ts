import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import * as fromProcessStore from '../../process/store/process-state';
import {
  getProcessErrorFactory,
  getProcessLoadingFactory,
  getProcessSuccessFactory,
} from '../../process/store/selectors/process.selectors';
import { CartActions } from '../store/actions/index';
import { ADD_VOUCHER_PROCESS_ID, StateWithCart } from '../store/cart-state';
import { CartSelectors } from '../store/selectors/index';

@Injectable()
export class CartVoucherService {
  constructor(
    protected store: Store<
      StateWithCart | fromProcessStore.StateWithProcess<void>
    >,
    protected authService: AuthService
  ) {}

  addVoucher(cartId: string, voucherId: string): void {
    this.authService
      .getOccUserId()
      .pipe(take(1))
      .subscribe(occUserId =>
        this.store.dispatch(
          new CartActions.CartAddVoucher({
            userId: occUserId,
            cartId: cartId,
            voucherId: voucherId,
          })
        )
      )
      .unsubscribe();
  }

  removeVoucher(voucherId: string): void {
    combineLatest([
      this.authService.getOccUserId(),
      this.store.pipe(
        select(CartSelectors.getCartContent),
        map(cart => cart.code)
      ),
    ])
      .pipe(take(1))
      .subscribe(([occUserId, cartId]) =>
        this.store.dispatch(
          new CartActions.CartRemoveVoucher({
            userId: occUserId,
            cartId: cartId,
            voucherId: voucherId,
          })
        )
      )
      .unsubscribe();
  }

  getAddVoucherResultError(): Observable<boolean> {
    return this.store.pipe(
      select(getProcessErrorFactory(ADD_VOUCHER_PROCESS_ID))
    );
  }

  getAddVoucherResultSuccess(): Observable<boolean> {
    return this.store.pipe(
      select(getProcessSuccessFactory(ADD_VOUCHER_PROCESS_ID))
    );
  }

  getAddVoucherResultLoading(): Observable<boolean> {
    return this.store.pipe(
      select(getProcessLoadingFactory(ADD_VOUCHER_PROCESS_ID))
    );
  }

  resetAddVoucherProcessingState(): void {
    this.store.dispatch(new CartActions.CartResetAddVoucher());
  }
}
