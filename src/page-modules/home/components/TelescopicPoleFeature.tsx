import React from "react";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CheckCircle2, ArrowUpFromLine } from "lucide-react";

export function TelescopicPoleFeature() {
  const points = [
    "Reaches windows up to 3 storeys high",
    "Cleaned safely from the ground",
    "No ladders, no hassle, no damage to sills or lawns",
    "Ideal for Velux windows and conservatory roofs",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white" aria-labelledby="telescopic-pole-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image (order 2 on mobile, order 1 on lg) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-blue-100">
              <ImagePlaceholder
                aspect="4/3"
                label="Telescopic Pole System reaching 3 storeys"
                icon={ArrowUpFromLine}
              />
            </div>
          </div>

          {/* Text Content (order 1 on mobile, order 2 on lg) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              Advanced Reach Technology
            </div>

            <h2
              id="telescopic-pole-heading"
              className="text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-semibold text-balance text-navy"
            >
              Reach up to 3 storeys, safely from the ground
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              Our high-reach telescopic pole system allows us to clean windows up to 3 storeys high safely from the ground. Velux windows, top-floor bedroom windows, and awkward conservatory roofs are all cleaned with ease.
            </p>

            <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Quote from our customers: &ldquo;no ladders, no hassle&rdquo;.
            </p>

            <ul className="mt-6 space-y-3 w-full">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-navy text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary" size="md">
                Ask about high windows
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
