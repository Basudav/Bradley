import React from "react";
import { Card } from "@/components/ui/Card";

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

export function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <Card className="p-6 sm:p-8 text-left space-y-3">
      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
        {title}
      </h2>
      <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
        {children}
      </div>
    </Card>
  );
}
