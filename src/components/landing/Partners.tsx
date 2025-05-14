import React from "react";
import { motion } from "framer-motion";
import { partners } from "./partners/partnersData";

export const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-brand-lightest relative z-10 w-screen border-b border-brand-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partnering with global organizations to drive innovation in AI
            governance
          </p>
        </motion.div>
      </div>

      <div className="relative w-screen overflow-hidden mt-8">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Moving Carousel */}
        <div className="flex overflow-hidden py-8">
          <div className="flex animate-scroll hover:pause-animation">
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="flex items-center justify-center mx-8"
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-brand-light/30 w-[180px] h-[100px] flex items-center justify-center hover:shadow-md transition-all">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 max-w-[150px] object-contain transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
