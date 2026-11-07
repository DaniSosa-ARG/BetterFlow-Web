export interface HomeContent {
  metadata: { title: string; description: string; ogLocale: string };
  accessibility: {
    skipLink: string;
    primaryNav: string;
    brandHome: string;
    whatsappOpens: string;
  };
  nav: {
    home: string;
    solutions: string;
    pending: readonly string[];
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    descriptionLines: readonly string[];
    primaryCta: string;
    secondaryCta: string;
    benefits: readonly { title: string; description: string }[];
  };
  contactPlane: {
    description: string;
    cta: string;
    services: readonly string[];
    region: string;
  };
  closing: {
    title: string;
    description: string;
    cta: string;
    phoneLabel: string;
    productsLink: string;
  };
}
