import { Metadata } from "next";
import AIGovernanceChallengesClient from "./AIGovernanceChallengesClient";

export const metadata: Metadata = {
  title: "Top AI Governance Challenges and How PRISM Solves Them",
  description:
    "Discover the biggest AI governance challenges businesses face today—bias, compliance, transparency, accountability—and learn how PRISM helps solve them with automation and real-time monitoring.",
  keywords: [
    "AI governance challenges",
    "AI bias and fairness",
    "AI compliance",
    "ISO 42001",
    "GDPR compliance",
    "EU AI Act",
    "AI explainability",
    "AI risk management",
    "PRISM platform",
    "AI governance solutions",
    "audit readiness",
    "investor confidence AI",
    "AI transparency",
    "AI accountability",
    "governance automation",
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
    canonical: "https://blockconvey.com/blogs/ai-governance-challenges-prism",
  },
  openGraph: {
    title: "Top AI Governance Challenges and How PRISM Solves Them",
    description:
      "Discover the biggest AI governance challenges businesses face today—bias, compliance, transparency, accountability—and learn how PRISM helps solve them with automation and real-time monitoring.",
    url: "https://blockconvey.com/blogs/ai-governance-challenges-prism",
    siteName: "Block Convey",
    images: [
      {
        url: "/images/ai-governance-challenges.png",
        width: 1200,
        height: 630,
        alt: "Top AI Governance Challenges and How PRISM Solves Them",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top AI Governance Challenges and How PRISM Solves Them",
    description:
      "Discover the biggest AI governance challenges businesses face today—bias, compliance, transparency, accountability—and learn how PRISM helps solve them with automation and real-time monitoring.",
    images: ["/images/ai-governance-challenges.png"],
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

export default function AIGovernanceChallengesPage() {
  return <AIGovernanceChallengesClient />;
}
