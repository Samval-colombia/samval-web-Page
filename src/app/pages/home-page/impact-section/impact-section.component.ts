import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface ImpactCard {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-impact-section',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './impact-section.component.html',
  styleUrl: './impact-section.component.css'
})
export class ImpactSectionComponent {
  @Input({ required: true }) cards: ImpactCard[] = [];
}
