import type { Metadata } from "next";
import AutomateAIComplianceClient from "./AutomateAIComplianceClient";

export const metadata: Metadata = {
  title: "Automate AI Compliance Documentation with PRISM | Block Convey",
  description:
    "Learn how PRISM helps automate AI compliance documentation, streamline audits, align with global standards like ISO 42001 & NIST, and reduce compliance risks.",
  keywords: [
    "automate AI compliance documentation",
    "AI compliance automation",
    "PRISM compliance",
    "automated compliance reports",
    "ISO 42001 compliance",
    "NIST AI RMF compliance",
    "EU AI Act documentation",
    "GDPR compliance automation",
    "AI audit documentation",
    "compliance workflow automation",
    "AI governance documentation",
    "regulatory compliance automation",
    "Block Convey PRISM",
  ],
  alternates: {
    canonical:
      "https://blockconvey.com/blogs/automate-ai-compliance-documentation",
  },
  openGraph: {
    title: "Automate AI Compliance Documentation with PRISM | Block Convey",
    description:
      "Learn how PRISM helps automate AI compliance documentation, streamline audits, align with global standards like ISO 42001 & NIST, and reduce compliance risks.",
    url: "https://blockconvey.com/blogs/automate-ai-compliance-documentation",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/how-to-automate.png",
        width: 1200,
        height: 630,
        alt: "How to Automate AI Compliance Documentation with PRISM",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automate AI Compliance Documentation with PRISM | Block Convey",
    description:
      "Learn how PRISM helps automate AI compliance documentation, streamline audits, align with global standards like ISO 42001 & NIST, and reduce compliance risks.",
    images: ["https://blockconvey.com/images/how-to-automate.png"],
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

export default function AutomateAICompliancePage() {
  return <AutomateAIComplianceClient />;
}
