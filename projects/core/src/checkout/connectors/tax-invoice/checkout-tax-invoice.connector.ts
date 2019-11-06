import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckoutTaxInvoiceAdapter } from './checkout-tax-invoice.adapter';
import { RecipientType, TaxInvoice } from '../../../model/tax-invoice.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutTaxInvoiceConnector {
  constructor(protected adapter: CheckoutTaxInvoiceAdapter) {}

  public loadSupportedRecipientTypes(): Observable<RecipientType[]> {
    return this.adapter.loadSupportedRecipientTypes();
  }

  public setTaxInvoice(
    userId: string,
    cartId: string,
    taxInvoice: TaxInvoice
  ): Observable<{}> {
    return this.adapter.setTaxInvoice(userId, cartId, taxInvoice);
  }

  public removeTaxInvoice(userId: string, cartId: string): Observable<{}> {
    return this.adapter.removeTaxInvoice(userId, cartId);
  }
}
