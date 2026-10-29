import type { Metadata } from "next";
import { ReviewsPage } from "@/page-modules/reviews/ReviewsPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Customer Reviews: 100% Recommend on Facebook",
  description:
    "Read what customers say about Bradley's Window Cleaning: 100% recommend from 29 Facebook reviews for windows, gutters, doors and conservatories.",
  alternates: {
    canonical: `${siteConfig.url}/reviews`,
  },
  openGraph: {
    title: "Customer Reviews: 100% Recommend on Facebook | Bradley's Window Cleaning",
    description:
      "Read what customers say about Bradley's Window Cleaning: 100% recommend from 29 Facebook reviews for windows, gutters, doors and conservatories.",
    url: `${siteConfig.url}/reviews`,
  },
};

export default function Page() {
  return <ReviewsPage />;
}
