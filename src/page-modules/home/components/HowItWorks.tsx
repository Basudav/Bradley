import React from "react";
import { processSteps } from "@/data/process";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function HowItWorks() {
  return (
    <Section className="bg-white" ariaLabelledBy="how-it-works-heading">
      <Container>
        <SectionHeading
          id="how-it-works-heading"
          title="Getting Your Free Quote Is Easy"
          subtitle="From your first message to sparkling windows, we keep things simple, quick, and hassle-free."
        />

        <div className="relative">
          {/* Decorative connector line on desktop */}
          <div
            className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 border-t-2 border-dashed border-orange-200 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step} hover className="flex flex-col items-start text-left h-full">
                  {/* Step number badge */}
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-navy font-heading font-bold text-xl flex items-center justify-center shrink-0 mb-4 shadow-sm">
                    {step.step}
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>

                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-navy">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
