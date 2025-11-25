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
    { label: 'Programas', path: '/programas' },
    { label: 'Fundación', path: '/fundacion' },
    { label: 'Contacto', path: '/contacto' }
  ];

  protected readonly footerData = {
    brandLogoSrc: '/assets/logo/withName.svg',
    brandAlt: 'Samval',
    tagline: 'Educación, ciencia e innovación para la paz con enfoque territorial.',
    socialLinks: [
      { label: 'FB', url: 'https://www.samval.org/', aria: 'Facebook', icon: 'facebook' },
      { label: 'YT', url: 'https://www.samval.org/', aria: 'YouTube', icon: 'youtube' },
      { label: 'IG', url: 'https://www.instagram.com/samvalfundacion/', aria: 'Instagram', icon: 'instagram' },
      { label: 'IN', url: 'https://www.samval.org/', aria: 'LinkedIn', icon: 'linkedin' }
    ],
    locationHeading: 'Ubicación',
    locationText: 'Calle 104 #51B-154 Ofi 17 · Castellana Campestre · Barranquilla, Colombia',
    phone: '3233207532',
    email: 'fundacionsamval@gmail.com'
  } satisfies FooterData;
}
