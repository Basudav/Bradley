import React from "react";
import { siteConfig } from "@/config/site";

export function OurStory() {
  return (
    <div className="max-w-3xl space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed text-left">
      <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-navy mb-4">
        Our Story
      </h2>
      <p>
        {siteConfig.name} is a local family business based at Elka&apos;s Rise in Ilkeston. We started our exterior cleaning service to provide local homeowners across Ilkeston, Long Eaton, Draycott, Stapleford, Spondon and Erewash with a friendly, dependable service that gets results streak-free every single time.
      </p>
      <p>
        We believe in taking real care over every visit. That means cleaning not just the glass, but giving the sills and frames the thorough scrub and rinse they deserve. From regular window rounds to one-off deep cleans, gutter clears, and conservatory roofs, we take pride in treating every home like our own.
      </p>
    </div>
  );
}
