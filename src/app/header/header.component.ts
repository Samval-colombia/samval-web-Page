import { Component, HostListener, Input, OnInit, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { MonitorIcon } from '@ngverse/icons-lu';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MonitorIcon, TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  @Input() links: Array<{ labelKey: string; path: string; exact?: boolean }> = [];
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);


  protected readonly languageService = inject(LanguageService);
  languageMenuOpen = signal(false);




  protected readonly platformKey = signal('header.platform');
  protected readonly homeKey = signal('header.nav.home');
  protected readonly menuAriaKey = signal('header.menu');

  protected trackByPath = (_: number, item: { path: string }) => item.path;

  ngOnInit(): void {
    if (this.isBrowser) {
      this.updateScrollState();
    }
  }

   protected get currentLang() {
    return this.languageService.currentLang;
  }

   protected readonly brandData = signal({
    nameKey: 'header.brand.name',
    taglineKey: 'header.brand.tagline'
  });

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    if (!this.isBrowser) return;
    this.updateScrollState();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  private updateScrollState(): void {
    if (!this.isBrowser) return;
    this.scrolled.set(window.scrollY > 8);
  }

    toggleLanguageMenu() {
  this.languageMenuOpen.update(v => !v);
}

 protected toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

}
