import type { Review } from "@/types";
import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <StarRating rating={5} />
        <blockquote className="mt-3 text-slate-700 leading-relaxed">
          &ldquo;{review.text}&rdquo;
        </blockquote>
        <p className="mt-3 text-sm font-medium text-navy">
          &mdash; Facebook customer
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-blue-100">
        <Badge variant="blue">Facebook review</Badge>
      </div>
    </Card>
  );
}
