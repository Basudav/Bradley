import React from "react";
import { reviews } from "@/data/reviews";
import { ReviewCard } from "@/components/ui/ReviewCard";

export function ReviewsGrid() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
      {reviews.map((review) => (
        <div key={review.id} className="mb-6 break-inside-avoid">
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  );
}
