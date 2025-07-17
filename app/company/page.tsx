import React from "react";
import type { Metadata } from "next";
import CompanyClient from "./CompanyClient";

export const metadata: Metadata = {
  title: "Company - Block Convey",
  description:
    "Learn about Block Convey's mission to make AI transparent, accountable, and compliant. Meet our team and discover our approach to AI governance.",
  keywords: [
    "Block Convey team",
    "AI governance company",
    "AI compliance mission",
    "AI transparency",
    "AI ethics team",
    "AI governance experts",
  ],
  openGraph: {
    title: "Company - Block Convey",
    description:
      "Learn about Block Convey's mission to make AI transparent, accountable, and compliant. Meet our team and discover our approach to AI governance.",
    url: "https://blockconvey.com/company",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/about1.png",
        width: 1200,
        height: 630,
        alt: "Block Convey Company and Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company - Block Convey",
    description:
      "Learn about Block Convey's mission to make AI transparent, accountable, and compliant.",
    images: ["https://blockconvey.com/images/about1.png"],
    creator: "@blockconvey",
  },
};

export default function CompanyPage() {
  return <CompanyClient />;
}
