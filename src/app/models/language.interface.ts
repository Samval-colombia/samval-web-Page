export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

export interface LanguageState {
  currentLang: 'es' | 'en' | 'fr' | 'de' | 'it';
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
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪'
  },
  {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹'
  }
];
