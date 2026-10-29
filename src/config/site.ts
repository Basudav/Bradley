import type { SiteConfig } from "@/types";

/**
 * Single source of truth for every contact detail, business fact and placeholder.
 * Update this file when adding your domain, Facebook URL, postcode or photos.
 */
export const siteConfig: SiteConfig = {
  name: "Bradley's Window Cleaning",
  shortName: "Bradley's",
  tagline:
    "Making your windows, doors, fascias and gutters sparkle! - Friendly, reliable and streak-free every time!",
  description:
    "Friendly, reliable, streak-free window, gutter, fascia and door cleaning in Ilkeston, Long Eaton, Draycott, Stapleford and Spondon. Get a free quote today.",
  // TODO: Replace with your real domain
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.co.uk",
  locale: "en_GB",
  phone: {
    display: "07502 102 869",
    e164: "+447502102869",
    href: "tel:+447502102869",
    whatsappNumber: "447502102869",
  },
  email: "bradleyswindowcleaning@hotmail.com",
  address: {
    street: "Elka's Rise",
    locality: "Ilkeston",
    region: "Derbyshire",
    country: "GB",
    postalCode: "" /* TODO: Add postcode */,
    full: "Elka's Rise, Ilkeston, United Kingdom",
  },
  social: {
    facebookUrl: "" /* TODO: Add Facebook page URL */,
    messengerUrl: "" /* TODO: Add Messenger URL */,
  },
  stats: {
    recommendPercent: 100,
    reviewCount: 29,
    maxStoreys: 3,
  },
  assets: {
    logo: null /* TODO: Add /images/brand/logo.png */,
    vanPhoto: null /* TODO: Add /images/brand/van.jpg */,
    heroPhoto: "/images/my%20photo/hero.png",
  },
  serviceAreaNames: [
    "Ilkeston",
    "Long Eaton",
    "Draycott",
    "Stapleford",
    "Spondon",
  ],
};
