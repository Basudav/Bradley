import React from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ReviewsSummary } from "./components/ReviewsSummary";
import { ReviewsGrid } from "./components/ReviewsGrid";
import { LeaveReviewCta } from "./components/LeaveReviewCta";

export function ReviewsPage() {
  return (
    <>
      <PageHero
        title="What Our Customers Say"
        lead="Read honest, word-for-word reviews from homeowners in Ilkeston, Long Eaton, and surrounding areas. 100% recommended on Facebook."
        breadcrumbs={[{ label: "Reviews" }]}
      />

      <Section>
        <Container>
          <ReviewsSummary />
          <ReviewsGrid />
          <LeaveReviewCta />
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
