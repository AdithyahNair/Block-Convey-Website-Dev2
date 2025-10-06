import { Metadata } from "next";
import StartupsISO42001Client from "./StartupsISO42001Client";

export const metadata: Metadata = {
  title: "How Startups Can Achieve ISO 42001 Compliance Quickly with PRISM",
  description:
    "Discover how startups can streamline ISO 42001 compliance using PRISM. Learn why AI governance matters and how PRISM accelerates readiness with automation and audit-ready reporting.",
  keywords: [
    "ISO 42001 for startups",
    "startup AI compliance",
    "ISO 42001 PRISM",
    "AI governance startups",
    "AI compliance automation",
    "ISO 42001 certification",
    "AI management system",
    "startup AI regulations",
    "responsible AI startups",
    "AI compliance tools",
    "ISO 42001 requirements",
    "AI risk management",
    "PRISM platform",
    "AI audit-ready reports",
    "startup compliance solutions",
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
      "https://blockconvey.com/blogs/startups-iso-42001-compliance-prism",
  },
  openGraph: {
    title: "How Startups Can Achieve ISO 42001 Compliance Quickly with PRISM",
    description:
      "Discover how startups can streamline ISO 42001 compliance using PRISM. Learn why AI governance matters and how PRISM accelerates readiness with automation and audit-ready reporting.",
    url: "https://blockconvey.com/blogs/startups-iso-42001-compliance-prism",
    siteName: "Block Convey",
    images: [
      {
        url: "/images/startups-iso-42001.png",
        width: 1200,
        height: 630,
        alt: "How Startups Can Quickly Align with ISO 42001 Using PRISM",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Startups Can Achieve ISO 42001 Compliance Quickly with PRISM",
    description:
      "Discover how startups can streamline ISO 42001 compliance using PRISM. Learn why AI governance matters and how PRISM accelerates readiness with automation and audit-ready reporting.",
    images: ["/images/startups-iso-42001.png"],
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

export default function StartupsISO42001Page() {
  return <StartupsISO42001Client />;
}
