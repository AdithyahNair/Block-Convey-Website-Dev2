import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export const FinancialModelSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  // Feature cards 
  const features = [
    {
      title: "Fairness Analysis",
      icon: "⚖️",
      description: "Ensure equal treatment across demographic segments and eliminate bias in financial decisions",
      gradient: "bg-cyan-400",
    },
    {
      title: "Risk Detection",
      icon: "🔍",
      description: "Identify potential risks in your models with advanced anomaly detection algorithms",
      gradient: "bg-blue-500/90",
    },
    {
      title: "Compliance Shield",
      icon: "🛡️",
      description: "Stay compliant with ISO, ECCOA, GDPR and other financial regulatory requirements",
      gradient: "bg-teal-500",
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="relative z-10">
          {/* Title and subtitle */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-2">
              Single-Platform Assessment for Your
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-500 mb-8">
              Financial Models
            </h1>
            
            {/* Progress line */}
            <div className="relative h-1 w-full max-w-xl mx-auto mb-14">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-teal-200 to-teal-200 h-[2px]"></div>
              
              {[0, 33, 66, 100].map((pos, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-teal-500"
                  style={{ 
                    left: `${pos}%`, 
                    top: '-3px',
                    transform: 'translateX(-50%)'
                  }}
                />
              ))}
            </div>
            
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Consolidate real-time detection of fairness issues, bias, and model drift to maintain optimal performance. Ensure compliance with ISO, ECCOA, and GDPR
              <span className="text-teal-600 font-medium"> —all in one enterprise-grade tool.</span>
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="relative rounded-xl overflow-hidden h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + i * 0.15,
                }}
              >
                {/* Card background */}
                <div className={`absolute inset-0 ${feature.gradient}`} />
                
                {/* Card content */}
                <div className="relative z-10 p-6 text-white h-full flex flex-col min-h-[200px]">
                  <div className="mb-2 text-2xl">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 