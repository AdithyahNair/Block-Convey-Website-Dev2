"use client";
import React from "react";
import { motion } from "framer-motion";

export const BusinessValueImage: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Block Convey styled background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C920_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C920_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Subtle gradient orbs */}
      <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-cyan-400/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
            The AI Governance Platform that Drives
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 text-transparent bg-clip-text">
            Business Value
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative max-w-6xl w-full">
            <img
              src="/images/business-value.png"
              alt="AI Governance Business Value Diagram"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
