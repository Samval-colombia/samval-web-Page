import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-about-page',
  imports : [TranslocoModule],
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

   protected readonly hero = signal({
    eyebrowKey: 'aboutPage.hero.eyebrow',
    titleKey: 'aboutPage.hero.title',
    descriptionKey: 'aboutPage.hero.description',
    chips: [
      { key: 'aboutPage.hero.chip1' },
      { key: 'aboutPage.hero.chip2' },
      { key: 'aboutPage.hero.chip3' }
    ]
  });

  protected readonly values = signal([
    { titleKey: 'aboutPage.values.peace.title', descKey: 'aboutPage.values.peace.description' },
    { titleKey: 'aboutPage.values.science.title', descKey: 'aboutPage.values.science.description' },
    { titleKey: 'aboutPage.values.innovation.title', descKey: 'aboutPage.values.innovation.description' }
  ]);

  protected readonly milestones = signal([
    {
      year: '2019',
      labelKey: 'aboutPage.milestones.2019.label',
      detailKey: 'aboutPage.milestones.2019.detail'
    },
    {
      year: '2021',
      labelKey: 'aboutPage.milestones.2021.label',
      detailKey: 'aboutPage.milestones.2021.detail'
    },
    {
      year: '2024',
      labelKey: 'aboutPage.milestones.2024.label',
      detailKey: 'aboutPage.milestones.2024.detail'
    }
  ]);
}
