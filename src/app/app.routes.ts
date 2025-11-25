import { Terminos } from './pages/terminos/terminos';
import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';

export const routes: Routes = [
  {
    path : '',
    loadComponent: ()=> import ('./pages/home/home').then(m=>m.Home)
  },
  {

    path: 'sobre-nosotros',
    loadComponent: () => import('./secciones/about/about').then(m => m.About),
  },
  {

    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto').then(m => m.Contacto),
  },

  {
    path: 'productos',
    loadComponent: () => import('./pages/productos/productos').then(m => m.Productos),

  },
  {
    path: 'etnoeducacion',
    loadComponent: () => import('./pages/etnoeducacion/etnoeducacion').then(m => m.Etnoeducacion),

  },
  {
    path: 'aliados',
    loadComponent: () => import('./pages/aliados/aliados').then(m => m.Aliados),

  },
  {
    path: 'terminos',
    loadComponent: () => import('./pages/terminos/terminos').then(m => m.Terminos),

  },
  {
    path: 'politica-privacidad',
    loadComponent: () => import('./pages/politicas/politicas').then(m => m.Politicas),

  },
  {
    path: '**',
    redirectTo : ''
  }

];
