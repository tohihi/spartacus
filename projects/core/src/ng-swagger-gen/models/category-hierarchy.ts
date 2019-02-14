/* tslint:disable */
export interface CategoryHierarchy {
  id?: string;
  lastModified?: string;
  name?: string;
  subcategories?: Array<CategoryHierarchy>;
  url?: string;
}
