import React from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { OurStory } from "./components/OurStory";
import { OurValues } from "./components/OurValues";
import { VanBranding } from "./components/VanBranding";
import { EquipmentAndInsurance } from "./components/EquipmentAndInsurance";
import { AboutCommunity } from "./components/AboutCommunity";

export function AboutPage() {
  return (
    <>
      <PageHero
        title="About Bradley's Window Cleaning"
        lead="A friendly, reliable, and fully insured local family business dedicated to keeping windows, doors, gutters and fascias sparkling across Ilkeston and nearby areas."
        breadcrumbs={[{ label: "About" }]}
      />

      <Section>
        <Container className="space-y-12 sm:space-y-16">
          <OurStory />
          <OurValues />
          <VanBranding />
          <EquipmentAndInsurance />
          <AboutCommunity />
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
