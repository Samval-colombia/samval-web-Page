import { Component, HostListener, Input, OnInit, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { MonitorIcon } from '@ngverse/icons-lu';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageStore } from '../shared/language.store';
import { Language } from '../models/language.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MonitorIcon, TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  @Input() links: Array<{ labelKey: string; path: string; exact?: boolean }> = [];

  // Signals para estado del componente
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly languageMenuOpen = signal(false);

  // Servicios inyectados
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly router = inject(Router);

  //Signal Store
  protected readonly languageStore =inject(LanguageStore)

  // Signals para traducciones
  protected readonly platformKey = signal('header.platform');
  protected readonly homeKey = signal('header.nav.home');
  protected readonly menuAriaKey = signal('header.menu');
  protected readonly brandData = signal({
    nameKey: 'header.brand.name',
    taglineKey: 'header.brand.tagline'
  });

  // Getters
  protected get currentLang() {
    return this.languageStore.currentLang;
  }

  protected get availableLanguages() {
    return this.languageStore.availableLanguages;
  }

  protected get isSpanish() {
    return this.languageStore.isSpanish;
  }

  protected get currentLanguageInfo() {
    return this.languageStore.currentLanguageInfo;
  }

  protected trackByPath = (_: number, item: { path: string }) => item.path;

  ngOnInit(): void {
    if (this.isBrowser) {
      this.updateScrollState();
      // Cerrar dropdown al hacer clic fuera
      this.setupClickOutsideListener();
    }
  }

  /**
   * Detecta scroll para agregar clase al nav
   */
  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    if (!this.isBrowser) return;
    this.updateScrollState();
  }

  /**
   * Actualiza el estado de scroll
   */
  private updateScrollState(): void {
    if (!this.isBrowser) return;
    this.scrolled.set(window.scrollY > 8);
  }

  /**
   * Toggle del menú hamburguesa
   */
  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);

    // Cerrar dropdown de idiomas cuando se cierra el menú
    if (!this.menuOpen()) {
      this.languageMenuOpen.set(false);
    }

    // Prevenir scroll cuando el menú está abierto
    if (this.isBrowser) {
      if (this.menuOpen()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  /**
   * Cerrar el menú hamburguesa
   */
  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.languageMenuOpen.set(false);

    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  /**
   * Toggle del dropdown de idiomas
   */
  protected toggleLanguageMenu(): void {
    this.languageMenuOpen.update((value) => !value);
  }

  /**
   * Cambiar idioma y cerrar el dropdown
   */
  protected changeLanguage(lang: Language['code']): void {
    if (this.currentLang() === lang) {
      this.languageMenuOpen.set(false);
      return;
    }

    // Cambiar idioma en estado + Transloco
    this.languageStore.setLanguage(lang);

    // Reemplazar el prefijo de idioma en la URL actual
    const tree = this.router.parseUrl(this.router.url);
    const primary = tree.root.children['primary'];
    const segments = primary?.segments ?? [];

    const nextSegments = segments.length
      ? [lang, ...segments.slice(1).map((s) => s.path)]
      : [lang];

    this.router.navigate(['/', ...nextSegments], { replaceUrl: true });

    this.languageMenuOpen.set(false);
    this.menuOpen.set(false);
  }

  /**
   * Cerrar dropdown al hacer clic fuera
   */
  private setupClickOutsideListener(): void {
    if (!this.isBrowser) return;

    document.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const languageDropdown = target.closest('.language-dropdown');

      if (!languageDropdown && this.languageMenuOpen()) {
        this.languageMenuOpen.set(false);
      }
    });
  }



}
