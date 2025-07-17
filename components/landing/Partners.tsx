"use client";
import React from "react";
import { motion } from "framer-motion";
import { partners } from "./partners/partnersData";

export const Partners: React.FC = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-brand-lightest relative z-10 w-screen border-b border-brand-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Trusted Partners
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Partnering with global organizations to drive innovation in AI
            governance
          </p>
        </motion.div>
      </div>

      <div className="relative w-screen overflow-hidden mt-4">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Moving Carousel */}
        <div className="flex overflow-hidden py-5">
          <div className="flex animate-scroll hover:pause-animation">
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="flex items-center justify-center mx-6"
              >
                <div className="bg-white p-2.5 rounded-lg shadow-sm border border-brand-light/30 w-[160px] h-[90px] flex items-center justify-center overflow-hidden group hover:shadow-md transition-all">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-auto w-auto max-h-[60px] max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-110"
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
