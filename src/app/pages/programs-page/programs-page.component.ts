import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-programs-page',
  standalone: true,
  imports: [NgOptimizedImage , TranslocoModule],
  templateUrl: './programs-page.component.html',
  styleUrl: './programs-page.component.css'
})
export class ProgramsPageComponent {

   protected readonly hero = signal({
    eyebrowKey: 'programsPage.hero.eyebrow',
    titleKey: 'programsPage.hero.title',
    descriptionKey: 'programsPage.hero.description'
  });

  protected readonly programs = signal([
     {
      nameKey: 'programsPage.programs.science.name',
      image: 'assets/img/event-1.jpg',
      summaryKey: 'programsPage.programs.science.summary',
      bulletKeys: [
        'programsPage.programs.science.bullet1',
        'programsPage.programs.science.bullet2',
        'programsPage.programs.science.bullet3'
      ]
    },
    {
      nameKey: 'programsPage.programs.ethno.name',
      image: 'assets/img/event-2.jpg',
      summaryKey: 'programsPage.programs.ethno.summary',
      bulletKeys: [
        'programsPage.programs.ethno.bullet1',
        'programsPage.programs.ethno.bullet2',
        'programsPage.programs.ethno.bullet3'
      ]
    },
    {
      nameKey: 'programsPage.programs.talent.name',
      image: 'assets/img/blog-3.jpg',
      summaryKey: 'programsPage.programs.talent.summary',
      bulletKeys: [
        'programsPage.programs.talent.bullet1',
        'programsPage.programs.talent.bullet2',
        'programsPage.programs.talent.bullet3'
      ]
    }
  ]);

  protected readonly extras = signal([
    {
      titleKey: 'programsPage.extras.training.title',
      descKey: 'programsPage.extras.training.description',
      icon: '🎓'
    },
    {
      titleKey: 'programsPage.extras.research.title',
      descKey: 'programsPage.extras.research.description',
      icon: '🧪'
    },
    {
      titleKey: 'programsPage.extras.partners.title',
      descKey: 'programsPage.extras.partners.description',
      icon: '🤝'
    }
  ]);

  protected readonly ctaButtonKey = signal('programsPage.cta.button');
}
