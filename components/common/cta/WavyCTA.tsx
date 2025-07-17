import React from "react";
import { WavyBackground } from "./WavyBackground";
import { CTAContent } from "./CTAContent";

export const WavyCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with animated waves */}
      <WavyBackground />
      
      {/* Content overlay */}
      <CTAContent />
    </section>
  );
};
