import type { Metadata } from "next";
import PrismVsTraditionalClient from "./PrismVsTraditionalClient";

export const metadata: Metadata = {
  title: "PRISM vs Traditional AI Risk Assessment Tools | Comparative Guide",
  description:
    "Discover how PRISM compares to traditional AI risk assessment tools. Learn which approach is best for compliance, governance, and trustworthy AI development.",
  keywords: [
    "PRISM vs traditional AI risk tools",
    "AI risk assessment comparison",
    "traditional AI risk assessment",
    "PRISM AI governance",
    "AI compliance tools comparison",
    "automated AI risk assessment",
    "AI governance solutions",
    "PRISM Block Convey",
    "AI risk management tools",
    "traditional vs modern AI tools",
    "AI compliance automation",
    "AI audit tools comparison",
  ],
  alternates: {
    canonical:
      "https://blockconvey.com/blogs/prism-vs-traditional-ai-risk-tools",
  },
  openGraph: {
    title: "PRISM vs Traditional AI Risk Assessment Tools | Comparative Guide",
    description:
      "Discover how PRISM compares to traditional AI risk assessment tools. Learn which approach is best for compliance, governance, and trustworthy AI development.",
    url: "https://blockconvey.com/blogs/prism-vs-traditional-ai-risk-tools",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/prism-vs-traditional.png",
        width: 1200,
        height: 630,
        alt: "PRISM vs Traditional AI Risk Assessment Tools Comparison",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRISM vs Traditional AI Risk Assessment Tools | Comparative Guide",
    description:
      "Discover how PRISM compares to traditional AI risk assessment tools. Learn which approach is best for compliance, governance, and trustworthy AI development.",
    images: ["https://blockconvey.com/images/prism-vs-traditional.png"],
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

export default function PrismVsTraditionalPage() {
  return <PrismVsTraditionalClient />;
}
