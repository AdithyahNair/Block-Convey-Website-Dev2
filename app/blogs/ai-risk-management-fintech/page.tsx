import { Metadata } from "next";
import AIRiskManagementFintechClient from "./AIRiskManagementFintechClient";

export const metadata: Metadata = {
  title:
    "Managing AI Risk in Fintech | PRISM for Compliance, Bias & Governance",
  description:
    "Discover how fintechs can manage AI risk with PRISM. From compliance with ISO 42001 and GDPR to bias detection and audit-ready reports, learn how to build safe, trustworthy AI.",
  keywords: [
    "AI risk management fintech",
    "fintech AI compliance",
    "AI bias in lending",
    "credit scoring AI",
    "PRISM fintech",
    "ISO 42001 fintech",
    "GDPR compliance fintech",
    "EU AI Act fintech",
    "fraud detection AI",
    "AI governance fintech",
    "robo-advisory compliance",
    "KYC AML AI",
    "fintech AI transparency",
    "model drift monitoring",
    "algorithmic bias detection",
  ],
  authors: [{ name: "Block Convey" }],
  publisher: "Block Convey",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://blockconvey.com"),
  alternates: {
    canonical: "https://blockconvey.com/blogs/ai-risk-management-fintech",
  },
  openGraph: {
    title:
      "Managing AI Risk in Fintech | PRISM for Compliance, Bias & Governance",
    description:
      "Discover how fintechs can manage AI risk with PRISM. From compliance with ISO 42001 and GDPR to bias detection and audit-ready reports, learn how to build safe, trustworthy AI.",
    url: "https://blockconvey.com/blogs/ai-risk-management-fintech",
    siteName: "Block Convey",
    images: [
      {
        url: "/images/ai-risk-management-fintech.png",
        width: 1200,
        height: 630,
        alt: "Managing AI Risk in Fintech: Compliance, Bias, and Beyond",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Managing AI Risk in Fintech | PRISM for Compliance, Bias & Governance",
    description:
      "Discover how fintechs can manage AI risk with PRISM. From compliance with ISO 42001 and GDPR to bias detection and audit-ready reports, learn how to build safe, trustworthy AI.",
    images: ["/images/ai-risk-management-fintech.png"],
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
    google: "your-google-verification-code",
  },
};

export default function AIRiskManagementFintechPage() {
  return <AIRiskManagementFintechClient />;
}
