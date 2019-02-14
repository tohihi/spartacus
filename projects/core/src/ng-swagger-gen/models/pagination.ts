/* tslint:disable */

/**
 * Pagination info
 */
export interface Pagination {

  /**
   * Number of elements on this page
   */
  count?: number;

  /**
   * Current page number
   */
  page?: number;

  /**
   * Total number of elements
   */
  totalCount?: number;

  /**
   * Total number of pages
   */
  totalPages?: number;
}
