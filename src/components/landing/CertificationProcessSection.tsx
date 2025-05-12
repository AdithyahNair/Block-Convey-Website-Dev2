import React from "react";
import { motion } from "framer-motion";

export const CertificationProcessSection: React.FC = () => {
  // Define the steps in the certification process
  const certificationSteps = [
    {
      number: 1,
      title: "Identify Gaps",
      description:
        "Assess your current AI governance practices to find areas that don't meet ISO/IEC 42001 standards. Create a roadmap to address these deficiencies.",
    },
    {
      number: 2,
      title: "Collect Evidence",
      description:
        "Gather all necessary documentation, including policies, procedures, risk assessments, and performance metrics that show compliance with ISO/IEC 42001.",
    },
    {
      number: 3,
      title: "Audit Access",
      description:
        "Choose an accredited external auditor with expertise in AI governance to review your documentation and processes for compliance.",
    },
    {
      number: 4,
      title: "Get Certified",
      description:
        "Address any identified gaps, complete a successful audit, and obtain your ISO/IEC 42001 certification to enhance your organization's credibility and trust.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Block Convey styled background with subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-700"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Subtle glowing orbs */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-cyan-400/10 blur-[80px]"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-teal-300/10 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content: Title and process steps */}
          <div>
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Certification Process for
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-6">
                ISO/IEC 42001
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

            <div className="space-y-10">
              {certificationSteps.map((step) => (
                <motion.div
                  key={step.number}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step.number * 0.1 }}
                >
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-teal-300 flex items-center justify-center shadow-lg shadow-cyan-700/20">
                      <span className="text-teal-900 font-bold text-2xl">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Step content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-cyan-50 text-lg opacity-90 leading-relaxed">
                      {step.description}
                    </p>
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
            {/* Main dashboard */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-white/10">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center space-x-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm text-gray-600 ml-2">Dashboard</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex mb-4 space-x-8 text-sm text-gray-600 border-b pb-2">
                  <span className="border-b-2 border-teal-500 pb-2 text-teal-600 font-medium">
                    Dashboard
                  </span>
                  <span>Requirements</span>
                  <span>Controls</span>
                  <span>Risks</span>
                  <span>Evidence</span>
                </div>

                <div className="py-4">
                  <span className="text-sm text-gray-500">
                    Projects / Project Name
                  </span>

                  <div className="mt-6 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium">ISO/IEC 42001</h3>
                        <svg
                          className="h-4 w-4 ml-2 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-500">Progress</div>
                      <div className="text-sm text-gray-500">Evidence</div>
                    </div>

                    <div className="h-4 w-full bg-gray-200 rounded-full mt-4"></div>

                    <div className="h-4 w-full bg-gray-200 rounded-full mt-2"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded-full mt-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -right-4 top-36 bg-white rounded-xl shadow-xl p-4 w-64 border border-cyan-100/30">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center mr-2 border border-teal-100">
                  <svg
                    className="h-4 w-4 text-teal-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-medium">ISO 42001</span>
              </div>

              <div className="space-y-2 mt-4">
                <div className="h-2 bg-gray-200 rounded-full"></div>
                <div className="h-2 bg-gray-200 rounded-full"></div>
                <div className="h-2 bg-gray-200 rounded-full"></div>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#0D9488"
                      strokeWidth="3"
                      strokeDasharray="50, 100"
                    />
                    <text
                      x="18"
                      y="21"
                      textAnchor="middle"
                      fontSize="8"
                      fill="#374151"
                      fontWeight="bold"
                    >
                      50%
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-6 w-72 text-white shadow-xl border border-teal-500/30">
              <div className="flex items-center mb-2">
                <div className="mr-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    Modulos supports you with collecting evidence, to resolve
                    compliance issues with ease.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 right-4 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-6 w-72 text-white shadow-xl border border-cyan-500/30">
              <div className="flex items-center mb-2">
                <div className="mr-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    Get personalized guidance to align your AI practices with
                    ISO/IEC 42001 standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
