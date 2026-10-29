"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Phone, Menu } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100 transition-all">
      <Container className="h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 rounded-xl"
          aria-label="Bradley's Window Cleaning home"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone pill on tablet (md to lg) */}
          <a
            href={siteConfig.phone.href}
            className="hidden md:inline-flex lg:hidden xl:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-navy hover:text-blue-700 hover:bg-blue-50 font-medium text-sm transition-colors"
            aria-label={`Call ${siteConfig.phone.display}`}
          >
            <Phone className="w-4 h-4 text-orange-500" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>

          {/* Quick Call icon button on small screens (below md) */}
          <a
            href={siteConfig.phone.href}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 transition-colors"
            aria-label={`Call ${siteConfig.phone.display}`}
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
          </a>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <ButtonLink href="/contact" variant="primary" size="md">
              Free Quote
            </ButtonLink>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl text-navy hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 transition-colors"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
