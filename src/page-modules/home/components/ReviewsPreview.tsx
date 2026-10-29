import React from "react";
import { featuredReviews } from "@/data/reviews";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ReviewsPreview() {
  const reviewsToShow = featuredReviews.slice(0, 6);

  return (
    <Section ariaLabelledBy="reviews-preview-heading">
      <Container>
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="text-left">
            <h2
              id="reviews-preview-heading"
              className="text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-semibold text-balance text-navy"
            >
              What Our Customers Say
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-700">
              Honest feedback from local homeowners across Ilkeston and nearby.
            </p>
          </div>

          {/* Social Proof Rating */}
          <div className="flex items-center gap-3 bg-blue-50/80 px-4 py-2.5 rounded-xl border border-blue-100 self-start md:self-auto shrink-0">
            <StarRating rating={5} size="md" />
            <span className="text-sm font-semibold text-navy">
              {siteConfig.stats.recommendPercent}% recommend ({siteConfig.stats.reviewCount} reviews on Facebook)
            </span>
          </div>
        </div>

        {/* Carousel below md, grid from md */}
        <div className="-mx-4 xs:-mx-5 sm:-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 xs:px-5 sm:px-6 pb-4 scrollbar-none md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3 md:gap-6">
          {reviewsToShow.map((review) => (
            <div
              key={review.id}
              className="w-[85%] xs:w-[75%] shrink-0 snap-center md:w-auto flex"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <ButtonLink href="/reviews" variant="outline" size="lg">
            Read more reviews
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
