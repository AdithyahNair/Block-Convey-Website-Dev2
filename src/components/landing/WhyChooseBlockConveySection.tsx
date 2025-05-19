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
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transform scale-80 origin-top-left lg:-ml-24 lg:mr-4 w-[130%]">
              {/* Browser-like header */}
              <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="mr-2">
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
                  <span className="text-sm text-gray-500 ml-2">
                    by Block Convey
                  </span>
                </div>
              </div>

              <div className="flex">
                {/* Dashboard sidebar */}
                <div className="w-48 min-h-[540px] bg-slate-900 text-white">
                  <div className="p-3">
                    <div className="flex items-center mb-6">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span className="ml-2 text-gray-300">Projects</span>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                        PROJECT
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                          Overview
                        </li>
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          Performance
                        </li>
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          Fairness
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                        ISO 42001 COMPLIANCE
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-center text-white bg-cyan-600 py-1 px-2 rounded">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Documentation
                        </li>
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Risk Assessment
                        </li>
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                          Lifecycle
                        </li>
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          Monitoring
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                        ANALYSIS
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Explainability
                        </li>
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                            />
                          </svg>
                          Drift Analysis
                        </li>
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Reports
                        </li>
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                          Benchmarking
                        </li>
                        <li className="flex items-center text-gray-300 hover:text-white">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Redteaming
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Main content area */}
                <div className="flex-1 p-5 pt-4">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        ISO 42001 Documentation
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Manage AI governance documentation and policies
                      </p>
                    </div>
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

                  {/* Dashboard grid layout */}
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    {/* Framework Adaptation */}
                    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-4">
                      <h3 className="flex items-center text-base font-semibold text-gray-800 mb-4">
                        <svg
                          className="h-5 w-5 text-green-600 mr-2"
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
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="bg-teal-500 h-2 rounded-full"
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
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="bg-amber-500 h-2 rounded-full"
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
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="bg-teal-500 h-2 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Required Actions */}
                    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-4">
                      <h3 className="flex items-center text-base font-semibold text-gray-800 mb-4">
                        <svg
                          className="h-5 w-5 text-blue-600 mr-2"
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

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5 mr-2.5"></div>
                          <p className="text-gray-700 text-sm">
                            Update model validation report
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5 mr-2.5"></div>
                          <p className="text-gray-700 text-sm">
                            Complete Q2 risk assessment
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5 mr-2.5"></div>
                          <p className="text-gray-700 text-sm">
                            Review bias mitigation procedures
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Compliance Score */}
                    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-4">
                      <h3 className="flex items-center text-base font-semibold text-gray-800 mb-4">
                        <svg
                          className="h-5 w-5 text-purple-600 mr-2"
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
                        <div className="text-5xl font-bold text-gray-800 leading-none mb-3">
                          85%
                        </div>

                        <div className="w-full h-3 bg-gray-200 rounded-full mb-2">
                          <div
                            className="bg-purple-500 h-3 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>

                        <p className="text-xs text-gray-500">
                          Based on ISO 42001 requirements
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Model Compliance Summary */}
                  <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-4 mb-4">
                    <h3 className="flex items-center text-base font-semibold text-gray-800 mb-4">
                      <svg
                        className="h-5 w-5 text-teal-600 mr-2"
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

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 text-sm">
                            Customer Sentiment Analysis
                          </span>
                          <span className="text-teal-600 font-medium text-sm">
                            96% Compliant
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div
                            className="bg-teal-500 h-2 rounded-full"
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
                            89% Compliant
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div
                            className="bg-teal-500 h-2 rounded-full"
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
                            76% Compliant
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div
                            className="bg-amber-500 h-2 rounded-full"
                            style={{ width: "76%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Reports */}
                  <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-4">
                    <h3 className="text-base font-semibold text-gray-800 mb-4">
                      Recent Reports
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 text-gray-400 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-700">
                              Q1 2024 Compliance Report
                            </p>
                            <p className="text-xs text-gray-500">
                              2024-03-31 • Quarterly Review
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                          Complete
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 text-gray-400 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-700">
                              Model Validation Report
                            </p>
                            <p className="text-xs text-gray-500">
                              2024-03-15 • Technical Assessment
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">
                          In Progress
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <svg
                            className="h-5 w-5 text-gray-400 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-700">
                              Risk Assessment Update
                            </p>
                            <p className="text-xs text-gray-500">
                              2024-02-28 • Risk Analysis
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                          Complete
                        </span>
                      </div>
                    </div>
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
