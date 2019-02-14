/* tslint:disable */
import { Time } from './time';
export interface SpecialOpeningDay {
  closed?: boolean;
  closingTime?: Time;
  comment?: string;
  date?: string;
  formattedDate?: string;
  name?: string;
  openingTime?: Time;
}
