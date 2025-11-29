import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ProgramsPageStore } from '../../shared/events.store';

@Component({
  selector: 'app-programs-page',
  standalone: true,
  imports: [NgOptimizedImage , TranslocoModule],
  templateUrl: './programs-page.component.html',
  styleUrl: './programs-page.component.css'
})
export class ProgramsPageComponent {

   protected readonly store = inject(ProgramsPageStore);

  protected readonly content = this.store.content;
  protected readonly loading = this.store.isLoading;
  protected readonly error = this.store.hasError;
  protected readonly errorMessage = this.store.error;

   protected onReload(): void {
    this.store.reload();
  }

  protected onClearError(): void {
    this.store.clearError();
  }
}
