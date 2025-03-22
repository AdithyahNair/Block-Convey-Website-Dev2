import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const AnnouncementBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand-dark to-brand opacity-90 backdrop-blur-sm" />

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-4 px-4">
        <div className="flex items-center justify-center gap-4">
          {/* Left sparkle */}
          <div className="relative">
            <Sparkles className="h-6 w-6 text-white animate-pulse" />
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10" />
          </div>

          {/* Main content */}
          <div className="flex items-center gap-6">
            <span className="text-white font-medium text-lg">
              Coming Soon: PRISM - Our Revolutionary AI Compliance Checking Tool
            </span>
            <a
              href="https://app.blockconvey.com"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-base font-medium transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              Learn More
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Right sparkle */}
          <div className="relative">
            <Sparkles className="h-6 w-6 text-white animate-pulse" />
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* Side gradients for depth effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand to-transparent" />
    </div>
  );
};
