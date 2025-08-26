import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Block Convey | AI Governance Experts",
  description:
    "Schedule a consultation with Block Convey's AI governance experts. Get expert guidance on AI compliance, risk assessment, and regulatory adherence.",
  keywords: [
    "contact Block Convey",
    "AI governance consultation",
    "AI compliance experts",
    "AI risk assessment",
    "AI governance consultation",
    "Block Convey contact",
    "AI compliance support",
  ],
  alternates: {
    canonical: "https://blockconvey.com/contact",
  },
  openGraph: {
    title: "Contact Us - Get in Touch with Block Convey",
    description:
      "Schedule a consultation with Block Convey's AI governance experts. Get expert guidance on AI compliance, risk assessment, and regulatory adherence.",
    url: "https://blockconvey.com/contact",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Block Convey Contact - AI Governance Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch with Block Convey",
    description:
      "Schedule a consultation with Block Convey's AI governance experts. Get expert guidance on AI compliance, risk assessment, and regulatory adherence.",
    images: ["https://blockconvey.com/images/logo.png"],
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

export default function ContactPage() {
  return <ContactClient />;
}
