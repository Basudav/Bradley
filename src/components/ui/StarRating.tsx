import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

type StarSize = keyof typeof sizeClasses;

interface StarRatingProps {
  rating: number;
  size?: StarSize;
}

export function StarRating({ rating, size = "md" }: StarRatingProps) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClasses[size],
            i < rating
              ? "fill-orange-500 text-orange-500"
              : "fill-slate-200 text-slate-200",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
