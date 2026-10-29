import React from "react";
import { featuredReviews } from "@/data/reviews";
import { ReviewCard } from "@/components/ui/ReviewCard";

export function AreaReviewHighlight() {
  const highlights = featuredReviews.slice(0, 2);

  return (
    <div className="text-left">
      <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-navy mb-4">
        What Local Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
