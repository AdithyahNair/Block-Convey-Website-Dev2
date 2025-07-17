import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion";

export const CircleTextSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Data points for financial chart animation
  const [chartPoints] = useState(() => {
    return Array.from({ length: 20 }, (_, i) => {
      // Simulated financial data with a general upward trend
      const base = 70 - i * 3; // Start high, go slightly down as index increases
      const variance = Math.sin(i * 0.5) * 15; // Add some sine wave variance
      const randomFactor = Math.random() * 10 - 5; // Add some randomness
      return base + variance + randomFactor;
    });
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update mouse position for 3D effect
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x - rect.width / 2);
        mouseY.set(y - rect.height / 2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Create floating data elements (numbers, symbols)
  const createDataElements = () => {
    const elements = [
      "₿",
      "📊",
      "💹",
      "$",
      "€",
      "¥",
      "£",
      "📈",
      "+2.4%",
      "-1.3%",
      "+0.8%",
      "1.45x",
      "3.2M",
      "79.5K",
      "0.025",
      "1,324",
      "5.7B",
    ];

    return Array.from({ length: 25 }).map((_, i) => {
      const element = elements[i % elements.length];
      const size = Math.random() * 14 + 10;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 15 + 10;
      const opacity = Math.random() * 0.3 + 0.04;

      return (
        <motion.div
          key={i}
          className="absolute text-brand/30 font-mono"
          style={{
            fontSize: size,
            left: `${initialX}%`,
            top: `${initialY}%`,
            opacity: opacity,
            filter: "blur(0.5px)",
          }}
          animate={{
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
            opacity: [opacity, opacity * 1.5, opacity],
            scale: [1, 1 + Math.random() * 0.3, 1],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          {element}
        </motion.div>
      );
    });
  };

  // 3D tilt effect
  const rotateX = useTransform(mouseY, [-300, 300], [6, -6]);
  const rotateY = useTransform(mouseX, [-300, 300], [-6, 6]);
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Feature cards with fintech-focused content
  const features = [
    {
      title: "Fairness Analysis",
      icon: "⚖️",
      gradient: "from-cyan-400/90 to-teal-500/90",
      glowColor: "cyan",
      description:
        "Ensure equal treatment across demographic segments and eliminate bias in financial decisions",
      stats: "99.7% accuracy",
    },
    {
      title: "Risk Detection",
      icon: "🔍",
      gradient: "from-brand/90 to-brand-dark/90",
      glowColor: "blue",
      description:
        "Identify potential risks in your models with advanced anomaly detection algorithms",
      stats: "2.3x faster detection",
    },
    {
      title: "Compliance Shield",
      icon: "🛡️",
      gradient: "from-teal-500/90 to-green-600/90",
      glowColor: "green",
      description:
        "Stay compliant with ISO, ECCOA, GDPR and other financial regulatory requirements",
      stats: "100% audit-ready",
    },
  ];

  // Text animation with financial terms
  const titleText = "Financial Models";
  const subTitle = "Single-Platform Assessment for Your";

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center py-20"
      style={{ perspective: 1500 }}
    >
      {/* Floating finance data elements */}
      <div className="absolute inset-0 overflow-hidden opacity-70">
        {createDataElements()}
      </div>

      {/* Main 3D card */}
      <motion.div
        className="relative max-w-6xl w-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl overflow-hidden z-10 px-6 md:px-12 py-16"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
          boxShadow:
            "0 30px 80px -20px rgba(94, 163, 163, 0.25), 0 30px 40px -30px rgba(0, 0, 0, 0.1)",
          y: useTransform(scrollYProgress, [0, 1], [30, -30]),
        }}
      >
        {/* Financial chart line in background */}
        <div className="absolute left-0 right-0 h-40 bottom-[10%] opacity-25">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
          >
            <motion.path
              d={`M0,${200 - chartPoints[0]} ${chartPoints
                .map(
                  (point, i) =>
                    `L${(i / (chartPoints.length - 1)) * 1000},${200 - point}`
                )
                .join(" ")}`}
              fill="none"
              stroke="url(#chart-gradient)"
              strokeWidth="3"
              className="filter drop-shadow-lg"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
            <defs>
              <linearGradient
                id="chart-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#5EA3A3" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#5EA3A3" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#5EA3A3" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated background gradient blobs */}
        <motion.div
          className="absolute top-[-30%] right-[-5%] w-[50%] h-[80%] bg-gradient-to-br from-brand-light/10 to-brand/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[-20%] left-[-5%] w-[40%] h-[60%] bg-gradient-to-tr from-brand/10 to-brand-light/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div
          className="relative z-20 flex flex-col items-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main title with 3D effect */}
          <motion.div
            className="mb-4 text-center"
            style={{ translateY: parallaxY, transformStyle: "preserve-3d" }}
          >
            {/* Subtitle */}
            <motion.div className="overflow-hidden mb-1">
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800"
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {subTitle.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.02,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h2>
            </motion.div>

            {/* Main title */}
            <motion.div
              className="relative inline-block"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative">
                {/* Floating 3D title */}
                <motion.div
                  className="relative text-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Shadow text (depth effect) */}
                  <div
                    className="absolute text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent select-none opacity-10"
                    style={{
                      top: "0.15em",
                      left: "0.05em",
                      right: 0,
                      WebkitTextStroke: "1px rgba(94, 163, 163, 0.2)",
                      transform: "translateZ(-20px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {titleText}
                  </div>

                  {/* Main text */}
                  <motion.h1
                    className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {titleText.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark`}
                        initial={{ opacity: 0, y: 40, z: -40 }}
                        animate={
                          isInView
                            ? {
                                opacity: 1,
                                y: 0,
                                z: index % 2 === 0 ? 10 : 30,
                                rotateX: 0,
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.7,
                          delay: 0.4 + index * 0.04,
                          type: "spring",
                          stiffness: 80,
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                          textShadow: "0 10px 20px rgba(94, 163, 163, 0.15)",
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.h1>
                </motion.div>

                {/* Animated data line with glow effect */}
                <div className="relative h-10">
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent"
                    style={{
                      bottom: 0,
                      transformStyle: "preserve-3d",
                      boxShadow: "0 0 8px 1px rgba(94, 163, 163, 0.6)",
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  />

                  {/* Data points on the line */}
                  {[0.2, 0.5, 0.8].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute bottom-[-3px] w-2 h-2 rounded-full bg-brand shadow-lg"
                      style={{
                        left: `${pos * 100}%`,
                        boxShadow: "0 0 8px 2px rgba(94, 163, 163, 0.6)",
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? {
                              scale: [0, 1.5, 1],
                              opacity: [0, 1, 0.8],
                            }
                          : {}
                      }
                      transition={{
                        duration: 0.5,
                        delay: 1 + i * 0.2,
                      }}
                    />
                  ))}

                  {/* Moving data cursor */}
                  <motion.div
                    className="absolute bottom-[-4px] w-3 h-3 rounded-full bg-white"
                    style={{
                      boxShadow: "0 0 12px 3px rgba(94, 163, 163, 0.7)",
                      z: 30,
                    }}
                    initial={{ left: "0%", opacity: 0 }}
                    animate={
                      isInView
                        ? {
                            left: ["0%", "100%"],
                            opacity: [0, 1, 0.8, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 3,
                      times: [0, 0.1, 0.9, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                      delay: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Description with fintech terminology */}
          <motion.div
            className="max-w-3xl text-center mt-10 relative"
            style={{
              translateY: contentY,
              opacity: contentOpacity,
              transformStyle: "preserve-3d",
              z: 20,
            }}
          >
            <AnimatePresence>
              {isInView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative px-4 py-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <motion.p
                    className="text-gray-700 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Consolidate real-time detection of fairness issues, bias,
                    and model drift to maintain optimal performance. Ensure
                    compliance with ISO, ECCOA, and GDPR
                    <motion.span
                      className="inline-block text-brand-dark font-medium mx-1"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      —all in one enterprise-grade tool.
                    </motion.span>
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Interactive feature cards with fintech visual style */}
          <motion.div
            className="w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 relative pb-6"
            style={{ transformStyle: "preserve-3d", z: 30 }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className={`${
                  activeCard === i ? "z-20" : "z-10"
                } relative h-[220px] rounded-2xl overflow-hidden group`}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        rotateX: activeCard === i ? 0 : 5,
                        rotateY: activeCard === i ? 0 : -5,
                        z: activeCard === i ? 40 : 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: 1 + i * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                onMouseEnter={() => {
                  setActiveCard(i);
                }}
                onMouseLeave={() => {
                  setActiveCard(null);
                }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 0,
                  rotateY: 0,
                  z: 40,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                {/* Card background with gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} transition-all duration-300`}
                />

                {/* Geometric patterns (fintech style) */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  <svg
                    className="absolute right-0 top-0 h-full"
                    viewBox="0 0 100 220"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M100,0 L60,0 L100,40 Z"
                      fill="rgba(255,255,255,0.4)"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                    />
                    <motion.path
                      d="M100,50 L50,50 L100,100 Z"
                      fill="rgba(255,255,255,0.3)"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                    />
                    <motion.path
                      d="M100,120 L70,120 L100,150 Z"
                      fill="rgba(255,255,255,0.2)"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                    />
                  </svg>
                </div>

                {/* Glass highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/3" />

                {/* Animated glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    boxShadow: `0 0 30px 5px rgba(${
                      feature.glowColor === "cyan"
                        ? "6, 182, 212"
                        : feature.glowColor === "blue"
                        ? "94, 163, 163"
                        : "16, 185, 129"
                    }, 0.3)`,
                    transition: "box-shadow 0.3s ease, opacity 0.3s ease",
                  }}
                  animate={
                    activeCard === i ? { opacity: [0, 0.6, 0] } : { opacity: 0 }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Card content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <motion.span
                        className="text-3xl"
                        animate={
                          activeCard === i
                            ? {
                                y: [0, -8, 0],
                                rotateY: [0, 10, -10, 0],
                              }
                            : {}
                        }
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {feature.icon}
                      </motion.span>

                      {/* Stats badge */}
                      <motion.div
                        className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                          activeCard === i ? { scale: 1, opacity: 1 } : {}
                        }
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: 0.1,
                        }}
                      >
                        {feature.stats}
                      </motion.div>
                    </div>

                    <motion.h3
                      className="text-xl font-bold text-white mb-2"
                      animate={
                        activeCard === i ? { scale: 1.02 } : { scale: 1 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      className="text-white/90 text-sm"
                      initial={{ opacity: 0.7 }}
                      animate={
                        activeCard === i ? { opacity: 1 } : { opacity: 0.7 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>

                  {/* Bottom action button */}
                  <motion.div
                    className="mt-auto pt-3 self-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={activeCard === i ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white/80 text-sm flex items-center group-hover:text-white transition-colors">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </motion.div>

                  {/* Subtle animated data lines */}
                  {activeCard === i && (
                    <motion.div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20">
                      <motion.div
                        className="absolute top-0 h-full bg-white/60"
                        style={{ width: "20%" }}
                        animate={{
                          left: ["0%", "80%", "0%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
