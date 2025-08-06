import React from "react";
import type { Metadata } from "next";
import { MainLayout } from "../../components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Terms of Service - Block Convey",
  description:
    "Block Convey's terms of service and conditions for using our AI governance platform and services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "AI governance terms",
    "platform terms",
    "service agreement",
    "user agreement",
  ],
  alternates: {
    canonical: "https://blockconvey.com/terms",
  },
  openGraph: {
    title: "Terms of Service - Block Convey",
    description:
      "Block Convey's terms of service and conditions for using our AI governance platform and services.",
    url: "https://blockconvey.com/terms",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Block Convey Terms of Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Block Convey",
    description:
      "Terms of service and conditions for using Block Convey's AI governance platform.",
    images: ["https://blockconvey.com/images/logo.png"],
    creator: "@blockconvey",
  },
};

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <main>
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-6">
                By accessing and using Block Convey's services, you accept and
                agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Use License
              </h2>
              <p className="text-gray-700 mb-6">
                Permission is granted to temporarily download one copy of the
                materials on Block Convey's website for personal, non-commercial
                transitory viewing only.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Disclaimer
              </h2>
              <p className="text-gray-700 mb-6">
                The materials on Block Convey's website are provided on an 'as
                is' basis. Block Convey makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties
                including without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please
                contact us at legal@blockconvey.com.
              </p>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
