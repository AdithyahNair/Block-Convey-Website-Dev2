"use client";

import React from "react";
import { motion } from "framer-motion";

const conferences = [
  {
    name: "NYU AI Conference",
    image: "/images/nyu_conf.png",
    description:
      "Presenting cutting-edge AI governance research and solutions.",
    year: "2024",
  },
  {
    name: "Venture Studios Summit",
    image: "/images/vs_conf.png",
    description:
      "Showcasing innovation in AI governance and compliance technology.",
    year: "2024",
  },
];

export const Conferences: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-light/10 to-brand-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conference Presentations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We actively participate in leading AI conferences to share our
            research and insights with the global AI community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {conferences.map((conference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={conference.image}
                  alt={conference.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-brand px-3 py-1 rounded-full text-sm font-medium">
                    {conference.year}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {conference.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {conference.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
