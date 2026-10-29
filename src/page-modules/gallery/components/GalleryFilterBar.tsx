"use client";

import React from "react";
import { galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

interface GalleryFilterBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function GalleryFilterBar({
  activeCategory,
  onSelectCategory,
}: GalleryFilterBarProps) {
  return (
    <div
      role="tablist"
      aria-label="Gallery category filters"
      className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 mb-8 sm:mb-12 justify-start sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0"
    >
      {galleryCategories.map((cat) => {
        const isSelected = activeCategory === cat.value;
        return (
          <button
            key={cat.value}
            role="tab"
            aria-selected={isSelected}
            aria-pressed={isSelected}
            onClick={() => onSelectCategory(cat.value)}
            className={cn(
              "whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all shrink-0 min-h-11 touch-manipulation focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300",
              isSelected
                ? "bg-blue-700 text-white shadow-sm"
                : "bg-blue-50 text-navy hover:bg-blue-100 hover:text-blue-800"
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
