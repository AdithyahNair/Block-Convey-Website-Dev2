import React from "react";
import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "AI Governance Solutions - Block Convey",
  description:
    "Comprehensive AI governance solutions including credit risk assessment, insurance claims, fraud detection, and financial advisory modules.",
  keywords: [
    "AI governance solutions",
    "credit risk assessment",
    "insurance claims AI",
    "fraud detection AI",
    "financial advisory AI",
    "AI compliance modules",
    "fintech AI governance",
  ],
  openGraph: {
    title: "AI Governance Solutions - Block Convey",
    description:
      "Comprehensive AI governance solutions including credit risk assessment, insurance claims, fraud detection, and financial advisory modules.",
    url: "https://blockconvey.com/solutions",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/how-aigov.png",
        width: 1200,
        height: 630,
        alt: "Block Convey AI Governance Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Governance Solutions - Block Convey",
    description:
      "Comprehensive AI governance solutions for financial institutions and fintechs.",
    images: ["https://blockconvey.com/images/how-aigov.png"],
    creator: "@blockconvey",
  },
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
