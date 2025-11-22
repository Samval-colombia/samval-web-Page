import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

type HeroSlide = {
  title: string;
  copy: string;
  image: string;
};

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.css'
})
export class HeroSliderComponent {
  @Input({ required: true }) slides: HeroSlide[] = [];
}
