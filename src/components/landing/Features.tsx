import React from "react";
import { motion } from "framer-motion";
import { FeaturesList } from "./features/FeaturesList";

export const Features: React.FC = () => {
  return (
    <section className="relative bg-brand py-24 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise-Grade AI Governance
          </h2>
          <p className="text-brand-lightest/90 max-w-2xl mx-auto">
            Our comprehensive suite of tools ensures your AI systems remain
            transparent, compliant, and performing at their best.
          </p>
        </motion.div>

        <FeaturesList />
      </div>
    </section>
  );
};
