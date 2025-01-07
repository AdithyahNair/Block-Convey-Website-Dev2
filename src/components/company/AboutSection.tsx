import React from "react";
import { AboutHero } from "./about/AboutHero";
import { CompanyValues } from "./about/CompanyValues";
import { AboutMission } from "./about/AboutMission";

export const AboutSection: React.FC = () => {
  return (
    <div className="relative">
      <AboutHero />
      <CompanyValues />
      <AboutMission />
    </div>
  );
};
