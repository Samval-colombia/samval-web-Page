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
