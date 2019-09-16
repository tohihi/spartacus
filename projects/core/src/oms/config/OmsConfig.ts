import { SiteContextConfig } from '@spartacus/core';
import { OmsEndpoints } from '../models/oms-endpoints.model';

export abstract class OmsConfig extends SiteContextConfig {
  backend?: {
    oms?: {
      prefix?: string;
      endpoints?: OmsEndpoints;
    };
  };
}
