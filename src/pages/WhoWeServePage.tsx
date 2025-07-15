import React from "react";
import { WhoWeServeHero } from "../components/who-we-serve/WhoWeServeHero";
import { FinancialInstitutions } from "../components/who-we-serve/sections/FinancialInstitutions";
import { FintechStartups } from "../components/who-we-serve/sections/FintechStartups";
import { Insurtech } from "../components/who-we-serve/sections/Insurtech";
import { SpecializedServices } from "../components/who-we-serve/sections/SpecializedServices";
import { WavyCTA } from "../components/common/cta/WavyCTA";
import { MainLayout } from "../components/layout/MainLayout";

const WhoWeServePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <main>
          <WhoWeServeHero />
          <FinancialInstitutions />
          <FintechStartups />
          <Insurtech />
          <SpecializedServices />
          <WavyCTA />
        </main>
      </div>
    </MainLayout>
  );
};

export default WhoWeServePage;
