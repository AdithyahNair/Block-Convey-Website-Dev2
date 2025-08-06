import React from "react";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Block Convey - The Fastest Path to AI Compliance",
  description:
    "Block Convey helps organizations achieve AI compliance through automated governance, risk management, and regulatory compliance solutions.",
  keywords: [
    "AI compliance",
    "AI governance",
    "regulatory compliance",
    "risk management",
    "automated governance",
    "AI ethics",
    "AI transparency",
  ],
  alternates: {
    canonical: "https://blockconvey.com",
  },
  openGraph: {
    title: "Block Convey - The Fastest Path to AI Compliance",
    description:
      "Block Convey helps organizations achieve AI compliance through automated governance, risk management, and regulatory compliance solutions.",
    url: "https://blockconvey.com",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Block Convey AI Governance Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Block Convey - The Fastest Path to AI Compliance",
    description:
      "Block Convey helps organizations achieve AI compliance through automated governance, risk management, and regulatory compliance solutions.",
    images: ["https://blockconvey.com/images/business-value.png"],
    creator: "@blockconvey",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
