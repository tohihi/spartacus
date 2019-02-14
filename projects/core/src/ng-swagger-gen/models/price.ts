/* tslint:disable */
export interface Price {
  currencyIso?: string;
  formattedValue?: string;
  maxQuantity?: number;
  minQuantity?: number;
  priceType?: 'BUY' | 'FROM';
  value?: number;
}
