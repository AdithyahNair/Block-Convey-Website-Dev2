import { Metadata } from "next";
import ResponsibleAIExplainabilityClient from "./ResponsibleAIExplainabilityClient";

export const metadata: Metadata = {
  title: "The Role of Explainability in Responsible AI | PRISM by Block Convey",
  description:
    "Learn why explainability is essential for responsible AI. Discover how PRISM enhances transparency, fairness, and accountability in AI systems.",
  keywords: [
    "AI explainability",
    "responsible AI",
    "AI transparency",
    "AI accountability",
    "AI fairness",
    "AI governance",
    "PRISM platform",
    "AI compliance",
    "AI bias detection",
    "AI decision making",
    "AI interpretability",
    "AI ethics",
    "AI regulations",
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
    canonical: "https://blockconvey.com/blogs/responsible-ai-explainability",
  },
  openGraph: {
    title:
      "The Role of Explainability in Responsible AI | PRISM by Block Convey",
    description:
      "Learn why explainability is essential for responsible AI. Discover how PRISM enhances transparency, fairness, and accountability in AI systems.",
    url: "https://blockconvey.com/blogs/responsible-ai-explainability",
    siteName: "Block Convey",
    images: [
      {
        url: "/images/responsible-ai-explainability.png",
        width: 1200,
        height: 630,
        alt: "Responsible AI Explainability",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Role of Explainability in Responsible AI | PRISM by Block Convey",
    description:
      "Learn why explainability is essential for responsible AI. Discover how PRISM enhances transparency, fairness, and accountability in AI systems.",
    images: ["/images/responsible-ai-explainability.png"],
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

export default function ResponsibleAIExplainabilityPage() {
  return <ResponsibleAIExplainabilityClient />;
}
