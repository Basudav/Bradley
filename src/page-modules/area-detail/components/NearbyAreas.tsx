import React from "react";
import Link from "next/link";
import { areas } from "@/data/areas";
import { MapPin } from "lucide-react";

interface NearbyAreasProps {
  nearbySlugs: string[];
}

export function NearbyAreas({ nearbySlugs }: NearbyAreasProps) {
  const nearbyList = areas.filter((a) => nearbySlugs.includes(a.slug));

  if (nearbyList.length === 0) return null;

  return (
    <div className="bg-blue-50/70 rounded-2xl border border-blue-100 p-6 sm:p-8 text-left">
      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
        Nearby Towns We Also Cover
      </h2>
      <p className="mt-2 text-sm sm:text-base text-slate-700">
        We also run regular rounds in the neighboring communities:
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {nearbyList.map((nearby) => (
          <Link
            key={nearby.slug}
            href={`/areas/${nearby.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-blue-200 text-sm font-semibold text-navy hover:text-orange-600 hover:border-orange-500 transition-colors shadow-sm"
          >
            <MapPin className="w-4 h-4 text-orange-500" aria-hidden="true" />
            <span>Window Cleaner in {nearby.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
