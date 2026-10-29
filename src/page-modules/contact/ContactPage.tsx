import React from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactMethods } from "./components/ContactMethods";
import { QuoteForm } from "./components/QuoteForm";
import { ContactAreaNote } from "./components/ContactAreaNote";

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Get Your Free Quote"
        lead="Contact Bradley's Window Cleaning today for streak-free windows, cleared gutters, or refreshed fascias across Ilkeston, Long Eaton, and nearby areas."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Form Column (First on desktop, second on mobile) */}
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
              <QuoteForm />
              <ContactAreaNote />
            </div>

            {/* Direct Contact Methods Column (First on mobile, sticky on desktop) */}
            <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28">
              <ContactMethods />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
