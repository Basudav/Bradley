import React from "react";
import { siteConfig } from "@/config/site";
import { StarRating } from "@/components/ui/StarRating";

export function ReviewsSummary() {
  return (
    <div className="bg-blue-50/80 rounded-2xl border border-blue-100 p-6 sm:p-8 text-center max-w-xl mx-auto mb-10 sm:mb-14 shadow-sm">
      <span className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-navy block">
        {siteConfig.stats.recommendPercent}%
      </span>
      <span className="font-heading font-semibold text-lg sm:text-xl text-blue-800 block mt-1">
        recommend on Facebook
      </span>

      <div className="flex justify-center my-3">
        <StarRating rating={5} size="lg" />
      </div>

      <p className="text-sm sm:text-base text-slate-600 font-medium">
        Based on {siteConfig.stats.reviewCount} verified Facebook reviews
      </p>
    </div>
  );
}
