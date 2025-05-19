import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, List, FileText, Database } from "lucide-react";

export const WhyChooseBlockConveySection: React.FC = () => {
  // Track which step is being hovered
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Define the steps with new titles
  const chooseBlockConveySteps = [
    {
      number: 1,
      title: "End-to-End Model Evaluation",
      icon: <List className="w-6 h-6 text-white" />,
      description: "",
    },
    {
      number: 2,
      title: "Automated Compliance Checklist",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      description: "",
      standards: [
        "ISO 42001 AI Management System",
        "NIST AI Risk Management Framework",
        "EU AI Act Requirements",
      ],
    },
    {
      number: 3,
      title: "Generate Report",
      icon: <FileText className="w-6 h-6 text-white" />,
      description: "",
    },
    {
      number: 4,
      title: "Auditable AI Registry",
      icon: <Database className="w-6 h-6 text-white" />,
      description: "",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Block Convey styled background with subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-700"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Subtle glowing orbs */}
      <div className="absolute top-40 left-20 w-56 h-56 rounded-full bg-cyan-400/10 blur-[80px]"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-teal-300/10 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Centered heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            How We Achieve <span className="text-cyan-300">AI Governance</span>
          </h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-24 bg-cyan-400 rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content: Process steps */}
          <div>
            <div className="space-y-8">
              {chooseBlockConveySteps.map((step) => (
                <motion.div
                  key={step.number}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step.number * 0.1 }}
                  onMouseEnter={() => setHoveredStep(step.number)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step number with hover effect */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-cyan-700/20 transition-all duration-300 ${
                        hoveredStep === step.number
                          ? "bg-cyan-400 scale-110"
                          : "bg-gradient-to-br from-cyan-400 to-teal-300"
                      }`}
                    >
                      {/* Show number by default, icon on hover */}
                      {hoveredStep === step.number ? (
                        step.icon
                      ) : (
                        <span className="text-teal-900 font-bold text-xl">
                          {step.number}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Step content with hover effect */}
                  <div
                    className={`transition-all duration-300 ${
                      hoveredStep === step.number ? "translate-x-2" : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    {/* Compliance standards for step 2 */}
                    {step.number === 2 && step.standards && (
                      <div className="mt-3 bg-white/10 rounded-lg p-3">
                        <h4 className="text-white text-sm font-medium mb-2">
                          Compliance Standards:
                        </h4>
                        <ul className="space-y-2">
                          {step.standards.map((standard, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-cyan-50 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{standard}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right content: how-AIGov.png image */}
          <motion.div
            className="relative lg:scale-115 lg:-ml-12 lg:w-[115%] origin-left"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="overflow-hidden">
              <img
                src="/images/how-aigov.png"
                alt="AI Governance Process"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
