export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

export interface LanguageState {
  currentLang: 'es' | 'en';
  availableLanguages: Language[];
}

export const LANGUAGE_STORAGE_KEY = 'samval_language';

export const AVAILABLE_LANGUAGES: Language[] = [
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
