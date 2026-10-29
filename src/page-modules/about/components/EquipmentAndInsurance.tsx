import React from "react";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, ArrowUpFromLine } from "lucide-react";

export function EquipmentAndInsurance() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
      <Card hover className="p-6 sm:p-8">
        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
          <ArrowUpFromLine className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-navy">
          High-Reach Telescopic System
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
          We use modern pure-water water-fed telescopic poles that can reach windows up to 3 storeys high safely from the ground. This means no ladders propped against your walls or gutters, avoiding any risk of damage and preserving your privacy.
        </p>
      </Card>

      <Card hover className="p-6 sm:p-8">
        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
          <ShieldCheck className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-navy">
          Fully Insured
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
          Bradley&apos;s Window Cleaning is fully insured for residential exterior cleaning. You can have total peace of mind that your home and property are handled with professional care and complete protection.
        </p>
      </Card>
    </div>
  );
}
