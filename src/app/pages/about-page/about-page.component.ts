import { Component, inject, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { AboutPageStore } from '../../shared/about.store';

@Component({
  selector: 'app-about-page',
  imports : [TranslocoModule],
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

  protected  readonly store = inject(AboutPageStore)


}
