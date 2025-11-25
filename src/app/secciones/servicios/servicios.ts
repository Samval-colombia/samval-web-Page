import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

interface Service {
  id: number;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-servicios',
  imports: [TranslocoModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  services = signal<Service[]>([
   {
    id: 1,
    icon: 'fas fa-keyboard',
    titleKey: 'services.service1.title',
    descriptionKey: 'services.service1.description'
  },
  {
    id: 2,
    icon: 'fas fa-piggy-bank',
    titleKey: 'services.service2.title',
    descriptionKey: 'services.service2.description'
  },
  {
    id: 3,
    icon: 'fas fa-chart-line',
    titleKey: 'services.service3.title',
    descriptionKey: 'services.service3.description'
  },
  {
    id: 4,
    icon: 'fas fa-chalkboard',
    titleKey: 'services.service4.title',
    descriptionKey: 'services.service4.description'
  },
  {
    id: 5,
    icon: 'fas fa-landmark',
    titleKey: 'services.service5.title',
    descriptionKey: 'services.service5.description'
  },
  {
    id: 6,
    icon: 'fas fa-laptop',
    titleKey: 'services.service6.title',
    descriptionKey: 'services.service6.description'
  }
  ]);

}
