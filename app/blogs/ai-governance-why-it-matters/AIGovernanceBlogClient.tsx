"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIGovernanceBlogClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "why-matters", title: "Why AI Governance Matters in 2025" },
    { id: "risks", title: "The Risks of Ignoring AI Governance" },
    { id: "prism", title: "How PRISM Simplifies AI Governance" },
    { id: "benefits", title: "The Key Benefits of AI Governance" },
    { id: "standards", title: "Global Standards Driving AI Governance" },
    { id: "act-now", title: "Why Businesses Should Act Now" },
    { id: "faqs", title: "FAQs" },
    { id: "conclusion", title: "Conclusion" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -120; // Increased offset to account for navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    tableOfContents.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
                {/* Hero Section */}
        <section className="pt-40 pb-16 px-4 bg-brand-lightest">
          <div className="max-w-4xl mx-auto">
            {/* Back to all articles button */}
            <div className="mb-8">
              <Link
                href="/blogs"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-brand transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to all articles
              </Link>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/ai-governance-matters.png"
                alt="What Is AI Governance and Why It Matters"
                className="w-full h-full object-cover"
              />
            </div>
 
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Is AI Governance and Why It Matters
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>August 4, 2025</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Table of Contents Sidebar */}
              <div className="lg:w-1/4 lg:max-w-xs">
                <div className="sticky top-24">
                  <h2 className="text-xl font-semibold mb-6 text-gray-900">
                    Table of Contents
                  </h2>
                  <nav className="flex flex-col space-y-1">
                    {tableOfContents.map((section, index) => {
                      const isActive = activeSection === section.id;
                      return (
                        <button
                          key={index}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center py-3 px-4 rounded-lg transition-all text-left ${
                            isActive
                              ? "text-brand font-medium bg-brand-light/10 border-l-4 border-brand"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          <div className="mr-2 flex items-center">
                            <div
                              className={`w-2 h-2 rounded-full mr-2 ${
                                isActive ? "bg-brand" : "bg-gray-400"
                              }`}
                            ></div>
                            {section.title}
                          </div>
                          <ChevronRight
                            className={`h-4 w-4 ml-auto transition-transform ${
                              isActive ? "rotate-90 text-brand" : ""
                            }`}
                          />
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="max-w-4xl">
                  {/* Introduction */}
                  <div id="introduction" className="mb-12">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Artificial Intelligence (AI) is now powering various
                      sectors like financial services, healthcare, retail, and
                      government decision-making. With great power comes greater
                      responsibility: which is where AI governance becomes
                      crucial.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      AI governance is a framework of policies, processes, and
                      tools designed to ensure AI is used responsibly,
                      ethically, and in compliance with global standards.
                      Without governance, even innovative AI systems can
                      introduce risks such as bias, data misuse, or regulatory
                      penalties.
                    </p>
                  </div>

                  {/* Why AI Governance Matters in 2025 */}
                  <div id="why-matters" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Why AI Governance Matters in 2025
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      As AI adoption accelerates, businesses face both
                      opportunities and challenges. Those failing to implement
                      AI governance risk losing customer trust, facing lawsuits,
                      or being penalized under new regulations such as the EU AI
                      Act or ISO 42001.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Companies that adopt governance frameworks can demonstrate
                      accountability, build credibility, and foster stronger
                      relationships with investors, partners, and customers. AI
                      governance is no longer optional: it's a competitive
                      necessity.
                    </p>
                  </div>

                  {/* The Risks of Ignoring AI Governance */}
                  <div id="risks" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Risks of Ignoring AI Governance
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Without governance, organizations expose themselves to
                      significant risks: legal penalties, reputational damage,
                      biased decision-making, and data privacy violations.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Imagine an AI-powered financial service denying loans due
                      to biased data, or a healthcare AI making incorrect
                      diagnoses because of unmonitored drift. These scenarios
                      don't just harm people: they can permanently damage a
                      company's credibility.
                    </p>
                  </div>

                  {/* How PRISM Simplifies AI Governance */}
                  <div id="prism" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      How PRISM Simplifies AI Governance
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      This is where Block Convey's PRISM comes in. PRISM is
                      designed to make AI governance simple, transparent, and
                      effective. It provides structured assessments, real-time
                      monitoring, and compliance reporting, enabling businesses
                      to manage AI risks proactively.
                    </p>
                    <div className="bg-brand-lightest p-6 rounded-xl mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        With PRISM, organizations can:
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Benchmark AI systems against global standards
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Generate detailed governance reports</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Identify risks before they escalate</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Ensure transparency in AI-driven decision-making
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Build stronger trust with regulators, customers, and
                            investors
                          </span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM transforms governance from a regulatory burden into
                      a business advantage.
                    </p>
                  </div>

                  {/* The Key Benefits of AI Governance */}
                  <div id="benefits" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Key Benefits of AI Governance
                    </h2>
                    <div className="space-y-6">
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          1. Regulatory Compliance
                        </h3>
                        <p className="text-gray-700">
                          Governance ensures AI systems comply with global
                          frameworks like the EU AI Act, ISO 42001, and the NIST
                          AI Risk Management Framework, preventing penalties and
                          building trust.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. Risk Reduction
                        </h3>
                        <p className="text-gray-700">
                          Structured governance helps organizations identify
                          risks such as bias, model drift, or inaccurate
                          predictions early, enabling corrective action before
                          damage occurs.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. Transparency and Accountability
                        </h3>
                        <p className="text-gray-700">
                          AI governance makes AI system decision-making
                          transparent, allowing regulators, employees, and
                          customers to understand how models work and increasing
                          business accountability.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Improved Performance
                        </h3>
                        <p className="text-gray-700">
                          Beyond compliance, governance boosts performance by
                          continuously monitoring models to ensure they remain
                          accurate, efficient, and reliable.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. Investor and Customer Confidence
                        </h3>
                        <p className="text-gray-700">
                          In the current market, stakeholders seek assurance
                          that businesses use AI responsibly. Governance
                          frameworks directly impact investor readiness and
                          customer trust.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Global Standards Driving AI Governance */}
                  <div id="standards" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Global Standards Driving AI Governance
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          ISO 42001
                        </h3>
                        <p className="text-gray-700">
                          The new ISO 42001 standard provides a structured
                          framework for AI management systems. Organizations
                          adopting it can demonstrate global compliance and earn
                          stakeholder trust.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          EU AI Act
                        </h3>
                        <p className="text-gray-700">
                          This regulation classifies AI systems by risk levels
                          and sets strict guidelines for high-risk applications.
                          Governance tools like PRISM help businesses navigate
                          these requirements effectively.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          NIST AI RMF
                        </h3>
                        <p className="text-gray-700">
                          The NIST AI Risk Management Framework focuses on
                          trustworthy and responsible AI. PRISM helps align
                          organizations with its guidelines.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Why Businesses Should Act Now */}
                  <div id="act-now" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Why Businesses Should Act Now
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      AI regulations are evolving rapidly, and compliance will
                      only get stricter. Businesses that wait risk falling
                      behind, losing investor confidence, and facing hefty
                      penalties. By adopting governance today, companies
                      position themselves as leaders in responsible AI adoption.
                    </p>
                  </div>

                  {/* FAQs */}
                  <div id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      FAQs
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          1. What is AI governance in simple terms?
                        </h3>
                        <p className="text-gray-700">
                          AI governance is a framework that ensures AI systems
                          are ethical, transparent, and compliant with
                          regulations.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. Why is AI governance important for businesses?
                        </h3>
                        <p className="text-gray-700">
                          It protects companies from legal risks, builds
                          customer trust, and ensures long-term success with AI
                          adoption.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. How does PRISM help with AI governance?
                        </h3>
                        <p className="text-gray-700">
                          PRISM provides structured assessments, monitoring, and
                          compliance reports to simplify governance.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Is AI governance only about regulations?
                        </h3>
                        <p className="text-gray-700">
                          No, it's also about improving performance, reducing
                          risks, and creating transparency in AI-driven
                          decisions.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. Which industries need AI governance the most?
                        </h3>
                        <p className="text-gray-700">
                          Finance, healthcare, retail, and any sector using AI
                          for decision-making benefit significantly from
                          governance.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI governance is no longer an afterthought: it's a
                      foundation for sustainable innovation. From compliance and
                      transparency to risk management and investor trust,
                      governance defines how successful an AI strategy can be.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With Block Convey's PRISM, businesses gain a powerful
                      partner in navigating the complexities of AI governance,
                      ensuring not just compliance but long-term growth and
                      credibility.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Implement AI Governance?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your organization build trust,
                      ensure compliance, and drive AI success.
                    </p>
                    <a
                      href="/prism"
                      className="inline-flex items-center bg-brand text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors"
                    >
                      Learn More About PRISM
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
