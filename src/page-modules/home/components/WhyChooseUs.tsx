import React from "react";
import { whyChooseUsItems } from "@/data/whyChooseUs";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

export function WhyChooseUs() {
  return (
    <Section className="bg-blue-50/70" ariaLabelledBy="why-choose-us-heading">
      <Container>
        <SectionHeading
          id="why-choose-us-heading"
          title="Why Local Customers Choose Bradley's"
          subtitle="We are a friendly, reliable local business. We turn up on time, pay attention to every detail, and never leave streaks behind."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {whyChooseUsItems.map((item) => (
            <Card key={item.title} hover className="flex flex-col items-start text-left">
              <IconBadge icon={item.icon} variant="orange" size="md" className="mb-4" />
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
