import React from "react";
import type { Metadata } from "next";
import AIRiskAssessmentClient from "./AIRiskAssessmentClient";

export const metadata: Metadata = {
  title:
    "AI Risk Assessment with PRISM by Block Convey: The Future of Transparent AI Governance",
  description:
    "Discover how PRISM by Block Convey revolutionizes AI risk assessment with transparent governance, bias detection, and regulatory compliance for fintech organizations.",
  keywords: [
    "AI risk assessment",
    "AI governance",
    "PRISM",
    "Block Convey",
    "AI compliance",
    "bias detection",
    "fintech AI",
    "regulatory compliance",
    "AI transparency",
    "AI ethics",
  ],
  alternates: {
    canonical: "https://blockconvey.com/ai-risk-assessment",
  },
  openGraph: {
    title:
      "AI Risk Assessment with PRISM by Block Convey: The Future of Transparent AI Governance",
    description:
      "Discover how PRISM by Block Convey revolutionizes AI risk assessment with transparent governance, bias detection, and regulatory compliance for fintech organizations.",
    url: "https://blockconvey.com/ai-risk-assessment",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Block Convey AI Risk Assessment Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Risk Assessment with PRISM by Block Convey: The Future of Transparent AI Governance",
    description:
      "Discover how PRISM by Block Convey revolutionizes AI risk assessment with transparent governance, bias detection, and regulatory compliance for fintech organizations.",
    images: ["https://blockconvey.com/images/logo.png"],
    creator: "@blockconvey",
  },
};

export default function AIRiskAssessmentPage() {
  return <AIRiskAssessmentClient />;
}
