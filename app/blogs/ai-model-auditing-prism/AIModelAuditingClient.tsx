"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIModelAuditingClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "AI Model Auditing Made Easy with PRISM" },
    { id: "what-is-auditing", title: "What Is AI Model Auditing?" },
    {
      id: "challenges",
      title: "The Challenges of Traditional AI Model Auditing",
    },
    { id: "how-prism-helps", title: "How PRISM Makes AI Model Auditing Easy" },
    { id: "benefits", title: "Benefits of Using PRISM for AI Model Auditing" },
    {
      id: "prism-vs-traditional",
      title: "PRISM vs Traditional AI Model Auditing",
    },
    {
      id: "use-cases",
      title: "Use Cases: Who Needs AI Model Auditing with PRISM?",
    },
    {
      id: "conclusion",
      title: "Conclusion: Simplify AI Model Auditing with PRISM",
    },
    { id: "faqs", title: "FAQs: AI Model Auditing with PRISM" },
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
                src="/images/ai-model-auditing.png"
                alt="AI Model Auditing Made Easy with PRISM"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Model Auditing Made Easy with PRISM
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>October 8, 2025</span>
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
                      AI Model Auditing Made Easy with PRISM
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      As AI adoption accelerates across industries, ensuring
                      models are accurate, ethical, and compliant has become a
                      top priority. Regulators, investors, and customers all
                      want proof that your AI is safe and trustworthy. This is
                      where AI model auditing comes into play.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      But traditional auditing methods are slow, expensive, and
                      unable to keep up with the pace of AI innovation.
                      Companies often rely on manual reviews, spreadsheets, and
                      consultant-heavy audits, which are not scalable.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      That's why PRISM by Block Convey is redefining the way
                      organizations handle AI model auditing. With automation,
                      real-time monitoring, and compliance-ready reporting,
                      PRISM makes auditing faster, easier, and more reliable.
                    </p>
                  </div>

                  {/* What Is AI Model Auditing */}
                  <div id="what-is-auditing" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      What Is AI Model Auditing?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI model auditing is the process of evaluating AI systems
                      for compliance, accuracy, bias, and risks. It ensures that
                      models operate within ethical and regulatory boundaries
                      while maintaining transparency.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Key elements of AI model auditing include:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Bias detection</strong> – Ensuring fairness in
                          decision-making.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Regulatory compliance</strong> – Meeting
                          standards like ISO 42001, GDPR, and the EU AI Act.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Performance monitoring</strong> – Checking
                          accuracy and consistency across datasets.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Explainability</strong> – Making "black box"
                          AI decisions transparent.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Risk management</strong> – Identifying
                          vulnerabilities and areas of potential harm.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div id="challenges" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Challenges of Traditional AI Model Auditing
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Traditional auditing often struggles with:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Time-consuming manual processes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Inconsistent compliance checks across regions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Limited explainability in complex models</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>High consulting costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Difficulty scaling audits across multiple AI systems
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      These challenges can slow down innovation, increase
                      operational costs, and create compliance gaps.
                    </p>
                  </div>

                  {/* How PRISM Helps */}
                  <div id="how-prism-helps" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      How PRISM Makes AI Model Auditing Easy
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM solves these problems with an automated, end-to-end
                      approach to AI governance and auditing.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                      1. Automated Compliance Checks
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Instead of manually preparing documents, PRISM
                      automatically aligns your AI models with ISO 42001, NIST
                      AI RMF, GDPR, HIPAA, and EU AI Act. This ensures that
                      compliance is built-in, not an afterthought.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      2. Real-Time Bias Detection
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM continuously monitors AI systems to detect biases in
                      datasets, algorithms, and outcomes. This reduces the risk
                      of unfair or discriminatory results.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      3. Instant Audit-Ready Reports
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      With PRISM, audit preparation takes minutes instead of
                      weeks. The platform generates standardized, audit-ready
                      reports that satisfy regulators, investors, and internal
                      stakeholders.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      4. Explainability and Transparency
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM provides explainability features that clarify how AI
                      models make decisions. This builds trust with regulators,
                      investors, and end-users.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      5. Centralized AI Risk Management
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Whether you're running one model or a dozen, PRISM offers
                      a centralized dashboard for monitoring compliance and
                      risks across your entire AI portfolio.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div id="benefits" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Benefits of Using PRISM for AI Model Auditing
                    </h2>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Faster audits with automation replacing manual
                          processes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Cost efficiency by reducing reliance on external
                          consultants
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Scalability to handle multiple AI systems at once
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Proactive governance with continuous monitoring, not
                          just one-off checks
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Stronger investor confidence through transparent,
                          standardized reporting
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* PRISM vs Traditional */}
                  <div id="prism-vs-traditional" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      PRISM vs Traditional AI Model Auditing
                    </h2>
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-brand-lightest">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Feature
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Traditional Auditing
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              PRISM Auditing
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
                              Automated compliance checks
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
                              Continuous monitoring
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Reporting
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Consultant-driven
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Instant audit-ready reports
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Explainability
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Limited
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Built-in transparency features
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Scalability
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Difficult with multiple models
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Easy with centralized dashboard
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Cost
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              High
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Cost-efficient automation
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div id="use-cases" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Use Cases: Who Needs AI Model Auditing with PRISM?
                    </h2>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Startups looking to attract investors with strong
                          governance reports.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Enterprises deploying AI across multiple business
                          units.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Fintech companies ensuring compliance with financial
                          regulations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Healthcare providers verifying safe and ethical AI
                          applications.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Vendors needing proof of AI governance for contracts
                          and partnerships.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: Simplify AI Model Auditing with PRISM
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI model auditing is no longer optional—it's a requirement
                      for building trustworthy, compliant, and future-ready AI
                      systems. Traditional methods can't keep pace with today's
                      regulatory and business demands.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With PRISM by Block Convey, organizations can streamline
                      auditing, reduce costs, and ensure compliance without
                      slowing down innovation. From bias detection to instant
                      audit reports, PRISM makes AI governance and auditing
                      easy, scalable, and reliable.
                    </p>
                  </div>

                  {/* FAQs */}
                  <div id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      FAQs: AI Model Auditing with PRISM
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          1. What makes PRISM different from traditional AI
                          auditing?
                        </h3>
                        <p className="text-gray-700">
                          PRISM automates compliance, bias detection, and
                          reporting, saving time and costs compared to manual
                          audits.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. Does PRISM support ISO 42001 compliance?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM aligns AI audits with ISO 42001, NIST,
                          GDPR, and other key frameworks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. Can PRISM handle multiple AI models?
                        </h3>
                        <p className="text-gray-700">
                          Absolutely. PRISM provides a centralized dashboard for
                          managing governance across many AI systems.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Is PRISM suitable for startups?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM is cost-efficient and helps startups build
                          investor confidence with transparent audit reports.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. How quickly can PRISM generate audit-ready reports?
                        </h3>
                        <p className="text-gray-700">
                          PRISM generates audit-ready reports in minutes, making
                          compliance and investor reporting seamless.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Simplify AI Model Auditing?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can automate compliance, detect bias,
                      and generate audit-ready reports for your AI systems.
                    </p>
                    <a
                      href="/prism"
                      className="inline-flex items-center bg-brand text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors"
                    >
                      Start Auditing with PRISM
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
