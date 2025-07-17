import React from "react";
import type { Metadata } from "next";
// import { StorageService } from "../../components/services/StorageService";
import { ServicesCTA } from "../../components/common/cta/ServicesCTA";
import { MainLayout } from "../../components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Services - Block Convey",
  description:
    "Comprehensive AI governance services including compliance consulting, risk assessment, and regulatory support for organizations.",
  keywords: [
    "AI governance services",
    "AI compliance consulting",
    "AI risk assessment",
    "AI regulatory support",
    "AI governance consulting",
    "AI ethics consulting",
  ],
  openGraph: {
    title: "Services - Block Convey",
    description:
      "Comprehensive AI governance services including compliance consulting, risk assessment, and regulatory support for organizations.",
    url: "https://blockconvey.com/services",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/business-value.png",
        width: 1200,
        height: 630,
        alt: "Block Convey AI Governance Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Block Convey",
    description:
      "Comprehensive AI governance services including compliance consulting and risk assessment.",
    images: ["https://blockconvey.com/images/business-value.png"],
    creator: "@blockconvey",
  },
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <main>
          {/* <StorageService /> */}
          <ServicesCTA />
        </main>
      </div>
    </MainLayout>
  );
}
