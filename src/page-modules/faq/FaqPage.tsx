import React from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqPageSchema } from "@/lib/schema";
import { allFaqItems } from "@/data/faqs";
import { FaqCategoryList } from "./components/FaqCategoryList";
import { FaqStillAsking } from "./components/FaqStillAsking";

export function FaqPage() {
  const faqSchema = buildFaqPageSchema(allFaqItems);

  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero
        title="Frequently Asked Questions"
        lead="Answers to common questions about our window cleaning rounds, gutter clearing, telescopic pole reach, insurance, and booking."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <Section>
        <Container>
          <FaqCategoryList />
          <FaqStillAsking />
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
