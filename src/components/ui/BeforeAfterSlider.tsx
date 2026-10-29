"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface BeforeAfterSliderProps {
  beforeImage: string | null;
  afterImage: string | null;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before cleaning",
  afterAlt = "After cleaning",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPosition(Number(e.target.value));
    },
    [],
  );

  /* Both images missing – show side-by-side placeholders */
  if (!beforeImage && !afterImage) {
    return (
      <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
        <ImagePlaceholder aspect="4/3" label="Before" />
        <ImagePlaceholder aspect="4/3" label="After" />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden select-none touch-pan-y"
      style={{ "--slider-position": `${position}%` } as React.CSSProperties}
    >
      {/* Before image (full width, behind) */}
      {beforeImage ? (
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0">
          <ImagePlaceholder aspect="auto" label="Before" className="h-full w-full rounded-none" />
        </div>
      )}

      {/* After image (clipped by slider position) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 var(--slider-position))` }}
      >
        {afterImage ? (
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <ImagePlaceholder aspect="auto" label="After" className="h-full w-full rounded-none" />
        )}
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 rounded-full bg-navy/70 px-3 py-1 text-xs font-bold text-white">
        Before
      </span>
      <span className="absolute top-3 right-3 rounded-full bg-navy/70 px-3 py-1 text-xs font-bold text-white">
        After
      </span>

      {/* Slider handle – divider line with circle grip */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none"
        style={{ left: `var(--slider-position)` }}
      >
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "flex h-11 w-11 items-center justify-center rounded-full",
            "border-2 border-white bg-navy/60 backdrop-blur-sm",
          )}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
          </svg>
        </div>
      </div>

      {/* Range input (invisible overlay for interaction) */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={handleChange}
        aria-label="Compare before and after"
        className="absolute inset-0 w-full h-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
