import { Address } from '../../model/address.model';
import { DeliveryMode } from '../../model/order.model';
import { PaymentDetails } from '../../model/cart.model';
import { TaxInvoice } from '../../model/tax-invoice.model';

export type CheckoutDetails = {
  deliveryAddress?: Address;
  deliveryMode?: DeliveryMode;
  paymentInfo?: PaymentDetails;
  taxInvoice?: TaxInvoice;
};
