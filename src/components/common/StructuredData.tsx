import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const StructuredData: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Remove existing structured data
    const existing = document.querySelector("#structured-data");
    if (existing) {
      existing.remove();
    }

    let structuredData;

    // Define structured data based on route
    switch (location.pathname) {
      case "/":
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Block Convey",
          url: "https://blockconvey.com",
          logo: "https://blockconvey.com/images/logo.png",
          description:
            "Block Convey is a leading AI governance platform that ensures transparent, fair, and compliant AI systems for enterprises.",
          foundingDate: "2023",
          industry: "AI Governance and Compliance",
          sameAs: [
            "https://www.linkedin.com/company/block-convey-llc/",
            "https://twitter.com/blockconvey",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            url: "https://blockconvey.com/company#contact",
          },
        };
        break;

      case "/pricing":
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Block Convey AI Governance Platform",
          provider: {
            "@type": "Organization",
            name: "Block Convey",
          },
          description:
            "AI governance, risk management, and compliance solutions",
          offers: [
            {
              "@type": "Offer",
              name: "Silver Plan",
              price: "99",
              priceCurrency: "USD",
              description: "Basic AI governance tools for startups",
            },
            {
              "@type": "Offer",
              name: "Gold Plan",
              price: "299",
              priceCurrency: "USD",
              description:
                "Advanced analytics and governance for growing organizations",
            },
            {
              "@type": "Offer",
              name: "Platinum Plan",
              price: "599",
              priceCurrency: "USD",
              description: "Enterprise-grade tools and customization",
            },
          ],
        };
        break;

      case "/blogs":
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Block Convey Blog",
          description:
            "Insights on AI governance, blockchain technology, and regulatory compliance",
          url: "https://blockconvey.com/blogs",
          publisher: {
            "@type": "Organization",
            name: "Block Convey",
            logo: "https://blockconvey.com/images/logo.png",
          },
        };
        break;

      default:
        // Default organization schema
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: document.title,
          description:
            document
              .querySelector('meta[name="description"]')
              ?.getAttribute("content") || "",
          url: `https://blockconvey.com${location.pathname}`,
          publisher: {
            "@type": "Organization",
            name: "Block Convey",
          },
        };
    }

    // Add structured data to head
    if (structuredData) {
      const script = document.createElement("script");
      script.id = "structured-data";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const element = document.querySelector("#structured-data");
      if (element) {
        element.remove();
      }
    };
  }, [location.pathname]);

  return null;
};
