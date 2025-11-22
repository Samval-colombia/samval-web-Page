import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  protected readonly values = signal([
    { title: 'Paz y dignidad', desc: 'La tecnología como puente para proteger la vida y la diversidad cultural.' },
    { title: 'Ciencia abierta', desc: 'Trabajamos con datos, evidencia y experimentación colaborativa.' },
    { title: 'Innovación sostenible', desc: 'Cada proyecto cuida el territorio y reduce la brecha climática.' }
  ]);

  protected readonly milestones = signal([
    {
      year: '2019',
      label: 'Primeros pilotos',
      detail: 'Arrancamos con clubes STEAM en colegios públicos de Antioquia.'
    },
    {
      year: '2021',
      label: 'Escalamiento comunitario',
      detail: 'Co-creamos contenidos bilingües con comunidades afro e indígenas.'
    },
    {
      year: '2024',
      label: 'Laboratorios móviles',
      detail: 'Desplegamos kits de robótica y pensamiento computacional en 11 departamentos.'
    }
  ]);
}
