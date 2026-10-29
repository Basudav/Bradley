import React from "react";
import { services } from "@/data/services";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ServicesOverview() {
  return (
    <Section id="services-overview" ariaLabelledBy="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          title="Our Window, Gutter & Fascia Cleaning Services"
          subtitle="Streak-free glass, clean gutters, and bright sills for homes across Ilkeston, Long Eaton and surrounding areas."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <ButtonLink href="/services" variant="outline" size="lg">
            View all services
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
