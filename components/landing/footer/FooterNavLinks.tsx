"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { scrollToFeature } from "../../../utils/scroll";

const navLinks = {
  Solutions: [{ name: "PRISM", path: "/prism", external: false }],
  "Who We Serve": [
    {
      name: "Financial Institutions",
      path: "/who-we-serve#financial-institutions",
      external: false,
    },
    {
      name: "Fintech Startups",
      path: "/who-we-serve#fintech-startups",
      external: false,
    },
    {
      name: "Insurtech Companies",
      path: "/who-we-serve#insurtech",
      external: false,
    },
    {
      name: "Specialized Services",
      path: "/who-we-serve#specialized-services",
      external: false,
    },
  ],
  Pricing: [
    { name: "Pricing Plans", path: "/pricing#plans", external: false },
    { name: "Compare Plans", path: "/pricing#compare", external: false },
    { name: "FAQs", path: "/pricing#faq", external: false },
  ],
  Resources: [
    { name: "Blog", path: "/blogs", external: false },
    { name: "Knowledge Base", path: "/resources#hero", external: false },
  ],
  Company: [
    { name: "About Us", path: "/company#aboutus", external: false },
    { name: "Contact", path: "/company#contact", external: false },
  ],
  Legal: [
    { name: "Privacy Policy", path: "/privacy#hero", external: false },
    { name: "Terms of Service", path: "/terms#hero", external: false },
  ],
};

export const FooterNavLinks: React.FC = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    const [route, hash] = path.split("#");

    // Check if we're already on the target page
    const currentPath = window.location.pathname;
    const isCurrentPage = currentPath === route;

    if (isCurrentPage && hash) {
      // If we're on the same page, scroll immediately
      scrollToFeature(hash);
    } else {
      // Navigate to the page first
      router.push(route);

      // If there's a hash, scroll to the section after navigation
      if (hash) {
        // Use a delay for cross-page navigation
        setTimeout(() => {
          scrollToFeature(hash);
        }, 500);
      }
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
      {Object.entries(navLinks).map(([category, links]) => (
        <div key={category}>
          <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button
                    onClick={() => handleClick(link.path)}
                    className="text-left text-gray-600 hover:text-brand transition-colors"
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
