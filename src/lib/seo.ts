import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface SeoParams {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

/**
 * Generate page-level metadata for Next.js.
 */
export function generatePageMeta({
  title,
  description,
  path,
  noindex = false,
}: SeoParams): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
  };
}
