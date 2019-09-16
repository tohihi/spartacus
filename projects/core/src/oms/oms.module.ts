import { ModuleWithProviders, NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
import { OmsConfig } from './config/OmsConfig';
import { defaultOmsConfig } from './adapters/default-oms-config';
import { OrderOmsModule } from './adapters/order-oms.module';

@NgModule({
  imports: [OrderOmsModule],
})
export class OmsModule {
  static forRoot(): ModuleWithProviders<OmsModule> {
    return {
      ngModule: OmsModule,
      providers: [
        { provide: OmsConfig, useExisting: Config },
        provideConfig(defaultOmsConfig),
      ],
    };
  }
}
