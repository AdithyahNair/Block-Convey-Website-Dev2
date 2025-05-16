import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BarChart3,
  ArrowRight,
  FileText,
  Code,
} from "lucide-react";

export const TrustManagementSection: React.FC = () => {
  // Define feature cards content
  const featureCards = [
    {
      title: "AI Compliance Automation",
      description:
        "Streamline regulatory adherence with automated evidence gathering for ISO 42001, EU AI Act, NIST frameworks and beyond",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      linkText: "Explore compliance",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      linkColor: "text-emerald-600 hover:text-emerald-700",
      visual: (
        <div className="space-y-3 mt-6">
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: "65%" }}
            ></div>
          </div>
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
      ),
    },
    {
      title: "AI Risk Monitor",
      description:
        "Continuously assess model bias, explainability, and risk exposure in KYC, fraud detection, and algorithmic evaluation use cases",
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      linkText: "Explore monitoring",
      color: "bg-gradient-to-br from-violet-500 to-purple-600",
      linkColor: "text-violet-600 hover:text-violet-700",
      visual: (
        <div className="flex items-end justify-center h-24 gap-4 mt-6">
          {[
            { red: "25%", yellow: "35%", green: "40%" },
            { red: "15%", yellow: "45%", green: "40%" },
            { red: "10%", yellow: "30%", green: "60%" },
            { red: "20%", yellow: "35%", green: "45%" },
          ].map((bar, i) => (
            <div
              key={i}
              className="w-10 h-full flex flex-col-reverse rounded-t-sm overflow-hidden shadow-sm"
            >
              <div
                className="bg-green-500 w-full"
                style={{ height: bar.green }}
              ></div>
              <div
                className="bg-yellow-400 w-full"
                style={{ height: bar.yellow }}
              ></div>
              <div
                className="bg-red-500 w-full"
                style={{ height: bar.red }}
              ></div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Integrate Across Your AI Stack",
      description:
        "Seamlessly plug into your existing AI ops, MLOps, and data infrastructure to generate audit-ready insights and transparency reports",
      icon: <Code className="w-6 h-6 text-white" />,
      linkText: "Explore integration",
      color: "bg-gradient-to-br from-rose-500 to-red-600",
      linkColor: "text-rose-600 hover:text-rose-700",
      visual: (
        <div className="relative h-24 mt-6">
          <svg
            viewBox="0 0 100 40"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Background grid lines */}
            <line
              x1="0"
              y1="30"
              x2="100"
              y2="30"
              stroke="#f1f1f1"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="20"
              x2="100"
              y2="20"
              stroke="#f1f1f1"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="10"
              x2="100"
              y2="10"
              stroke="#f1f1f1"
              strokeWidth="0.5"
            />

            {/* Curves */}
            <path
              d="M0,30 C10,28 20,25 30,22 S50,16 60,13 S80,8 100,3"
              fill="none"
              stroke="#FCA5A5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0,35 C15,33 25,30 40,25 S60,18 70,15 S85,10 100,8"
              fill="none"
              stroke="#EF4444"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Accurate Report Generation",
      description:
        "Instantly produce audit-ready, regulator-facing reports tailored to your fintech workflows, complete with traceability, and framework mapping (e.g., NIST, ISO, EU AI Act)",
      icon: <FileText className="w-6 h-6 text-white" />,
      linkText: "Explore reports",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      linkColor: "text-blue-600 hover:text-blue-700",
      visual: (
        <div className="space-y-3 mt-6 relative">
          <div className="h-2 bg-gray-100 rounded-full w-full"></div>
          <div className="h-2 bg-gray-100 rounded-full w-full"></div>
          <div className="h-2 bg-gray-100 rounded-full w-full"></div>
          <div className="flex items-center mt-2 justify-end">
            <div className="h-7 px-3 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-[10px] text-blue-600 font-medium">
                Generated by BlockConvey
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Block Convey styled background */}
      <div className="absolute inset-0 bg-brand-lightest"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-teal-400/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-20 right-1/3 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The all-in-one{" "}
            <span className="text-teal-500">AI Governance platform</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet regulatory expectations with ease. BlockConvey helps fintech
            companies automate compliance with ISO 42001, the EU AI Act, NIST AI
            RMF, and financial regulations, empowering innovation without
            compromising trust or risk posture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card header with icon */}
              <div className={`py-7 px-5 ${card.color}`}>
                <div className="p-3 bg-white/20 rounded-full w-14 h-14 flex items-center justify-center backdrop-blur-sm">
                  {card.icon}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-2 text-sm">{card.description}</p>

                {/* Visual elements */}
                <div className="flex-grow">{card.visual}</div>

                {/* Explore link - positioned at bottom */}
                <div className="mt-6">
                  <a
                    href="#"
                    className={`group inline-flex items-center font-medium transition-colors ${card.linkColor}`}
                  >
                    {card.linkText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
