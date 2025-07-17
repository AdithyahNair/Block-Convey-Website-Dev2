"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutHero: React.FC = () => {
  return (
    <section
      id="aboutus"
      className="pt-32 pb-24 bg-gradient-to-br from-brand-lightest via-white to-brand-light/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Shaping the Future of</span>

              <span className="text-brand"> AI Governance</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              We're pioneering the next generation of AI governance solutions,
              making artificial intelligence transparent, accountable, and
              aligned with human values.
            </p>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative pt-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-xl bg-gray-50"
              >
                <div className="aspect-square">
                  <img
                    src="/images/about1.png"
                    alt="AI Governance Solution"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-xl mt-8 bg-gray-50"
              >
                <div className="aspect-square">
                  <img
                    src="/images/about2.png"
                    alt="Technology Innovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-xl -mt-8 bg-gray-50"
              >
                <div className="aspect-square">
                  <img
                    src="/images/about3.png"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-xl bg-gray-50"
              >
                <div className="aspect-square">
                  <img
                    src="/images/about4.png"
                    alt="Future Vision"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
