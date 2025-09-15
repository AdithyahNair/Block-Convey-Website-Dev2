import type { Metadata } from "next";
import AIRiskManagementFrameworksClient from "./AIRiskManagementFrameworksClient";

export const metadata: Metadata = {
  title: "AI Risk Management Frameworks | Tools, Standards & Strategy with PRISM",
  description:
    "Learn about AI risk management frameworks, key tools, global standards like ISO 42001 & NIST, and how PRISM helps organizations manage AI risks responsibly.",
  keywords: [
    "AI risk management frameworks",
    "AI risk management",
    "NIST AI RMF",
    "ISO 42001",
    "EU AI Act",
    "GDPR AI compliance",
    "AI governance",
    "PRISM",
    "AI risk assessment",
    "AI compliance tools",
    "AI risk mitigation",
    "responsible AI",
    "AI ethics",
    "Block Convey",
  ],
  alternates: {
    canonical: "https://blockconvey.com/blogs/ai-risk-management-frameworks",
  },
  openGraph: {
    title: "AI Risk Management Frameworks | Tools, Standards & Strategy with PRISM",
    description:
      "Learn about AI risk management frameworks, key tools, global standards like ISO 42001 & NIST, and how PRISM helps organizations manage AI risks responsibly.",
    url: "https://blockconvey.com/blogs/ai-risk-management-frameworks",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/ai-risk-assessment-frameworks.png",
        width: 1200,
        height: 630,
        alt: "AI Risk Management Frameworks: Tools, Standards, and Strategy",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Risk Management Frameworks | Tools, Standards & Strategy with PRISM",
    description:
      "Learn about AI risk management frameworks, key tools, global standards like ISO 42001 & NIST, and how PRISM helps organizations manage AI risks responsibly.",
    images: ["https://blockconvey.com/images/ai-risk-assessment-frameworks.png"],
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

export default function AIRiskManagementFrameworksPage() {
  return <AIRiskManagementFrameworksClient />;
}
