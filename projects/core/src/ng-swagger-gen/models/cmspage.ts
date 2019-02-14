/* tslint:disable */
import { ContentSlotList } from './content-slot-list';
export interface CMSPage {
  contentSlots?: ContentSlotList;
  defaultPage?: boolean;
  name?: string;
  template?: string;
  title?: string;
  typeCode?: string;
  uid?: string;
}
