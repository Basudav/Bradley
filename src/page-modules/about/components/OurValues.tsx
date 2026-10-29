import React from "react";
import { Card } from "@/components/ui/Card";
import { ThumbsUp, Clock, Sparkles, Eye } from "lucide-react";

export function OurValues() {
  const values = [
    {
      icon: ThumbsUp,
      title: "Friendly Service",
      description:
        "Approachable, polite, and always happy to chat through what your property needs.",
    },
    {
      icon: Clock,
      title: "Reliable Rounds",
      description:
        "We turn up when scheduled. If weather or traffic causes a delay, we keep you informed.",
    },
    {
      icon: Sparkles,
      title: "Streak-Free Every Time",
      description:
        "High standards with pure water cleaning. Crystal clear glass on every visit.",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description:
        "We scrub sills, wipe frames, clean doors by hand, and remove old marks and stickers.",
    },
  ];

  return (
    <div className="text-left">
      <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-navy mb-6">
        What We Stand For
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((val) => {
          const Icon = val.icon;
          return (
            <Card key={val.title} hover className="flex flex-col items-start p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy">
                {val.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {val.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
