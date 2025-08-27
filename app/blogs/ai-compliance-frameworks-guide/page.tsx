import { Metadata } from "next";
import AIComplianceFrameworksClient from "./AIComplianceFrameworksClient";

export const metadata: Metadata = {
  title: "A Complete Guide to AI Compliance Frameworks | Block Convey PRISM",
  description:
    "Learn about key AI compliance frameworks like ISO 42001, NIST, and GDPR. Discover how Block Convey's PRISM helps businesses meet global AI compliance standards with confidence.",
  keywords: [
    "AI compliance frameworks",
    "ISO 42001",
    "NIST AI RMF",
    "GDPR compliance",
    "EU AI Act",
    "AI governance",
    "AI risk management",
    "PRISM platform",
    "AI compliance standards",
    "AI regulations",
    "AI ethics",
    "AI transparency",
    "AI accountability",
    "AI compliance tools",
    "AI governance platform",
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
    canonical: "https://blockconvey.com/blogs/ai-compliance-frameworks-guide",
  },
  openGraph: {
    title: "A Complete Guide to AI Compliance Frameworks | Block Convey PRISM",
    description:
      "Learn about key AI compliance frameworks like ISO 42001, NIST, and GDPR. Discover how Block Convey's PRISM helps businesses meet global AI compliance standards with confidence.",
    url: "https://blockconvey.com/blogs/ai-compliance-frameworks-guide",
    siteName: "Block Convey",
    images: [
      {
        url: "/images/compliance-guide.png",
        width: 1200,
        height: 630,
        alt: "A Complete Guide to AI Compliance Frameworks",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Complete Guide to AI Compliance Frameworks | Block Convey PRISM",
    description:
      "Learn about key AI compliance frameworks like ISO 42001, NIST, and GDPR. Discover how Block Convey's PRISM helps businesses meet global AI compliance standards with confidence.",
    images: ["/images/compliance-guide.png"],
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

export default function AIComplianceFrameworksPage() {
  return <AIComplianceFrameworksClient />;
}
