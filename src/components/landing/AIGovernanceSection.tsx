import React from "react";
import { motion, useInView } from "framer-motion";

export const AIGovernanceSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  // Cards for AI governance features
  const features = [
    {
      title: "Streamline AI governance",
      description:
        "Use automated workflows purpose-built for AI governance, risk management, and compliance.",
    },
    {
      title: "Ensure AI risk management",
      description:
        "Evaluate your AI systems against operational, regulatory, and reputational risks at every stage of development and deployment.",
    },
    {
      title: "Integrate with your AI Ops",
      description:
        "Connect with existing AI infrastructure to generate comprehensive governance insights and artifacts.",
    },
    {
      title: "Comply with AI regulations and standards",
      description:
        "Ensure continuous alignment of AI projects with the latest global regulations, internal policies, and industry standards.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-purple-100 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Everything you need to adopt AI with confidence
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm overflow-hidden h-full p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base">{feature.description}</p>

              {/* Image placeholder - matches the layout in the reference image */}
              <div className="mt-8 h-48 bg-gray-100 rounded-lg">
                {/* This is where the image would be */}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6 flex items-center space-x-4">
            <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
              ⚙️
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                Generative AI Org Best Practices
              </h4>
              <div className="flex items-center mt-1">
                <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                  93 Projects Compliant
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Organizational standards for ChatGPT, Dalle2, Claude, Stable.M,
                Midjourney, Dolly...
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 flex items-center space-x-4">
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              🏙️
            </div>
            <div>
              <h4 className="text-lg font-semibold">
                New York City Local Law No. 144
              </h4>
              <div className="flex items-center mt-1">
                <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                  69 Projects Compliant
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Automated employment decision tools law compliance verification
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
