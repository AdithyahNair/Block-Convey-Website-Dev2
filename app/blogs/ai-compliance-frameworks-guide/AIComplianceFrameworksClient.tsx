"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIComplianceFrameworksClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction to AI Compliance Frameworks" },
    { id: "why-matters", title: "Why AI Compliance Matters More Than Ever" },
    { id: "iso-42001", title: "ISO 42001: AI Management System Standard" },
    { id: "nist-rmf", title: "NIST AI Risk Management Framework (AI RMF)" },
    { id: "gdpr", title: "GDPR and Data Protection Laws" },
    { id: "eu-ai-act", title: "The EU AI Act" },
    {
      id: "other-standards",
      title: "Other Regional and Industry-Specific Standards",
    },
    { id: "challenges", title: "Challenges in Implementing AI Compliance" },
    { id: "prism-solution", title: "How PRISM Simplifies AI Compliance" },
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
                src="/images/compliance-guide.png"
                alt="A Complete Guide to AI Compliance Frameworks"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Complete Guide to AI Compliance Frameworks (ISO 42001, NIST,
              GDPR, etc.)
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>August 3, 2025</span>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Introduction to AI Compliance Frameworks
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Artificial Intelligence (AI) is transforming industries at
                      an unprecedented pace. From financial services and
                      healthcare to retail and government, AI is driving
                      efficiency, innovation, and better decision-making.
                      However, the rapid adoption of AI also raises critical
                      questions about ethics, compliance, and accountability.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      To ensure that AI systems are developed and deployed
                      responsibly, governments and international bodies have
                      introduced AI compliance frameworks. These frameworks
                      provide guidelines, standards, and policies that help
                      businesses manage AI risks while building trust with
                      stakeholders.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This guide explores the most important AI compliance
                      frameworks: ISO 42001, NIST AI RMF, GDPR, and more: and
                      shows how Block Convey's PRISM simplifies compliance for
                      modern enterprises.
                    </p>
                  </div>

                  {/* Why AI Compliance Matters */}
                  <div id="why-matters" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Why AI Compliance Matters More Than Ever
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI compliance is no longer optional. With regulations
                      tightening worldwide, businesses that fail to adopt proper
                      compliance frameworks risk:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Legal penalties under laws like GDPR or the EU AI Act
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Loss of investor confidence due to lack of
                          transparency
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Reputational damage from unethical AI decisions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Operational inefficiencies caused by unmonitored AI
                          risks
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Compliance ensures that AI systems are fair, transparent,
                      explainable, and trustworthy: qualities that both
                      regulators and customers demand.
                    </p>
                  </div>

                  {/* ISO 42001 */}
                  <div id="iso-42001" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      1. ISO 42001: AI Management System Standard
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      ISO 42001 is the world's first international standard for
                      AI management systems. Released in 2023, it helps
                      organizations:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Develop structured policies for AI governance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Manage risks like bias, transparency gaps, and model
                          drift
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Demonstrate compliance with global AI regulations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Build trust with investors and regulators</span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM aligns with ISO 42001 by offering automated
                      governance assessments, compliance reporting, and
                      benchmarking, helping businesses fast-track ISO 42001
                      adoption.
                    </p>
                  </div>

                  {/* NIST AI RMF */}
                  <div id="nist-rmf" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      2. NIST AI Risk Management Framework (AI RMF)
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      The National Institute of Standards and Technology (NIST)
                      developed the AI RMF to help organizations manage risks in
                      AI systems. It focuses on making AI:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Trustworthy: fair, transparent, and accountable
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Safe: preventing harm from unintended outcomes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Compliant: aligned with laws and ethical standards
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM integrates NIST guidelines into its AI risk
                      assessment workflows, allowing businesses to measure
                      trustworthiness and identify risks before they escalate.
                    </p>
                  </div>

                  {/* GDPR */}
                  <div id="gdpr" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      3. GDPR and Data Protection Laws
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      The General Data Protection Regulation (GDPR) is one of
                      the strictest data protection laws in the world. Since
                      many AI systems rely on personal data, GDPR compliance is
                      critical. It emphasizes:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>User consent for data usage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Right to explanation for AI-driven decisions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Data minimization and protection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Transparency in automated processing</span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM ensures AI systems meet GDPR requirements by
                      tracking data usage, flagging compliance gaps, and
                      generating privacy-friendly audit reports.
                    </p>
                  </div>

                  {/* EU AI Act */}
                  <div id="eu-ai-act" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      4. The EU AI Act
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      The EU AI Act is the first comprehensive regulation
                      dedicated to AI. It classifies AI systems into risk
                      categories (minimal, limited, high, and unacceptable
                      risk). High-risk systems face strict compliance
                      requirements, including transparency, human oversight, and
                      risk assessment.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM enables companies to classify their AI systems by
                      risk, prepare compliance documentation, and generate
                      real-time monitoring reports to meet EU AI Act standards.
                    </p>
                  </div>

                  {/* Other Standards */}
                  <div id="other-standards" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      5. Other Regional and Industry-Specific Standards
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Beyond ISO, NIST, and GDPR, several other frameworks shape
                      AI compliance.
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          HIPAA (Healthcare, USA): Regulates patient data used
                          in AI healthcare tools.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          CCPA (California Consumer Privacy Act): Protects
                          consumer data in AI systems.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          OECD AI Principles: Provides global best practices for
                          ethical AI.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With customizable compliance modules, PRISM adapts to
                      sector-specific laws like HIPAA or CCPA, ensuring
                      industry-wide coverage.
                    </p>
                  </div>

                  {/* Challenges */}
                  <div id="challenges" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenges in Implementing AI Compliance
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      While frameworks exist, businesses face challenges such
                      as:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Complex regulations that vary across regions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>High costs of manual audits and monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Lack of expertise in AI risk management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Evolving laws that change compliance requirements
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This is why automation and continuous monitoring tools
                      like PRISM are becoming essential for businesses seeking
                      compliance without slowing down innovation.
                    </p>
                  </div>

                  {/* PRISM Solution */}
                  <div id="prism-solution" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      How PRISM Simplifies AI Compliance
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM is more than just a compliance tool: it's a
                      comprehensive AI governance and risk management platform.
                      It helps organizations:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Conduct AI risk assessments aligned with ISO 42001,
                          NIST, GDPR, and more
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Generate compliance reports for investors, auditors,
                          and regulators
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Benchmark AI systems against global standards
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Provide ongoing monitoring to stay compliant as
                          regulations evolve
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Reduce compliance costs by automating manual processes
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      By integrating PRISM, businesses can turn compliance into
                      a competitive advantage, showing investors and customers
                      that they are ahead of the curve in responsible AI
                      adoption.
                    </p>
                  </div>

                  {/* Act Now */}
                  <div id="act-now" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Why Businesses Should Act Now
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI regulations are moving fast. Companies that wait will
                      find themselves scrambling to adapt, losing valuable time,
                      money, and reputation. Early adopters, on the other hand,
                      can:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Demonstrate leadership in ethical AI</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Secure funding and partnerships more easily</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Build long-term trust with stakeholders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Stay compliant with evolving global standards
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* FAQs */}
                  <div id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      FAQs
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          1. What is the purpose of AI compliance frameworks?
                        </h3>
                        <p className="text-gray-700">
                          They provide guidelines to ensure AI systems are safe,
                          ethical, and compliant with regulations.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. Which AI compliance frameworks are most important?
                        </h3>
                        <p className="text-gray-700">
                          ISO 42001, NIST AI RMF, GDPR, and the EU AI Act are
                          among the most widely recognized.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. How does PRISM support AI compliance?
                        </h3>
                        <p className="text-gray-700">
                          PRISM automates compliance assessments, generates
                          reports, and monitors AI risks in real time.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Do startups need AI compliance frameworks?
                        </h3>
                        <p className="text-gray-700">
                          Yes, even early-stage startups benefit from
                          compliance: it builds investor trust and reduces
                          risks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. Can compliance improve AI performance?
                        </h3>
                        <p className="text-gray-700">
                          Yes, compliance frameworks encourage transparency and
                          monitoring, which improves system accuracy and
                          reliability.
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
                      AI compliance frameworks like ISO 42001, NIST, GDPR, and
                      the EU AI Act are setting the foundation for safe and
                      responsible AI adoption. Businesses that embrace them will
                      not only avoid penalties but also strengthen their market
                      credibility.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With Block Convey's PRISM, organizations can simplify
                      compliance, reduce risks, and build AI systems that are
                      ethical, transparent, and future-proof.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Implement AI Compliance?
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
