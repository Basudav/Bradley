import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, HelpCircle, Shield } from "lucide-react";

export function ContactAreaNote() {
  return (
    <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-6 text-left space-y-4">
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <h3 className="font-heading font-semibold text-base text-navy">
            Areas Covered
          </h3>
          <p className="mt-1 text-sm text-slate-700 leading-relaxed">
            {siteConfig.serviceAreaNames.join(", ")} and surrounding areas across Erewash.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-blue-100 flex flex-wrap gap-4 text-xs sm:text-sm font-medium text-blue-800">
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 hover:text-orange-600 transition-colors"
        >
          <HelpCircle className="w-4 h-4" aria-hidden="true" />
          <span>Read our FAQs</span>
        </Link>

        <Link
          href="/privacy-policy"
          className="inline-flex items-center gap-1.5 hover:text-orange-600 transition-colors"
        >
          <Shield className="w-4 h-4" aria-hidden="true" />
          <span>Privacy Policy</span>
        </Link>
      </div>
    </div>
  );
}
