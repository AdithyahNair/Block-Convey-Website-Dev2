import React from "react";
import { useNavigate } from "react-router-dom";
import { scrollToFeature } from "../../../utils/scroll";

const navLinks = {
  Solutions: [
    { name: "PRISM", path: "/prism", external: false },
    {
      name: "Application Modules",
      path: "/solutions#credit-risk-assessment",
      external: false,
    },
  ],
  "Who We Serve": [
    {
      name: "Financial Institutions",
      path: "/who-we-serve#hero",
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
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    const [route, hash] = path.split("#");

    // Navigate to the page first
    navigate(route);

    // If there's a hash, scroll to the section
    if (hash) {
      scrollToFeature(hash);
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
