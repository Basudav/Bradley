import React from "react";
import { siteConfig } from "@/config/site";
import { FaFacebook } from "react-icons/fa6";

export function LeaveReviewCta() {
  if (!siteConfig.social.facebookUrl) {
    return null;
  }

  return (
    <div className="mt-14 sm:mt-16 text-center bg-blue-50/70 border border-blue-200 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
        Had a clean with us?
      </h2>
      <p className="mt-2 text-sm sm:text-base text-slate-700">
        We really appreciate your feedback. Leave a review on our Facebook page to help other local homeowners find us!
      </p>

      <div className="mt-6">
        <a
          href={siteConfig.social.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1877F2] text-white font-semibold hover:bg-[#166fe5] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
        >
          <FaFacebook className="w-5 h-5" aria-hidden="true" />
          <span>Leave a review on Facebook</span>
        </a>
      </div>
    </div>
  );
}
