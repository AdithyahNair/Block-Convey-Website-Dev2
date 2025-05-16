import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, List, FileText, Database } from "lucide-react";

export const WhyChooseBlockConveySection: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const chooseBlockConveySteps = [
    {
      number: 1,
      title: "End-to-End Model Evaluation",
      icon: <List className="w-5 h-5 text-white" />,
      description: "",
    },
    {
      number: 2,
      title: "Automated Compliance Checklist",
      icon: <AlertTriangle className="w-5 h-5 text-white" />,
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
      icon: <FileText className="w-5 h-5 text-white" />,
      description: "",
    },
    {
      number: 4,
      title: "Auditable AI Registry",
      icon: <Database className="w-5 h-5 text-white" />,
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
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content: Process steps */}
          <div>
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                How We Achieve <span className="text-cyan-300">AI Governance</span>
              </h2>

              {/* Animated underline */}
              <motion.div
                className="h-1 w-24 bg-cyan-400 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 120, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.div>

            <div className="space-y-6">
              {chooseBlockConveySteps.map((step) => (
                <motion.div
                  key={step.number}
                  className="flex items-start gap-4"
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
                      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-cyan-700/20 transition-all duration-300 ${
                        hoveredStep === step.number
                          ? "bg-cyan-400 scale-110"
                          : "bg-gradient-to-br from-cyan-400 to-teal-300"
                      }`}
                    >
                      {hoveredStep === step.number ? (
                        step.icon
                      ) : (
                        <span className="text-teal-900 font-bold text-lg">
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
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    {/* Compliance standards for step 2 */}
                    {step.number === 2 && step.standards && (
                      <div className="mt-2 bg-white/10 rounded-lg p-2">
                        <h4 className="text-white text-sm font-medium mb-2">
                          Compliance Standards:
                        </h4>
                        <ul className="space-y-1.5">
                          {step.standards.map((standard, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-cyan-50 text-sm"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-xl mx-auto lg:mx-0"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-3 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/images/prism-logo.png"
                      alt="PRISM Logo"
                      className="h-6 w-6 mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      PRISM by Block Convey
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    ISO 42001 Documentation
                  </h3>
                  <button className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors">
                    New Report
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Framework Adaptation */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Model Documentation</span>
                      <span className="text-teal-600 font-medium">92%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-500 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Risk Assessment</span>
                      <span className="text-amber-600 font-medium">78%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Performance Monitoring</span>
                      <span className="text-teal-600 font-medium">95%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-500 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Recent Reports */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Reports
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Q1 2024 Compliance Report",
                        date: "2024-03-31",
                        status: "Complete",
                      },
                      {
                        title: "Model Validation Report",
                        date: "2024-03-15",
                        status: "In Progress",
                      },
                    ].map((report, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {report.title}
                          </p>
                          <p className="text-xs text-gray-500">{report.date}</p>
                        </div>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded ${
                            report.status === "Complete"
                              ? "bg-green-50 text-green-600"
                              : "bg-amber-50 text-amber-600"
                          }`}
                        >
                          {report.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};