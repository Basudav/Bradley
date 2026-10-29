import type { Metadata } from "next";
import { FaqPage } from "@/page-modules/faq/FaqPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Window Cleaning FAQs",
  description:
    "Answers about quotes, areas covered, how high we can reach, insurance, gutters, sills and booking regular or one-off cleans.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: "Window Cleaning FAQs | Bradley's Window Cleaning",
    description:
      "Answers about quotes, areas covered, how high we can reach, insurance, gutters, sills and booking regular or one-off cleans.",
    url: `${siteConfig.url}/faq`,
  },
};

export default function Page() {
  return <FaqPage />;
}
