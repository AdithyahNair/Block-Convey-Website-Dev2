import React from "react";
import type { Metadata } from "next";
import { MainLayout } from "../../components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Privacy Policy - Block Convey",
  description:
    "Block Convey's privacy policy. Learn how we protect your data and maintain transparency in our AI governance platform.",
  keywords: [
    "privacy policy",
    "data protection",
    "AI governance privacy",
    "data security",
    "GDPR compliance",
    "data privacy rights",
  ],
  alternates: {
    canonical: "https://blockconvey.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy - Block Convey",
    description:
      "Block Convey's privacy policy. Learn how we protect your data and maintain transparency in our AI governance platform.",
    url: "https://blockconvey.com/privacy",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Block Convey Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Block Convey",
    description:
      "Learn how Block Convey protects your data and maintains transparency.",
    images: ["https://blockconvey.com/images/logo.png"],
    creator: "@blockconvey",
  },
};

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <main>
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 mb-6">
                We collect information to provide better services to all of our
                users. This includes information you provide directly to us,
                information we collect automatically when you use our services,
                and information from third parties.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Information
              </h2>
              <p className="text-gray-700 mb-6">
                We use the information we collect to maintain, protect, and
                improve our services, develop new ones, and protect Block Convey
                and our users.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-700 mb-6">
                We do not share personal information with companies,
                organizations, or individuals outside of Block Convey except in
                specific circumstances outlined in this policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please
                contact us at privacy@blockconvey.com.
              </p>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
