import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { HeroTrustChips } from "@/page-modules/home/components/HeroTrustChips";
import { HalftoneBackground } from "@/components/ui/HalftoneBackground";
import { SparkleDecor } from "@/components/ui/SparkleDecor";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50 to-white pt-0 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
      {/* Decorative Halftone Background */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-full opacity-40 lg:w-1/2">
        <HalftoneBackground />
      </div>

      {/* Decorative Sparkles */}
      <SparkleDecor
        color="orange"
        size="md"
        animate
        className="absolute top-10 right-1/4 hidden text-orange-400 sm:block"
      />

      <SparkleDecor
        color="orange"
        size="sm"
        animate
        className="absolute bottom-20 left-6 text-orange-500"
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center sm:items-start sm:text-left">
          {/* Large Responsive Hero Photo */}
          <div className="mb-5 w-full self-center sm:mb-6">
            {siteConfig.assets.heroPhoto ? (
              <div className="relative mx-auto h-[420px] w-full max-w-7xl overflow-hidden sm:h-[440px] sm:overflow-visible md:h-[520px] lg:h-[600px] xl:h-[680px]">
                <Image
                  src={siteConfig.assets.heroPhoto}
                  alt="Bradley's Window Cleaning"
                  fill
                  priority
                  sizes="100vw"
                  className="scale-[1.18] object-contain sm:scale-100"
                />
              </div>
            ) : (
              <ImagePlaceholder
                aspect="4/3"
                label="Bradley's Window Cleaning Van"
                className="min-h-[420px] rounded-none sm:min-h-[440px] lg:min-h-[600px]"
              />
            )}
          </div>

          {/* Centered Mobile Badge */}
          <Badge
            variant="blue"
            className="mb-4 self-center sm:self-start"
          >
            Local window cleaner · Ilkeston
          </Badge>

          {/* Centered Mobile Heading */}
          <h1 className="w-full text-center text-[1.875rem] font-heading font-bold leading-[1.15] text-navy text-balance xs:text-[2.125rem] sm:text-left sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] xl:text-6xl">
            Window Cleaning in Ilkeston, Long Eaton &amp; Nearby
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-prose text-base leading-relaxed text-slate-700 sm:mt-5 sm:text-lg lg:text-xl">
            {siteConfig.tagline}
          </p>

          {/* Trust Chips */}
          <div className="mt-8 w-full max-w-xl">
            <HeroTrustChips />
          </div>
        </div>
      </Container>
    </section>
  );
}