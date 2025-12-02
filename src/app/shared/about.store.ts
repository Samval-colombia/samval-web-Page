import { inject } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { computed } from '@angular/core';
import { AboutPageContent, AboutPageMapper } from '../services/about.service';
import { ApiService } from '../services/api.service';


interface AboutPageState {
  content: AboutPageContent | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

export const AboutPageStore = signalStore(
  { providedIn: 'root' },

  withState<AboutPageState>({
    content: null,
    loading: false,
    error: null,
    lastUpdated: null
  }),

  withComputed((store) => ({
    hasContent: computed(() => store.content() !== null),
    hero: computed(() => store.content()?.hero ?? null),
    values: computed(() => store.content()?.values ?? []),
    milestones: computed(() => store.content()?.milestones ?? []),
    isLoading: computed(() => store.loading()),
    hasError: computed(() => store.error() !== null)
  })),

  withMethods((store) => {
    const apiService = inject(ApiService);
    const mapper = inject(AboutPageMapper);
    const USE_API = false; // Cambiar a true cuando tengas API

    return {
      async load(): Promise<void> {
        patchState(store, { loading: true, error: null });

        try {
          let content: AboutPageContent;

          if (USE_API) {
            const apiData = await firstValueFrom(apiService.getAboutPage());



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
            : 'Error al cargar about page';

          patchState(store, {
            loading: false,
            error: errorMessage
          });

          console.error('Error loading about page:', error);
        }
      },

      async update(content: AboutPageContent): Promise<void> {
        patchState(store, { loading: true, error: null });

        try {
          if (USE_API) {
            const apiData = mapper.fromModelToApi(content);
            await firstValueFrom(apiService.updateAboutPage(apiData));
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
            : 'Error al actualizar about page';

          patchState(store, {
            loading: false,
            error: errorMessage
          });

          console.error('Error updating about page:', error);
        }
      },

      async updateHero(hero: AboutPageContent['hero']): Promise<void> {
        const currentContent = store.content();
        if (!currentContent) return;

        const updatedContent = {
          ...currentContent,
          hero
        };

        if (USE_API) {
          try {
            const apiHero = {
              eyebrow: hero.eyebrowKey,
              title: hero.titleKey,
              description: hero.descriptionKey,
              chips: hero.chips.map(c => c.key)
            };

            await firstValueFrom(apiService.updateAboutPageHero(apiHero));
          } catch (error) {
            console.error('Error updating hero:', error);
            throw error;
          }
        }

        patchState(store, {
          content: updatedContent,
          lastUpdated: new Date()
        });
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
