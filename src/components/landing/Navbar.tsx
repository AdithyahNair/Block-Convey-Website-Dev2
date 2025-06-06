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
        title: "PRISM",
        description:
          "Predictive Risk and Intelligence Surveillance Monitor - AI governance platform for transparent, fair, and compliant AI systems",
        path: "/prism",
      },
      {
        title: "Application Modules",
        description:
          "Industry-specific modules for credit risk, insurance claims, fraud detection, and financial advisory",
        path: "/solutions#credit-risk-assessment",
        submenu: [
          {
            title: "Credit Risk Assessment Module",
            description:
              "Ensure fairness and compliance in credit scoring with real-time bias detection and explainable decision-making tools",
            path: "/solutions#credit-risk-assessment",
          },
          {
            title: "Insurance Claims Module",
            description:
              "Streamline claims processing with fair, transparent, and compliant AI-powered decisions",
            path: "/solutions#insurance-claims",
          },
          {
            title: "Fraud Detection Module",
            description:
              "Monitor AI-driven fraud detection systems for accuracy, transparency, and ethical anomaly detection",
            path: "/solutions#fraud-detection",
          },
          {
            title: "Financial Advisory & Customer Service Module",
            description:
              "Enhance customer interactions with AI models that deliver personalized, unbiased, and explainable recommendations",
            path: "/solutions#financial-advisory",
          },
        ],
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
      <div className="flex items-center justify-between h-20 px-4">
        <div className="flex items-center gap-10">
          <NavLogo />
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavLinks items={navItems} />
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden lg:block">
            <NavActions />
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-4 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 pb-6 px-4">
          <div className="border-t pt-4 space-y-4">
            <NavLinks items={navItems} />
            <div className="mt-6 flex justify-center">
              <NavActions />
            </div>
          </div>
        </div>
      )}
    </NavContainer>
  );
};
