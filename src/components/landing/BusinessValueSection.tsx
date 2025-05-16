import React from "react";
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
  Building2,
  ArrowRight,
  BrainCircuit,
  BarChart3,
} from "lucide-react";
import tab from "../../../public/tab.png";

export const BusinessValueSection: React.FC = () => {
  // The main categories from the diagram
  const valueCategories = [
    {
      title: "Deploy AI with Confidence",
      icon: <Eye className="w-5 h-5 text-teal-600" />,
      items: [
        { name: "Performance", icon: <BarChart4 className="w-4 h-4" /> },
        { name: "Fairness", icon: <CheckCircle className="w-4 h-4" /> },
        { name: "Metrics monitoring", icon: <Monitor className="w-4 h-4" /> },
        {
          name: "Model Explainability",
          icon: <CheckCircle className="w-4 h-4" />,
        },
      ],
    },
    {
      title: "Responsible Governance",
      icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
      items: [
        {
          name: "EU AI Act Readiness",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        { name: "ISO 42001 checklist", icon: <Activity className="w-4 h-4" /> },
        { name: "NIST AI RMF", icon: <Clock className="w-4 h-4" /> },
        { name: "SR 11-7", icon: <Zap className="w-4 h-4" /> },
      ],
    },
    {
      title: "Reduce Risk, Increase Value",
      icon: <Shield className="w-5 h-5 text-teal-600" />,
      items: [
        {
          name: "Transparent AI Registry",
          icon: <Activity className="w-4 h-4" />,
        },
        {
          name: "Synth Data Generation",
          icon: <Shield className="w-4 h-4" />,
        },
        {
          name: "Failure Prevention",
          icon: <Shield className="w-4 h-4" />,
        },
        { name: "Exposure minimization", icon: <Shield className="w-4 h-4" /> },
      ],
    },
  ];

  // Input models on the left side
  const inputModels = [
    {
      title: "Generative AI models",
      icon: <BrainCircuit className="w-6 h-6 text-pink-500" />,
      description: "AI applications and LLMs",
    },
    {
      title: "Predictive models",
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      description: "Structured and unstructured ML models",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Block Convey styled background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C920_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C920_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Subtle gradient orbs */}
      <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-cyan-400/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
            The AI Governance Platform that Drives
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 text-transparent bg-clip-text">
            Business Value
          </h2>
        </div>

        <div className="relative">
          {/* Main diagram */}
          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl shadow-teal-500/5 p-10 max-w-[95%] mx-auto">
            {/* Block Convey tab at top */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex items-center justify-center">
                <img
                  src={tab}
                  alt="Block Convey Tab"
                  className="h-16 w-auto drop-shadow-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
              {/* Left side - Input models */}
              <div className="lg:col-span-3 flex flex-col justify-center space-y-10 z-10 relative">
                {/* Model cards */}
                {inputModels.map((model) => (
                  <div
                    key={model.title}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg relative z-10"
                  >
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
                      <div className="bg-gradient-to-r from-teal-400 to-teal-500 rounded-full p-1 shadow-lg shadow-teal-300/30">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-3">
                      <div className="p-2.5 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
                        {model.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800 text-lg whitespace-normal">
                        {model.title}
                      </h3>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-gray-100 to-transparent mb-3"></div>
                    <p className="text-base text-gray-600 font-medium">
                      {model.description}
                    </p>
                  </div>
                ))}

                {/* Static connecting flow lines */}
                <div className="absolute right-0 top-0 h-full w-8 hidden lg:block">
                  <div className="absolute right-4 h-[75%] w-[2px] bg-gradient-to-b from-transparent via-teal-500/50 to-transparent"></div>
                  <div className="absolute right-4 top-[40%] h-[20%] w-[2px] bg-teal-500/70"></div>
                </div>
              </div>

              {/* Connection lines */}
              <div className="lg:col-span-1 relative hidden lg:block">
                <div className="absolute h-full w-[2px] bg-gradient-to-b from-teal-400/30 via-teal-500/50 to-teal-400/30 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute top-1/4 h-3 w-3 bg-teal-500 rounded-full left-1/2 transform -translate-x-1/2 shadow-md shadow-teal-500/30"></div>
                <div className="absolute bottom-1/4 h-3 w-3 bg-teal-500 rounded-full left-1/2 transform -translate-x-1/2 shadow-md shadow-teal-500/30"></div>

                {/* Horizontal line to the platform */}
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-16 h-[2px] bg-gradient-to-r from-teal-500/50 to-teal-400/30"></div>

                {/* Static data flow indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-5 w-2 h-2 rounded-full bg-teal-500 shadow-md shadow-teal-500/30"></div>
              </div>

              {/* Main platform categories */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {valueCategories.map((category) => (
                  <div
                    key={category.title}
                    className="bg-gradient-to-b from-cyan-50/90 to-white rounded-xl py-6 px-5 shadow-md border border-cyan-100/50"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-white to-cyan-50 rounded-full shadow-md">
                        <div className="transform scale-150">
                          {category.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-center text-xl font-semibold text-gray-800 mb-5 whitespace-normal px-2 overflow-visible">
                      {category.title}
                    </h3>

                    <div className="space-y-3.5">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className="bg-gradient-to-r from-cyan-100/70 to-white rounded-lg py-3 px-4 text-center text-gray-700 text-base font-medium flex items-center justify-center min-h-[44px] shadow-sm border border-cyan-200/30"
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom organizational alignment box */}
            <div className="flex flex-col items-center mt-8">
              {/* Connection line */}
              <div className="h-12 w-[2px] bg-gradient-to-b from-teal-500/50 to-amber-400/30 mb-2"></div>
              <div className="h-3 w-3 bg-amber-500 rounded-full mb-3 shadow-md shadow-amber-500/30"></div>

              {/* Organizational alignment box */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-50/60 rounded-xl py-6 px-10 w-full text-center border border-amber-100/50 shadow-md">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white rounded-full shadow-md">
                    <Building2 className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Organizational alignment
                </h3>
              </div>

              {/* Bottom text */}
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-gray-600 text-base font-medium">
                <span className="whitespace-nowrap flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                  Single source of truth
                </span>
                <span className="whitespace-nowrap flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                  Eliminate silos
                </span>
                <span className="whitespace-nowrap flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                  Efficiency improvement
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
