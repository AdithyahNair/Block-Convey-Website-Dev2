import React from "react";
import { motion } from "framer-motion";
export const AboutHero: React.FC = () => {
  return (
    <div id="aboutus" className="relative w-full  pt-16 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative pt-32 pb-20">
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
              Our team of passionate blockchain enthusiasts and AI technology
              specialists is dedicated to enabling AI companies to harness the
              power of blockchain for enhanced growth and innovation.
            </p>
            <p className="text-lg text-gray-600">
              We offer bespoke next-generation data infrastructure solutions
              specifically designed to address the unique needs of AI firms.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
