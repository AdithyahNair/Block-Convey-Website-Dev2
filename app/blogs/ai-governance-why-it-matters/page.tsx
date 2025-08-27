import type { Metadata } from "next";
import AIGovernanceBlogClient from "./AIGovernanceBlogClient";

export const metadata: Metadata = {
  title: "What Is AI Governance and Why It Matters | Block Convey PRISM",
  description:
    "AI governance ensures compliance, transparency, and responsible innovation. Learn why it matters in 2025 and how Block Convey's PRISM helps businesses build trust and reduce AI risks.",
  keywords: [
    "AI governance",
    "PRISM",
    "AI compliance",
    "AI regulations",
    "EU AI Act",
    "ISO 42001",
    "NIST AI RMF",
    "AI risk management",
    "AI transparency",
    "responsible AI",
    "AI ethics",
    "Block Convey",
  ],
  alternates: {
    canonical: "https://blockconvey.com/blogs/ai-governance-why-it-matters",
  },
  openGraph: {
    title: "What Is AI Governance and Why It Matters | Block Convey PRISM",
    description:
      "AI governance ensures compliance, transparency, and responsible innovation. Learn why it matters in 2025 and how Block Convey's PRISM helps businesses build trust and reduce AI risks.",
    url: "https://blockconvey.com/blogs/ai-governance-why-it-matters",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AI Governance - Block Convey PRISM",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is AI Governance and Why It Matters | Block Convey PRISM",
    description:
      "AI governance ensures compliance, transparency, and responsible innovation. Learn why it matters in 2025 and how Block Convey's PRISM helps businesses build trust and reduce AI risks.",
    images: ["https://blockconvey.com/images/logo.png"],
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

export default function AIGovernanceBlogPage() {
  return <AIGovernanceBlogClient />;
}
