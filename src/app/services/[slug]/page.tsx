import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { ServiceDetailPage } from "@/page-modules/service-detail/ServiceDetailPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const url = `${siteConfig.url}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.metaTitle} | Bradley's Window Cleaning`,
      description: service.metaDescription,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} | Bradley's Window Cleaning`,
      description: service.metaDescription,
    },
  };
}

export default async function Page({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
