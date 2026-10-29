"use client";

import React, { useState } from "react";
import { galleryItems } from "@/data/gallery";
import { GalleryFilterBar } from "./GalleryFilterBar";
import { BeforeAfterCard } from "./BeforeAfterCard";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function BeforeAfterGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      <GalleryFilterBar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <BeforeAfterCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-14 sm:mt-16 text-center bg-blue-50/80 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-blue-100">
        <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
          Want to see your windows like this?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-700">
          Get in touch today for a fast, free, no-obligation quote.
        </p>
        <div className="mt-6">
          <ButtonLink href="/contact" variant="primary" size="lg">
            Get your free quote
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
