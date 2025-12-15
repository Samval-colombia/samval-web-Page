import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AVAILABLE_LANGUAGES } from '../models/language.interface';
import { LanguageStore } from './language.store';

const isValidLang = (lang: string) =>
  AVAILABLE_LANGUAGES.some(({ code }) => code === lang);

const activateLanguage = (lang: string): true | ReturnType<Router['createUrlTree']> => {
  const router = inject(Router);
  const languageStore = inject(LanguageStore);

  if (!isValidLang(lang)) {
    return router.createUrlTree(['/es']);
  }

  languageStore.setLanguage(lang as typeof AVAILABLE_LANGUAGES[number]['code']);
  return true;
};

export const languageGuard: CanActivateFn = (route) => {
  const lang = route.params['lang'] as string | undefined;
  return lang ? activateLanguage(lang) : inject(Router).createUrlTree(['/es']);
};

export const languageChildGuard: CanActivateChildFn = (route) => {
  const lang = route.params['lang'] as string | undefined;
  return lang ? activateLanguage(lang) : inject(Router).createUrlTree(['/es']);
};
