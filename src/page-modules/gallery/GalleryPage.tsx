import React from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { GalleryIntro } from "./components/GalleryIntro";
import { BeforeAfterGrid } from "./components/BeforeAfterGrid";

export function GalleryPage() {
  return (
    <>
      <PageHero
        title="Before &amp; After Photos"
        lead="See the transformation on windows, frames, sills, and gutters from recent jobs across Ilkeston, Long Eaton, and nearby areas."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <Section>
        <Container>
          <GalleryIntro />
          <BeforeAfterGrid />
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
