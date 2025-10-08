"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIInsuranceTransparentAuditableClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    {
      id: "introduction",
      title: "AI in Insurance: Building Transparent and Auditable AI Models",
    },
    {
      id: "why-transparency",
      title: "Why Transparency Matters in Insurance AI",
    },
    {
      id: "need-auditable",
      title: "The Need for Auditable AI Models in Insurance",
    },
    { id: "common-risks", title: "Common AI Risks in Insurance" },
    {
      id: "how-prism-helps",
      title: "How PRISM Helps Insurers Build Transparent and Auditable AI",
    },
    { id: "benefits", title: "Benefits of PRISM for Insurance AI" },
    {
      id: "prism-vs-traditional",
      title: "PRISM vs Traditional AI Governance in Insurance",
    },
    {
      id: "use-cases",
      title: "Use Cases: Where Insurers Benefit Most from PRISM",
    },
    {
      id: "conclusion",
      title: "Conclusion: The Future of Trustworthy AI in Insurance",
    },
    { id: "faqs", title: "FAQs" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -120;
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
                src="/images/ai-insurance-transparent-auditable.png"
                alt="AI in Insurance: Building Transparent and Auditable AI Models"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI in Insurance: Building Transparent and Auditable AI Models
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>October 2, 2025</span>
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
                      AI in Insurance: Building Transparent and Auditable AI
                      Models
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      The insurance industry has embraced artificial
                      intelligence to streamline operations, personalize
                      customer experiences, and manage risks more effectively.
                      From fraud detection and claims processing to underwriting
                      and customer support, AI is now a driving force behind
                      innovation in insurance.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      But with this rapid adoption comes growing scrutiny.
                      Regulators, customers, and stakeholders want proof that
                      AI-driven insurance systems are fair, transparent, and
                      auditable. That's where AI governance and auditing tools
                      like PRISM by Block Convey come into play.
                    </p>
                  </div>

                  {/* Why Transparency Matters */}
                  <div id="why-transparency" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Why Transparency Matters in Insurance AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Insurance decisions impact people's lives in significant
                      ways—whether it's approving a claim, setting premiums, or
                      detecting fraudulent activities. A lack of transparency in
                      AI models creates distrust and raises questions such as:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Why was my claim denied?</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>How was my premium calculated?</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Is this decision free from bias?</span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Transparent AI ensures that insurers can explain decisions
                      clearly to both customers and regulators, fostering trust,
                      accountability, and compliance.
                    </p>
                  </div>

                  {/* Need for Auditable AI */}
                  <div id="need-auditable" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Need for Auditable AI Models in Insurance
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI auditing in insurance ensures that algorithms operate
                      ethically, legally, and consistently. Without auditing,
                      insurers risk:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Regulatory penalties for non-compliance with ISO
                          42001, GDPR, or the EU AI Act.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Bias-driven outcomes in underwriting or claims
                          processing.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Reputational damage from unfair or unexplained
                          decisions.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Financial risks from inaccurate fraud detection or
                          risk assessments.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Auditable AI means insurers can provide clear,
                      evidence-backed reporting on how models work, what data
                      they use, and how risks are mitigated.
                    </p>
                  </div>

                  {/* Common AI Risks */}
                  <div id="common-risks" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Common AI Risks in Insurance
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                      1. Bias in Underwriting and Claims
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      If historical data contains bias, AI models may unfairly
                      deny claims or assign higher premiums to certain groups.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      2. Data Privacy Concerns
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Insurance relies heavily on sensitive personal and
                      financial data, making compliance with GDPR and HIPAA
                      critical.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      3. Model Drift Over Time
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Fraud patterns, customer behavior, and risk profiles
                      change. AI models that aren't monitored can quickly become
                      inaccurate.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      4. Lack of Explainability
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Insurance regulators demand explainability, yet many AI
                      systems remain "black boxes" with unclear logic behind
                      their decisions.
                    </p>
                  </div>

                  {/* How PRISM Helps */}
                  <div id="how-prism-helps" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      How PRISM Helps Insurers Build Transparent and Auditable
                      AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM by Block Convey provides insurers with a
                      comprehensive governance and risk management platform
                      designed to simplify AI auditing.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                      1. Automated Compliance Reporting
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM aligns insurance AI models with ISO 42001, NIST AI
                      RMF, GDPR, HIPAA, and the EU AI Act, generating instant
                      compliance reports for regulators and internal audits.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      2. Bias Detection and Fairness Tools
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM continuously monitors insurance models to detect
                      bias in underwriting, claims, and fraud detection, helping
                      insurers deliver equitable outcomes.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      3. Continuous Model Monitoring
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      With PRISM, insurers can track model drift, performance,
                      and data quality in real-time, ensuring accuracy across
                      changing risk conditions.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      4. Explainability Features
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM provides tools that translate AI decision-making
                      into clear, understandable insights for both regulators
                      and customers, reducing disputes and increasing trust.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      5. Centralized Risk Dashboard
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      From claims automation to fraud detection, insurers can
                      view compliance and risks across multiple AI systems in
                      one unified dashboard.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div id="benefits" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Benefits of PRISM for Insurance AI
                    </h2>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Improved trust with customers through transparent
                          decision-making
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Reduced regulatory risks with audit-ready compliance
                          documentation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Fairer outcomes by proactively detecting and
                          correcting bias
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Operational efficiency with automated governance tools
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Future readiness as insurance regulations evolve
                          globally
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* PRISM vs Traditional */}
                  <div id="prism-vs-traditional" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      PRISM vs Traditional AI Governance in Insurance
                    </h2>
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-brand-lightest">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Feature
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Traditional Insurance AI Governance
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              PRISM Insurance AI Governance
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Compliance
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Manual documentation
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Automated, audit-ready
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Bias Detection
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Periodic reviews
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Real-time detection
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Transparency
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Limited explainability
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Built-in explainability
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Monitoring
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Reactive, after failures
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Continuous and proactive
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Scalability
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Difficult across multiple models
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Centralized dashboard
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div id="use-cases" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Use Cases: Where Insurers Benefit Most from PRISM
                    </h2>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Claims Processing</strong> → Transparent AI
                          decisions for faster approvals and reduced disputes.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Fraud Detection</strong> → Continuous
                          monitoring to adapt to new fraud tactics.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Underwriting</strong> → Bias-free assessments
                          for equitable risk management.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Customer Support AI</strong> → Explainable AI
                          for chatbot and virtual assistant decisions.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Regulatory Audits</strong> → Instant
                          audit-ready reports for compliance teams.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: The Future of Trustworthy AI in Insurance
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI is reshaping the insurance sector, but without
                      transparency and auditing, insurers risk regulatory
                      challenges, customer distrust, and financial losses.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With PRISM by Block Convey, insurers gain the tools they
                      need to ensure their AI systems are transparent,
                      auditable, and compliant with global standards. By
                      combining automation, explainability, and bias detection,
                      PRISM makes it possible for insurers to innovate
                      responsibly while building lasting trust with customers
                      and regulators alike.
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
                          1. Why is AI auditing important in insurance?
                        </h3>
                        <p className="text-gray-700">
                          AI auditing ensures fairness, compliance, and
                          transparency in decisions that directly affect
                          customers' lives.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. How does PRISM improve insurance compliance?
                        </h3>
                        <p className="text-gray-700">
                          PRISM automates compliance with ISO 42001, GDPR,
                          HIPAA, and the EU AI Act, making audits faster and
                          easier.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. Can PRISM detect bias in claims or underwriting
                          models?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM identifies and flags biased patterns to
                          ensure fair treatment of customers.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Is PRISM suitable for large insurers with multiple
                          AI models?
                        </h3>
                        <p className="text-gray-700">
                          Absolutely. PRISM centralizes risk management across
                          all insurance AI systems.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. How does PRISM build customer trust?
                        </h3>
                        <p className="text-gray-700">
                          By providing explainability and transparency, PRISM
                          ensures customers understand how AI-driven decisions
                          are made.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Build Transparent and Auditable Insurance AI?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your insurance company ensure
                      compliance, detect bias, and build customer trust.
                    </p>
                    <a
                      href="/prism"
                      className="inline-flex items-center bg-brand text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors"
                    >
                      Get Started with PRISM
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
