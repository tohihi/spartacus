import { defaultOmsConfig } from './default-oms-config';
import { ConfigModule } from '../../config/config.module';
import { OmsOrderCancellationAdapter } from './oms-order-cancellation.adapter';
import { OrderCancellationAdapter } from '../../user/connectors/oms/order-cancellation.adapter';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ConfigModule.withConfig(defaultOmsConfig)],
  providers: [
    {
      provide: OrderCancellationAdapter,
      useClass: OmsOrderCancellationAdapter,
    },
  ],
})
export class OrderOmsModule {}
