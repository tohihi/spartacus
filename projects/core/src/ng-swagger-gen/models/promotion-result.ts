/* tslint:disable */
import { PromotionOrderEntryConsumed } from './promotion-order-entry-consumed';
import { Promotion } from './promotion';
export interface PromotionResult {
  consumedEntries?: Array<PromotionOrderEntryConsumed>;
  description?: string;
  promotion?: Promotion;
}
