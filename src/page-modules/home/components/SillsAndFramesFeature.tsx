import React from "react";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CheckCircle2, Droplets } from "lucide-react";

export function SillsAndFramesFeature() {
  const points = [
    "Sills are properly cleaned and rinsed, never just wiped",
    "Frames scrubbed to remove dirt, algae, and grime",
    "Old stubborn stickers and adhesive marks removed",
    "Leaves your uPVC frames looking bright white again",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-orange-50/70 border-y border-orange-100/60" aria-labelledby="sills-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content (left on lg) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-4">
              Attention to Detail
            </div>

            <h2
              id="sills-heading"
              className="text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-semibold text-balance text-navy"
            >
              It&apos;s not just the glass, it&apos;s the sills
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              Many cleaners only wipe the panes and leave the sills dirty. At Bradley&apos;s Window Cleaning, we take pride in doing the job thoroughly. Every clean includes glass, frames, and deep sill washing.
            </p>

            <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              We rinse everything down with pure water and take the extra time to remove old marks so your frames look bright and fresh.
            </p>

            <ul className="mt-6 space-y-3 w-full">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-navy text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary" size="md">
                Get a free quote
              </ButtonLink>
            </div>
          </div>

          {/* Image (right on lg) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-orange-200/50">
              <ImagePlaceholder
                aspect="4/3"
                label="Deep clean on frames and sills"
                icon={Droplets}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
