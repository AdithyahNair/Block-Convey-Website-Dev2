import React from "react";
import type { Metadata } from "next";
import CompanyClient from "./CompanyClient";

export const metadata: Metadata = {
  title: "About Us - Block Convey | AI Governance & Compliance Experts",
  description:
    "Learn about Block Convey's mission to make AI transparent, accountable, and compliant. Meet our team and discover our approach to AI governance.",
  keywords: [
    "Block Convey team",
    "AI governance company",
    "AI compliance mission",
    "AI transparency",
    "AI ethics team",
    "AI governance experts",
    "about Block Convey",
    "AI compliance company",
  ],
  alternates: {
    canonical: "https://blockconvey.com/company",
  },
  openGraph: {
    title: "About Us - Block Convey | AI Governance & Compliance Experts",
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
    title: "About Us - Block Convey | AI Governance & Compliance Experts",
    description:
      "Learn about Block Convey's mission to make AI transparent, accountable, and compliant.",
    images: ["https://blockconvey.com/images/about1.png"],
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

export default function CompanyPage() {
  return <CompanyClient />;
}
