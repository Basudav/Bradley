import React from "react";
import { ShieldCheck, ThumbsUp, Sparkles, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";

export function HeroTrustChips() {
  return (
    <div className="grid grid-cols-2 gap-3 pt-6 border-t border-blue-100/80">
      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-navy">
        <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" />
        <span>Fully insured</span>
      </div>

      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-navy">
        <ThumbsUp className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" />
        <span>
          {siteConfig.stats.recommendPercent}% recommend ({siteConfig.stats.reviewCount} reviews)
        </span>
      </div>

      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-navy">
        <Sparkles className="w-5 h-5 text-orange-500 shrink-0" aria-hidden="true" />
        <span>Free quotes</span>
      </div>

      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-navy">
        <Heart className="w-5 h-5 text-rose-500 shrink-0" aria-hidden="true" />
        <span>Local family business</span>
      </div>
    </div>
  );
}
