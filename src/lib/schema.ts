import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import type { FaqItem, BreadcrumbItem, Service } from "@/types";

/**
 * JSON-LD schema builders.
 * Used by the JsonLd component to output structured data.
 */

export function buildLocalBusinessSchema() {
  const business: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone.e164,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
      ...(siteConfig.address.postalCode
        ? { postalCode: siteConfig.address.postalCode }
        : {}),
    },
    areaServed: siteConfig.serviceAreaNames.map((name) => ({
      "@type": "City",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window Cleaning Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
        },
      })),
    },
  };

  // Add logo if available
  if (siteConfig.assets.logo) {
    business.image = `${siteConfig.url}${siteConfig.assets.logo}`;
    business.logo = `${siteConfig.url}${siteConfig.assets.logo}`;
  }

  // Add sameAs for social profiles
  const sameAs: string[] = [];
  if (siteConfig.social.facebookUrl) {
    sameAs.push(siteConfig.social.facebookUrl);
  }
  if (sameAs.length > 0) {
    business.sameAs = sameAs;
  }

  return business;
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `${siteConfig.url}${item.href}` }
        : {}),
    })),
  };
}

export function buildFaqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
    },
    areaServed: siteConfig.serviceAreaNames.map((name) => ({
      "@type": "City",
      name,
    })),
  };
}
