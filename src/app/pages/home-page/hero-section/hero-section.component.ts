import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightsSectionComponent, HighlightItem } from '../highlights-section/highlights-section.component';

type HeroSlide = {
  title: string;
  copy: string;
  image: string;
};

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, HighlightsSectionComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  @Input({ required: true }) slides: HeroSlide[] = [];
  @Input({ required: true }) highlights: HighlightItem[] = [];
}
