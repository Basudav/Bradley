import React from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { HalftoneBackground } from "@/components/ui/HalftoneBackground";
import { SparkleDecor } from "@/components/ui/SparkleDecor";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { EmailButton } from "@/components/ui/EmailButton";

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-banner-heading"
      className="relative bg-navy text-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <HalftoneBackground />
      <SparkleDecor
        color="orange"
        size="md"
        animate
        className="absolute top-6 left-6 text-orange-400"
      />
      <SparkleDecor
        color="white"
        size="lg"
        animate
        className="absolute bottom-8 right-10 text-blue-200"
      />

      <Container className="relative z-10 text-center max-w-4xl">
        <h2
          id="cta-banner-heading"
          className="text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-semibold text-balance text-white"
        >
          Ready for sparkling, streak-free windows?
        </h2>

        <p className="mt-4 text-base sm:text-lg lg:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
          Message us for a free quote. We&apos;ll get back to you as soon as we can.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <WhatsAppButton size="lg" className="w-full sm:w-auto">
            WhatsApp Us
          </WhatsAppButton>

          <CallButton
            variant="light"
            size="lg"
            showNumber
            className="w-full sm:w-auto"
          />

          <EmailButton
            subject="Free Window Cleaning Quote Request"
            body="Hello Bradley's Window Cleaning,\n\nI would like to request a free quote.\n\nName:\nArea:\nServices needed:\n"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10"
          >
            Email us
          </EmailButton>
        </div>

        <p className="mt-8 text-xs sm:text-sm text-blue-300">
          Covering Ilkeston, Long Eaton, Draycott, Stapleford, Spondon and surrounding areas.
        </p>
      </Container>
    </section>
  );
}
