import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { ClientCredentialsModule } from './client-credentials/client-credentials.module';
import { ClientCredentialsServices } from './client-credentials/services';
import { AuthConfig } from './config/auth-config';
import { defaultAuthConfig } from './config/default-auth-config';
import { interceptors } from './http-interceptors/index';
import { UserAuthServices } from './services/index';
import { AuthStoreModule } from './store/auth-store.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthStoreModule,
    ClientCredentialsModule,
    ConfigModule.withConfig(defaultAuthConfig),
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        ...interceptors,
        ...UserAuthServices,
        ...ClientCredentialsServices,
        { provide: AuthConfig, useExisting: Config },
      ],
    };
  }
}
