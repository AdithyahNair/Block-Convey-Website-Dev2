"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrismVsTraditionalClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    {
      id: "traditional-tools",
      title: "Traditional AI Risk Assessment Tools: The Old Way",
    },
    {
      id: "prism-solution",
      title: "PRISM: The Modern AI Risk Assessment Solution",
    },
    {
      id: "side-by-side-comparison",
      title: "PRISM vs Traditional AI Risk Assessment: Side-by-Side Comparison",
    },
    {
      id: "benefits",
      title: "Benefits of Choosing PRISM Over Traditional Tools",
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
                src="/images/prism-vs-traditional.png"
                alt="PRISM vs Traditional AI Risk Assessment Tools Comparison"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              PRISM vs Traditional Risk Assessment Tools for AI
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
                      As organizations adopt AI at scale, risk assessment has
                      become a critical part of ensuring safety, compliance, and
                      trustworthiness. Traditional risk assessment tools —
                      spreadsheets, static frameworks, and manual audits — have
                      been used for decades. But when it comes to AI, with its
                      complexity and constant evolution, these tools often fall
                      short.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      PRISM by Block Convey represents a new generation of AI
                      governance solutions, offering automation, real-time
                      monitoring, and compliance alignment with global standards
                      such as ISO 42001, NIST AI RMF, GDPR, and the EU AI Act.
                      This guide compares PRISM with traditional AI risk
                      assessment methods, helping you understand which approach
                      is right for your business.
                    </p>
                  </div>

                  {/* Traditional AI Risk Assessment Tools: The Old Way */}
                  <div id="traditional-tools" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Traditional AI Risk Assessment Tools: The Old Way
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Traditional risk assessment tools rely heavily on manual
                      documentation, human judgment, and periodic reviews.
                      Common methods include:
                    </p>
                    <ul className="space-y-4 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Spreadsheets & Checklists:</strong> Teams
                          track risks manually, updating them only during
                          reviews or audits.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Static Risk Frameworks:</strong> One-time
                          assessments that don't adapt as AI systems evolve.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Consultant-Led Audits:</strong> Dependence on
                          external experts who provide a snapshot, not
                          continuous monitoring.
                        </span>
                      </li>
                    </ul>

                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Limitations of Traditional Tools
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Time-Intensive:</strong> Preparing risk
                            documentation takes weeks or months.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Error-Prone:</strong> Human oversight leads
                            to missed risks and inconsistent reporting.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Reactive, Not Proactive:</strong> Risks are
                            often identified only after deployment or when an
                            incident occurs.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Lack of Scalability:</strong> As AI projects
                            grow, managing risks across multiple models becomes
                            overwhelming.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* PRISM: The Modern AI Risk Assessment Solution */}
                  <div id="prism-solution" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      PRISM: The Modern AI Risk Assessment Solution
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Unlike traditional methods, PRISM is designed to handle
                      the dynamic and complex nature of AI systems. It provides
                      an integrated platform for risk assessment, governance,
                      and compliance documentation.
                    </p>

                    <div className="bg-brand-lightest p-6 rounded-xl mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Key Features of PRISM
                      </h3>
                      <ol className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-brand text-white rounded-full text-sm font-bold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            1
                          </span>
                          <span>
                            <strong>Real-Time Monitoring:</strong> Tracks AI
                            models continuously, flagging new risks as they
                            arise.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-brand text-white rounded-full text-sm font-bold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            2
                          </span>
                          <span>
                            <strong>Automated Documentation:</strong> Generates
                            compliance-ready reports aligned with standards like
                            ISO 42001 and NIST AI RMF.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-brand text-white rounded-full text-sm font-bold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            3
                          </span>
                          <span>
                            <strong>Benchmarking & Scoring:</strong> Compares
                            your AI system against industry best practices.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-brand text-white rounded-full text-sm font-bold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            4
                          </span>
                          <span>
                            <strong>Collaboration Tools:</strong> Enables
                            cross-functional teams to manage risks on one
                            centralized platform.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-6 h-6 bg-brand text-white rounded-full text-sm font-bold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            5
                          </span>
                          <span>
                            <strong>Audit-Ready Templates:</strong> Provides
                            standardized risk assessment formats for regulatory
                            reviews and investor due diligence.
                          </span>
                        </li>
                      </ol>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Why PRISM Is Different
                      </h3>
                      <p className="text-gray-700">
                        Instead of offering just a snapshot of risk (like
                        traditional audits), PRISM provides a continuous,
                        proactive, and adaptive approach, ensuring your AI
                        systems remain trustworthy over time.
                      </p>
                    </div>
                  </div>

                  {/* PRISM vs Traditional AI Risk Assessment: Side-by-Side Comparison */}
                  <div id="side-by-side-comparison" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      PRISM vs Traditional AI Risk Assessment: Side-by-Side
                      Comparison
                    </h2>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                        <thead>
                          <tr className="bg-brand text-white">
                            <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                              Feature
                            </th>
                            <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                              Traditional Tools
                            </th>
                            <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                              PRISM by Block Convey
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="border border-gray-300 px-6 py-4 font-medium">
                              Risk Assessment Approach
                            </td>
                            <td className="border border-gray-300 px-6 py-4">
                              Manual, checklist-based
                            </td>
                            <td className="border border-gray-300 px-6 py-4 text-brand font-medium">
                              Automated, AI-driven
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="border border-gray-300 px-6 py-4 font-medium">
                              Documentation
                            </td>
                            <td className="border border-gray-300 px-6 py-4">
                              Static reports, updated occasionally
                            </td>
                            <td className="border border-gray-300 px-6 py-4 text-brand font-medium">
                              Dynamic, real-time compliance documentation
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="border border-gray-300 px-6 py-4 font-medium">
                              Regulatory Alignment
                            </td>
                            <td className="border border-gray-300 px-6 py-4">
                              Partial, inconsistent
                            </td>
                            <td className="border border-gray-300 px-6 py-4 text-brand font-medium">
                              Fully aligned with ISO 42001, NIST AI RMF, GDPR,
                              EU AI Act
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="border border-gray-300 px-6 py-4 font-medium">
                              Scalability
                            </td>
                            <td className="border border-gray-300 px-6 py-4">
                              Limited – hard to manage multiple projects
                            </td>
                            <td className="border border-gray-300 px-6 py-4 text-brand font-medium">
                              Highly scalable for startups & enterprises
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="border border-gray-300 px-6 py-4 font-medium">
                              Audit Readiness
                            </td>
                            <td className="border border-gray-300 px-6 py-4">
                              Requires heavy preparation
                            </td>
                            <td className="border border-gray-300 px-6 py-4 text-brand font-medium">
                              Instant audit-ready reports
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="border border-gray-300 px-6 py-4 font-medium">
                              Cost & Efficiency
                            </td>
                            <td className="border border-gray-300 px-6 py-4">
                              High cost due to labor & consultants
                            </td>
                            <td className="border border-gray-300 px-6 py-4 text-brand font-medium">
                              Cost-efficient automation with faster reporting
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="border border-gray-300 px-6 py-4 font-medium">
                              Adaptability
                            </td>
                            <td className="border border-gray-300 px-6 py-4">
                              Cannot keep up with evolving AI systems
                            </td>
                            <td className="border border-gray-300 px-6 py-4 text-brand font-medium">
                              Designed for continuous monitoring & updates
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-6 py-4 font-medium">
                              Collaboration
                            </td>
                            <td className="border border-gray-300 px-6 py-4">
                              Fragmented across teams
                            </td>
                            <td className="border border-gray-300 px-6 py-4 text-brand font-medium">
                              Centralized compliance hub for all stakeholders
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Benefits of Choosing PRISM Over Traditional Tools */}
                  <div id="benefits" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Benefits of Choosing PRISM Over Traditional Tools
                    </h2>

                    <div className="space-y-6">
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          1. Time Savings
                        </h3>
                        <p className="text-gray-700">
                          Cut documentation and audit prep from months to days.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. Proactive Risk Management
                        </h3>
                        <p className="text-gray-700">
                          Identify and mitigate risks before they cause damage.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. Regulatory Confidence
                        </h3>
                        <p className="text-gray-700">
                          Stay ahead of evolving compliance standards without
                          constant manual work.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Investor & Vendor Trust
                        </h3>
                        <p className="text-gray-700">
                          Provide transparent, audit-ready risk assessments to
                          stakeholders.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. Scalable Governance
                        </h3>
                        <p className="text-gray-700">
                          Easily manage multiple AI projects across teams and
                          geographies.
                        </p>
                      </div>
                    </div>

                    <div className="bg-brand-lightest p-6 rounded-xl mt-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        PRISM Works Best When:
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            You're scaling AI projects across teams or markets.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Regulatory compliance is essential (ISO 42001, NIST,
                            GDPR, EU AI Act).
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            You need continuous monitoring, not just one-time
                            audits.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            You want to reduce costs without compromising
                            governance.
                          </span>
                        </li>
                      </ul>
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
                          Why are traditional risk assessment tools insufficient
                          for AI?
                        </h3>
                        <p className="text-gray-700">
                          Because AI systems evolve continuously, static
                          frameworks cannot keep up with emerging risks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          What makes PRISM different?
                        </h3>
                        <p className="text-gray-700">
                          PRISM provides real-time monitoring, automated
                          documentation, and alignment with global AI compliance
                          standards.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Can PRISM work alongside traditional tools?
                        </h3>
                        <p className="text-gray-700">
                          Yes. Many organizations start with traditional
                          checklists but integrate PRISM for scalability and
                          automation.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Is PRISM suitable for startups?
                        </h3>
                        <p className="text-gray-700">
                          Absolutely. PRISM helps startups build investor trust
                          by providing compliance-ready documentation.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Which compliance standards does PRISM support?
                        </h3>
                        <p className="text-gray-700">
                          ISO 42001, NIST AI RMF, GDPR, HIPAA, and the EU AI
                          Act.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: The Future Belongs to Automated AI Risk
                      Assessment
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Traditional tools laid the foundation for risk management,
                      but they struggle with the dynamic nature of AI systems.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM represents the next evolution in AI risk assessment:
                      automated, scalable, and compliance-focused. By moving
                      beyond manual checklists and static frameworks,
                      organizations can build AI systems that are not only
                      compliant but also trustworthy, transparent, and
                      resilient.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      For businesses looking to future-proof their AI governance
                      strategy, PRISM is the smarter choice.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Upgrade Your AI Risk Assessment?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your organization build trust,
                      ensure compliance, and drive AI success with modern risk
                      assessment tools.
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
