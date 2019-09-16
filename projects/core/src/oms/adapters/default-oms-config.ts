import { OmsConfig } from '../config/OmsConfig';

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
