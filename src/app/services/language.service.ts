import { Injectable, inject, computed } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { toSignal } from '@angular/core/rxjs-interop';

export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translocoService = inject(TranslocoService);

  // Idiomas disponibles
  readonly availableLanguages: Language[] = [
    {
      code: 'es',
      name: 'Spanish',
      nativeName: 'Español',
      flag: '🇨🇴'
    },
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸'
    }
  ];


  private activeLangSignal = toSignal(
    this.translocoService.langChanges$,
    { initialValue: this.translocoService.getActiveLang() }
  );


  currentLanguage = computed(() => {
    const code = this.activeLangSignal();
    return this.availableLanguages.find(lang => lang.code === code) || this.availableLanguages[0];
  });

  /**
   * Cambiar el idioma activo
   * @param langCode Código del idioma (es, en)
   */
  setLanguage(langCode: string): void {
    if (this.isValidLanguage(langCode)) {
      this.translocoService.setActiveLang(langCode);
    }
  }

  /**
   * Obtener el código del idioma actual
   */
  getCurrentLanguage(): string {
    return this.translocoService.getActiveLang();
  }

  /**
   * Verificar si un código de idioma es válido
   */
  isValidLanguage(langCode: string): boolean {
    return this.availableLanguages.some(lang => lang.code === langCode);
  }

  /**
   * Cambiar al siguiente idioma disponible
   */
  toggleLanguage(): void {
    const currentIndex = this.availableLanguages.findIndex(
      lang => lang.code === this.getCurrentLanguage()
    );
    const nextIndex = (currentIndex + 1) % this.availableLanguages.length;
    this.setLanguage(this.availableLanguages[nextIndex].code);
  }

  /**
   * Verificar si el idioma actual es español
   */
  isSpanish(): boolean {
    return this.getCurrentLanguage() === 'es';
  }

  /**
   * Verificar si el idioma actual es inglés
   */
  isEnglish(): boolean {
    return this.getCurrentLanguage() === 'en';
  }
}
