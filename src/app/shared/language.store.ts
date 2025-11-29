import { computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState
} from '@ngrx/signals';
import { TranslocoService } from '@ngneat/transloco';
import { AVAILABLE_LANGUAGES, LANGUAGE_STORAGE_KEY, LanguageState } from '../models/language.interface';

export const LanguageStore = signalStore(
   { providedIn: 'root' },

    withState<LanguageState>({
    currentLang: 'es',
    availableLanguages: AVAILABLE_LANGUAGES
  }),


   withComputed((store) => ({
    // Información completa del idioma actual
    currentLanguageInfo: computed(() =>
      store.availableLanguages().find(lang => lang.code === store.currentLang())
    ),

    // Verificadores de idioma
    isSpanish: computed(() => store.currentLang() === 'es'),
    isEnglish: computed(() => store.currentLang() === 'en'),

    // Idioma alternativo (para toggle)
    alternateLang: computed(() =>
      store.currentLang() === 'es' ? 'en' : 'es'
    )
  })),


   withMethods((store) => {
    const translocoService = inject(TranslocoService);
    const platformId = inject(PLATFORM_ID);
    const isBrowser = isPlatformBrowser(platformId);

    return {
      /**
       * Cambiar el idioma activo
       */
      setLanguage(langCode: 'es' | 'en'): void {
        if (this._isValidLanguage(langCode)) {
          // Actualizar estado del store
          patchState(store, { currentLang: langCode });

          // Actualizar Transloco
          translocoService.setActiveLang(langCode);

          // Guardar en localStorage
          if (isBrowser) {
            localStorage.setItem(LANGUAGE_STORAGE_KEY, langCode);
          }
        }
      },

      /**
       * Alternar entre idiomas disponibles
       */
      toggleLanguage(): void {
        const newLang = store.alternateLang();
        this.setLanguage(newLang);
      },

      /**
       * Verificar si un código de idioma es válido
       */
      _isValidLanguage(langCode: string): boolean {
        return store.availableLanguages().some(lang => lang.code === langCode);
      },

      /**
       * Inicializar el idioma desde localStorage o navegador
       */
      _initializeLanguage(): void {
        if (!isBrowser) return;

        // Intentar obtener desde localStorage
        const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as 'es' | 'en' | null;

        if (savedLang && this._isValidLanguage(savedLang)) {
          this.setLanguage(savedLang);
        } else {
          // Usar idioma del navegador
          const browserLang = navigator.language.split('-')[0];
          const lang = browserLang === 'es' ? 'es' : 'en';
          this.setLanguage(lang);
        }
      }
    };
  }),

  // Lifecycle hooks
  withHooks({
    onInit(store) {
      // Inicializar idioma al crear el store
      store._initializeLanguage();
    }
  })
)
