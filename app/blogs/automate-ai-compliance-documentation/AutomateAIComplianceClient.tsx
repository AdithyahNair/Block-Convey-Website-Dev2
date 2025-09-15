"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AutomateAIComplianceClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    {
      id: "manual-challenges",
      title: "The Challenges of Manual AI Compliance Documentation",
    },
    {
      id: "what-is-automated",
      title: "What Is Automated AI Compliance Documentation?",
    },
    {
      id: "how-prism-automates",
      title: "How PRISM Automates AI Compliance Documentation",
    },
    {
      id: "benefits",
      title: "Benefits of Automating AI Compliance Documentation with PRISM",
    },
    {
      id: "best-practices",
      title: "Best Practices for Automating AI Compliance Documentation",
    },
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
                src="/images/how-to-automate.png"
                alt="How to Automate AI Compliance Documentation with PRISM"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Automate AI Compliance Documentation with PRISM
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>September 15, 2025</span>
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
                      AI compliance is becoming a non-negotiable business
                      requirement. Regulations such as the EU AI Act, ISO/IEC
                      42001, GDPR, and NIST AI RMF require organizations to
                      maintain clear, consistent, and auditable documentation.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Manually creating and updating compliance documentation is
                      time-consuming, error-prone, and costly. That's where
                      automation steps in. With solutions like PRISM by Block
                      Convey, businesses can simplify the compliance process,
                      reduce administrative overhead, and maintain audit-ready
                      documentation at all times.
                    </p>
                  </div>

                  {/* The Challenges of Manual AI Compliance Documentation */}
                  <div id="manual-challenges" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Challenges of Manual AI Compliance Documentation
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Most organizations still rely on spreadsheets, static
                      reports, and manual updates. This approach creates
                      challenges:
                    </p>
                    <ul className="space-y-4 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Inconsistent Records:</strong> Different teams
                          maintain their own documents, leading to gaps.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>High Resource Costs:</strong> Legal,
                          compliance, and technical experts spend excessive
                          hours preparing documentation.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Reactive Approach:</strong> Teams scramble to
                          update documents only when audits or investor reviews
                          are near.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Risk of Errors:</strong> Manual processes
                          increase the chance of missing critical compliance
                          details.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      As regulations evolve, these manual processes quickly
                      become unsustainable.
                    </p>
                  </div>

                  {/* What Is Automated AI Compliance Documentation? */}
                  <div id="what-is-automated" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      What Is Automated AI Compliance Documentation?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Automated AI compliance documentation uses governance
                      platforms, workflows, and AI-driven tools to:
                    </p>
                    <ul className="space-y-4 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Generate Standardized Reports:</strong>{" "}
                          Automatically compile compliance requirements into
                          structured documentation.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Update in Real Time:</strong> Reflect new
                          model training data, deployments, or regulatory
                          updates instantly.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Provide Audit-Ready Records:</strong> Ensure
                          all compliance artifacts are stored, timestamped, and
                          verifiable.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Benchmark Against Standards:</strong> Check
                          alignment with frameworks like ISO 42001, GDPR, and
                          NIST.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      In other words, automation transforms compliance from a
                      reactive chore into a proactive, streamlined process.
                    </p>
                  </div>

                  {/* How PRISM Automates AI Compliance Documentation */}
                  <div id="how-prism-automates" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      How PRISM Automates AI Compliance Documentation
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM is designed to take the complexity out of compliance
                      by automating every stage of documentation. Here's how it
                      works:
                    </p>

                    <div className="space-y-8">
                      {/* 1. Centralized Compliance Hub */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          1. Centralized Compliance Hub
                        </h3>
                        <p className="text-gray-700">
                          PRISM acts as a single source of truth where all
                          compliance-related data, reports, and audit records
                          are stored. This eliminates silos and ensures
                          consistency across departments.
                        </p>
                      </div>

                      {/* 2. Automated Report Generation */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          2. Automated Report Generation
                        </h3>
                        <p className="text-gray-700">
                          Instead of spending weeks compiling compliance
                          documents, PRISM automatically generates customized
                          compliance reports. These reports align with major
                          frameworks such as ISO 42001, NIST AI RMF, and the EU
                          AI Act.
                        </p>
                      </div>

                      {/* 3. Real-Time Monitoring and Updates */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          3. Real-Time Monitoring and Updates
                        </h3>
                        <p className="text-gray-700">
                          As AI systems evolve, PRISM updates compliance records
                          in real time. Whether it's a new training dataset,
                          updated model, or policy change, your documentation is
                          always current and audit-ready.
                        </p>
                      </div>

                      {/* 4. Audit-Ready Templates */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          4. Audit-Ready Templates
                        </h3>
                        <p className="text-gray-700">
                          PRISM comes with pre-built templates for risk
                          assessments, data protection impact assessments,
                          explainability reports, and governance checklists.
                          This ensures your organization is always prepared for
                          regulatory audits or investor due diligence.
                        </p>
                      </div>

                      {/* 5. Collaboration and Workflow Automation */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          5. Collaboration and Workflow Automation
                        </h3>
                        <p className="text-gray-700">
                          PRISM allows compliance, legal, and technical teams to
                          collaborate seamlessly. Automated workflows ensure
                          that documentation is reviewed, approved, and tracked
                          without bottlenecks.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits of Automating AI Compliance Documentation with PRISM */}
                  <div id="benefits" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Benefits of Automating AI Compliance Documentation with
                      PRISM
                    </h2>
                    <div className="space-y-4">
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Time Savings
                        </h3>
                        <p className="text-gray-700">
                          Cut documentation preparation time by up to 70%.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Reduced Risk
                        </h3>
                        <p className="text-gray-700">
                          Minimize human errors and missed compliance
                          requirements.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Scalability
                        </h3>
                        <p className="text-gray-700">
                          Handle compliance for multiple AI projects without
                          increasing overhead.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Investor Confidence
                        </h3>
                        <p className="text-gray-700">
                          Demonstrate transparency and readiness with
                          audit-ready reports.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Regulatory Alignment
                        </h3>
                        <p className="text-gray-700">
                          Stay ahead of changing compliance frameworks like ISO
                          42001 and EU AI Act.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Best Practices for Automating AI Compliance Documentation */}
                  <div id="best-practices" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Best Practices for Automating AI Compliance Documentation
                    </h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          1. Map Out Compliance Requirements
                        </h3>
                        <p className="text-gray-700">
                          Identify the regulatory standards (ISO 42001, GDPR,
                          HIPAA, NIST) most relevant to your business.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          2. Centralize Documentation
                        </h3>
                        <p className="text-gray-700">
                          Avoid fragmented records. Use a platform like PRISM to
                          maintain one compliance hub for all documentation.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          3. Automate Workflows
                        </h3>
                        <p className="text-gray-700">
                          Set up automated reporting and approval workflows to
                          ensure updates are seamless and consistent.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          4. Continuously Monitor AI Systems
                        </h3>
                        <p className="text-gray-700">
                          Compliance is not static. Continuous monitoring
                          ensures that new risks, biases, or data changes are
                          documented in real time.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          5. Leverage PRISM's Benchmarks
                        </h3>
                        <p className="text-gray-700">
                          Use PRISM's benchmarking tools to compare your AI
                          systems against industry best practices and compliance
                          requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQs */}
                  <div id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      FAQs
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          What is AI compliance documentation?
                        </h3>
                        <p className="text-gray-700">
                          It includes records like risk assessments,
                          explainability reports, and governance documents
                          required for regulatory compliance.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Why automate AI compliance documentation?
                        </h3>
                        <p className="text-gray-700">
                          Automation reduces errors, saves time, and ensures
                          real-time updates as AI systems evolve.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          How does PRISM help with compliance automation?
                        </h3>
                        <p className="text-gray-700">
                          PRISM provides automated report generation,
                          audit-ready templates, real-time monitoring, and
                          benchmarking against major standards.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Which standards does PRISM support?
                        </h3>
                        <p className="text-gray-700">
                          PRISM aligns with ISO 42001, NIST AI RMF, GDPR, HIPAA,
                          and the EU AI Act.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Is automated documentation necessary for startups?
                        </h3>
                        <p className="text-gray-700">
                          Yes. Startups benefit by saving resources, building
                          investor trust, and staying prepared for early
                          regulatory audits.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: PRISM Makes Compliance Simple and Scalable
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI compliance doesn't have to be a burden. By automating
                      documentation with PRISM, organizations can shift from a
                      manual, error-prone process to a streamlined, proactive
                      compliance strategy.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM ensures that your documentation is always current,
                      audit-ready, and aligned with global AI standards. This
                      not only helps you pass regulatory checks but also
                      strengthens trust with investors, customers, and partners.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      In today's fast-moving AI landscape, automation isn't just
                      a convenience: it's a necessity for sustainable compliance
                      and governance.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Automate Your AI Compliance?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your organization build trust,
                      ensure compliance, and drive AI success with comprehensive
                      compliance automation.
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
