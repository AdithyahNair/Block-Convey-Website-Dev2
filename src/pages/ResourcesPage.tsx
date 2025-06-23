import React from "react";
import { ResourcesHero } from "../components/resources/ResourcesHero";
import { InsightsSection } from "../components/resources/sections/InsightsSection";
import { BlockchainSection } from "../components/resources/sections/BlockchainSection";
import { GovernanceMonitor } from "../components/resources/sections/GovernanceMonitor";
import { ToolsSection } from "../components/resources/sections/ToolsSection";
import { WavyCTA } from "../components/common/cta/WavyCTA";
import { MainLayout } from "../components/layout/MainLayout";

export const ResourcesPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white overflow-hidden">
        <main className="relative">
          <ResourcesHero />
          <GovernanceMonitor />
          <InsightsSection />
          <BlockchainSection />
          <ToolsSection />
          <WavyCTA />
        </main>
      </div>
    </MainLayout>
  );
};
