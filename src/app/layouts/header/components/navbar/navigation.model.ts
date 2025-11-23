export interface NavigationItem{
  label:string,
  route : string
}

// Menu Navegacion

export const NAVIGATION_MENU: NavigationItem[] =
[
  { label: 'Sobre nosotros', route: '/sobre-nosotros' },
  { label: 'Contacto', route: '/contacto' },
  { label: 'Productos', route: '/productos' },
  { label: 'Proyectos', route: '/proyectos' },
  { label: 'Etnoeducación', route: '/etnoeducacion' },
  { label: 'Aliados', route: '/aliados' }

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
  label: string;
  route: string;
}

export const USE_FUL_LINK: UsefulLink[] = [
  {
    label:'Terminos' , route: '/terminos'
  },
  {
    label:'Politica y Privacidad' , route: '/politica-privacidad'
  },
]
