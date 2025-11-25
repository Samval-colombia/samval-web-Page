import { Component, signal } from '@angular/core';
import { USE_FUL_LINK, UsefulLink } from '../../../header/components/navbar/navigation.model';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer-mainnavigation',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './footer-mainnavigation.html',
  styleUrl: './footer-mainnavigation.css',
})
export class FooterMainnavigation {
  UsefulLink = signal<UsefulLink[]>(USE_FUL_LINK)
}
