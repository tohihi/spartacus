/* tslint:disable */
import { ComponentList } from './component-list';
export interface ContentSlot {
  components?: ComponentList;
  name?: string;
  position?: string;
  slotId?: string;
  slotShared?: boolean;
  slotStatus?: string;
}
