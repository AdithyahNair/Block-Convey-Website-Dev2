import React from "react";
import { motion } from "framer-motion";
import {
  Link2,
  Activity,
  Scale,
  Lock,
  BarChart2,
  Shield,
  AlertTriangle,
  LineChart,
} from "lucide-react";

const benefits = [
  {
    icon: Link2,
    title: "Blockchain-Powered Oversight",
    description:
      "Immutable audit trails ensure compliance and transparency across all AI operations.",
  },
  {
    icon: Activity,
    title: "Proactive AI Monitoring",
    description:
      "Real-time detection of fairness issues, bias, and model drift to maintain optimal performance.",
  },
  {
    icon: Scale,
    title: "Scalable Solutions",
    description:
      "Flexible infrastructure that grows with your organization, from startup to enterprise.",
  },
  {
    icon: Lock,
    title: "Enhanced Trust",
    description:
      "Build confidence with stakeholders through transparent, explainable AI governance.",
  },
  {
    icon: BarChart2,
    title: "Real-time Dashboard",
    description:
      "Track model performance and compliance in real-time with comprehensive monitoring and analytics.",
  },
  {
    icon: Shield,
    title: "Compliance Reporting",
    description:
      "Automated audit trails and regulatory adherence with blockchain-verified documentation.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description:
      "Comprehensive risk mitigation insights powered by advanced analytics and predictive modeling.",
  },
  {
    icon: LineChart,
    title: "Model Performance Tracking",
    description:
      "Gain actionable insights into AI outcomes with detailed performance metrics and trend analysis.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-light/20 to-brand-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Block Convey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides the tools and oversight needed
            for responsible AI governance in financial services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-brand-light/30"
              >
                <div className="inline-flex p-3 bg-brand-light/20 rounded-xl mb-6">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
