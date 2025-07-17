import React from "react";
import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Resources - Block Convey",
  description:
    "AI governance resources, insights, and best practices. Tools and guides for implementing AI compliance and risk management.",
  keywords: [
    "AI governance resources",
    "AI compliance guides",
    "AI ethics best practices",
    "AI governance tools",
    "AI risk management resources",
    "AI compliance toolkit",
  ],
  openGraph: {
    title: "Resources - Block Convey",
    description:
      "AI governance resources, insights, and best practices. Tools and guides for implementing AI compliance and risk management.",
    url: "https://blockconvey.com/resources",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/how-aigov.png",
        width: 1200,
        height: 630,
        alt: "Block Convey AI Governance Resources",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources - Block Convey",
    description: "AI governance resources, insights, and best practices.",
    images: ["https://blockconvey.com/images/how-aigov.png"],
    creator: "@blockconvey",
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
