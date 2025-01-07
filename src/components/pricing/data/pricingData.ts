import { Shield, Award, Crown } from "lucide-react";
import { Plan } from "../types";

export const pricingData: Plan[] = [
  {
    name: "Silver",
    price: "$99",
    description:
      "Ideal for startups and small teams to build a foundation for managing financial AI models.",
    features: [
      "Key Features:",
      "Blockchain Logging: Immutable audit trails",
      "Credit Risk Assessment: Basic evaluation tools",
      "Fraud Detection: Foundational alerts",
      "Risk Monitoring: Standard tools",
    ],
    icon: Shield,
    theme: {
      background: "bg-gradient-to-br from-brand-lightest via-brand-light/10 to-brand-light/20",
      hover: "bg-gradient-to-br from-brand-light/20 via-brand-light/30 to-brand-light/40",
      border: "border-brand-light",
      icon: "text-brand",
      text: "text-gray-800",
    },
  },
  {
    name: "Gold",
    price: "$299",
    description:
      "Perfect for growing organizations seeking advanced analytics and governance for financial AI models.",
    features: [
      "Everything in Silver, plus:",
      "Financial Advisory Tools: Data-driven insights for strategy",
      "Insurance Claims Processing: Simplified claims management",
      "Advanced Performance Monitoring: Detailed KPI dashboards",
    ],
    icon: Award,
    popular: true,
    theme: {
      background: "bg-gradient-to-br from-brand-light/20 via-brand/10 to-brand/20",
      hover: "bg-gradient-to-br from-brand-light/30 via-brand/20 to-brand/30",
      border: "border-brand",
      icon: "text-brand",
      text: "text-gray-900",
    },
  },
  {
    name: "Platinum",
    price: "$599",
    description:
      "Best for enterprises needing enterprise-grade tools and customization for financial AI governance.",
    features: [
      "Everything in Gold, plus:",
      "Advanced Risk Assessment Analytics: Comprehensive evaluation tools",
      "Enterprise-Grade Fraud Detection: Advanced detection and governance",
      "Unlimited events for monitoring and logging",
    ],
    icon: Crown,
    theme: {
      background: "bg-gradient-to-br from-brand/10 via-brand-dark/10 to-brand-dark/20",
      hover: "bg-gradient-to-br from-brand/20 via-brand-dark/20 to-brand-dark/30",
      border: "border-brand-dark",
      icon: "text-brand-dark",
      text: "text-gray-900",
    },
  },
];