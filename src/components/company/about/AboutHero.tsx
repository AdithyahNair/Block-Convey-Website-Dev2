import React from "react";
import { motion } from "framer-motion";

export const AboutHero: React.FC = () => {
  return (
    <div id="aboutus" className="relative w-full pt-40 pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              About Block Convey
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our team is a dynamic group of innovators deeply passionate about
              the intersection of explainable AI and blockchain technology.
              United by a shared vision, we are committed to creating more
              transparent, secure, and ethical AI systems, particularly in the
              financial sector.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
