import React from "react";
import { BarChart2, Shield, AlertTriangle, LineChart } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: BarChart2,
    title: "Real-time Dashboard",
    description: "Track model performance and compliance in real-time with comprehensive monitoring and analytics.",
  },
  {
    icon: Shield,
    title: "Compliance Reporting",
    description: "Automated audit trails and regulatory adherence with blockchain-verified documentation.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Comprehensive risk mitigation insights powered by advanced analytics and predictive modeling.",
  },
  {
    icon: LineChart,
    title: "Model Performance Tracking",
    description: "Gain actionable insights into AI outcomes with detailed performance metrics and trend analysis.",
  },
];

export const FeaturesList: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};