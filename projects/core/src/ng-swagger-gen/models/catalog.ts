/* tslint:disable */
import { CatalogVersion } from './catalog-version';
export interface Catalog {
  catalogVersions?: Array<CatalogVersion>;
  id?: string;
  lastModified?: string;
  name?: string;
  url?: string;
}
