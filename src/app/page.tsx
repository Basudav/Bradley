import type { Metadata } from "next";
import { HomePage } from "@/page-modules/home/HomePage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Window Cleaner in Ilkeston & Long Eaton | Bradley's Window Cleaning",
  },
  description:
    "Friendly, reliable, streak-free window, gutter, fascia and door cleaning in Ilkeston, Long Eaton, Draycott, Stapleford and Spondon. Get a free quote today.",
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
};

export default function Page() {
  return <HomePage />;
}
