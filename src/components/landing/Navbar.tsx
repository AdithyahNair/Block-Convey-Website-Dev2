import React, { useState } from "react";
import { NavContainer } from "./nav/NavContainer";
import { NavLogo } from "./nav/NavLogo";
import { NavLinks } from "./nav/NavLinks";
import { NavActions } from "./nav/NavActions";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Product",
    mainPath: "/solutions",
    subitems: [
      {
        title: "AI Registry",
        description:
          "Centralized inventory of AI systems with complete documentation",
        path: "/solutions#ai-registry",
      },
      {
        title: "Vendor Portal",
        description:
          "Streamlined vendor assessment and third-party risk management",
        path: "/solutions#vendor-portal",
      },
      {
        title: "Risk Center",
        description: "Comprehensive risk assessment and mitigation tools",
        path: "/solutions#risk-center",
      },
      {
        title: "Regulation automation",
        description: "Automated compliance with AI regulations and frameworks",
        path: "/solutions#regulation-automation",
      },
    ],
  },
  {
    label: "Who We Serve",
    mainPath: "/who-we-serve",
    subitems: [
      {
        title: "Financial Institutions",
        description: "Banks, investment firms, and asset managers",
        path: "/who-we-serve#hero",
      },
      {
        title: "Fintech Startups",
        description: "Digital lending and payment platforms",
        path: "/who-we-serve#fintech-startups",
      },
      {
        title: "Insurtech Companies",
        description: "Insurance providers and insurtech startups",
        path: "/who-we-serve#insurtech",
      },
      {
        title: "Specialized Services",
        description: "Fraud detection and RegTech providers",
        path: "/who-we-serve#specialized-services",
      },
    ],
  },
  {
    label: "Pricing",
    mainPath: "/pricing",
    subitems: [
      {
        title: "Pricing Plans",
        description: "Explore our Silver, Gold, and Platinum plans",
        path: "/pricing#plans",
      },
      {
        title: "Compare Plans",
        description: "Detailed feature comparison across all plans",
        path: "/pricing#compare",
      },
      {
        title: "FAQs",
        description: "Common questions about our pricing",
        path: "/pricing#faq",
      },
    ],
  },
  {
    label: "Resources",
    mainPath: "/resources",
    subitems: [
      {
        title: "Blog",
        description: "Latest insights and updates from Block Convey",
        path: "/blogs",
      },
      {
        title: "Knowledge Base",
        description: "Comprehensive guides and documentation for AI governance",
        path: "/resources#hero",
      },
    ],
  },
  {
    label: "Company",
    mainPath: "/company",
    subitems: [
      {
        title: "About Us",
        description: "Our mission and team",
        path: "/company#aboutus",
      },
      {
        title: "Contact",
        description: "Get in touch with us",
        path: "/company#contact",
      },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <div className="flex items-center justify-between h-14">
        <div className="flex items-center">
          <NavLogo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center -ml-24">
          <NavLinks items={navItems} />
        </div>

        <div className="flex items-center">
          <div className="hidden lg:block">
            <NavActions />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden pb-4 max-h-[80vh] overflow-y-auto">
          <div className="pt-2 pb-3 border-t border-gray-200">
            <NavLinks items={navItems} />
            <div className="mt-4 px-4">
              <NavActions />
            </div>
          </div>
        </div>
      )}
    </NavContainer>
  );
};
