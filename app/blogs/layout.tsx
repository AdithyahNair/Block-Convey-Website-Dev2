import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Governance Blog - Block Convey",
  description:
    "Latest insights on AI governance, compliance, and best practices. Stay updated with AI ethics, regulatory changes, and industry trends.",
  keywords: [
    "AI governance blog",
    "AI compliance insights",
    "AI ethics articles",
    "AI regulatory updates",
    "AI governance best practices",
    "AI transparency blog",
    "AI risk management insights",
  ],
  openGraph: {
    title: "AI Governance Blog - Block Convey",
    description:
      "Latest insights on AI governance, compliance, and best practices. Stay updated with AI ethics, regulatory changes, and industry trends.",
    url: "https://blockconvey.com/blogs",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/business-value.png",
        width: 1200,
        height: 630,
        alt: "Block Convey AI Governance Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Governance Blog - Block Convey",
    description:
      "Latest insights on AI governance, compliance, and best practices.",
    images: ["https://blockconvey.com/images/business-value.png"],
    creator: "@blockconvey",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
