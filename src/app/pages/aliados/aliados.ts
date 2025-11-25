import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { Ally } from '../../models/aliados.model';


@Component({
  selector: 'app-aliados',
  imports: [TranslocoModule],
  templateUrl: './aliados.html',
  styleUrl: './aliados.css',
})
export class Aliados {

  allies = signal<Ally[]>([
    {
      id: 1,
      titleKey: 'allies.ally1.title',
      descriptionKey: 'allies.ally1.description',
      image: '/assets/aliados.jpg',
      location: 'San Basilio de Palenque, Bolívar'
    },
    {
      id: 2,
      titleKey: 'allies.ally2.title',
      descriptionKey: 'allies.ally2.description',
      image: '/assets/cuc.jpg',
      location: 'Barranquilla, Atlántico',
      website: 'https://www.cuc.edu.co'
    }
  ]);


  breadcrumb = signal([
    { labelKey: 'navbar.home', route: '/' },
    { labelKey: 'navbar.allies', route: '/aliados' }
  ]);

}
