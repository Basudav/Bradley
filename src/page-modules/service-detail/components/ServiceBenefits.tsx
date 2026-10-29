import React from "react";
import { Card } from "@/components/ui/Card";
import { Sparkles, ShieldCheck, Wallet } from "lucide-react";

export function ServiceBenefits() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Streak-Free Results",
      description:
        "We use pure water and dedicated tools so your glass dries spotless with no residue or streaks.",
    },
    {
      icon: ShieldCheck,
      title: "Fully Insured",
      description:
        "Bradley's Window Cleaning is fully insured for all work at your home, giving you complete peace of mind.",
    },
    {
      icon: Wallet,
      title: "Free Quotes",
      description:
        "No pressure, no hidden fees. We give honest, competitive quotes tailored to your property.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <Card key={benefit.title} hover className="flex flex-col items-start text-left p-6">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-navy">
              {benefit.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {benefit.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
