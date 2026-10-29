import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerQuickLinks } from "@/config/navigation";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FooterContact } from "@/components/layout/FooterContact";
import { FooterLinkGroup } from "@/components/layout/FooterLinkGroup";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = services.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  }));

  const areaLinks = areas.map((a) => ({
    label: `${a.name}`,
    href: `/areas/${a.slug}`,
  }));

  return (
    <footer className="bg-navy text-white pt-12 sm:pt-16 border-t border-navy/50 pb-24 md:pb-8">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 rounded-xl"
              aria-label="Bradley's Window Cleaning home"
            >
              <Logo variant="light" />
            </Link>
            <p className="text-sm text-blue-200 leading-relaxed max-w-sm">
              {siteConfig.tagline}
            </p>
            <div className="pt-2">
              <FooterContact />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <FooterLinkGroup title="Quick Links" links={footerQuickLinks} />
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <FooterLinkGroup title="Our Services" links={serviceLinks} />
          </div>

          {/* Column 4: Areas Covered */}
          <div className="lg:col-span-3">
            <FooterLinkGroup title="Areas We Cover" links={areaLinks} />
            <p className="mt-3 text-sm text-blue-300 italic">
              and surrounding areas across Erewash
            </p>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-blue-300">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span>Fully insured &middot; Free quotes</span>
            <Link
              href="/privacy-policy"
              className="hover:text-white underline transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
