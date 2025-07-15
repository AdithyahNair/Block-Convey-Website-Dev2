"use client";

import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Arun Chandrasekaran",
    role: "CEO",
    image: "/images/arun_team.png",
    description:
      "Visionary leader driving AI governance innovation with 15+ years of experience in fintech and regulatory compliance.",
  },
  {
    name: "Tim Adamson",
    role: "CTO",
    image: "/images/tim_team.png",
    description:
      "Technical architect specializing in AI systems and blockchain technology, ensuring scalable and secure solutions.",
  },
  {
    name: "Cameron Hickey",
    role: "Head of Engineering",
    image: "/images/cam_team.png",
    description:
      "Engineering leader focused on building robust AI governance platforms and development team management.",
  },
];

const advisors = [
  {
    name: "Dr. Weiming Zhang",
    role: "AI Ethics Advisor",
    image: "/images/wei_adv.png",
    description:
      "Leading expert in AI ethics and governance, providing strategic guidance on responsible AI development.",
  },
  {
    name: "Dr. Gou Ayami",
    role: "Technical Advisor",
    image: "/images/gou_adv.png",
    description:
      "Renowned AI researcher specializing in machine learning governance and algorithmic accountability.",
  },
  {
    name: "Dr. Illias Apalodimas",
    role: "Product Strategy Advisor",
    image: "/images/illias_adv.png",
    description:
      "Product strategist with deep expertise in AI governance solutions and market dynamics.",
  },
  {
    name: "Son Le",
    role: "Compliance Advisor",
    image: "/images/son_le.png",
    description:
      "Compliance expert ensuring our solutions meet evolving regulatory requirements and industry standards.",
  },
  {
    name: "Connor Liu",
    role: "Business Development Advisor",
    image: "/images/connor.png",
    description:
      "Business development strategist driving market expansion and strategic partnerships in AI governance.",
  },
];

export const Team: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts combines deep technical knowledge with
            regulatory expertise to deliver cutting-edge AI governance
            solutions.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Leadership Team
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-brand font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Advisory Board
          </motion.h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors duration-300"></div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {advisor.name}
                </h4>
                <p className="text-brand font-medium mb-2 text-sm">
                  {advisor.role}
                </p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {advisor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
