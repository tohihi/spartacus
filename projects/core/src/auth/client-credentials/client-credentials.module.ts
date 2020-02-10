import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Config, ConfigModule } from '../../config/config.module';
import { AuthConfig } from '../config/auth-config';
import { defaultAuthConfig } from '../config/default-auth-config';
import { AuthStoreModule } from '../store/auth-store.module';
import { interceptors } from './http-interceptors/index';
import { ClientCredentialsServices } from './services/index';
import { ClientTokenEffect } from './store/effects/client-token.effect';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthStoreModule,
    EffectsModule.forFeature([ClientTokenEffect]),
    ConfigModule.withConfig(defaultAuthConfig),
  ],
})
export class ClientCredentialsModule {
  static forRoot(): ModuleWithProviders<ClientCredentialsModule> {
    return {
      ngModule: ClientCredentialsModule,
      providers: [
        ...interceptors,
        ...ClientCredentialsServices,
        { provide: AuthConfig, useExisting: Config },
      ],
    };
  }
}
