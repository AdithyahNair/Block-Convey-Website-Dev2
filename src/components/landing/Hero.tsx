import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  // State for cycling typing animation
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [standardIndex, setStandardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Standards to cycle through
  const standards = [
    {
      text: "EU AI Act",
      color:
        "text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600",
    },
    {
      text: "ISO 42001",
      color:
        "text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark",
    },
    {
      text: "NIST",
      color:
        "text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-brand",
    },
  ];

  // Handle typing animation effect
  useEffect(() => {
    const currentStandard = standards[standardIndex].text;

    // Speed settings - increased typing and deleting speeds
    const typingSpeed = 80; // Faster typing (was 120)
    const deletingSpeed = 50; // Faster deleting (was 80)
    const pauseBeforeDelete = 1000;
    const pauseBeforeNextStandard = 800;

    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (displayText === currentStandard) {
          setIsDeleting(true);
        }
      }, pauseBeforeDelete);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setStandardIndex((standardIndex + 1) % standards.length);
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsPaused(false);
        }, pauseBeforeNextStandard);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (displayText === currentStandard) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentStandard.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, standardIndex, isPaused, standards]);

  return (
    <div
      id="main"
      className="relative min-h-[75vh] flex items-end bg-brand-lightest overflow-hidden py-8 pb-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lightest to-transparent" />

      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-light/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[600px] bg-brand/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Bold Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
            >
              The Fastest Path to AI Compliance
            </motion.h1>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              <div className="flex items-baseline h-16 mt-4">
                <p className="text-3xl md:text-4xl lg:text-5xl text-gray-700 font-semibold mr-4">
                  Audit-ready for
                </p>
                <span
                  className={`text-3xl md:text-4xl lg:text-5xl font-semibold ${standards[standardIndex].color} inline-block`}
                >
                  {displayText}
                  <span className="inline-block animate-pulse ml-0.5 border-r-4 border-teal-500 h-8 md:h-10 align-middle">
                    &#8203;
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              }}
            >
              <a
                href="https://calendly.com/arunprasad-11/product-demo-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
              >
                Book Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto text-center"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-video w-full max-w-2xl mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl border border-brand-light"
          >
            <iframe
              allow="fullscreen;autoplay"
              allowFullScreen
              height="100%"
              src="https://streamable.com/e/room9d"
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

            {/* Decorative element */}
            <div className="absolute -bottom-5 -right-5 w-10 h-10 bg-brand rounded-full border-4 border-white"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
