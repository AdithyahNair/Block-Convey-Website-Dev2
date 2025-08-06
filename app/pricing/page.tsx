import React from "react";
import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing - Block Convey",
  description:
    "Choose the right AI governance plan for your organization. Transparent pricing for AI compliance, risk management, and regulatory solutions.",
  keywords: [
    "AI governance pricing",
    "AI compliance costs",
    "AI risk management pricing",
    "enterprise AI governance",
    "AI compliance plans",
    "AI governance subscription",
  ],
  alternates: {
    canonical: "https://blockconvey.com/pricing",
  },
  openGraph: {
    title: "Pricing - Block Convey",
    description:
      "Choose the right AI governance plan for your organization. Transparent pricing for AI compliance, risk management, and regulatory solutions.",
    url: "https://blockconvey.com/pricing",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/businessSection.png",
        width: 1200,
        height: 630,
        alt: "Block Convey Pricing Plans",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Block Convey",
    description: "Choose the right AI governance plan for your organization.",
    images: ["https://blockconvey.com/images/businessSection.png"],
    creator: "@blockconvey",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
