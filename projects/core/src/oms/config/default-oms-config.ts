import { OmsConfig } from './oms-config';

export const defaultOmsConfig: OmsConfig = {
  backend: {
    oms: {
      prefix: 'ordermanagementwebservices',
      endpoints: {
        cancelOrder: 'orders/${orderId}/cancel',
      },
    },
  },
};
