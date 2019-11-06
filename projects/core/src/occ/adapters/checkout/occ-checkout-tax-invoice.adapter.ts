import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { pluck, catchError } from 'rxjs/operators';
import { DELIVERY_MODE_NORMALIZER } from '../../../checkout/connectors/delivery/converters';
import { Address } from '../../../model/address.model';
import { DeliveryMode } from '../../../model/order.model';
import {
  ADDRESS_NORMALIZER,
  ADDRESS_SERIALIZER,
} from '../../../user/connectors/address/converters';
import { ConverterService } from '../../../util/converter.service';
import { Occ } from '../../occ-models/occ.models';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { CheckoutTaxInvoiceAdapter } from '../../../checkout/connectors/tax-invoice/checkout-tax-invoice.adapter';
import { RecipientType, TaxInvoice } from '../../../model/tax-invoice.model';
import {
  TAX_INVOICE_SERIALIZER,
  RECIPIENT_TYPE_NORMALIZER,
} from '../../../checkout/connectors/tax-invoice/converters';

@Injectable()
export class OccCheckoutTaxInvoiceAdapter implements CheckoutTaxInvoiceAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  public loadSupportedRecipientTypes(): Observable<RecipientType[]> {
    const headers = this.getHeaders();

    return this.http
      .get<Occ.RecipientType>(this.occEndpoints.getUrl('getRecipientTypes'), {
        headers,
      })
      .pipe(this.converter.pipeable(RECIPIENT_TYPE_NORMALIZER));
  }

  public setTaxInvoice(
    userId: string,
    cartId: string,
    taxInvoice: TaxInvoice
  ): Observable<{}> {
    const serializedTaxInvoice = this.converter.convert(
      taxInvoice,
      TAX_INVOICE_SERIALIZER
    );
    const params = new HttpParams().set('taxInvoice', serializedTaxInvoice);
    const headers = this.getHeaders();

    return this.http.patch(
      this.occEndpoints.getUrl('taxInvoice', { userId, cartId }),
      {
        headers,
        params,
      }
    );
  }

  public removeTaxInvoice(userId: string, cartId: string): Observable<{}> {
    const headers = this.getHeaders();

    return this.http.delete(
      this.occEndpoints.getUrl('taxInvoice', { userId, cartId }),
      { headers }
    );
  }

  protected getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
}
