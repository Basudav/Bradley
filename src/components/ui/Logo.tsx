import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
}

export function Logo({ variant = "default", className }: LogoProps) {
  if (siteConfig.assets.logo) {
    return (
      <Image
        src={siteConfig.assets.logo}
        alt={siteConfig.name}
        width={48}
        height={48}
        className={cn("h-10 w-auto lg:h-12", className)}
        priority
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {/* Inline SVG badge – blue circle with orange sparkle */}
      <svg
        viewBox="0 0 40 40"
        className="h-10 w-10 lg:h-12 lg:w-12 shrink-0"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="20" fill="#135F93" />
        {/* Four-point sparkle / star shape */}
        <path
          d="M20 8 L22.5 17.5 L32 20 L22.5 22.5 L20 32 L17.5 22.5 L8 20 L17.5 17.5 Z"
          fill="#F27414"
        />
      </svg>
      <span
        className={cn(
          "font-heading font-bold text-base lg:text-lg leading-tight",
          variant === "light" ? "text-white" : "text-navy",
        )}
      >
        Bradley&apos;s
        <br />
        <span className="text-sm lg:text-base font-semibold">
          Window Cleaning
        </span>
      </span>
    </span>
  );
}
