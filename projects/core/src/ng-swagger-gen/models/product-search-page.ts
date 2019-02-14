/* tslint:disable */
import { Breadcrumb } from './breadcrumb';
import { SearchState } from './search-state';
import { Facet } from './facet';
import { Pagination } from './pagination';
import { Product } from './product';
import { Sort } from './sort';
import { SpellingSuggestion } from './spelling-suggestion';
export interface ProductSearchPage {
  breadcrumbs?: Array<Breadcrumb>;
  categoryCode?: string;
  currentQuery?: SearchState;
  facets?: Array<Facet>;
  freeTextSearch?: string;
  keywordRedirectUrl?: string;
  pagination?: Pagination;
  products?: Array<Product>;
  sorts?: Array<Sort>;
  spellingSuggestion?: SpellingSuggestion;
}
