import type { Metadata } from "next";
import { AboutPage } from "@/page-modules/about/AboutPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us: Local Window Cleaning Business",
  description:
    "Meet Bradley's Window Cleaning, a friendly, reliable, fully insured local family business covering Ilkeston, Long Eaton and nearby areas.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Us: Local Window Cleaning Business | Bradley's Window Cleaning",
    description:
      "Meet Bradley's Window Cleaning, a friendly, reliable, fully insured local family business covering Ilkeston, Long Eaton and nearby areas.",
    url: `${siteConfig.url}/about`,
  },
};

export default function Page() {
  return <AboutPage />;
}
