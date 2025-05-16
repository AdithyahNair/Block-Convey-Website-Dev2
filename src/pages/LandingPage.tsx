import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
// import { Statistics } from "../components/landing/Statistics";
import { Partners } from "../components/landing/Partners";
import { BusinessValueSection } from "../components/landing/BusinessValueSection";
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
        <BusinessValueSection />
        <WhyChooseBlockConveySection />
        <WavyCTA />
        <Footer />
      </main>
    </div>
  );
};
