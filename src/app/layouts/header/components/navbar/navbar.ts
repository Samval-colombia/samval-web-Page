import { Component, HostListener, inject, signal } from '@angular/core';

import { CONTACT_INFO, ContactInfo, NAVIGATION_MENU, NavigationItem, SOCIAL_MEDIA, SocialMedia } from './navigation.model';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageService } from '../../../../services/language.service';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-navbar',
  imports: [TranslocoModule, UpperCasePipe, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  languageService = inject(LanguageService);
  languageMenuOpen = signal(false);

  // SIgnals de datos
  navigationItems = signal<NavigationItem[]>(NAVIGATION_MENU);
  contactInfo = signal<ContactInfo>(CONTACT_INFO)
  socialNetworks = signal<SocialMedia[]>(SOCIAL_MEDIA)


  isMenuOpen = signal<boolean>(false);

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleLanguageMenu() {
  this.languageMenuOpen.update(v => !v);
}

changeLanguage(langCode: string) {
  this.languageService.setLanguage(langCode);
  this.languageMenuOpen.set(false);
}

@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (!target.closest('.language-selector')) {
    this.languageMenuOpen.set(false);
  }
}

}
