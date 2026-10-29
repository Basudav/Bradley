"use client";

import { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="divide-y divide-blue-100 border-t border-b border-blue-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `accordion-panel-${index}`;
        const triggerId = `accordion-trigger-${index}`;

        return (
          <div key={triggerId}>
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-heading font-semibold text-base sm:text-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 rounded-lg"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-blue-600 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-4 text-slate-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
