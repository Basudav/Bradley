import React from "react";
import { trustStats } from "@/data/trust";
import { Container } from "@/components/ui/Container";

export function TrustStatsBar() {
  return (
    <div className="relative z-20 -mt-8 sm:-mt-10 mb-8 sm:mb-12">
      <Container>
        <div className="rounded-2xl border border-blue-100 bg-white shadow-card p-4 xs:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-blue-100">
            {trustStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center px-2 sm:px-4 ${
                    idx > 0 && idx % 2 === 0 ? "pt-4 sm:pt-0" : ""
                  } ${idx % 2 === 1 ? "pt-4 sm:pt-0" : ""}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-navy">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
