"use client";
import React from "react";
import { FeatureHero } from "../../components/features/FeatureHero";
import { FeatureShowcase } from "../../components/features/FeatureShowcase";
import { FeatureMetrics } from "../../components/features/FeatureMetrics";
import { FeatureCTA } from "../../components/features/FeatureCTA";
import { FinancialModelSection } from "../../components/landing/FinancialModelSection";
import { AIGovernanceSection } from "../../components/landing/AIGovernanceSection";
import { MainLayout } from "../../components/layout/MainLayout";

export default function SolutionsClient() {
  return (
    <MainLayout>
      <div id="featuresPage" className="min-h-screen bg-white">
        <main>
          <FeatureHero />
          <FeatureShowcase />
          <FeatureMetrics />
          <FeatureCTA />
          <FinancialModelSection />
          <AIGovernanceSection />
        </main>
      </div>
    </MainLayout>
  );
}
