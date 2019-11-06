import { Observable } from 'rxjs';
import { TaxInvoice, RecipientType } from '../../../model/tax-invoice.model';

export abstract class CheckoutTaxInvoiceAdapter {
  /**
   * Abstract method used to load supported recipient types.
   *
   */
  abstract loadSupportedRecipientTypes(): Observable<RecipientType[]>;

  /**
   * Abstract method used to set tax invoice
   *
   * @param userId
   * @param cartId
   * @param taxInvoice
   */
  abstract setTaxInvoice(
    userId: string,
    cartId: string,
    taxInvoice: TaxInvoice
  ): Observable<{}>;

  /**
   * Abstract method used to remove tax invoice
   *
   * @param userId
   * @param cartId
   */
  abstract removeTaxInvoice(userId: string, cartId: string): Observable<{}>;
}
