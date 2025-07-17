"use client";
import React from "react";
import { motion } from "framer-motion";

export const HeroTitle: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
      >
        Powerful Features for <span className="text-brand">AI Governance</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto"
      >
        Discover comprehensive tools and capabilities designed to make your AI
        systems transparent, compliant, and trustworthy.
      </motion.p>
    </div>
  );
};
