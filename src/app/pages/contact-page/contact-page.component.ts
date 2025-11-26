import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-contact-page',
  imports: [TranslocoModule],
  standalone: true,
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

   protected readonly hero = signal({
    eyebrowKey: 'contactPage.hero.eyebrow',
    titleKey: 'contactPage.hero.title',
    descriptionKey: 'contactPage.hero.description'
  });

  protected readonly channels = signal([
     {
      titleKey: 'contactPage.channels.talk.title',
      infoKey: 'contactPage.channels.talk.info',
      link: 'mailto:contacto@samval.org',
      labelKey: 'contactPage.channels.talk.label'
    },
    {
      titleKey: 'contactPage.channels.call.title',
      infoKey: 'contactPage.channels.call.info',
      link: 'tel:+573233207532',
      labelKey: 'contactPage.channels.call.label'
    },
    {
      titleKey: 'contactPage.channels.follow.title',
      infoKey: 'contactPage.channels.follow.info',
      link: 'https://www.instagram.com/samvalfundacion/',
      labelKey: 'contactPage.channels.follow.label'
    }
  ]);

   protected readonly cta = signal({
    titleKey: 'contactPage.cta.title',
    descriptionKey: 'contactPage.cta.description',
    buttonKey: 'contactPage.cta.button'
  });
}
