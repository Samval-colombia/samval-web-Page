import { inject } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { computed } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ContactPageContent, ContactPageMapper } from '../services/contact.service';


interface ContactPageState {
  content: ContactPageContent | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

export const ContactPageStore = signalStore(
  { providedIn: 'root' },

  withState<ContactPageState>({
    content: null,
    loading: false,
    error: null,
    lastUpdated: null
  }),

  withComputed((store) => ({
    hasContent: computed(() => store.content() !== null),
    hero: computed(() => store.content()?.hero ?? null),
    channels: computed(() => store.content()?.channels ?? []),
    cta: computed(() => store.content()?.cta ?? null),
    isLoading: computed(() => store.loading()),
    hasError: computed(() => store.error() !== null)
  })),

  withMethods((store) => {
    const apiService = inject(ApiService);
    const mapper = inject(ContactPageMapper);
    const USE_API = false; // Cambiar a true cuando tengas API

    return {
      async load(): Promise<void> {
        patchState(store, { loading: true, error: null });

        try {
          let content: ContactPageContent;

          if (USE_API) {
            const apiData = await firstValueFrom(apiService.getContactPage());



            content = mapper.fromApiToModel(apiData);
          } else {
            content = mapper.getMockData();
            await new Promise(resolve => setTimeout(resolve, 500));
          }

          patchState(store, {
            content,
            loading: false,
            error: null,
            lastUpdated: new Date()
          });

        } catch (error) {
          const errorMessage = error instanceof Error
            ? error.message
            : 'Error al cargar contact page';

          patchState(store, {
            loading: false,
            error: errorMessage
          });

          console.error('Error loading contact page:', error);
        }
      },

      async update(content: ContactPageContent): Promise<void> {
        patchState(store, { loading: true, error: null });

        try {
          if (USE_API) {
            const apiData = mapper.fromModelToApi(content);
            await firstValueFrom(apiService.updateContactPage(apiData));
          }

          patchState(store, {
            content,
            loading: false,
            error: null,
            lastUpdated: new Date()
          });

        } catch (error) {
          const errorMessage = error instanceof Error
            ? error.message
            : 'Error al actualizar contact page';

          patchState(store, {
            loading: false,
            error: errorMessage
          });

          console.error('Error updating contact page:', error);
        }
      },

      clearError(): void {
        patchState(store, { error: null });
      },

      reset(): void {
        patchState(store, {
          content: null,
          loading: false,
          error: null,
          lastUpdated: null
        });
      },

      async reload(): Promise<void> {
        this.reset();
        await this.load();
      }
    };
  }),

  withHooks({
    onInit(store) {
      store.load();
    }
  })
);
