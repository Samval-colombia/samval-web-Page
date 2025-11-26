import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent, FooterData } from './footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly navLinks = [
    { labelKey: 'header.nav.programs', path: '/programas' },
    { labelKey: 'header.nav.foundation', path: '/fundacion' },
    { labelKey: 'header.nav.contact', path: '/contacto' }
  ];

  protected readonly footerData = {
    brandLogoSrc: '/assets/logo/withName.svg',
    brandAlt: 'Samval',
    taglineKey: 'footer.tagline',
    locationHeadingKey: 'footer.location',
    locationText: 'Calle 104 #51B-154 Ofi 17 · Castellana Campestre · Barranquilla, Colombia',
    phone: '3233207532',
    email: 'fundacionsamval@gmail.com',
    copyrightKey: 'footer.copyright',
    socialLinks: [
      { label: 'FB', url: 'https://www.samval.org/', aria: 'Facebook', icon: 'facebook' as const },
      { label: 'YT', url: 'https://www.samval.org/', aria: 'YouTube', icon: 'youtube' as const },
      { label: 'IG', url: 'https://www.instagram.com/samvalfundacion/', aria: 'Instagram', icon: 'instagram' as const },
      { label: 'IN', url: 'https://www.samval.org/', aria: 'LinkedIn', icon: 'linkedin' as const }
    ]
  } satisfies FooterData;
}
