"use client";
import React from "react";
import { ResourcesHero } from "../../components/resources/ResourcesHero";
import { InsightsSection } from "../../components/resources/sections/InsightsSection";
import { GovernanceMonitor } from "../../components/resources/sections/GovernanceMonitor";
import { ToolsSection } from "../../components/resources/sections/ToolsSection";
import { WavyCTA } from "../../components/common/cta/WavyCTA";
import { MainLayout } from "../../components/layout/MainLayout";

export default function ResourcesClient() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white overflow-hidden">
        <main className="relative">
          <ResourcesHero />
          <GovernanceMonitor />
          <InsightsSection />
          <ToolsSection />
          <WavyCTA />
        </main>
      </div>
    </MainLayout>
  );
}
