import React from "react";
import { Container } from "@/components/ui/Container";
import { Heart } from "lucide-react";

export function CommunitySection() {
  return (
    <section
      className="py-12 sm:py-16 bg-orange-50/80 border-y border-orange-100"
      aria-labelledby="community-heading"
    >
      <Container className="max-w-3xl text-center">
        <div className="w-14 h-14 rounded-2xl bg-orange-500 text-navy flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Heart className="w-7 h-7 text-navy" aria-hidden="true" />
        </div>

        <h2
          id="community-heading"
          className="text-2xl leading-tight sm:text-3xl md:text-4xl font-heading font-semibold text-balance text-navy"
        >
          Proud to support our local community
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
          As a local family business, we love giving back to our community. Bradley&apos;s Window Cleaning recently donated a prize of 3 months free window cleaning to the Breaston Pre-School Christmas Raffle.
        </p>

        <p className="mt-3 text-sm sm:text-base font-medium text-orange-800">
          Rooted in our community &middot; Friendly &middot; Reliable
        </p>
      </Container>
    </section>
  );
}
