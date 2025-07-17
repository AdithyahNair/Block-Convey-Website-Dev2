import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Block Convey - The Fastest Path to AI Compliance",
  description:
    "Block Convey helps organizations achieve AI compliance through automated governance, risk management, and regulatory compliance solutions.",
  keywords: [
    "AI compliance",
    "AI governance",
    "regulatory compliance",
    "risk management",
    "automated governance",
  ],
  authors: [{ name: "Block Convey" }],
  creator: "Block Convey",
  publisher: "Block Convey",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://blockconvey.com"),
  alternates: {
    canonical: "https://blockconvey.com",
  },
  openGraph: {
    title: "Block Convey - The Fastest Path to AI Compliance",
    description:
      "Block Convey helps organizations achieve AI compliance through automated governance, risk management, and regulatory compliance solutions.",
    url: "https://blockconvey.com",
    siteName: "Block Convey",
    images: [
      {
        url: "https://blockconvey.com/images/logo.png",
        width: 800,
        height: 600,
        alt: "Block Convey AI Governance Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Block Convey - The Fastest Path to AI Compliance",
    description:
      "Block Convey helps organizations achieve AI compliance through automated governance, risk management, and regulatory compliance solutions.",
    images: ["https://blockconvey.com/images/logo.png"],
    creator: "@blockconvey",
  },
  icons: {
    icon: "/images/tab.png",
    shortcut: "/images/tab.png",
    apple: "/images/tab.png",
  },
  verification: {
    google: "DtFD50sy6Sqj4025S597DGBckEzvygnl7XPlDNSeDN0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V6H8KX7QTX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V6H8KX7QTX');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
