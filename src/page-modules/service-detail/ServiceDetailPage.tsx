import React from "react";
import type { Service } from "@/types";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceSchema } from "@/lib/schema";
import { ServiceDetailIntro } from "./components/ServiceDetailIntro";
import { WhatsIncluded } from "./components/WhatsIncluded";
import { ServiceBenefits } from "./components/ServiceBenefits";
import { ServiceAvailableAreas } from "./components/ServiceAvailableAreas";
import { RelatedServices } from "./components/RelatedServices";
import { ServiceDetailFaq } from "./components/ServiceDetailFaq";

interface ServiceDetailPageProps {
  service: Service;
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const schema = buildServiceSchema(service);

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        title={`${service.title} in Ilkeston & Nearby`}
        lead={service.summary}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
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
          <ServiceDetailIntro service={service} />
          <WhatsIncluded included={service.included} />
          <ServiceBenefits />
          <ServiceAvailableAreas serviceTitle={service.title} />
          <ServiceDetailFaq serviceTitle={service.title} />
          <RelatedServices currentSlug={service.slug} />
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
