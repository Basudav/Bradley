import React from "react";
import type { GalleryItem } from "@/types";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

interface BeforeAfterCardProps {
  item: GalleryItem;
}

export function BeforeAfterCard({ item }: BeforeAfterCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-4 shadow-card overflow-hidden">
      <BeforeAfterSlider
        beforeImage={item.beforeImage}
        afterImage={item.afterImage}
        beforeAlt={`Before cleaning ${item.title}`}
        afterAlt={`After cleaning ${item.title}`}
      />
      <div className="pt-4 pb-1 text-left">
        <h3 className="font-heading font-semibold text-lg text-navy">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
          {item.caption}
        </p>
      </div>
    </div>
  );
}
