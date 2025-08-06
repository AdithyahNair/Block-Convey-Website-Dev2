import React from "react";
import type { Metadata } from "next";
import { MarketingClient } from "./MarketingClient";

export const metadata: Metadata = {
  title: "Marketing - Block Convey",
  description:
    "AI governance marketing solutions and strategies for organizations implementing AI compliance and transparency initiatives.",
  keywords: [
    "AI governance marketing",
    "AI compliance marketing",
    "AI ethics marketing",
    "AI transparency marketing",
    "AI governance strategies",
    "AI compliance campaigns",
  ],
  alternates: {
    canonical: "https://blockconvey.com/marketing",
  },
  openGraph: {
    title: "Marketing - Block Convey",
    description:
      "AI governance marketing solutions and strategies for organizations implementing AI compliance and transparency initiatives.",
    url: "https://blockconvey.com/marketing",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/business-value.png",
        width: 1200,
        height: 630,
        alt: "Block Convey AI Governance Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing - Block Convey",
    description:
      "AI governance marketing solutions and strategies for organizations.",
    images: ["https://blockconvey.com/images/business-value.png"],
    creator: "@blockconvey",
  },
};

export default function MarketingPage() {
  return <MarketingClient />;
}
