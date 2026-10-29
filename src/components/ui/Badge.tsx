import { cn } from "@/lib/utils";

const variantClasses = {
  default: "bg-blue-50 text-blue-700",
  blue: "bg-blue-50 text-blue-700",
  orange: "bg-orange-50 text-orange-700",
} as const;

type BadgeVariant = keyof typeof variantClasses;

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "text-xs font-bold px-3 py-1 rounded-full",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
