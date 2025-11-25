export interface NavigationItem{
  labelKey:string,
  route : string
}

// Menu Navegacion

export const NAVIGATION_MENU: NavigationItem[] =
[
   { labelKey: 'navbar.home', route: '/' },
  { labelKey: 'navbar.about', route: '/sobre-nosotros' },
  { labelKey: 'navbar.contact', route: '/contacto' },
  { labelKey: 'navbar.programs', route: '/productos' },
  { labelKey: 'navbar.projects', route: '/proyectos' },
  { labelKey: 'navbar.ethno', route: '/etnoeducacion' },
  { labelKey: 'navbar.allies', route: '/aliados' },
]

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;

}

export const CONTACT_INFO: ContactInfo = {
  phone: '+57 3233207532',
  email: 'info@samval.org',
  address: 'Colombia',

};

export interface SocialMedia {
  name: string;
  icon: string;
  url: string;
  active: boolean;
}

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    name: 'Facebook',
    icon: 'fab fa-facebook-f',
    url: '',
    active: true
  },
  {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    url: '',
    active: true
  },
  {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    url: '',
    active: true
  }
];

export interface UsefulLink {
  labelKey: string;
  route: string;
}

export const USE_FUL_LINK: UsefulLink[] = [
   { labelKey: 'footer.terms', route: '/terminos' },
    { labelKey: 'footer.privacy', route: '/politica-privacidad' }
]
