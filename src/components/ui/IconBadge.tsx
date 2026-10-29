import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const variantClasses = {
  blue: "bg-blue-50 text-blue-600",
  orange: "bg-orange-50 text-orange-600",
  navy: "bg-navy text-white",
} as const;

const sizeClasses = {
  sm: "w-10 h-10 rounded-lg",
  md: "w-12 h-12 rounded-xl",
  lg: "w-14 h-14 rounded-2xl",
} as const;

const iconSizeClasses = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
} as const;

type IconBadgeVariant = keyof typeof variantClasses;
type IconBadgeSize = keyof typeof sizeClasses;

interface IconBadgeProps {
  icon: LucideIcon;
  variant?: IconBadgeVariant;
  size?: IconBadgeSize;
  className?: string;
}

export function IconBadge({
  icon: Icon,
  variant = "blue",
  size = "md",
  className,
}: IconBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      <Icon className={iconSizeClasses[size]} aria-hidden="true" />
    </div>
  );
}
