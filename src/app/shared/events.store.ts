import { inject } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { computed } from '@angular/core';
import { eventsPageMapper, ProgramsPageContent } from '../services/events.service';
import { ApiService } from '../services/api.service';



// ========================================
// Estado del Store
// ========================================

interface ProgramsPageState {
  content: ProgramsPageContent | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

// ========================================
// Signal Store
// ========================================

export const ProgramsPageStore = signalStore(
  { providedIn: 'root' },

  // Estado inicial
  withState<ProgramsPageState>({
    content: null,
    loading: false,
    error: null,
    lastUpdated: null
  }),

  // Valores computados
  withComputed((store) => ({
    // Verificar si hay contenido cargado
    hasContent: computed(() => store.content() !== null),

    // Obtener solo el hero
    hero: computed(() => store.content()?.hero ?? null),

    // Obtener solo los programas
    programs: computed(() => store.content()?.programs ?? []),

    // Obtener solo los extras
    extras: computed(() => store.content()?.extras ?? []),

    // Obtener solo el CTA button
    ctaButton: computed(() => store.content()?.ctaButtonKey ?? ''),

    // Estado de carga
    isLoading: computed(() => store.loading()),

    // Hay error
    hasError: computed(() => store.error() !== null),


  })),

  // Métodos (acciones)
  withMethods((store) => {
    const apiService = inject(ApiService);
    const mapper = inject(eventsPageMapper);

    // Flag para desarrollo (cambiar a false cuando tengas API)
    const USE_API = false;

    return {
      /**
       * Cargar contenido desde la API
       */
      async load(): Promise<void> {
        patchState(store, { loading: true, error: null });

        try {
          let content: ProgramsPageContent;

          if (USE_API) {
            // Llamar a la API real
            const apiData = await firstValueFrom(
              apiService.getProgramsPage()
            );



            // Mapear a modelo interno
            content = mapper.fromApiToModel(apiData);
          } else {
            // Usar datos mock en desarrollo
            content = mapper.getMockData();

            // Simular delay de red
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
            : 'Error desconocido al cargar programs page';

          patchState(store, {
            loading: false,
            error: errorMessage
          });

          console.error('Error loading programs page:', error);
        }
      },

      /**
       * Actualizar contenido completo
       */
      async update(content: ProgramsPageContent): Promise<void> {
        patchState(store, { loading: true, error: null });

        try {
          if (USE_API) {
            const apiData = mapper.fromModelToApi(content);
            await firstValueFrom(
              apiService.updateProgramsPage(apiData)
            );
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
            : 'Error al actualizar programs page';

          patchState(store, {
            loading: false,
            error: errorMessage
          });

          console.error('Error updating programs page:', error);
        }
      },

      /**
       * Actualizar solo el hero
       */
      async updateHero(hero: ProgramsPageContent['hero']): Promise<void> {
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
              description: hero.descriptionKey
            };

            await firstValueFrom(
              apiService.updateProgramsPageHero(apiHero)
            );
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

      /**
       * Actualizar solo los programas
       */
      async updatePrograms(programs: ProgramsPageContent['programs']): Promise<void> {
        const currentContent = store.content();
        if (!currentContent) return;

        const updatedContent = {
          ...currentContent,
          programs
        };

        if (USE_API) {
          try {
            const apiPrograms = programs.map(p => ({
              name: p.nameKey,
              imageUrl: p.image,
              summary: p.summaryKey,
              bullets: p.bulletKeys
            }));

            await firstValueFrom(
              apiService.updateProgramsPagePrograms(apiPrograms)
            );
          } catch (error) {
            console.error('Error updating programs:', error);
            throw error;
          }
        }

        patchState(store, {
          content: updatedContent,
          lastUpdated: new Date()
        });
      },

      /**
       * Limpiar errores
       */
      clearError(): void {
        patchState(store, { error: null });
      },

      /**
       * Reset completo del store
       */
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

  // Lifecycle hooks
  withHooks({
    onInit(store) {

      store.load();
    }
  })
);
