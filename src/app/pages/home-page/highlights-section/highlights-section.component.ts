import { Component, Input } from '@angular/core';

export interface HighlightItem {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-highlights-section',
  standalone: true,
  templateUrl: './highlights-section.component.html',
  styleUrl: './highlights-section.component.css'
})
export class HighlightsSectionComponent {
  @Input({ required: true }) items: HighlightItem[] = [];
}
