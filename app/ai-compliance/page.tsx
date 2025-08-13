import React from "react";
import type { Metadata } from "next";
import AIComplianceClient from "./AIComplianceClient";

export const metadata: Metadata = {
  title:
    "AI Compliance: Ensuring Trust, Transparency & Legal Alignment with Block Convey's PRISM",
  description:
    "Discover how Block Convey's PRISM platform ensures AI compliance with fairness, transparency, and regulatory alignment. Build trustworthy AI systems with automated governance.",
  keywords: [
    "AI compliance",
    "AI governance",
    "PRISM",
    "Block Convey",
    "AI regulations",
    "AI transparency",
    "AI fairness",
    "AI auditability",
    "EU AI Act",
    "GDPR compliance",
    "AI ethics",
    "responsible AI",
  ],
  alternates: {
    canonical: "https://blockconvey.com/ai-compliance",
  },
  openGraph: {
    title:
      "AI Compliance: Ensuring Trust, Transparency & Legal Alignment with Block Convey's PRISM",
    description:
      "Discover how Block Convey's PRISM platform ensures AI compliance with fairness, transparency, and regulatory alignment. Build trustworthy AI systems with automated governance.",
    url: "https://blockconvey.com/ai-compliance",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Block Convey AI Compliance Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Compliance: Ensuring Trust, Transparency & Legal Alignment with Block Convey's PRISM",
    description:
      "Discover how Block Convey's PRISM platform ensures AI compliance with fairness, transparency, and regulatory alignment. Build trustworthy AI systems with automated governance.",
    images: ["https://blockconvey.com/images/logo.png"],
    creator: "@blockconvey",
  },
};

export default function AICompliancePage() {
  return <AIComplianceClient />;
}
