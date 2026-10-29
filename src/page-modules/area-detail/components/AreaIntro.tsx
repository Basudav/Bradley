import React from "react";
import type { Area } from "@/types";

interface AreaIntroProps {
  area: Area;
}

export function AreaIntro({ area }: AreaIntroProps) {
  return (
    <div className="max-w-3xl space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed text-left">
      {area.intro.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
      <p>
        Whether you are looking for a reliable monthly or 6-weekly window cleaning round, or a one-off gutter clear, we bring our friendly service, pure-water telescopic pole reach, and streak-free finish right to your home in {area.name}.
      </p>
    </div>
  );
}
