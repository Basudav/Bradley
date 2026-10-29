import React from "react";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-orange-500 focus:text-navy focus:px-4 focus:py-2.5 focus:rounded-xl focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
    >
      Skip to content
    </a>
  );
}
