import React from "react";
import { Hero } from "../components/landing/Hero";
import { Partners } from "../components/landing/Partners";
import { BusinessValueImage } from "../components/landing/BusinessValueImage";
import { TrustManagementSection } from "../components/landing/TrustManagementSection";
import { WhyChooseBlockConveySection } from "../components/landing/WhyChooseBlockConveySection";
import { WavyCTA } from "../components/common/cta/WavyCTA";
import { MainLayout } from "../components/layout/MainLayout";

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative min-h-screen">
        <main>
          <Hero />
          <Partners />
          <BusinessValueImage />
          <TrustManagementSection />
          <WhyChooseBlockConveySection />
          <WavyCTA />
        </main>
      </div>
    </MainLayout>
  );
};

export default LandingPage;
