/* tslint:disable */
import { Image } from './image';
import { PromotionRestriction } from './promotion-restriction';
export interface Promotion {
  priority?: number;
  code?: string;
  description?: string;
  enabled?: boolean;
  endDate?: string;
  firedMessages?: Array<string>;
  couldFireMessages?: Array<string>;
  productBanner?: Image;
  promotionGroup?: string;
  promotionType?: string;
  restrictions?: Array<PromotionRestriction>;
  startDate?: string;
  title?: string;
}
