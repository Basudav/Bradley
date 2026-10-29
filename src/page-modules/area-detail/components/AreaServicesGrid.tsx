import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

interface AreaServicesGridProps {
  areaName: string;
}

export function AreaServicesGrid({ areaName }: AreaServicesGridProps) {
  return (
    <div className="text-left">
      <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-navy mb-4">
        Cleaning Services Available in {areaName}
      </h2>
      <p className="text-slate-600 mb-8 max-w-2xl text-sm sm:text-base">
        All our core exterior cleaning services are available for homes and bungalows throughout {areaName}.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.slug} hover className="flex flex-col items-start p-5 sm:p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                {service.summary}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-orange-600 transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
