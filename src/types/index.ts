export interface BusinessDivision {
  id: string; // builders | software-technologies | real-estate | fourth-division
  slug: string;
  name: string;
  divisionNumber: string; // '01' | '02' | '03' | '04'
  industry: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  valueProposition: string;
  heroImage: string;
  accentColor?: string;
  isPlaceholder?: boolean;
  placeholderNotice?: string;
  services: {
    title: string;
    description: string;
    scope: string[];
  }[];
  approachSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  illustrativeProjects: {
    title: string;
    category: string;
    scope: string;
    description: string;
    image: string;
    statusBadge: string;
  }[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  divisionId: string;
  divisionName: string;
  category: 'Construction' | 'Technology' | 'Real Estate' | 'Other Businesses';
  shortDescription: string;
  fullOverview: string;
  image: string;
  keyHighlights: string[];
  isConcept: boolean;
  locationOrDomain: string;
}

export interface ApproachPrinciple {
  number: string;
  title: string;
  summary: string;
  details: string;
}

export interface WhyNavanextPoint {
  id: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  division: string;
  serviceInterest: string;
  message: string;
}
