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

          {/* Right content: Dashboard visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Main dashboard - Scaled down version with same content */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transform scale-85 origin-top-left">
              {/* Browser-like header */}
              <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <img
                        src="/images/prism-logo.png"
                        alt="PRISM Logo"
                        className="h-7 w-7"
                      />
                    </div>
                    <span className="font-semibold text-gray-800 text-base">
                      PRISM
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 ml-3">
                    by Block Convey
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Title section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    ISO 42001 Documentation
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Manage AI governance documentation and policies
                  </p>
                </div>

                {/* Dashboard grid layout */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Left column */}
                  <div className="space-y-4">
                    {/* Framework Adaptation */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="flex items-center text-base font-semibold text-gray-800 mb-3">
                        <svg
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        Framework Adaptation
                      </h3>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 text-sm">
                              Model Documentation
                            </span>
                            <span className="text-teal-600 font-medium text-sm">
                              92%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="bg-teal-500 h-1.5 rounded-full"
                              style={{ width: "92%" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 text-sm">
                              Risk Assessment
                            </span>
                            <span className="text-amber-600 font-medium text-sm">
                              78%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="bg-amber-500 h-1.5 rounded-full"
                              style={{ width: "78%" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 text-sm">
                              Performance Monitoring
                            </span>
                            <span className="text-teal-600 font-medium text-sm">
                              95%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="bg-teal-500 h-1.5 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Required Actions */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="flex items-center text-base font-semibold text-gray-800 mb-3">
                        <svg
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Required Actions
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5 mr-2"></div>
                          <p className="text-gray-700 text-sm">
                            Update model validation report
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5 mr-2"></div>
                          <p className="text-gray-700 text-sm">
                            Complete Q2 risk assessment
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5 mr-2"></div>
                          <p className="text-gray-700 text-sm">
                            Review bias mitigation procedures
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="space-y-4">
                    {/* Compliance Score */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="flex items-center text-base font-semibold text-gray-800 mb-3">
                        <svg
                          className="h-4 w-4 text-purple-600 mr-2"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        Compliance Score
                      </h3>

                      <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-gray-800 leading-none mb-3">
                          85%
                        </div>

                        <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                          <div
                            className="bg-purple-500 h-2 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>

                        <p className="text-xs text-gray-500">
                          Based on ISO 42001 requirements
                        </p>
                      </div>
                    </div>

                    {/* Model Compliance Summary */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="flex items-center text-base font-semibold text-gray-800 mb-3">
                        <svg
                          className="h-4 w-4 text-teal-600 mr-2"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        Model Compliance Summary
                      </h3>

                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 text-sm">
                              Customer Sentiment Analysis
                            </span>
                            <span className="text-teal-600 font-medium text-sm">
                              96%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full">
                            <div
                              className="bg-teal-500 h-1.5 rounded-full"
                              style={{ width: "96%" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 text-sm">
                              Fraud Detection System
                            </span>
                            <span className="text-teal-600 font-medium text-sm">
                              89%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full">
                            <div
                              className="bg-teal-500 h-1.5 rounded-full"
                              style={{ width: "89%" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 text-sm">
                              Credit Risk Assessment
                            </span>
                            <span className="text-amber-600 font-medium text-sm">
                              76%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full">
                            <div
                              className="bg-amber-500 h-1.5 rounded-full"
                              style={{ width: "76%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Report Button */}
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-teal-500 text-white rounded-lg flex items-center hover:bg-teal-600 transition-colors shadow-sm text-sm">
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    New Report
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
