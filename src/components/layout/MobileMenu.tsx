"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { X, ChevronRight, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(isOpen);
  useEscapeKey(onClose);

  // Close when pathname changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Focus close button on open
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      className={cn(
        "fixed inset-0 z-50 h-dvh bg-white flex flex-col overflow-y-auto",
        "motion-safe:transition-transform motion-safe:duration-300"
      )}
    >
      {/* Top Header */}
      <div className="h-16 flex items-center justify-between px-4 xs:px-5 sm:px-6 border-b border-blue-100 shrink-0">
        <Link href="/" onClick={onClose} aria-label="Bradley's Window Cleaning home">
          <Logo />
        </Link>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="w-12 h-12 flex items-center justify-center rounded-xl text-navy hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 transition-colors"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav aria-label="Mobile navigation" className="px-4 xs:px-5 sm:px-6 py-2 flex-1">
        <ul className="divide-y divide-blue-100">
          {mainNavItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between py-4 text-xl font-heading font-semibold transition-colors",
                    isActive ? "text-orange-600" : "text-navy hover:text-blue-700"
                  )}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-orange-500" : "text-slate-400"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3">
          <ButtonLink
            href="/contact"
            variant="primary"
            size="lg"
            fullWidth
            onClick={onClose}
          >
            Get a Free Quote
          </ButtonLink>

          <WhatsAppButton size="lg" fullWidth>
            WhatsApp Us
          </WhatsAppButton>

          <CallButton variant="outline" size="lg" fullWidth showNumber />
        </div>

        {/* Contact info footer */}
        <div className="mt-8 pt-6 border-t border-blue-100 pb-10 text-sm text-slate-600 space-y-3">
          <div className="flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-navy hover:text-blue-700 [overflow-wrap:anywhere]"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
            <span>
              Covering Ilkeston, Long Eaton, Draycott, Stapleford, Spondon &amp; surrounding areas
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
