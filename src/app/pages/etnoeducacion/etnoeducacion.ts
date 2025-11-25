import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-etnoeducacion',
  imports: [TranslocoModule , RouterLink],
  templateUrl: './etnoeducacion.html',
  styleUrl: './etnoeducacion.css',
})
export class Etnoeducacion {

   projectFocus = signal([
    {
      key: 'culturalIntegration',
      iconClass: 'fas fa-globe-americas'
    },
    {
      key: 'localEmpowerment',
      iconClass: 'fas fa-users'
    },
    {
      key: 'accessibleTechnology',
      iconClass: 'fas fa-laptop-code'
    },
    {
      key: 'sustainableDevelopment',
      iconClass: 'fas fa-leaf'
    }
  ]);

}
