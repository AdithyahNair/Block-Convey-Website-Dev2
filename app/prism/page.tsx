import React from "react";
import type { Metadata } from "next";
import PrismClient from "./PrismClient";

export const metadata: Metadata = {
  title: "PRISM - AI Governance Monitor | Block Convey",
  description:
    "PRISM: Predictive Risk and Intelligence Surveillance Monitor. Advanced AI governance monitoring and compliance platform for transparent AI systems.",
  keywords: [
    "PRISM",
    "AI governance monitor",
    "AI surveillance",
    "AI compliance monitoring",
    "AI risk monitoring",
    "AI transparency platform",
    "predictive risk intelligence",
  ],
  openGraph: {
    title: "PRISM - AI Governance Monitor | Block Convey",
    description:
      "PRISM: Predictive Risk and Intelligence Surveillance Monitor. Advanced AI governance monitoring and compliance platform for transparent AI systems.",
    url: "https://blockconvey.com/prism",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/prism-logo.png",
        width: 1200,
        height: 630,
        alt: "PRISM AI Governance Monitor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRISM - AI Governance Monitor | Block Convey",
    description:
      "Advanced AI governance monitoring and compliance platform for transparent AI systems.",
    images: ["https://blockconvey.com/images/prism-logo.png"],
    creator: "@blockconvey",
  },
};

export default function PrismPage() {
  return <PrismClient />;
}
