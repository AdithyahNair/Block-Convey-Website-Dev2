import { Metadata } from "next";
import AIModelAuditingClient from "./AIModelAuditingClient";

export const metadata: Metadata = {
  title:
    "AI Model Auditing Made Easy with PRISM | Automate Compliance & Risk Reports",
  description:
    "Learn how PRISM simplifies AI model auditing with automation, compliance alignment, bias detection, and audit-ready reports. Make AI governance faster and easier.",
  keywords: [
    "AI model auditing",
    "AI auditing automation",
    "PRISM auditing",
    "AI compliance checks",
    "bias detection AI",
    "audit-ready reports",
    "ISO 42001",
    "GDPR compliance",
    "EU AI Act",
    "AI risk management",
    "AI explainability",
    "AI governance platform",
    "automated AI audits",
    "AI transparency",
    "model compliance",
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
    canonical: "https://blockconvey.com/blogs/ai-model-auditing-prism",
  },
  openGraph: {
    title:
      "AI Model Auditing Made Easy with PRISM | Automate Compliance & Risk Reports",
    description:
      "Learn how PRISM simplifies AI model auditing with automation, compliance alignment, bias detection, and audit-ready reports. Make AI governance faster and easier.",
    url: "https://blockconvey.com/blogs/ai-model-auditing-prism",
    siteName: "Block Convey",
    images: [
      {
        url: "/images/ai-model-auditing.png",
        width: 1200,
        height: 630,
        alt: "AI Model Auditing Made Easy with PRISM",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Model Auditing Made Easy with PRISM | Automate Compliance & Risk Reports",
    description:
      "Learn how PRISM simplifies AI model auditing with automation, compliance alignment, bias detection, and audit-ready reports. Make AI governance faster and easier.",
    images: ["/images/ai-model-auditing.png"],
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

export default function AIModelAuditingPage() {
  return <AIModelAuditingClient />;
}
