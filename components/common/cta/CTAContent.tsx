"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Zap, Shield, Check } from "lucide-react";

export const CTAContent: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // State for consistent random values to prevent hydration mismatch
  const [randomValues, setRandomValues] = useState([1, 1, 1, 1]);

  // Generate random values on client side only
  useEffect(() => {
    setRandomValues([
      Math.floor(Math.random() * 10) + 1,
      Math.floor(Math.random() * 10) + 1,
      Math.floor(Math.random() * 10) + 1,
      Math.floor(Math.random() * 10) + 1,
    ]);
  }, []);

  // Mouse-following effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // For card tilt effect
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const springConfig = { stiffness: 100, damping: 30 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Features list
  const features = [
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Check, text: "Compliance monitoring" },
    { icon: Zap, text: "Real-time analytics" },
  ];

  // Character by character animation variables
  const titleText = "Try Our Platform";
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-light/20 via-transparent to-brand/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(94,163,163,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(94,163,163,0.05)_1px,transparent_1px)]"
          style={{ backgroundSize: "30px 30px" }}
        />

        {/* Accent circles */}
        <motion.div
          className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-brand-light/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ filter: "blur(50px)" }}
        />

        <motion.div
          className="absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-brand/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          style={{ filter: "blur(60px)" }}
        />
      </div>

      <div
        ref={ref}
        className="relative flex flex-col lg:flex-row items-center justify-between gap-12"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left side content */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Character by character animation */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            variants={sentenceVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {titleText.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={characterVariants}
                className={`inline-block ${char === " " ? "mr-2" : ""} ${
                  char === "A" || char === "I"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark"
                    : ""
                }`}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Experience the future of AI Risk Management and Compliance with our
            comprehensive platform
          </motion.p>

          {/* Features list */}
          <div className="mb-10 space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-light/20">
                  <feature.icon className="h-4 w-4 text-brand" />
                </div>
                <span className="text-gray-700">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.a
              href="https://calendly.com/arunprasad-11/product-demo-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-dark transition-colors relative group overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button background highlight effect */}
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%", opacity: 0.3 }}
                whileHover={{ x: "100%", opacity: 0.2 }}
                transition={{ duration: 0.8 }}
              />

              <span className="relative z-10">Request Demo</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side 3D card */}
        <motion.div
          style={{
            perspective: 1000,
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lg:flex-1 w-full max-w-md"
        >
          <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-white/30 relative backdrop-blur-sm bg-white/10">
            {/* Card background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(94,163,163,0.2)"
                    strokeWidth="1"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative p-8 z-10">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="px-3 py-1 text-xs font-medium text-brand bg-brand-light/20 rounded-full">
                  Enterprise Ready
                </div>
              </div>

              {/* Dashboard Visualization */}
              <div className="space-y-4 mb-8">
                <motion.div
                  className="h-2 bg-brand-light/30 rounded-full overflow-hidden"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <motion.div
                    className="h-full bg-brand rounded-full"
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "75%" } : { width: "0%" }}
                    transition={{ delay: 1, duration: 0.6 }}
                  />
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  {[80, 65, 90, 70].map((value, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/20 rounded-lg p-3 border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    >
                      <div className="text-xs text-gray-500 mb-1">
                        {
                          [
                            "Risk Score",
                            "ISO Compliance",
                            "Transparency",
                            "Performance",
                          ][i]
                        }
                      </div>
                      <div className="flex items-end gap-2">
                        <div className="text-xl font-bold text-gray-800">
                          {value}%
                        </div>
                        <div className="flex items-center text-xs text-green-500">
                          <ArrowUpRight className="h-3 w-3" />
                          {randomValues[i]}%
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Dashboard Stats */}
              <motion.div
                className="space-y-3 text-sm"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex justify-between items-center p-2 rounded bg-white/10">
                  <span className="text-gray-700">Model Monitoring</span>
                  <span className="text-brand font-medium">Active</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-white/10">
                  <span className="text-gray-700">Weekly Reports</span>
                  <span className="text-brand font-medium">5 Generated</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-white/10">
                  <span className="text-gray-700">Compliance Status</span>
                  <span className="flex items-center text-green-500">
                    <Check className="h-3 w-3 mr-1" />
                    Compliant
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
