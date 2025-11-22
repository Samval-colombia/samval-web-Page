import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface NewsItem {
  title: string;
  desc: string;
  image: string;
}

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.css'
})
export class NewsSectionComponent {
  @Input({ required: true }) news: NewsItem[] = [];
}
