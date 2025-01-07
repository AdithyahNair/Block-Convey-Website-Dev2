import React from "react";
import { motion } from "framer-motion";
import { BarChart2, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    icon: BarChart2,
    value: "75%",
    label: "of financial firms already use AI",
    description:
      "with an additional 10% planning implementation within 3 years",
    source: "https://www.lumenova.ai/blog/governing-generative-ai-finance/",
  },
  {
    icon: Users,
    value: "33%",
    label: "of AI use cases involve third parties",
    description:
      "highlighting the critical need for managing outsourcing risks",
    source: "https://www.lumenova.ai/blog/governing-generative-ai-finance/",
  },
  {
    icon: AlertTriangle,
    value: "100%",
    label: "risk mitigation coverage",
    description:
      "identifying and addressing biases, operational failures, and reputational risks",
    source:
      "https://www.holisticai.com/blog/ai-governance-in-financial-services",
  },
];

export const Statistics: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Need</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The swift adoption of AI in the financial industry highlights the
            pressing need for strong governance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/30">
                  <div className="inline-flex p-3 bg-brand-light/20 rounded-xl mb-6">
                    <Icon className="h-6 w-6 text-brand-dark" />
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 mb-4">{stat.description}</p>
                  <Link
                    to={stat.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand hover:text-brand-dark transition-colors"
                  >
                    View Source →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
