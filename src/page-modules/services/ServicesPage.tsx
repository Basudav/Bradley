import React from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServicesIntro } from "./components/ServicesIntro";
import { ServicesGrid } from "./components/ServicesGrid";
import { OneOffOrRegular } from "./components/OneOffOrRegular";
import { faqCategories } from "@/data/faqs";

export function ServicesPage() {
  const serviceFaqs = faqCategories
    .find((c) => c.category === "Services")
    ?.items.slice(0, 4) || [];

  return (
    <>
      <PageHero
        title="Window, Gutter &amp; Fascia Cleaning Services"
        lead="Professional exterior cleaning for homes across Ilkeston, Long Eaton, Draycott, Stapleford and Spondon. Friendly, reliable, and streak-free every time."
        breadcrumbs={[{ label: "Services" }]}
      />

      <Section>
        <Container>
          <ServicesIntro />
          <ServicesGrid />
          <OneOffOrRegular />

          {/* Relevant Services FAQ */}
          <div className="mt-16 sm:mt-24 max-w-3xl mx-auto">
            <SectionHeading
              title="Frequently Asked Questions About Our Services"
              subtitle="Have questions about what we clean or how we work? Here are answers to common questions."
            />
            <div className="bg-white rounded-2xl border border-blue-100 shadow-card p-4 sm:p-6">
              <Accordion items={serviceFaqs} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
