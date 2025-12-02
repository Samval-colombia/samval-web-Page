import { Injectable } from '@angular/core';

// ========================================
// Response Types from API
// ========================================

export interface ContactPageApiResponse {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  channels: Array<{
    title: string;
    info: string;
    link: string;
    label: string;
  }>;
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

// ========================================
// Model Types (Internal App)
// ========================================

export interface ContactPageContent {
  hero: {
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
  };
  channels: Array<{
    titleKey: string;
    infoKey: string;
    link: string;
    labelKey: string;
  }>;
  cta: {
    titleKey: string;
    descriptionKey: string;
    buttonKey: string;
  };
}

/**
 * Mapper Service para Contact Page
 */
@Injectable({
  providedIn: 'root'
})
export class ContactPageMapper {

  fromApiToModel(apiData: ContactPageApiResponse): ContactPageContent {
    return {
      hero: {
        eyebrowKey: apiData.hero.eyebrow,
        titleKey: apiData.hero.title,
        descriptionKey: apiData.hero.description
      },
      channels: apiData.channels.map(channel => ({
        titleKey: channel.title,
        infoKey: channel.info,
        link: channel.link,
        labelKey: channel.label
      })),
      cta: {
        titleKey: apiData.cta.title,
        descriptionKey: apiData.cta.description,
        buttonKey: apiData.cta.button
      }
    };
  }

  fromModelToApi(model: ContactPageContent): ContactPageApiResponse {
    return {
      hero: {
        eyebrow: model.hero.eyebrowKey,
        title: model.hero.titleKey,
        description: model.hero.descriptionKey
      },
      channels: model.channels.map(channel => ({
        title: channel.titleKey,
        info: channel.infoKey,
        link: channel.link,
        label: channel.labelKey
      })),
      cta: {
        title: model.cta.titleKey,
        description: model.cta.descriptionKey,
        button: model.cta.buttonKey
      }
    };
  }

  getMockData(): ContactPageContent {
    return {
      hero: {
        eyebrowKey: 'contactPage.hero.eyebrow',
        titleKey: 'contactPage.hero.title',
        descriptionKey: 'contactPage.hero.description'
      },
      channels: [
        {
          titleKey: 'contactPage.channels.talk.title',
          infoKey: 'contactPage.channels.talk.info',
          link: 'mailto:contacto@samval.org',
          labelKey: 'contactPage.channels.talk.label'
        },
        {
          titleKey: 'contactPage.channels.call.title',
          infoKey: 'contactPage.channels.call.info',
          link: 'tel:+573233207532',
          labelKey: 'contactPage.channels.call.label'
        },
        {
          titleKey: 'contactPage.channels.follow.title',
          infoKey: 'contactPage.channels.follow.info',
          link: 'https://www.instagram.com/samvalfundacion/',
          labelKey: 'contactPage.channels.follow.label'
        }
      ],
      cta: {
        titleKey: 'contactPage.cta.title',
        descriptionKey: 'contactPage.cta.description',
        buttonKey: 'contactPage.cta.button'
      }
    };
  }


}
