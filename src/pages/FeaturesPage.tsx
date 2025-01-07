import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { FeatureHero } from "../components/features/FeatureHero";
import { FeatureShowcase } from "../components/features/FeatureShowcase";
import { FeatureMetrics } from "../components/features/FeatureMetrics";
import { FeatureCTA } from "../components/features/FeatureCTA";

export const FeaturesPage: React.FC = () => {
  return (
    <div id="featuresPage" className="min-h-screen bg-white">
      <Navbar />
      <main>
        <FeatureHero />
        <FeatureShowcase />
        <FeatureMetrics />
        <FeatureCTA />
      </main>
      <Footer />
    </div>
  );
};
