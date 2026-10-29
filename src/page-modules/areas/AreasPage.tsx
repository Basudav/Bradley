import React from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AreasIntro } from "./components/AreasIntro";
import { AreasGrid } from "./components/AreasGrid";
import { CoverageNote } from "./components/CoverageNote";

export function AreasPage() {
  return (
    <>
      <PageHero
        title="Areas We Cover"
        lead="Window, gutter, door and fascia cleaning across Ilkeston, Long Eaton, Draycott, Stapleford, Spondon and surrounding areas."
        breadcrumbs={[{ label: "Areas We Cover" }]}
      />

      <Section>
        <Container>
          <AreasIntro />
          <AreasGrid />
          <CoverageNote />
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
