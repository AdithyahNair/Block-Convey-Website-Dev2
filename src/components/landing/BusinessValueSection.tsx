import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  TrendingUp,
  Shield,
  BarChart4,
  Monitor,
  CheckCircle,
  Zap,
  Clock,
  Activity,
} from "lucide-react";

export const BusinessValueSection: React.FC = () => {
  // The main categories from the diagram
  const valueCategories = [
    {
      title: "Deliver High Performance AI",
      icon: <Eye className="w-5 h-5 text-teal-600" />,
      items: [
        { name: "Performance", icon: <BarChart4 className="w-4 h-4" /> },
        { name: "Quality", icon: <CheckCircle className="w-4 h-4" /> },
        { name: "Metrics monitoring", icon: <Monitor className="w-4 h-4" /> },
        { name: "Correctness", icon: <CheckCircle className="w-4 h-4" /> },
      ],
    },
    {
      title: "Reduce Costs and Increase ROI",
      icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
      items: [
        { name: "ROI analysis", icon: <TrendingUp className="w-4 h-4" /> },
        { name: "A/B test", icon: <Activity className="w-4 h-4" /> },
        { name: "Latency", icon: <Clock className="w-4 h-4" /> },
        { name: "Traffic", icon: <Zap className="w-4 h-4" /> },
      ],
    },
    {
      title: "Be Responsible with Governance",
      icon: <Shield className="w-5 h-5 text-teal-600" />,
      items: [
        { name: "Bias", icon: <Activity className="w-4 h-4" /> },
        { name: "Protection", icon: <Shield className="w-4 h-4" /> },
        { name: "Safety", icon: <Shield className="w-4 h-4" /> },
        { name: "Privacy", icon: <Shield className="w-4 h-4" /> },
      ],
    },
  ];

  // Input models on the left side
  const inputModels = [
    {
      title: "Generative AI models",
      icon: "🧠",
      description: "AI applications and LLMs",
    },
    {
      title: "Predictive models",
      icon: "📊",
      description: "Structured and unstructured ML models",
    },
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The AI Observability Platform that Drives
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500">
            Business Value
          </h2>
        </motion.div>

        <div className="relative">
          {/* Main diagram */}
          <div className="relative">
            {/* Outer border */}
            <div className="absolute -inset-2 border border-teal-500 rounded-3xl"></div>

            {/* Teal logo at top */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-teal-500 rounded-md p-2.5 z-10">
              <div className="h-5 w-5 text-white flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-6 pb-6 pl-3 pr-3">
              {/* Left side - Input models */}
              <div className="md:col-span-3 flex flex-col justify-center space-y-4 z-10">
                {inputModels.map((model, index) => (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-2.5 mb-1">
                      <div className="text-lg">{model.icon}</div>
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {model.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600">{model.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Connection lines */}
              <div className="md:col-span-1 relative hidden md:block">
                <div className="absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute top-1/4 h-2 w-2 bg-teal-500 rounded-full left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 h-2 w-2 bg-teal-500 rounded-full left-1/2 transform -translate-x-1/2"></div>

                {/* Horizontal line to the platform */}
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-12 h-0.5 bg-gray-200"></div>
              </div>

              {/* Main platform categories */}
              <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-3">
                {valueCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="bg-cyan-50/80 rounded-lg p-4"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-1.5 bg-white rounded-full shadow-sm">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-center text-base font-semibold text-gray-800 mb-3">
                      {category.title}
                    </h3>

                    <div className="space-y-1.5">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className="bg-cyan-100/90 rounded-md py-2 px-2 text-center text-gray-700 text-sm font-medium flex items-center justify-center"
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom organizational alignment box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Connection line */}
              <div className="h-8 w-0.5 bg-gray-200 mb-1"></div>
              <div className="h-2 w-2 bg-teal-500 rounded-full mb-1"></div>

              {/* Organizational alignment box */}
              <div className="bg-amber-50 rounded-lg py-3 px-4 w-full text-center border border-amber-100">
                <div className="flex justify-center mb-1">
                  <svg
                    className="h-5 w-5 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-800">
                  Organizational alignment
                </h3>
              </div>

              {/* Bottom text */}
              <div className="flex justify-center items-center space-x-1 mt-3 text-gray-600 text-xs font-medium">
                <span>Single source of truth</span>
                <span className="text-teal-500 font-bold">•</span>
                <span>Eliminate silos</span>
                <span className="text-teal-500 font-bold">•</span>
                <span>Efficiency improvement</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
