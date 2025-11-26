import { Component, input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '@ngverse/icons-lu';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon , TranslocoModule],
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
  taglineKey: string;
  socialLinks: Array<{ label: string; url: string; aria: string; icon: 'facebook' | 'youtube' | 'instagram' | 'linkedin' }>;
  locationHeadingKey: string;
  locationText: string;
  phone: string;
  email: string;
  copyrightKey : string
}
