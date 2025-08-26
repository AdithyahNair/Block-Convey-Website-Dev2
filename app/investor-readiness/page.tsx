import React from "react";
import type { Metadata } from "next";
import InvestorReadinessClient from "./InvestorReadinessClient";

export const metadata: Metadata = {
  title:
    "Investor Readiness - Accelerate Your Funding with Confidence | Block Convey",
  description:
    "Show investors you're audit-ready, funding-ready, future-ready. Get investor readiness reports that demonstrate AI transparency, compliance, and performance metrics.",
  keywords: [
    "investor readiness",
    "AI funding",
    "venture capital",
    "due diligence",
    "AI compliance",
    "investor reports",
    "funding acceleration",
    "AI governance",
    "VC funding",
    "startup funding",
    "AI risk assessment",
    "compliance reporting",
  ],
  alternates: {
    canonical: "https://blockconvey.com/investor-readiness",
  },
  openGraph: {
    title: "Investor Readiness - Accelerate Your Funding with Confidence",
    description:
      "Show investors you're audit-ready, funding-ready, future-ready. Get investor readiness reports that demonstrate AI transparency, compliance, and performance metrics.",
    url: "https://blockconvey.com/investor-readiness",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/investor-readiness-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Block Convey Investor Readiness Dashboard - AI Risk Assessment Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Readiness - Accelerate Your Funding with Confidence",
    description:
      "Show investors you're audit-ready, funding-ready, future-ready. Get investor readiness reports that demonstrate AI transparency, compliance, and performance metrics.",
    images: ["https://blockconvey.com/images/investor-readiness-dashboard.png"],
    creator: "@blockconvey",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "DtFD50sy6Sqj4025S597DGBckEzvygnl7XPlDNSeDN0",
  },
  authors: [{ name: "Block Convey" }],
  creator: "Block Convey",
  publisher: "Block Convey",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://blockconvey.com"),
};

export default function InvestorReadinessPage() {
  return <InvestorReadinessClient />;
}
