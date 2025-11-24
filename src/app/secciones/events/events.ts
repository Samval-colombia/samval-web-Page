import { Component, signal } from '@angular/core';

interface Event {
  id: number;
  image: string;
  date: string;
  location: string;
  schedule : string,
  title: string;
  description: string;
}

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  events = signal<Event[]>([
    {
      id: 1,
      image: '/assets/event-1.jpg',
      date: '01 Dic 2024',
      location: 'Barranquilla',
      schedule: '8:00 AM - 10:00',
      title: 'Arahuacos',
      description: `Los Arahuacos tienen una visión del mundo basada en la armonía con la naturaleza y el conocimiento ancestral. La enseñanza del pensamiento computacional mediante
      robots móviles se integrará con su cosmovisión sin imponer paradigmas occidentales y a su lengua materna.`
    },
    {
      id: 2,
      image: '/assets/event-2.jpg',
      date: '01 Feb 2025',
      location: 'Medellín',
      schedule: '8:00 - 10:00',
      title: 'Formación Docente en Pensamiento Computacional',
      description: `Consejo comunitario Ma kankamana de san basilio de palenque, se fortalecerá la identidad cultural y el idioma (el palenquero) ya que se adaptará el lenguaje de programación a la lengua nativa la cual juegan un papel clave en la educación.
      Se diseñará la estrategias que respeten y fortalezcan su herencia cultural.`
    }
  ]);

}
