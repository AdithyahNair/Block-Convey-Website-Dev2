import { Metadata } from "next";
import PreventingBiasRecruitmentAIClient from "./PreventingBiasRecruitmentAIClient";

export const metadata: Metadata = {
  title:
    "Preventing Bias in Recruitment AI | PRISM for Fair & Transparent Hiring",
  description:
    "Learn how PRISM helps organizations prevent bias in recruitment AI. Ensure fairness, compliance, and transparency in hiring with automated auditing and governance tools.",
  keywords: [
    "recruitment AI bias",
    "preventing hiring bias",
    "fair recruitment AI",
    "PRISM recruitment",
    "AI bias detection",
    "transparent hiring",
    "employment AI compliance",
    "diversity in hiring",
    "recruitment AI auditing",
    "ISO 42001 recruitment",
    "GDPR hiring compliance",
    "EU AI Act recruitment",
    "HR AI governance",
    "candidate fairness",
    "explainable recruitment AI",
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
    canonical: "https://blockconvey.com/blogs/preventing-bias-recruitment-ai",
  },
  openGraph: {
    title:
      "Preventing Bias in Recruitment AI | PRISM for Fair & Transparent Hiring",
    description:
      "Learn how PRISM helps organizations prevent bias in recruitment AI. Ensure fairness, compliance, and transparency in hiring with automated auditing and governance tools.",
    url: "https://blockconvey.com/blogs/preventing-bias-recruitment-ai",
    siteName: "Block Convey",
    images: [
      {
        url: "/images/preventing-bias-recruitment-ai.png",
        width: 1200,
        height: 630,
        alt: "Preventing Bias in Recruitment AI: A Guide Using PRISM",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Preventing Bias in Recruitment AI | PRISM for Fair & Transparent Hiring",
    description:
      "Learn how PRISM helps organizations prevent bias in recruitment AI. Ensure fairness, compliance, and transparency in hiring with automated auditing and governance tools.",
    images: ["/images/preventing-bias-recruitment-ai.png"],
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

export default function PreventingBiasRecruitmentAIPage() {
  return <PreventingBiasRecruitmentAIClient />;
}
