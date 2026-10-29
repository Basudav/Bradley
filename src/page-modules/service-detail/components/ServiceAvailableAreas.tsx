import React from "react";
import Link from "next/link";
import { areas } from "@/data/areas";
import { MapPin } from "lucide-react";

interface ServiceAvailableAreasProps {
  serviceTitle: string;
}

export function ServiceAvailableAreas({ serviceTitle }: ServiceAvailableAreasProps) {
  return (
    <div className="bg-blue-50/80 rounded-2xl border border-blue-100 p-6 sm:p-8 text-left">
      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
        {serviceTitle} Available Across These Areas
      </h2>
      <p className="mt-2 text-sm sm:text-base text-slate-700">
        We provide regular rounds and one-off visits across the following towns and surrounding areas across Erewash:
      </p>

      <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
        {areas.map((area) => (
          <Link
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-blue-200 text-sm font-semibold text-navy hover:text-orange-600 hover:border-orange-500 transition-colors shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-orange-500" aria-hidden="true" />
            <span>{area.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
