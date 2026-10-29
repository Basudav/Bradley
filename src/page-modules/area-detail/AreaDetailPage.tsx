import React from "react";
import type { Area } from "@/types";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { AreaIntro } from "./components/AreaIntro";
import { AreaServicesGrid } from "./components/AreaServicesGrid";
import { AreaReviewHighlight } from "./components/AreaReviewHighlight";
import { NearbyAreas } from "./components/NearbyAreas";

interface AreaDetailPageProps {
  area: Area;
}

export function AreaDetailPage({ area }: AreaDetailPageProps) {
  return (
    <>
      <PageHero
        title={`Window Cleaner in ${area.name}`}
        lead={area.metaDescription}
        breadcrumbs={[
          { label: "Areas We Cover", href: "/areas" },
          { label: area.name },
        ]}
      >
        <ButtonLink href="/contact" variant="primary" size="md">
          Get a Free Quote
        </ButtonLink>
        <WhatsAppButton size="md">WhatsApp Us</WhatsAppButton>
        <CallButton variant="outline" size="md" showNumber />
      </PageHero>

      <Section>
        <Container className="space-y-12 sm:space-y-16">
          <AreaIntro area={area} />
          <AreaServicesGrid areaName={area.name} />
          <AreaReviewHighlight />
          <NearbyAreas nearbySlugs={area.nearby} />
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
