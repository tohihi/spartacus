/* tslint:disable */
import { FacetValue } from './facet-value';
export interface Facet {
  category?: boolean;
  multiSelect?: boolean;
  name?: string;
  priority?: number;
  topValues?: Array<FacetValue>;
  values?: Array<FacetValue>;
  visible?: boolean;
}
