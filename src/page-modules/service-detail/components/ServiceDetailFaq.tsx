import React from "react";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqPageSchema } from "@/lib/schema";
import { allFaqItems } from "@/data/faqs";

interface ServiceDetailFaqProps {
  serviceTitle: string;
}

export function ServiceDetailFaq({ serviceTitle }: ServiceDetailFaqProps) {
  // Pick 3 relevant FAQs
  const relevantFaqs = allFaqItems.slice(0, 3);
  const faqSchema = buildFaqPageSchema(relevantFaqs);

  return (
    <div className="text-left">
      <JsonLd data={faqSchema} />
      <h2 className="text-2xl font-heading font-semibold text-navy mb-4">
        Questions About {serviceTitle}
      </h2>
      <div className="bg-white rounded-2xl border border-blue-100 shadow-card p-4 sm:p-6">
        <Accordion items={relevantFaqs} />
      </div>
    </div>
  );
}
