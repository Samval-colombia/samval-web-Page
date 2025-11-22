import { Component, Input } from '@angular/core';

export interface Territory {
  region: string;
  description: string;
}

@Component({
  selector: 'app-events-section',
  standalone: true,
  templateUrl: './events-section.component.html',
  styleUrl: './events-section.component.css'
})
export class EventsSectionComponent {
  @Input({ required: true }) territories: Territory[] = [];
}
