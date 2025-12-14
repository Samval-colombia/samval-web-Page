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
import { AVAILABLE_LANGUAGES, LANGUAGE_STORAGE_KEY, LanguageState, Language } from '../models/language.interface';
type LanguageCode = Language['code'];

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
    alternateLang: computed(() => {
      const all = store.availableLanguages().map(l => l.code);
      const currentIndex = all.indexOf(store.currentLang());
      const nextIndex = (currentIndex + 1) % all.length;
      return all[nextIndex];
    })
  })),


   withMethods((store) => {
    const translocoService = inject(TranslocoService);
    const platformId = inject(PLATFORM_ID);
    const isBrowser = isPlatformBrowser(platformId);

    return {
      /**
       * Cambiar el idioma activo
       */
      setLanguage(langCode: LanguageCode): void {
        if (this._isValidLanguage(langCode)) {
          // Actualizar estado del store
          patchState(store, { currentLang: langCode as LanguageState['currentLang'] });

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
      _isValidLanguage(langCode: string): langCode is LanguageCode {
        return store.availableLanguages().some(lang => lang.code === langCode);
      },

      /**
       * Inicializar el idioma desde localStorage o navegador
       */
      _initializeLanguage(): void {
        if (!isBrowser) return;

        // Intentar obtener desde localStorage
        const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode | null;

        if (savedLang && this._isValidLanguage(savedLang)) {
          this.setLanguage(savedLang);
        } else {
          // Usar idioma del navegador
          const browserLang = navigator.language.split('-')[0] as string;
          const match = store.availableLanguages().find(lang => lang.code === browserLang);
          this.setLanguage((match ? match.code : 'es') as LanguageCode);
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
