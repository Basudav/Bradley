import React from "react";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Calendar, Sparkles } from "lucide-react";

export function OneOffOrRegular() {
  return (
    <div className="mt-14 sm:mt-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl leading-tight sm:text-3xl font-heading font-semibold text-navy">
          Flexible Cleaning: One-Off or Regular
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Choose what works best for your home. We are always happy to tailor our visits to your schedule.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {/* One-off Clean */}
        <Card hover className="flex flex-col items-start p-6 text-left">
          <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6" aria-hidden="true" />
          </div>

          <h3 className="text-xl font-heading font-semibold text-navy">
            One-Off Deep Clean
          </h3>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed flex-1">
            Ideal if your windows haven&apos;t been cleaned in a while, or before an event, moving house, or after building work. We thoroughly clean glass, wipe frames, scrub and rinse sills, and remove old marks.
          </p>

          <div className="mt-6 w-full">
            <ButtonLink href="/contact" variant="outline" size="md" fullWidth>
              Book a one-off clean
            </ButtonLink>
          </div>
        </Card>

        {/* Regular Cleans */}
        <Card hover className="flex flex-col items-start p-6 text-left border-blue-200">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6" aria-hidden="true" />
          </div>

          <h3 className="text-xl font-heading font-semibold text-navy">
            Regular Window Rounds
          </h3>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed flex-1">
            Join our regular round across Ilkeston, Long Eaton, Draycott, Stapleford and Spondon. We keep your windows, sills and frames sparkling year-round with reliable, friendly visits.
          </p>

          <div className="mt-6 w-full">
            <ButtonLink href="/contact" variant="primary" size="md" fullWidth>
              Join a regular round
            </ButtonLink>
          </div>
        </Card>
      </div>
    </div>
  );
}
