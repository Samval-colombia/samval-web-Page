import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

interface Event {
  id: number;
  image: string;
  dateKey: string;
  locationKey: string;
  scheduleKey : string,
  titleKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-events',
  imports: [TranslocoModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  events = signal<Event[]>([
     {
    id: 1,
    image: '/assets/event-1.jpg',
    dateKey: 'events.event1.date',
    locationKey: 'events.event1.location',
    scheduleKey: 'events.event1.schedule',
    titleKey: 'events.event1.title',
    descriptionKey: 'events.event1.description'
  },
  {
    id: 2,
    image: '/assets/event-2.jpg',
    dateKey: 'events.event2.date',
    locationKey: 'events.event2.location',
    scheduleKey: 'events.event2.schedule',
    titleKey: 'events.event2.title',
    descriptionKey: 'events.event2.description'
  }
  ]);

}
