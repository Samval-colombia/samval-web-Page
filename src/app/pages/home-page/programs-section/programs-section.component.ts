import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ProgramCard {
  name: string;
  desc: string;
  image: string;
}

@Component({
  selector: 'app-programs-section',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './programs-section.component.html',
  styleUrl: './programs-section.component.css'
})
export class ProgramsSectionComponent {
  @Input({ required: true }) programs: ProgramCard[] = [];
}
