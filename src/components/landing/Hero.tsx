import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <div
      id="main"
      className="relative min-h-screen bg-brand-lightest overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lightest to-transparent" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-light/20 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="flex items-center gap-2 text-brand mb-6"></div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Revolutionize Enterprise AI with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
                Blockchain Governance and Explainable AI
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-12">
              Ensure compliance and maintain transparency in your AI operations.
              Our blockchain-powered platform helps enterprises save up to 60%
              on compliance-related costs.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/arunprasad-11/60min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full font-medium hover:bg-brand-dark transition-colors"
              >
                Book Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/features"
                className="inline-flex items-center gap-2 bg-brand-light/30 text-gray-900 border border-brand-light px-8 py-4 rounded-full font-medium hover:bg-brand-light/50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-brand-light"
          >
            <iframe
              allow="fullscreen;autoplay"
              allowFullScreen
              height="100%"
              src="https://streamable.com/e/l3yzs8?autoplay=1&nocontrols=1"
              width="100%"
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
