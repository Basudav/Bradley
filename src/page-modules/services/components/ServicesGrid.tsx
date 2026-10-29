import React from "react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
