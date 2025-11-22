import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  protected readonly channels = signal([
    {
      title: 'Hablemos de tu territorio',
      info: 'Agenda una videollamada para conocer tus metas educativas y adaptar el programa.',
      link: 'mailto:contacto@samval.org',
      label: 'contacto@samval.org'
    },
    {
      title: 'Llámanos',
      info: 'Atendemos aliados, docentes y entidades públicas.',
      link: 'tel:+573233207532',
      label: '+57 323 320 7532'
    },
    {
      title: 'Síguenos',
      info: 'Historias en campo y lanzamientos desde nuestras redes.',
      link: 'https://www.instagram.com/samvalfundacion/',
      label: '@samvalfundacion'
    }
  ]);
}
