"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 99, label: "Model Accuracy", suffix: "%" },
  { number: 50, label: "Faster Deployment", suffix: "%" },
  { number: 24, label: "Support Available", suffix: "/7" },
  { number: 100, label: "Compliance Coverage", suffix: "%" },
];

export const Statistics: React.FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const interval = duration / steps;

    const counters = stats.map((stat, index) => {
      const increment = stat.number / steps;
      let currentCount = 0;

      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.number) {
          currentCount = stat.number;
          clearInterval(counters[index]);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(currentCount);
          return newCounts;
        });
      }, interval);
    });

    return () => {
      counters.forEach((counter) => clearInterval(counter));
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-brand-light/10 to-brand-lightest relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI governance solutions deliver measurable results across
            organizations of all sizes
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-light/20 group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl md:text-5xl font-bold text-brand mb-2">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
