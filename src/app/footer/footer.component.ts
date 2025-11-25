import { Component, input } from '@angular/core';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '@ngverse/icons-lu';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly footerData = input.required<FooterData>();
  readonly currentYear = new Date().getFullYear();
}

export interface FooterData {
  brandLogoSrc: string;
  brandAlt: string;
  tagline: string;
  socialLinks: Array<{ label: string; url: string; aria: string; icon: 'facebook' | 'youtube' | 'instagram' | 'linkedin' }>;
  locationHeading: string;
  locationText: string;
  phone: string;
  email: string;
}
