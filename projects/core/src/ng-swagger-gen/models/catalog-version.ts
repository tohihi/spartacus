/* tslint:disable */
import { CategoryHierarchy } from './category-hierarchy';
export interface CatalogVersion {
  categories?: Array<CategoryHierarchy>;
  id?: string;
  lastModified?: string;
  name?: string;
  url?: string;
}
