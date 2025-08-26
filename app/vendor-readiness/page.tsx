import React from "react";
import type { Metadata } from "next";
import VendorReadinessClient from "./VendorReadinessClient";

export const metadata: Metadata = {
  title: "Vendor Readiness - Win More Deals, Faster | Block Convey",
  description:
    "Turn risk assessments into revenue opportunities. Get vendor readiness reports that give procurement teams the evidence they need to say YES, faster, smoother, and with less friction.",
  keywords: [
    "vendor readiness",
    "procurement",
    "sales cycles",
    "compliance mapping",
    "risk transparency",
    "enterprise sales",
    "RFP responses",
    "vendor reports",
    "procurement teams",
    "sales acceleration",
  ],
  alternates: {
    canonical: "https://blockconvey.com/vendor-readiness",
  },
  openGraph: {
    title: "Vendor Readiness - Win More Deals, Faster",
    description:
      "Turn risk assessments into revenue opportunities. Get vendor readiness reports that give procurement teams the evidence they need to say YES, faster, smoother, and with less friction.",
    url: "https://blockconvey.com/vendor-readiness",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Block Convey Vendor Readiness Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendor Readiness - Win More Deals, Faster",
    description:
      "Turn risk assessments into revenue opportunities. Get vendor readiness reports that give procurement teams the evidence they need to say YES, faster, smoother, and with less friction.",
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

export default function VendorReadinessPage() {
  return <VendorReadinessClient />;
}
