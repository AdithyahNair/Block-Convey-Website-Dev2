import React from "react";
import type { Metadata } from "next";
import ISO42001Client from "./ISO42001Client";

export const metadata: Metadata = {
  title:
    "ISO 42001 Compliance: How PRISM by Block Convey Helps You Build Responsible and Compliant AI Systems",
  description:
    "Discover how PRISM by Block Convey helps organizations achieve ISO 42001 compliance for AI management systems. Build trustworthy, auditable, and ethical AI with automated governance.",
  keywords: [
    "ISO 42001",
    "AI compliance",
    "AI management system",
    "PRISM",
    "Block Convey",
    "AI governance",
    "responsible AI",
    "AI audit",
    "AI risk management",
    "AI ethics",
    "AI transparency",
    "AI accountability",
    "AI certification",
    "AI standards",
  ],
  alternates: {
    canonical: "https://blockconvey.com/iso-42001",
  },
  openGraph: {
    title:
      "ISO 42001 Compliance: How PRISM by Block Convey Helps You Build Responsible and Compliant AI Systems",
    description:
      "Discover how PRISM by Block Convey helps organizations achieve ISO 42001 compliance for AI management systems. Build trustworthy, auditable, and ethical AI with automated governance.",
    url: "https://blockconvey.com/iso-42001",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Block Convey ISO 42001 AI Compliance Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ISO 42001 Compliance: How PRISM by Block Convey Helps You Build Responsible and Compliant AI Systems",
    description:
      "Discover how PRISM by Block Convey helps organizations achieve ISO 42001 compliance for AI management systems. Build trustworthy, auditable, and ethical AI with automated governance.",
    images: ["https://blockconvey.com/images/logo.png"],
    creator: "@blockconvey",
  },
};

export default function ISO42001Page() {
  return <ISO42001Client />;
}
