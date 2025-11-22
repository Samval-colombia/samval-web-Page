import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() brandLogoSrc = '/assets/logo/withName.svg';
  @Input() brandAlt = 'Samval';
  @Input() tagline = 'Educación, ciencia e innovación para la paz con enfoque territorial.';

  @Input() socialLinks: Array<{ label: string; url: string; aria: string }> = [
    { label: 'FB', url: 'https://www.samval.org/', aria: 'Facebook' },
    { label: 'YT', url: 'https://www.samval.org/', aria: 'YouTube' },
    { label: 'IG', url: 'https://www.instagram.com/samvalfundacion/', aria: 'Instagram' },
    { label: 'IN', url: 'https://www.samval.org/', aria: 'LinkedIn' }
  ];

  @Input() locationHeading = 'Ubicación';
  @Input() locationText = 'Colombia · Operamos en zonas urbanas y rurales';
  @Input() phone = '+57 323 320 7532';
  @Input() email = 'contacto@samval.org';

  @Input() resourcesHeading = 'Recursos';
  @Input() resources: Array<{ label: string; url: string }> = [
    { label: 'Thymio', url: 'https://www.samval.org/producto.html' },
    { label: 'Etnoeducación', url: 'https://www.samval.org/etnoeducacion.html' },
    { label: 'Aliados', url: 'https://www.samval.org/aliados.html' }
  ];

  @Input() legalHeading = 'Legal';
  @Input() legalLinks: Array<{ label: string; url: string }> = [
    { label: 'Términos', url: 'https://www.samval.org/' },
    { label: 'Política y privacidad', url: 'https://www.samval.org/' }
  ];
}
