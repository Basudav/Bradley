import React from "react";
import { Card } from "@/components/ui/Card";
import { Heart } from "lucide-react";

export function AboutCommunity() {
  return (
    <Card className="p-6 sm:p-8 bg-orange-50/70 border-orange-200 text-left">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-orange-500 text-navy flex items-center justify-center">
          <Heart className="w-5 h-5 text-navy" aria-hidden="true" />
        </div>
        <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
          Supporting the Local Community
        </h2>
      </div>

      <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
        Being part of the community means helping out wherever we can. Bradley&apos;s Window Cleaning proudly donated a prize of 3 months of free window cleaning to the Breaston Pre-School Christmas Raffle to support local children and families.
      </p>
    </Card>
  );
}
