import { Injectable } from '@angular/core';

// ========================================
// Response Types from API
// ========================================

export interface ProgramsPageApiResponse {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  programs: Array<{
    name: string;
    imageUrl: string;
    summary: string;
    bullets: string[];
  }>;
  extras: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  ctaButton: string;
}

// ========================================
// Model Types (Internal App)
// ========================================

export interface ProgramsPageContent {
  hero: {
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
  };
  programs: Array<{
    nameKey: string;
    image: string;
    summaryKey: string;
    bulletKeys: string[];
  }>;
  extras: Array<{
    titleKey: string;
    descKey: string;
    icon: string;
  }>;
  ctaButtonKey: string;
}


@Injectable({
  providedIn: 'root'
})
export class eventsPageMapper {


  fromApiToModel(apiData: ProgramsPageApiResponse): ProgramsPageContent {
    return {
      hero: {
        eyebrowKey: apiData.hero.eyebrow,
        titleKey: apiData.hero.title,
        descriptionKey: apiData.hero.description
      },
      programs: apiData.programs.map(program => ({
        nameKey: program.name,
        image: program.imageUrl,
        summaryKey: program.summary,
        bulletKeys: program.bullets
      })),
      extras: apiData.extras.map(extra => ({
        titleKey: extra.title,
        descKey: extra.description,
        icon: extra.icon
      })),
      ctaButtonKey: apiData.ctaButton
    };
  }


  fromModelToApi(model: ProgramsPageContent): ProgramsPageApiResponse {
    return {
      hero: {
        eyebrow: model.hero.eyebrowKey,
        title: model.hero.titleKey,
        description: model.hero.descriptionKey
      },
      programs: model.programs.map(program => ({
        name: program.nameKey,
        imageUrl: program.image,
        summary: program.summaryKey,
        bullets: program.bulletKeys
      })),
      extras: model.extras.map(extra => ({
        title: extra.titleKey,
        description: extra.descKey,
        icon: extra.icon
      })),
      ctaButton: model.ctaButtonKey
    };
  }

  /**
   * Datos mock para desarrollo (mientras no hay API)
   */
  getMockData(): ProgramsPageContent {
    return {
      hero: {
        eyebrowKey: 'programsPage.hero.eyebrow',
        titleKey: 'programsPage.hero.title',
        descriptionKey: 'programsPage.hero.description'
      },
      programs: [
        {
          nameKey: 'programsPage.programs.science.name',
          image: 'assets/img/event-1.jpg',
          summaryKey: 'programsPage.programs.science.summary',
          bulletKeys: [
            'programsPage.programs.science.bullet1',
            'programsPage.programs.science.bullet2',
            'programsPage.programs.science.bullet3'
          ]
        },
        {
          nameKey: 'programsPage.programs.ethno.name',
          image: 'assets/img/event-2.jpg',
          summaryKey: 'programsPage.programs.ethno.summary',
          bulletKeys: [
            'programsPage.programs.ethno.bullet1',
            'programsPage.programs.ethno.bullet2',
            'programsPage.programs.ethno.bullet3'
          ]
        },
        {
          nameKey: 'programsPage.programs.talent.name',
          image: 'assets/img/blog-3.jpg',
          summaryKey: 'programsPage.programs.talent.summary',
          bulletKeys: [
            'programsPage.programs.talent.bullet1',
            'programsPage.programs.talent.bullet2',
            'programsPage.programs.talent.bullet3'
          ]
        }
      ],
      extras: [
        {
          titleKey: 'programsPage.extras.training.title',
          descKey: 'programsPage.extras.training.description',
          icon: '🎓'
        },
        {
          titleKey: 'programsPage.extras.research.title',
          descKey: 'programsPage.extras.research.description',
          icon: '🧪'
        },
        {
          titleKey: 'programsPage.extras.partners.title',
          descKey: 'programsPage.extras.partners.description',
          icon: '🤝'
        }
      ],
      ctaButtonKey: 'programsPage.cta.button'
    };
  }


}
