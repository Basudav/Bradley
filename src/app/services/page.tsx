import type { Metadata } from "next";
import { ServicesPage } from "@/page-modules/services/ServicesPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Window, Gutter & Fascia Cleaning Services",
  description:
    "Window cleaning, gutter clearing, fascias and soffits, doors, conservatories and Velux windows in Ilkeston and nearby. One-off or regular cleans. Free quotes.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Window, Gutter & Fascia Cleaning Services | Bradley's Window Cleaning",
    description:
      "Window cleaning, gutter clearing, fascias and soffits, doors, conservatories and Velux windows in Ilkeston and nearby. One-off or regular cleans. Free quotes.",
    url: `${siteConfig.url}/services`,
  },
};

export default function Page() {
  return <ServicesPage />;
}
