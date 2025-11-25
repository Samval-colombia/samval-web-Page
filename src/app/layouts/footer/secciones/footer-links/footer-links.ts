import { Component, signal } from '@angular/core';
import { SOCIAL_MEDIA, SocialMedia, NAVIGATION_MENU, NavigationItem } from '../../../header/components/navbar/navigation.model';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-footer-links',
  imports: [TranslocoModule],
  templateUrl: './footer-links.html',
  styleUrl: './footer-links.css',
})
export class FooterLinks {
  menu = signal<NavigationItem[]>(NAVIGATION_MENU)
}
