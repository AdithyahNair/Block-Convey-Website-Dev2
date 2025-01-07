import React, { useState } from "react";
import { NavContainer } from "./nav/NavContainer";
import { NavLogo } from "./nav/NavLogo";
import { NavLinks } from "./nav/NavLinks";
import { NavActions } from "./nav/NavActions";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Features",
    mainPath: "/features",
    subitems: [
      {
        title: "Credit Risk Assessment",
        description:
          "Advanced models for credit scoring with fairness built-in",
        path: "/features#hero",
      },
      {
        title: "Financial Advisory",
        description: "AI-powered investment and financial planning systems",
        path: "/features#financial-advisory",
      },
      {
        title: "Insurance Claims",
        description: "Automated claims processing with fairness guarantees",
        path: "/features#insurance-claims",
      },
      {
        title: "Fraud Detection",
        description: "Advanced systems for detecting fraudulent activities",
        path: "/features#fraud-detection",
      },
      {
        title: "Risk Assessment",
        description: "Comprehensive risk analysis and mitigation strategies",
        path: "/features#risk-assessment",
      },
      {
        title: "Performance Monitoring",
        description: "Real-time monitoring and analytics for AI systems",
        path: "/features#performance-monitoring",
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
        title: "AI Governance Monitor",
        description: "Track developments in AI governance and compliance",
        path: "/resources#hero",
      },
      {
        title: "Insights on AI in Finance",
        description:
          "Latest trends and developments in AI-powered financial services",
        path: "/resources#insights",
      },
      {
        title: "Blockchain in Finance",
        description: "How blockchain technology transforms financial services",
        path: "/resources#blockchain",
      },
      {
        title: "Tools and Frameworks",
        description: "Essential resources for implementing AI governance",
        path: "/resources#tools",
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
  {
    label: "Services",
    mainPath: "/services",
    subitems: [
      {
        title: "Storage",
        description: "Comprehensive Storage Solution",
        path: "/services#storage",
      },
      {
        title: "Consulting",
        description: "Strategic AI governance advice",
        path: "/consulting#hero",
      },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <div className="flex items-center justify-between">
        <NavLogo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1 pl-8">
          <NavLinks items={navItems} />
          <NavActions />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-gray-600 hover:text-gray-900"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="border-t pt-4">
            <NavLinks items={navItems} />
            <div className="mt-4 px-2">
              <NavActions />
            </div>
          </div>
        </div>
      )}
    </NavContainer>
  );
};
