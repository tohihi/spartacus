import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { ShippingAddressSetGuard } from '../../guards/shipping-address-set.guard';
import { CartNotEmptyGuard } from '../../../cart/cart-not-empty.guard';
import { TaxInvoiceComponent } from './tax-invoice.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    I18nModule,
    SpinnerModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CheckoutTaxInvoice: {
          component: TaxInvoiceComponent,
          guards: [
            CheckoutAuthGuard,
            CartNotEmptyGuard,
            ShippingAddressSetGuard,
          ],
        },
      },
    }),
  ],
  declarations: [TaxInvoiceComponent],
  entryComponents: [TaxInvoiceComponent],
  exports: [TaxInvoiceComponent],
})
export class TaxInvoiceModule {}
