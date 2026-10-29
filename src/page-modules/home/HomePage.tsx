import React from "react";
import { HeroSection } from "./components/HeroSection";
import { TrustStatsBar } from "./components/TrustStatsBar";
import { ServicesOverview } from "./components/ServicesOverview";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { TelescopicPoleFeature } from "./components/TelescopicPoleFeature";
import { SillsAndFramesFeature } from "./components/SillsAndFramesFeature";
import { BeforeAfterPreview } from "./components/BeforeAfterPreview";
import { HowItWorks } from "./components/HowItWorks";
import { ServiceAreasPreview } from "./components/ServiceAreasPreview";
import { ReviewsPreview } from "./components/ReviewsPreview";
import { CommunitySection } from "./components/CommunitySection";
import { HomeFaqPreview } from "./components/HomeFaqPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStatsBar />
      <ServicesOverview />
      <WhyChooseUs />
      <TelescopicPoleFeature />
      <SillsAndFramesFeature />
      <BeforeAfterPreview />
      <HowItWorks />
      <ServiceAreasPreview />
      <ReviewsPreview />
      <CommunitySection />
      <HomeFaqPreview />
      <CtaBanner />
    </>
  );
}
