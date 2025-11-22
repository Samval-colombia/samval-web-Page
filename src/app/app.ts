import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
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
      { label: 'FB', url: 'https://www.samval.org/', aria: 'Facebook' },
      { label: 'YT', url: 'https://www.samval.org/', aria: 'YouTube' },
      { label: 'IG', url: 'https://www.instagram.com/samvalfundacion/', aria: 'Instagram' },
      { label: 'IN', url: 'https://www.samval.org/', aria: 'LinkedIn' }
    ],
    locationHeading: 'Ubicación',
    locationText: 'Colombia · Operamos en zonas urbanas y rurales',
    phone: '+57 323 320 7532',
    email: 'contacto@samval.org',
    resourcesHeading: 'Recursos',
    resources: [
      { label: 'Thymio', url: 'https://www.samval.org/producto.html' },
      { label: 'Etnoeducación', url: 'https://www.samval.org/etnoeducacion.html' },
      { label: 'Aliados', url: 'https://www.samval.org/aliados.html' }
    ],
    legalHeading: 'Legal',
    legalLinks: [
      { label: 'Términos', url: 'https://www.samval.org/' },
      { label: 'Política y privacidad', url: 'https://www.samval.org/' }
    ]
  };
}
