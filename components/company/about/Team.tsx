"use client";

import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Arun Prasad",
    role: "CEO",
    image: "/images/arun_team.png",
    description:
      "Visionary leader driving AI governance innovation with 15+ years of experience in fintech and regulatory compliance.",
    linkedin: "https://www.linkedin.com/in/arun-p-0b037688/",
  },
  {
    name: "Tim Adamson",
    role: "CTO",
    image: "/images/tim_team.png",
    description:
      "Technical architect specializing in AI systems and blockchain technology, ensuring scalable and secure solutions.",
    linkedin: "https://www.linkedin.com/in/tim-adamson21/",
  },
  {
    name: "Cameron Kawato",
    role: "VP of Compliance",
    image: "/images/cam_team.png",
    description:
      "Engineering leader focused on building robust AI governance platforms and development team management.",
    linkedin: "https://www.linkedin.com/in/cameronkawato/",
  },
  {
    name: "Connor McCoy",
    role: "Investor Relations Manager",
    image: "/images/connor.png",
    description:
      "Business development strategist driving market expansion and strategic partnerships in AI governance.",
    linkedin: "https://www.linkedin.com/in/cp-mccoy/",
  },
];

const advisors = [
  {
    name: "Weiyee In",
    role: "Banking and AI Governance",
    image: "/images/wei_adv.png",
    description:
      "Leading expert in AI ethics and governance, providing strategic guidance on responsible AI development.",
    linkedin: "https://www.linkedin.com/in/weiyee/",
  },
  {
    name: "Gourab Mukherjee",
    role: "Insurtech",
    image: "/images/gou_adv.png",
    description:
      "Renowned AI researcher specializing in machine learning governance and algorithmic accountability.",
    linkedin: "https://www.linkedin.com/in/gourabmukherjee/",
  },
  {
    name: "Son Le",
    role: "Fractional CFO, Advisor",
    image: "/images/son_le.png",
    description:
      "Compliance expert ensuring our solutions meet evolving regulatory requirements and industry standards.",
    linkedin: "https://www.facebook.com/share/1BQm6sjkmS/?mibextid=wwXIfr",
  },
  {
    name: "Sri Bharadwaj",
    role: "Advisor",
    image: "/images/bharadwaj.png",
    description:
      "Strategic advisor providing guidance on business development and market expansion strategies.",
    linkedin: "https://www.linkedin.com/in/bharadwajsri/",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 bg-brand text-white rounded-full hover:bg-brand/80 transition-colors duration-200"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                {advisor.linkedin && (
                  <a
                    href={advisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 bg-brand text-white rounded-full hover:bg-brand/80 transition-colors duration-200"
                    aria-label={`Connect with ${advisor.name} on LinkedIn`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
