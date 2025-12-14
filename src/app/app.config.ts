import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection,  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideTransloco } from '@ngneat/transloco';
import { TranslocoHttpLoader } from './transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideTransloco({
      config:{
         availableLangs: ['es', 'en', 'fr', 'de', 'it'],
         defaultLang: 'es',
         fallbackLang: 'es',
         reRenderOnLangChange: true,
          missingHandler: {
          // Log cuando falta una traducción
          useFallbackTranslation: true,
          logMissingKey: true
        }
      },
      loader :TranslocoHttpLoader
    })
  ]
};
