"use client";
import React from "react";
import { FeatureHero } from "../components/features/FeatureHero";
import { FeatureShowcase } from "../components/features/FeatureShowcase";
import { FeatureMetrics } from "../components/features/FeatureMetrics";
import { FeatureCTA } from "../components/features/FeatureCTA";
import { motion } from "framer-motion";
import { FinancialModelSection } from "../components/landing/FinancialModelSection";
import { AIGovernanceSection } from "../components/landing/AIGovernanceSection";
import { MainLayout } from "../components/layout/MainLayout";

const FeaturesPage: React.FC = () => {
  return (
    <MainLayout>
      <div id="featuresPage" className="min-h-screen bg-white">
        <main>
          <FeatureHero />
          <FeatureShowcase />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-light"
            >
              <iframe
                allowFullScreen
                height="100%"
                src="https://streamable.com/e/cklno4?autoplay=1&muted=1&nocontrols=1"
                width="100%"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  overflow: "hidden",
                }}
              ></iframe>
            </motion.div>
          </div>
          <FeatureMetrics />
          <FeatureCTA />
          <FinancialModelSection />
          <AIGovernanceSection />
        </main>
      </div>
    </MainLayout>
  );
};

export default FeaturesPage;
