import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-about',
  imports: [TranslocoModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  contenido = signal({
     titleKey: 'about.title',
  subtitleKey: 'about.subtitle',
  descriptionKey: 'about.description',
  mission: {
    titleKey: 'about.mission.title',
    textKey: 'about.mission.text'
  },
  vision: {
    titleKey: 'about.vision.title',
    textKey: 'about.vision.text'
  },
  image: '/assets/about.jpg'
  })

}
