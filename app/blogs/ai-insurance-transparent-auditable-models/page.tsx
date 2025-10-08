import { Metadata } from "next";
import AIInsuranceTransparentAuditableClient from "./AIInsuranceTransparentAuditableClient";

export const metadata: Metadata = {
  title:
    "AI in Insurance | Building Transparent and Auditable AI Models with PRISM",
  description:
    "Discover how PRISM helps insurers build transparent, auditable AI systems. Manage compliance, detect bias, and strengthen trust in AI-powered insurance decisions.",
  keywords: [
    "AI in insurance",
    "transparent AI insurance",
    "auditable AI models",
    "insurance AI compliance",
    "AI bias detection insurance",
    "PRISM insurance",
    "ISO 42001 insurance",
    "GDPR insurance compliance",
    "EU AI Act insurance",
    "claims processing AI",
    "fraud detection AI",
    "underwriting AI",
    "insurance AI governance",
    "explainable AI insurance",
    "model drift monitoring",
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
    canonical:
      "https://blockconvey.com/blogs/ai-insurance-transparent-auditable-models",
  },
  openGraph: {
    title:
      "AI in Insurance | Building Transparent and Auditable AI Models with PRISM",
    description:
      "Discover how PRISM helps insurers build transparent, auditable AI systems. Manage compliance, detect bias, and strengthen trust in AI-powered insurance decisions.",
    url: "https://blockconvey.com/blogs/ai-insurance-transparent-auditable-models",
    siteName: "Block Convey",
    images: [
      {
        url: "/images/ai-insurance-transparent-auditable.png",
        width: 1200,
        height: 630,
        alt: "AI in Insurance: Building Transparent and Auditable AI Models",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI in Insurance | Building Transparent and Auditable AI Models with PRISM",
    description:
      "Discover how PRISM helps insurers build transparent, auditable AI systems. Manage compliance, detect bias, and strengthen trust in AI-powered insurance decisions.",
    images: ["/images/ai-insurance-transparent-auditable.png"],
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

export default function AIInsuranceTransparentAuditablePage() {
  return <AIInsuranceTransparentAuditableClient />;
}
