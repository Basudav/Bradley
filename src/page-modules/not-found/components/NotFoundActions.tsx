import React from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function NotFoundActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">
      <ButtonLink href="/" variant="primary" size="lg" className="w-full sm:w-auto">
        Back to Home
      </ButtonLink>

      <ButtonLink href="/services" variant="secondary" size="lg" className="w-full sm:w-auto">
        Our Services
      </ButtonLink>

      <WhatsAppButton size="lg" className="w-full sm:w-auto">
        WhatsApp Us
      </WhatsAppButton>
    </div>
  );
}
