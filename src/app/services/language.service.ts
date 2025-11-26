import { Injectable, inject, signal, effect, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslocoService } from '@ngneat/transloco';

export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

const LANGUAGE_STORAGE_KEY = 'samval_language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translocoService = inject(TranslocoService);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  // Idiomas disponibles
  readonly availableLanguages: Language[] = [
    {
      code: 'es',
      name: 'Spanish',
      nativeName: 'Español',
      flag: '🇪🇸'
    },
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇬🇧'
    }
  ];

  // Signal reactivo para el idioma actual
  currentLang = signal<'es' | 'en'>('es');

  constructor() {
    // Inicializar el idioma desde localStorage o usar el default
    this.initializeLanguage();

    // Effect para guardar en localStorage cuando cambie el idioma
    effect(() => {
      const lang = this.currentLang();
      if (this.isBrowser) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      }
    });
  }

  /**
   * Inicializar el idioma desde localStorage o navegador
   */
  private initializeLanguage(): void {
    if (this.isBrowser) {
      // Intentar obtener desde localStorage
      const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as 'es' | 'en' | null;

      if (savedLang && this.isValidLanguage(savedLang)) {
        this.setLanguage(savedLang);
      } else {
        // Si no hay idioma guardado, usar el idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        const lang = browserLang === 'es' ? 'es' : 'en';
        this.setLanguage(lang);
      }
    }
  }

  /**
   * Cambiar el idioma activo
   * @param langCode Código del idioma (es, en)
   */
  setLanguage(langCode: 'es' | 'en'): void {
    if (this.isValidLanguage(langCode)) {
      this.currentLang.set(langCode);
      this.translocoService.setActiveLang(langCode);
    }
  }

  /**
   * Alternar entre idiomas disponibles
   */
  toggleLanguage(): void {
    const newLang = this.currentLang() === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }

  /**
   * Obtener el código del idioma actual
   */
  getCurrentLanguage(): 'es' | 'en' {
    return this.currentLang();
  }

  /**
   * Obtener la información completa del idioma actual
   */
  getCurrentLanguageInfo(): Language | undefined {
    return this.availableLanguages.find(lang => lang.code === this.currentLang());
  }

  /**
   * Verificar si un código de idioma es válido
   */
  isValidLanguage(langCode: string): boolean {
    return this.availableLanguages.some(lang => lang.code === langCode);
  }

  /**
   * Verificar si el idioma actual es español
   */
  isSpanish(): boolean {
    return this.currentLang() === 'es';
  }

  /**
   * Verificar si el idioma actual es inglés
   */
  isEnglish(): boolean {
    return this.currentLang() === 'en';
  }
}
