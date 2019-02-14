/* tslint:disable */
import { SearchState } from './search-state';
export interface FacetValue {
  count?: number;
  name?: string;
  query?: SearchState;
  selected?: boolean;
}
