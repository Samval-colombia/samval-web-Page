import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';
import { AboutPageStore } from '../../shared/about.store';

@Component({
  selector: 'app-about-page',
  imports: [TranslocoModule, RouterLink],
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent {

  protected readonly store = inject(AboutPageStore);


}
