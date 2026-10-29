import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
} as const;

const colorClasses = {
  orange: "text-orange-500",
  white: "text-white",
} as const;

type SparkleSize = keyof typeof sizeClasses;
type SparkleColor = keyof typeof colorClasses;

interface SparkleDecorProps {
  className?: string;
  color?: SparkleColor;
  size?: SparkleSize;
  animate?: boolean;
}

export function SparkleDecor({
  className,
  color = "orange",
  size = "md",
  animate = false,
}: SparkleDecorProps) {
  return (
    <Sparkles
      className={cn(
        sizeClasses[size],
        colorClasses[color],
        size === "lg" && "hidden sm:block",
        animate && "motion-safe:animate-float-slow",
        className,
      )}
      aria-hidden="true"
    />
  );
}
