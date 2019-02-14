/* tslint:disable */
import { User } from './user';
export interface Review {
  alias?: string;
  comment?: string;
  date?: string;
  headline?: string;
  id?: string;
  principal?: User;
  rating?: number;
}
