import type { LucideIcon } from "lucide-react";

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  phone: {
    display: string;
    e164: string;
    href: string;
    whatsappNumber: string;
  };
  email: string;
  address: {
    street: string;
    locality: string;
    region: string;
    country: string;
    postalCode: string;
    full: string;
  };
  social: {
    facebookUrl: string;
    messengerUrl: string;
  };
  stats: {
    recommendPercent: number;
    reviewCount: number;
    maxStoreys: number;
  };
  assets: {
    logo: string | null;
    vanPhoto: string | null;
    heroPhoto: string | null;
  };
  serviceAreaNames: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  intro: string[];
  included: string[];
  metaTitle: string;
  metaDescription: string;
  image: string | null;
  alt: string;
}

export interface Area {
  slug: string;
  name: string;
  intro: string[];
  nearby: string[];
  metaTitle: string;
  metaDescription: string;
  image: string | null;
  alt: string;
}

export interface Review {
  id: string;
  text: string;
  source: string;
  rating: number;
  tags: string[];
  featured: boolean;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  caption: string;
  beforeImage: string | null;
  afterImage: string | null;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TrustStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
