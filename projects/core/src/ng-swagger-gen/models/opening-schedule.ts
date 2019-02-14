/* tslint:disable */
import { SpecialOpeningDay } from './special-opening-day';
import { WeekdayOpeningDay } from './weekday-opening-day';
export interface OpeningSchedule {
  code?: string;
  name?: string;
  specialDayOpeningList?: Array<SpecialOpeningDay>;
  weekDayOpeningList?: Array<WeekdayOpeningDay>;
}
