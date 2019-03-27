import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
  StorefrontComponent,
  StorefrontModule,
  translations,
  defaultCmsContentConfig
} from '@spartacus/storefront';

import { environment } from '../environments/environment';
import { ConfigModule } from '@spartacus/core';
import { LOCALE_DATA_LOADER } from 'projects/core/src/i18n/dynamic-register-locale-provider';

const devImports = [];

if (!environment.production) {
  devImports.push(StoreDevtoolsModule.instrument());
}

export function localeDataLoader(lang: string): Promise<void> {
  return import(/* webpackInclude: /(de|zh|en|ja)\.js$/ */
  `@angular/common/locales/${lang}.js`);
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'spartacus-app' }),
    BrowserTransferStateModule,
    StorefrontModule.withConfig({
      production: environment.production,
      server: {
        baseUrl: environment.occBaseUrl
      },
      pwa: {
        enabled: true,
        addToHomeScreen: true
      },
      siteContext: {
        urlEncodingParameters: ['BASE_SITE', 'LANGUAGE', 'CURRENCY'],
        parameters: {
          BASE_SITE: {
            values: ['electronics-spa', 'apparel-de', 'apparel-uk'],
            defaultValue: 'electronics-spa',
            persistence: 'route'
          }
        }
      },
      routesConfig: {
        translations: {
          default: {
            product: {
              paths: ['product/:productCode', 'product/:name/:productCode']
            }
          }
        }
      },
      i18n: {
        resources: translations
      }
    }),

    ConfigModule.withConfigFactory(defaultCmsContentConfig),
    ...devImports
  ],
  providers: [{ provide: LOCALE_DATA_LOADER, useValue: localeDataLoader }],
  bootstrap: [StorefrontComponent]
})
export class AppModule {}
