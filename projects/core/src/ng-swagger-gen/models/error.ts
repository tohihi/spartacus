/* tslint:disable */

/**
 * Error message
 */
export interface Error {

  /**
   * Descriptive, human readable error message.
   */
  message?: string;

  /**
   * Additional classification specific for each error type e.g. 'noStock'.
   */
  reason?: string;

  /**
   * Identifier of the related object e.g. '1'.
   */
  subject?: string;

  /**
   * Type of the object related to the error e.g. 'entry'.
   */
  subjectType?: string;

  /**
   * Type of the error e.g. 'LowStockError'.
   */
  type?: string;
}
