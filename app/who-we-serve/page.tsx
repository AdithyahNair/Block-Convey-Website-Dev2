import React from "react";
import type { Metadata } from "next";
import WhoWeServeClient from "./WhoWeServeClient";

export const metadata: Metadata = {
  title: "Who We Serve - Block Convey",
  description:
    "AI governance solutions for financial institutions, fintech startups, insurtech companies, and specialized financial services organizations.",
  keywords: [
    "financial institutions AI",
    "fintech AI governance",
    "insurtech AI compliance",
    "banking AI governance",
    "financial services AI",
    "AI compliance for banks",
    "fintech compliance solutions",
  ],
  alternates: {
    canonical: "https://blockconvey.com/who-we-serve",
  },
  openGraph: {
    title: "Who We Serve - Block Convey",
    description:
      "AI governance solutions for financial institutions, fintech startups, insurtech companies, and specialized financial services organizations.",
    url: "https://blockconvey.com/who-we-serve",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/about3.png",
        width: 1200,
        height: 630,
        alt: "Block Convey Serves Financial Institutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Serve - Block Convey",
    description:
      "AI governance solutions for financial institutions, fintechs, and insurtech companies.",
    images: ["https://blockconvey.com/images/about3.png"],
    creator: "@blockconvey",
  },
};

export default function WhoWeServePage() {
  return <WhoWeServeClient />;
}
