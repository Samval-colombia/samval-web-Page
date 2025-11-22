import { Routes } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProgramsPageComponent } from './pages/programs-page/programs-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Samval · Innovación educativa' },
  { path: 'programas', component: ProgramsPageComponent, title: 'Programas · Samval' },
  { path: 'fundacion', component: AboutPageComponent, title: 'Fundación · Samval' },
  { path: 'contacto', component: ContactPageComponent, title: 'Contacto · Samval' },
  { path: '**', redirectTo: '' }
];
