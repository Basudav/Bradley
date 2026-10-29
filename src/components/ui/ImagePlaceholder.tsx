import type { LucideIcon } from "lucide-react";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  aspect?: string;
  label?: string;
  icon?: LucideIcon;
  className?: string;
}

export function ImagePlaceholder({
  aspect = "4/3",
  label = "Photo coming soon",
  icon: Icon = Camera,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-orange-100",
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      {/* Halftone dots overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.28)_1.5px,transparent_1.5px)] bg-[length:14px_14px] pointer-events-none"
        aria-hidden="true"
      />
      <Icon className="h-10 w-10 text-blue-300" aria-hidden="true" />
      <span className="mt-2 text-sm text-blue-400 font-medium">{label}</span>
    </div>
  );
}
