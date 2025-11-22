import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface GalleryItem {
  title: string;
  image: string;
  tag: string;
}

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.css'
})
export class GallerySectionComponent {
  @Input({ required: true }) items: GalleryItem[] = [];
}
