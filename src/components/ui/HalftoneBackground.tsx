import { cn } from "@/lib/utils";

interface HalftoneBackgroundProps {
  className?: string;
}

export function HalftoneBackground({ className }: HalftoneBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.28)_1.5px,transparent_1.5px)] bg-[length:14px_14px] pointer-events-none",
        className,
      )}
      aria-hidden="true"
    />
  );
}
