import React from "react";
import type { Metadata } from "next";
import ConsultingClient from "./ConsultingClient";

export const metadata: Metadata = {
  title: "AI Governance Consulting - Block Convey",
  description:
    "Expert AI governance consulting services. Get personalized guidance for AI compliance, risk management, and regulatory requirements.",
  keywords: [
    "AI governance consulting",
    "AI compliance consulting",
    "AI risk consulting",
    "AI regulatory consulting",
    "AI ethics consulting",
    "AI governance expertise",
  ],
  alternates: {
    canonical: "https://blockconvey.com/consulting",
  },
  openGraph: {
    title: "AI Governance Consulting - Block Convey",
    description:
      "Expert AI governance consulting services. Get personalized guidance for AI compliance, risk management, and regulatory requirements.",
    url: "https://blockconvey.com/consulting",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/about2.png",
        width: 1200,
        height: 630,
        alt: "Block Convey AI Governance Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Governance Consulting - Block Convey",
    description:
      "Expert AI governance consulting services for compliance and risk management.",
    images: ["https://blockconvey.com/images/about2.png"],
    creator: "@blockconvey",
  },
};

export default function ConsultingPage() {
  return <ConsultingClient />;
}
