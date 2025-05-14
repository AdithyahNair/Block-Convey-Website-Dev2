import React from "react";
import { motion } from "framer-motion";
import { partners } from "./partners/partnersData";

export const Partners: React.FC = () => {
  return (
    <section className="py-6 bg-gradient-to-b from-white to-brand-lightest relative z-10 w-screen border-b border-brand-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-1">
            Our Trusted Partners
          </h2>
          <p className="text-base text-gray-600">
            Partnering with global organizations to drive innovation in AI
            governance
          </p>
        </motion.div>
      </div>

      <div className="relative w-screen overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Single Scrolling Row */}
        <div className="flex overflow-hidden px-0">
          <div className="flex animate-scroll hover:pause-animation">
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="flex flex-col items-center mx-4 w-[140px]"
              >
                <div className="bg-white p-2 rounded-lg shadow-sm border border-brand-light/30 mb-1">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 object-contain transition-all"
                  />
                </div>
                <span className="text-xs text-gray-600 text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
