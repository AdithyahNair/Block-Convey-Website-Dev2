"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const DynamicMetaTags: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Page-specific configurations
    const pageConfigs = {
      "/": {
        title: "Block Convey - AI Governance Solutions",
        description:
          "Leading AI governance platform for transparent, compliant, and ethical AI systems",
        image: "https://blockconvey.com/images/business-value.png",
      },
      "/features": {
        title: "Features - Block Convey",
        description:
          "Discover powerful AI governance features including compliance monitoring, risk assessment, and transparency tools",
        image: "https://blockconvey.com/images/business-value.png",
      },
      "/prism": {
        title: "PRISM - AI Governance Monitor",
        description:
          "Advanced AI governance monitoring and compliance platform",
        image: "/images/how-aigov.png",
      },
      "/pricing": {
        title: "Pricing - Block Convey",
        description:
          "Choose the right AI governance plan for your organization",
        image: "/images/businessSection.png",
      },
      "/company": {
        title: "Company - Block Convey",
        description:
          "Learn about our mission to make AI transparent and accountable",
        image: "/images/business-value.png",
      },
      "/who-we-serve": {
        title: "Who We Serve - Block Convey",
        description:
          "AI governance solutions for financial institutions, fintechs, and insurtech companies",
        image: "/images/how-aigov.png",
      },
      "/resources": {
        title: "Resources - Block Convey",
        description: "AI governance resources, insights, and best practices",
        image: "/images/business-value.png",
      },
      "/blogs": {
        title: "Blog - Block Convey",
        description: "Latest insights on AI governance, compliance, and ethics",
        image: "/images/business-value.png",
      },
      "/solutions": {
        title: "Solutions - Block Convey",
        description:
          "Comprehensive AI governance solutions for your organization",
        image: "/images/business-value.png",
      },
    };

    const currentPageConfig = pageConfigs[pathname as keyof typeof pageConfigs];

    if (currentPageConfig) {
      document.title = currentPageConfig.title;

      // Update meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", currentPageConfig.description);
      }

      // Update og:image
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute("content", currentPageConfig.image);
      }
    }
  }, [pathname]);

  return null;
};
