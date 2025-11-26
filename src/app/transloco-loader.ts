import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { from, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  getTranslation(lang: string): Observable<Translation> {

    if (!isPlatformBrowser(this.platformId)) {

      return from(
        import(`../assets/i18n/${lang}.json`).then(module => module.default)
      );
    }


    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}
