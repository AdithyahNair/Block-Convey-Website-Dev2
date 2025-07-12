import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useMotionValue } from "framer-motion";
import {
  Activity,
  Shield,
  BarChart2,
  AlertTriangle,
  LineChart,
} from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Fairness and Bias",
    description:
      "Real-time detection of fairness issues, bias, and model drift to maintain optimal performance.",
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    iconColor: "text-emerald-600",
    accentColor: "#10B981",
  },
  {
    icon: Shield,
    title: "Compliance Reporting",
    description:
      "Automated audit trails and regulatory adherence with custom report generation.",
    gradient: "from-cyan-500/20 via-cyan-500/10 to-transparent",
    iconColor: "text-cyan-600",
    accentColor: "#06B6D4",
  },
  {
    icon: BarChart2,
    title: "Real-time Dashboard",
    description:
      "Track model performance and compliance in real-time with comprehensive monitoring and analytics.",
    gradient: "from-rose-500/20 via-rose-500/10 to-transparent",
    iconColor: "text-rose-600",
    accentColor: "#F43F5E",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description:
      "Comprehensive risk mitigation insights powered by advanced analytics and predictive modeling.",
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    iconColor: "text-purple-600",
    accentColor: "#8B5CF6",
  },
  {
    icon: LineChart,
    title: "Model Performance Tracking",
    description:
      "Gain actionable insights into AI outcomes with detailed performance metrics and trend analysis.",
    gradient: "from-teal-500/20 via-teal-500/10 to-transparent",
    iconColor: "text-teal-600",
    accentColor: "#14B8A6",
  },
];

export const WhyChooseUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  // Mouse position values for animation effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(94, 163, 163, 0.05), transparent 70%)",
      }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_0.5px,transparent_0.5px),linear-gradient(to_bottom,#ADD2C933_0.5px,transparent_0.5px)] bg-[size:24px_24px]" />

      {/* Subtle animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 20%, rgba(94, 163, 163, 0.03), transparent 60%)",
            "radial-gradient(circle at 70% 80%, rgba(94, 163, 163, 0.03), transparent 60%)",
          ],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title Section */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {Array.from("Why Choose Block Convey?").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={letterVariants}
                className={`inline-block ${char === " " ? "mr-2" : ""} ${
                  char === "B" || char === "C"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark"
                    : ""
                }`}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-24 rounded-full bg-brand mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our comprehensive platform provides the tools and oversight needed
            for responsible
            <span className="text-brand font-medium"> AI governance </span>
            in financial services.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <motion.div
                  className="h-full bg-white backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  whileHover={{
                    boxShadow: `0 12px 30px -10px ${benefit.accentColor}20`,
                    borderColor: `${benefit.accentColor}40`,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Card colorful top bar */}
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: benefit.accentColor }}
                  />

                  <div className="p-8">
                    <div className="mb-6 flex items-center">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-sm`}
                        style={{
                          backgroundColor: `${benefit.accentColor}10`,
                          border: `1px solid ${benefit.accentColor}20`,
                        }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon
                            size={24}
                            style={{ color: benefit.accentColor }}
                          />
                        </motion.div>
                      </div>

                      <motion.h3
                        className="text-xl font-semibold ml-4 text-gray-900"
                        animate={
                          activeIndex === index
                            ? { color: benefit.accentColor }
                            : {}
                        }
                        transition={{ duration: 0.2 }}
                      >
                        {benefit.title}
                      </motion.h3>
                    </div>

                    <motion.p
                      className="text-gray-600"
                      animate={
                        activeIndex === index
                          ? { opacity: 1 }
                          : { opacity: 0.9 }
                      }
                    >
                      {benefit.description}
                    </motion.p>

                    {/* Learn more link */}
                    <motion.div
                      className="mt-6 inline-flex items-center text-sm font-medium"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ x: 3 }}
                      style={{ color: benefit.accentColor }}
                    >
                      Learn more
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="ml-2"
                      >
                        <motion.path
                          d="M1 8H15M15 8L8 1M15 8L8 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={
                            activeIndex === index
                              ? { pathLength: 1 }
                              : { pathLength: 0 }
                          }
                          transition={{ duration: 0.3 }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
