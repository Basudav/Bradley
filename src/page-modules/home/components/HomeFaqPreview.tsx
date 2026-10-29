import React from "react";
import { allFaqItems } from "@/data/faqs";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeFaqPreview() {
  const topFaqs = allFaqItems.slice(0, 5);

  return (
    <Section ariaLabelledBy="home-faq-heading">
      <Container className="max-w-4xl">
        <SectionHeading
          id="home-faq-heading"
          title="Common Questions"
          subtitle="Everything you need to know about our cleaning rounds, booking, and reach."
        />

        <div className="bg-white rounded-2xl border border-blue-100 shadow-card p-4 sm:p-6">
          <Accordion items={topFaqs} />
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <ButtonLink href="/faq" variant="outline" size="md">
            See all FAQs
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
