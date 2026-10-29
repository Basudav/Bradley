import React from "react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

interface RelatedServicesProps {
  currentSlug: string;
}

export function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related = services.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <div className="text-left">
      <h2 className="text-2xl font-heading font-semibold text-navy mb-6">
        Other Services You Might Need
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
