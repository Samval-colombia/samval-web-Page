import { Component, signal } from '@angular/core';
import { CONTACT_INFO, ContactInfo, SOCIAL_MEDIA, SocialMedia } from '../../../header/components/navbar/navigation.model';

@Component({
  selector: 'app-footer-contact',
  imports: [],
  templateUrl: './footer-contact.html',
  styleUrl: './footer-contact.css',
})
export class FooterContact {

  ContactInfo = signal<ContactInfo>(CONTACT_INFO)
  SocialMedia = signal<SocialMedia[]>(SOCIAL_MEDIA)

}
