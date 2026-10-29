import React from "react";
import { CheckCircle2 } from "lucide-react";

export function ServicesIntro() {
  const points = [
    "Free, no-obligation quotes for all jobs",
    "One-off cleans or regular rounds welcome",
    "Fully insured for your peace of mind",
  ];

  return (
    <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
      <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
        We provide a full exterior cleaning service for your home. From spotless windows and bright sills to cleared gutters and refreshed fascias, we take pride in delivering a thorough, streak-free clean every time.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-8">
        {points.map((point) => (
          <div key={point} className="flex items-center gap-2 text-sm sm:text-base font-medium text-navy">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
