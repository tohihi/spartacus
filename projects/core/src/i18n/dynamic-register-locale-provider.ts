import { LanguageService } from '../site-context';
import { registerLocaleData } from '@angular/common';
import {
  InjectionToken,
  Provider,
  APP_INITIALIZER,
  Optional
} from '@angular/core';

export type LocaleDataLoader = (locale: string) => Promise<{ default: any }>;

export const LOCALE_DATA_LOADER = new InjectionToken<LocaleDataLoader>(
  'LOCALE_DATA_LOADER'
);

export function dynamicRegisterLocaleData(
  languageService: LanguageService,
  localeDataLoader: LocaleDataLoader
) {
  if (!localeDataLoader) {
    const result = () => Promise.resolve();
    return result;
  }
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      languageService.getActive().subscribe(locale => {
        localeDataLoader(locale).then(localeModule => {
          registerLocaleData(localeModule.default);
          resolve();
        }, reject);
      });
    });
  };
}

export const dynamicRegisterLocaleProvider: Provider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: dynamicRegisterLocaleData,
  deps: [LanguageService, [new Optional(), LOCALE_DATA_LOADER]]
};
