import React from "react";
import Link from "next/link";
import { areas } from "@/data/areas";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MapPin } from "lucide-react";

export function ServiceAreasPreview() {
  return (
    <Section className="bg-blue-50/70 border-y border-blue-100/60" ariaLabelledBy="areas-preview-heading">
      <Container>
        <SectionHeading
          id="areas-preview-heading"
          title="Window Cleaning Across Ilkeston, Long Eaton &amp; Beyond"
          subtitle="Regular rounds and one-off cleans across Erewash and surrounding towns."
        />

        {/* Large Area Pill Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="inline-flex items-center gap-2.5 min-h-12 px-5 sm:px-6 rounded-full bg-white border border-blue-200 text-navy font-semibold hover:border-orange-500 hover:text-orange-600 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
            >
              <MapPin className="w-4 h-4 text-orange-500" aria-hidden="true" />
              <span>{area.name}</span>
            </Link>
          ))}
        </div>

        {/* MapPin note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm sm:text-base text-slate-600 text-center">
          <MapPin className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
          <span>Serving Erewash and surrounding areas. Not sure we cover you? Just message us.</span>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <ButtonLink href="/areas" variant="secondary" size="md">
            See all areas
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
