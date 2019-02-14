/* tslint:disable */
import { SearchState } from './search-state';
export interface Breadcrumb {
  facetCode?: string;
  facetName?: string;
  facetValueCode?: string;
  facetValueName?: string;
  removeQuery?: SearchState;
  truncateQuery?: SearchState;
}
