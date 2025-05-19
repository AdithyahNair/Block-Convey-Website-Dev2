import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
// import { Statistics } from "../components/landing/Statistics";
import { Partners } from "../components/landing/Partners";
import { BusinessValueImage } from "../components/landing/BusinessValueImage";
import { TrustManagementSection } from "../components/landing/TrustManagementSection";
import { WhyChooseBlockConveySection } from "../components/landing/WhyChooseBlockConveySection";
import { Footer } from "../components/landing/Footer";
import { WavyCTA } from "../components/common/cta/WavyCTA";

export const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <BusinessValueImage />
        <TrustManagementSection />
        <WhyChooseBlockConveySection />
        <WavyCTA />
        <Footer />
      </main>
    </div>
  );
};
