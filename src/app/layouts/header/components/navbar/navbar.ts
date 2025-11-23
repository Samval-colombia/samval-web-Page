import { Component, signal } from '@angular/core';

import { CONTACT_INFO, ContactInfo, NAVIGATION_MENU, NavigationItem, SOCIAL_MEDIA, SocialMedia } from './navigation.model';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

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

}
