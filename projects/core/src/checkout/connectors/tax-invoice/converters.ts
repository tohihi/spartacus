import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { TaxInvoice, RecipientType } from '../../../model/tax-invoice.model';

export const RECIPIENT_TYPE_NORMALIZER = new InjectionToken<
  Converter<any, RecipientType[]>
>('RecipientTypeNormalizer');

export const TAX_INVOICE_SERIALIZER = new InjectionToken<
  Converter<TaxInvoice, any>
>('TaxInvoiceSerializer');

export const TAX_INVOICE_NORMALIZER = new InjectionToken<
  Converter<any, TaxInvoice>
>('TaxInvoiceNormalizer');
