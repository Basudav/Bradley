import React from "react";
import { Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

interface WhatsIncludedProps {
  included: string[];
}

export function WhatsIncluded({ included }: WhatsIncludedProps) {
  return (
    <Card className="p-6 sm:p-8 bg-gradient-to-br from-white to-blue-50/50 border-blue-200">
      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy mb-4 text-left">
        What&apos;s Included in This Service
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
        {included.map((item) => (
          <li key={item} className="flex items-start gap-3 text-navy text-sm sm:text-base">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
