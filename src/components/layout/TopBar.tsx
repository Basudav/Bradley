import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Phone, MessageCircle } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden sm:block bg-navy text-white text-sm h-10 border-b border-navy/20">
      <Container className="h-full flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-200">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
          <span className="lg:hidden">Covering Ilkeston &amp; nearby</span>
          <span className="hidden lg:inline">
            Covering Ilkeston, Long Eaton, Draycott, Stapleford &amp; Spondon
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <span className="hidden md:inline-flex items-center gap-1.5 text-blue-200">
            <MessageCircle className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
            Message us any time
          </span>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center gap-1.5 font-medium text-white hover:text-orange-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
