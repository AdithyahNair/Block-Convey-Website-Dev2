import React from "react";
import type { Metadata } from "next";
import AIRiskFintechClient from "./AIRiskFintechClient";

export const metadata: Metadata = {
  title:
    "AI Risk in Fintech: How PRISM by Block Convey Enables Safer, Smarter Financial AI",
  description:
    "Discover how PRISM by Block Convey helps fintech companies manage AI risk, ensure regulatory compliance, and build trustworthy financial AI systems with bias detection and explainability.",
  keywords: [
    "AI risk fintech",
    "financial AI",
    "PRISM",
    "Block Convey",
    "AI compliance",
    "fintech AI governance",
    "algorithmic bias",
    "AI explainability",
    "regulatory compliance",
    "fraud detection AI",
    "credit scoring AI",
    "robo-advisors",
    "GDPR compliance",
    "EU AI Act",
    "FCRA compliance",
  ],
  alternates: {
    canonical: "https://blockconvey.com/ai-risk-fintech",
  },
  openGraph: {
    title:
      "AI Risk in Fintech: How PRISM by Block Convey Enables Safer, Smarter Financial AI",
    description:
      "Discover how PRISM by Block Convey helps fintech companies manage AI risk, ensure regulatory compliance, and build trustworthy financial AI systems with bias detection and explainability.",
    url: "https://blockconvey.com/ai-risk-fintech",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Block Convey AI Risk Management for Fintech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Risk in Fintech: How PRISM by Block Convey Enables Safer, Smarter Financial AI",
    description:
      "Discover how PRISM by Block Convey helps fintech companies manage AI risk, ensure regulatory compliance, and build trustworthy financial AI systems with bias detection and explainability.",
    images: ["https://blockconvey.com/images/logo.png"],
    creator: "@blockconvey",
  },
};

export default function AIRiskFintechPage() {
  return <AIRiskFintechClient />;
}
