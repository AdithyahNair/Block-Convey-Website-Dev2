import React from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
// import { Statistics } from "./Statistics";
import { Partners } from "./Partners";
import { TrustManagementSection } from "./TrustManagementSection";
import { WhyChooseBlockConveySection } from "./WhyChooseBlockConveySection";
import { Footer } from "./Footer";
import { WavyCTA } from "../common/cta/WavyCTA";

export const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <TrustManagementSection />
        <WhyChooseBlockConveySection />
        <WavyCTA />
        <Footer />
      </main>
    </div>
  );
};
