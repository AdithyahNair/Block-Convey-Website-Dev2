import {
  CreditCard,
  LineChart,
  Shield,
  Lock,
  AlertTriangle,
  BarChart2,
} from "lucide-react";
import { Feature } from "./types";

export const featureData: Feature[] = [
  {
    id: "credit-risk-assessment",
    icon: CreditCard,
    title: "Credit Risk Assessment",
    description:
      "Advanced models for credit scoring and loan approval decisions with fairness built-in.",
    details: [
      "Equal treatment across demographic groups",
      "Transparent decision rationale",
      "Historical bias mitigation",
      "Income-based fairness",
      "Protected class variable handling",
    ],
    image:
      "https://www.retailbankerinternational.com/wp-content/uploads/sites/2/2023/02/credit-card-ge2012a6de_1920.png",
    frameworks: ["FCRA", "ECOA", "GDPR"],
  },
  {
    id: "financial-advisory",
    icon: LineChart,
    title: "Financial Advisory",
    description:
      "AI-powered investment and financial planning recommendation systems.",
    details: [
      "Risk tolerance assessment",
      "Age-appropriate recommendations",
      "Socioeconomic fairness",
      "Clear risk communication",
      "Investment suitability checks",
    ],
    image:
      "https://mitsloan.mit.edu/sites/default/files/styles/article_header/public/2024-04/ai-financial-advisor_0.jpg?h=d11f454f&itok=bielWAjm",
    frameworks: ["SEC Guidelines", "MiFID II"],
  },
  {
    id: "insurance-claims",
    icon: Shield,
    title: "Insurance Claims",
    description:
      "Automated claims processing and risk assessment with fairness guarantees.",
    details: [
      "Geographic fairness",
      "Demographic neutrality",
      "Consistent evaluation criteria",
      "Explainable decisions",
      "Protected health information handling",
    ],
    image:
      "https://www.scnsoft.com/insurance/ai-for-insurance-claims/ai-for-insurance-claims_cover.svg",
    frameworks: ["HIPAA", "State Insurance Regulations"],
  },
  {
    id: "fraud-detection",
    icon: Lock,
    title: "Fraud Detection Governance",
    description:
      "Advanced systems for detecting and preventing fraudulent activities.",
    details: [
      "Anomaly detection accuracy",
      "Bias minimization in flagged cases",
      "Real-time monitoring capabilities",
      "Data privacy safeguards",
      "Transparent and explainable alerts",
    ],
    image:
      "https://www.neilsahota.com/wp-content/uploads/2023/07/AI-in-Fraud-Detection.jpg",
    frameworks: ["AML", "GDPR", "CFT"],
  },
  {
    id: "risk-assessment",
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Comprehensive risk analysis and mitigation strategies.",
    details: [
      "AI model risk scoring",
      "Automated risk detection",
      "Mitigation recommendations",
      "Continuous monitoring",
      "Risk trend analysis",
    ],
    image:
      "https://precisa.in/wp-content/uploads/2023/10/Understanding-AI-for-Credit-Risk-Assessment.jpg",
    frameworks: ["Basel", "NIST", "ISO 27001"],
  },
  {
    id: "performance-monitoring",
    icon: BarChart2,
    title: "Performance Monitoring",
    description: "Real-time monitoring and analytics for AI systems.",
    details: [
      "Live performance tracking",
      "Custom metric monitoring",
      "Automated alerts",
      "Performance benchmarking",
      "Historical analysis",
    ],
    image:
      "https://www.motadata.com/wp-content/uploads/2023/12/Blog-Header-The-Power-of-AI-in-Network-Monitoring.png",
    frameworks: ["SOC 2", "ISO 9001"],
  },
];
