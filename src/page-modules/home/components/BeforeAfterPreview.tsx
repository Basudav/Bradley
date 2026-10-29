import React from "react";
import { galleryItems } from "@/data/gallery";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function BeforeAfterPreview() {
  const previewItems = galleryItems.slice(0, 3);

  return (
    <Section ariaLabelledBy="before-after-heading">
      <Container>
        <SectionHeading
          id="before-after-heading"
          title="Before &amp; After"
          subtitle="Real results on windows, gutters and frames across Ilkeston and surrounding areas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-2xl border border-blue-100 bg-white p-3 sm:p-4 shadow-card overflow-hidden"
            >
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeAlt={`Before cleaning ${item.title}`}
                afterAlt={`After cleaning ${item.title}`}
              />
              <div className="pt-3 pb-1 text-left">
                <h3 className="font-heading font-semibold text-base sm:text-lg text-navy">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <ButtonLink href="/gallery" variant="outline" size="lg">
            See more photos
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
