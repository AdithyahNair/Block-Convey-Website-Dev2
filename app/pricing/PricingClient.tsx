"use client";
import React from "react";
import { PricingHero } from "../../components/pricing/PricingHero";
import { PricingTiers } from "../../components/pricing/PricingTiers";
import { PlanComparison } from "../../components/pricing/PlanComparison";
import { PricingFAQ } from "../../components/pricing/PricingFAQ";
import { WavyCTA } from "../../components/common/cta/WavyCTA";
import { MainLayout } from "../../components/layout/MainLayout";

export default function PricingClient() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <main>
          <PricingHero />
          <PricingTiers />
          <PlanComparison />
          <PricingFAQ />
          <WavyCTA />
        </main>
      </div>
    </MainLayout>
  );
}
