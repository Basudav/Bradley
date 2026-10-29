import React from "react";
import type { Service } from "@/types";

interface ServiceDetailIntroProps {
  service: Service;
}

export function ServiceDetailIntro({ service }: ServiceDetailIntroProps) {
  return (
    <div className="max-w-3xl space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed text-left">
      {service.intro.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </div>
  );
}
