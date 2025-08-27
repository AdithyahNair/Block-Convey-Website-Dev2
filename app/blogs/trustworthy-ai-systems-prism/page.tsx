import { Metadata } from "next";
import TrustworthyAISystemsClient from "./TrustworthyAISystemsClient";

export const metadata: Metadata = {
  title: "Build Trustworthy AI Systems with PRISM | Block Convey",
  description:
    "Learn how PRISM helps organizations build ethical, transparent, and compliant AI systems. Discover how PRISM ensures fairness, accountability, and trust in AI.",
  keywords: [
    "trustworthy AI",
    "AI ethics",
    "AI transparency",
    "AI accountability",
    "AI fairness",
    "AI compliance",
    "PRISM platform",
    "AI governance",
    "AI risk management",
    "AI explainability",
    "AI bias detection",
    "AI safety",
    "AI reliability",
    "AI trust",
    "AI monitoring",
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
    canonical: "https://blockconvey.com/blogs/trustworthy-ai-systems-prism",
  },
  openGraph: {
    title: "Build Trustworthy AI Systems with PRISM | Block Convey",
    description:
      "Learn how PRISM helps organizations build ethical, transparent, and compliant AI systems. Discover how PRISM ensures fairness, accountability, and trust in AI.",
    url: "https://blockconvey.com/blogs/trustworthy-ai-systems-prism",
    siteName: "Block Convey",
    images: [
      {
        url: "/images/trustworthy-systems.png",
        width: 1200,
        height: 630,
        alt: "How PRISM Helps You Build Trustworthy AI Systems",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Trustworthy AI Systems with PRISM | Block Convey",
    description:
      "Learn how PRISM helps organizations build ethical, transparent, and compliant AI systems. Discover how PRISM ensures fairness, accountability, and trust in AI.",
    images: ["/images/trustworthy-systems.png"],
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

export default function TrustworthyAISystemsPage() {
  return <TrustworthyAISystemsClient />;
}
