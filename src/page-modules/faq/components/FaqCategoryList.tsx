import React from "react";
import { faqCategories } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";

export function FaqCategoryList() {
  return (
    <div className="space-y-10 sm:space-y-14 max-w-4xl mx-auto text-left">
      {faqCategories.map((cat) => (
        <div key={cat.category}>
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy mb-4 pb-2 border-b border-blue-100">
            {cat.category}
          </h2>
          <div className="bg-white rounded-2xl border border-blue-100 shadow-card p-4 sm:p-6">
            <Accordion items={cat.items} />
          </div>
        </div>
      ))}
    </div>
  );
}
