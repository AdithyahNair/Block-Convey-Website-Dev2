"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIRiskManagementFintechClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "Managing AI Risk in Fintech" },
    { id: "biggest-risks", title: "The Biggest AI Risks in Fintech" },
    {
      id: "benefits",
      title: "Benefits of Using PRISM for Fintech AI Governance",
    },
    {
      id: "prism-vs-traditional",
      title: "PRISM vs Traditional Fintech AI Risk Management",
    },
    {
      id: "how-prism-simplifies",
      title: "How PRISM Simplifies AI Risk Management in Fintech",
    },
    {
      id: "use-cases",
      title: "Use Cases: Where Fintechs Benefit Most from PRISM",
    },
    {
      id: "conclusion",
      title: "Conclusion: Building Trustworthy AI in Fintech",
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
                src="/images/ai-risk-management-fintech.png"
                alt="Managing AI Risk in Fintech: Compliance, Bias, and Beyond"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Managing AI Risk in Fintech: Compliance, Bias, and Beyond
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>October 4, 2025</span>
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
                      Managing AI Risk in Fintech: Compliance, Bias, and Beyond
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Artificial Intelligence is transforming the fintech
                      industry. From fraud detection and credit scoring to
                      personalized banking and robo-advisory, AI is powering
                      smarter, faster financial services. But with innovation
                      comes risk. Regulatory scrutiny, algorithmic bias, and
                      data privacy challenges can quickly derail fintech growth.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Managing AI risk is not just about compliance—it's about
                      protecting customer trust, ensuring fair outcomes, and
                      keeping your business future-ready. That's where PRISM by
                      Block Convey steps in. PRISM helps fintechs navigate the
                      complexities of AI risk management with automation,
                      transparency, and audit-ready governance tools.
                    </p>
                  </div>

                  {/* The Biggest AI Risks in Fintech */}
                  <div id="biggest-risks" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Biggest AI Risks in Fintech
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                      1. Regulatory Compliance Failures
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Fintechs operate in one of the most heavily regulated
                      industries. Regulations like GDPR, ISO 42001, the EU AI
                      Act, and financial compliance laws require AI systems to
                      be transparent, explainable, and fair. Non-compliance can
                      result in hefty fines, reputational damage, and loss of
                      licenses.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      2. Algorithmic Bias in Lending and Credit Scoring
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Bias in AI models can unfairly impact loan approvals,
                      interest rates, and credit scores. Even unintentional
                      biases from training data can lead to discriminatory
                      practices, putting fintech companies at risk of lawsuits
                      and reputational damage.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      3. Data Privacy and Security Risks
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI in fintech often relies on sensitive financial and
                      personal data. A lack of governance around data usage,
                      consent, and storage creates exposure to privacy
                      violations and security breaches.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      4. Model Drift and Performance Failures
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI models degrade over time as market conditions, customer
                      behavior, and fraud patterns change. Without monitoring,
                      fintechs risk deploying models that produce inaccurate or
                      outdated results.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      5. Lack of Transparency (The Black Box Problem)
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Fintech regulators, investors, and customers expect
                      transparency in how AI systems make decisions. "Black box"
                      models without explainability erode trust and create
                      compliance roadblocks.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div id="benefits" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Benefits of Using PRISM for Fintech AI Governance
                    </h2>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Regulatory readiness with built-in compliance tools
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Investor and regulator confidence through transparency
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Customer trust by ensuring fairness and bias-free AI
                          decisions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Reduced operational risks with continuous monitoring
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Cost efficiency compared to consultant-driven audits
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* PRISM vs Traditional */}
                  <div id="prism-vs-traditional" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      PRISM vs Traditional Fintech AI Risk Management
                    </h2>
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-brand-lightest">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Feature
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Traditional Risk Management
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              PRISM AI Risk Management
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Compliance
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Manual, consultant-heavy
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Automated, built-in
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Bias Detection
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Limited, periodic
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Real-time, continuous
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Transparency
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Often lacking
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
                              Reactive
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Proactive & ongoing
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
                              Centralized and scalable
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* How PRISM Simplifies */}
                  <div id="how-prism-simplifies" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      How PRISM Simplifies AI Risk Management in Fintech
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM helps fintechs proactively identify, monitor, and
                      manage AI risks while aligning with global standards.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                      1. Automated Compliance Alignment
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM integrates compliance checks for ISO 42001, NIST AI
                      RMF, GDPR, HIPAA, and the EU AI Act. Fintech companies can
                      instantly see where they stand and generate audit-ready
                      reports.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      2. Bias Detection and Mitigation
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      With real-time bias detection, PRISM identifies and flags
                      discriminatory patterns in lending, fraud detection, or
                      customer segmentation models. This helps fintechs deliver
                      fair and equitable services.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      3. Continuous Monitoring of AI Models
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM continuously tracks model performance, drift, and
                      data integrity. Instead of waiting for failures, fintechs
                      can take corrective action early.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      4. Explainability for Regulatory Confidence
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM provides explainability features that translate
                      complex AI decisions into clear insights. This ensures
                      fintechs can meet regulator expectations and build
                      customer trust.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      5. Centralized Risk Management Dashboard
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Whether a fintech is running credit scoring, fraud
                      detection, or personalized finance tools, PRISM
                      consolidates risk management into a single dashboard.
                    </p>
                  </div>

                  {/* Use Cases */}
                  <div id="use-cases" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Use Cases: Where Fintechs Benefit Most from PRISM
                    </h2>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Credit Scoring Models</strong> → Ensure
                          fairness and compliance in lending decisions.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Fraud Detection Systems</strong> →
                          Continuously monitor for model drift and new fraud
                          patterns.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Robo-Advisory Platforms</strong> → Provide
                          explainable financial recommendations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>KYC/AML Systems</strong> → Align with
                          regulatory standards while minimizing false positives.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Personalized Banking</strong> → Deliver
                          equitable and bias-free customer experiences.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: Building Trustworthy AI in Fintech
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI is the backbone of modern fintech innovation, but it
                      also comes with compliance, fairness, and transparency
                      challenges. Without proper governance, fintech companies
                      risk losing customer trust, facing regulatory penalties,
                      and slowing down growth.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With PRISM by Block Convey, fintechs can move beyond
                      manual, fragmented risk management and embrace a
                      streamlined, automated, and scalable solution. By managing
                      compliance, bias, and model performance in one platform,
                      PRISM makes it easier to innovate responsibly while
                      staying regulator-ready.
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
                          1. Why is AI risk management important in fintech?
                        </h3>
                        <p className="text-gray-700">
                          Because fintech AI directly affects sensitive
                          financial decisions like loans, fraud detection, and
                          investments, making governance essential.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. How does PRISM help fintechs with compliance?
                        </h3>
                        <p className="text-gray-700">
                          PRISM aligns AI systems with ISO 42001, GDPR, NIST,
                          and the EU AI Act, generating audit-ready compliance
                          reports.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. Can PRISM detect bias in credit scoring models?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM identifies bias in data and algorithms to
                          ensure fairness in lending and credit decisions.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Does PRISM support real-time monitoring?
                        </h3>
                        <p className="text-gray-700">
                          Absolutely. PRISM continuously monitors model drift,
                          accuracy, and risks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. Is PRISM suitable for fintech startups?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM is cost-efficient and designed to help both
                          startups and enterprises scale responsibly.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Build Trustworthy AI in Fintech?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your fintech manage
                      compliance, detect bias, and ensure safe AI systems.
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
