import type { Metadata } from "next";
import { GalleryPage } from "@/page-modules/gallery/GalleryPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Before & After Window Cleaning Photos",
  description:
    "See streak-free windows, bright frames and sills, and clear gutters from recent jobs around Ilkeston and Long Eaton.",
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
  openGraph: {
    title: "Before & After Window Cleaning Photos | Bradley's Window Cleaning",
    description:
      "See streak-free windows, bright frames and sills, and clear gutters from recent jobs around Ilkeston and Long Eaton.",
    url: `${siteConfig.url}/gallery`,
  },
};

export default function Page() {
  return <GalleryPage />;
}
