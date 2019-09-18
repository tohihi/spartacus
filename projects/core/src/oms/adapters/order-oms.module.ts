import { defaultOmsConfig } from '../config/default-oms-config';
import { ConfigModule } from '../../config/config.module';
import { OmsOrderManagementAdapter } from './oms-order-management.adapter';
import { OrderManagementAdapter } from '../../user/connectors/oms/order-management.adapter';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ConfigModule.withConfig(defaultOmsConfig),
  ],
  providers: [
    {
      provide: OrderManagementAdapter,
      useClass: OmsOrderManagementAdapter,
    },
  ],
})
export class OrderOmsModule {}
