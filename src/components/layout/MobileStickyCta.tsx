import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export function MobileStickyCta() {
  return (
    <nav
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-blue-100 shadow-[0_-4px_16px_rgba(11,37,64,.12)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-3 gap-2 p-2 max-w-lg mx-auto">
        {/* Call button */}
        <a
          href={siteConfig.phone.href}
          className="min-h-12 rounded-xl text-sm font-semibold flex flex-col items-center justify-center bg-blue-700 text-white active:bg-blue-800 touch-manipulation transition-colors"
          aria-label={`Call Bradley's Window Cleaning on ${siteConfig.phone.display}`}
        >
          <Phone className="w-4 h-4 mb-0.5" aria-hidden="true" />
          <span>Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${siteConfig.phone.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-12 rounded-xl text-sm font-semibold flex flex-col items-center justify-center bg-whatsapp text-white active:bg-whatsapp-dark touch-manipulation transition-colors"
          aria-label="Message on WhatsApp"
        >
          <FaWhatsapp className="w-4 h-4 mb-0.5" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        {/* Free Quote button */}
        <Link
          href="/contact"
          className="min-h-12 rounded-xl text-sm font-semibold flex flex-col items-center justify-center bg-orange-500 text-navy active:bg-orange-400 touch-manipulation transition-colors"
        >
          <Sparkles className="w-4 h-4 mb-0.5" aria-hidden="true" />
          <span>Free Quote</span>
        </Link>
      </div>
    </nav>
  );
}
