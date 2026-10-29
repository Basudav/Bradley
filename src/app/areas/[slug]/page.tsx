import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas } from "@/data/areas";
import { siteConfig } from "@/config/site";
import { AreaDetailPage } from "@/page-modules/area-detail/AreaDetailPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    return {
      title: "Area Not Found",
    };
  }

  const url = `${siteConfig.url}/areas/${area.slug}`;

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${area.metaTitle} | Bradley's Window Cleaning`,
      description: area.metaDescription,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${area.metaTitle} | Bradley's Window Cleaning`,
      description: area.metaDescription,
    },
  };
}

export default async function Page({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return <AreaDetailPage area={area} />;
}
