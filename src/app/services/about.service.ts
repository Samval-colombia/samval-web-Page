import { Injectable } from '@angular/core';

// ========================================
// Response Types from API
// ========================================

export interface AboutPageApiResponse {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    chips: string[];
  };
  values: Array<{
    title: string;
    description: string;
  }>;
  milestones: Array<{
    year: string;
    label: string;
    detail: string;
  }>;
}

// ========================================
// Model Types (Internal App)
// ========================================

export interface AboutPageContent {
  hero: {
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
    chips: Array<{ key: string }>;
  };
  values: Array<{
    titleKey: string;
    descKey: string;
  }>;
  milestones: Array<{
    year: string;
    labelKey: string;
    detailKey: string;
  }>;
}

/**
 * Mapper Service para About Page
 */
@Injectable({
  providedIn: 'root'
})
export class AboutPageMapper {

  fromApiToModel(apiData: AboutPageApiResponse): AboutPageContent {
    return {
      hero: {
        eyebrowKey: apiData.hero.eyebrow,
        titleKey: apiData.hero.title,
        descriptionKey: apiData.hero.description,
        chips: apiData.hero.chips.map(chip => ({ key: chip }))
      },
      values: apiData.values.map(value => ({
        titleKey: value.title,
        descKey: value.description
      })),
      milestones: apiData.milestones.map(milestone => ({
        year: milestone.year,
        labelKey: milestone.label,
        detailKey: milestone.detail
      }))
    };
  }

  fromModelToApi(model: AboutPageContent): AboutPageApiResponse {
    return {
      hero: {
        eyebrow: model.hero.eyebrowKey,
        title: model.hero.titleKey,
        description: model.hero.descriptionKey,
        chips: model.hero.chips.map(chip => chip.key)
      },
      values: model.values.map(value => ({
        title: value.titleKey,
        description: value.descKey
      })),
      milestones: model.milestones.map(milestone => ({
        year: milestone.year,
        label: milestone.labelKey,
        detail: milestone.detailKey
      }))
    };
  }

  getMockData(): AboutPageContent {
    return {
      hero: {
        eyebrowKey: 'aboutPage.hero.eyebrow',
        titleKey: 'aboutPage.hero.title',
        descriptionKey: 'aboutPage.hero.description',
        chips: [
          { key: 'aboutPage.hero.chip1' },
          { key: 'aboutPage.hero.chip2' },
          { key: 'aboutPage.hero.chip3' }
        ]
      },
      values: [
        { titleKey: 'aboutPage.values.peace.title', descKey: 'aboutPage.values.peace.description' },
        { titleKey: 'aboutPage.values.science.title', descKey: 'aboutPage.values.science.description' },
        { titleKey: 'aboutPage.values.innovation.title', descKey: 'aboutPage.values.innovation.description' }
      ],
      milestones: [
        {
          year: '2019',
          labelKey: 'aboutPage.milestones.2019.label',
          detailKey: 'aboutPage.milestones.2019.detail'
        },
        {
          year: '2021',
          labelKey: 'aboutPage.milestones.2021.label',
          detailKey: 'aboutPage.milestones.2021.detail'
        },
        {
          year: '2024',
          labelKey: 'aboutPage.milestones.2024.label',
          detailKey: 'aboutPage.milestones.2024.detail'
        }
      ]
    };
  }

  validateApiData(apiData: any): boolean {
    return !!(
      apiData &&
      apiData.hero &&
      apiData.hero.eyebrow &&
      apiData.hero.title &&
      apiData.hero.description &&
      Array.isArray(apiData.hero.chips) &&
      Array.isArray(apiData.values) &&
      Array.isArray(apiData.milestones)
    );
  }
}
