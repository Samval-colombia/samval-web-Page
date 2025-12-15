import { Routes } from '@angular/router';
import { languageChildGuard, languageGuard } from './shared/language.guard';


export const routes: Routes = [


  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'es'
  },

  {
    path: ':lang',
    canActivate: [languageGuard],
    canActivateChild: [languageChildGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent),
        title: 'Samval · Innovación educativa'
      },
      { path: 'programas', loadComponent: () => import('./pages/programs-page/programs-page.component').then(m => m.ProgramsPageComponent), title: 'Programas · Samval' },
      { path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login), title: 'Login' },
      { path: 'recover', loadComponent: () => import('./auth/recover-password/recover-password').then(m => m.RecoverPassword), title: 'Recuperar contraseña' },
      { path: 'fundacion', loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.AboutPageComponent), title: 'Fundación · Samval' },
      { path: 'contacto', loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.ContactPageComponent), title: 'Contacto · Samval' },
      { path: '**', redirectTo: '' }
    ]
  },

  { path: '**', redirectTo: 'es' }


];
