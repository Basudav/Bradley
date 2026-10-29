import React from "react";
import { areas } from "@/data/areas";
import { AreaCard } from "@/components/ui/AreaCard";

export function AreasGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {areas.map((area) => (
        <AreaCard key={area.slug} area={area} />
      ))}
    </div>
  );
}
