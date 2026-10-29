import type { Metadata } from "next";
import { AreasPage } from "@/page-modules/areas/AreasPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Areas We Cover: Ilkeston, Long Eaton, Draycott, Stapleford & Spondon",
  description:
    "Local window and gutter cleaner covering Ilkeston, Long Eaton, Draycott, Stapleford, Spondon and surrounding areas across Erewash. Message us for a free quote.",
  alternates: {
    canonical: `${siteConfig.url}/areas`,
  },
  openGraph: {
    title: "Areas We Cover: Ilkeston, Long Eaton, Draycott, Stapleford & Spondon | Bradley's Window Cleaning",
    description:
      "Local window and gutter cleaner covering Ilkeston, Long Eaton, Draycott, Stapleford, Spondon and surrounding areas across Erewash. Message us for a free quote.",
    url: `${siteConfig.url}/areas`,
  },
};

export default function Page() {
  return <AreasPage />;
}
