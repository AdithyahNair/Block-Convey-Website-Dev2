"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function StartupsISO42001Client() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-iso", title: "What Is ISO 42001?" },
    { id: "challenges", title: "Challenges Startups Face with ISO 42001" },
    { id: "how-prism-helps", title: "How PRISM Helps Startups Align Quickly" },
    {
      id: "competitive-edge",
      title: "Why ISO 42001 Gives Startups a Competitive Edge",
    },
    {
      id: "prism-vs-traditional",
      title: "PRISM vs Traditional Compliance Methods",
    },
    { id: "step-by-step", title: "Step-by-Step: Achieve ISO 42001 with PRISM" },
    { id: "conclusion", title: "Conclusion: The Fast Track to Responsible AI" },
    { id: "faqs", title: "FAQs: ISO 42001 for Startups" },
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
                src="/images/startups-iso-42001.png"
                alt="How Startups Can Quickly Align with ISO 42001 Using PRISM"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Startups Can Quickly Align with ISO 42001 Using PRISM
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>October 6, 2025</span>
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
                      Introduction
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Artificial Intelligence is powering innovation across
                      industries, and startups are leading the charge. However,
                      with this innovation comes increased scrutiny. Regulators,
                      investors, and customers want assurance that AI systems
                      are being developed responsibly, transparently, and
                      safely.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      That's where ISO 42001 comes in—a global AI management
                      standard designed to provide a framework for trustworthy
                      and compliant AI. For startups, achieving ISO 42001
                      compliance can feel overwhelming, but it's also a massive
                      opportunity to build trust and stand out in a competitive
                      market.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The good news? With PRISM by Block Convey, startups can
                      streamline the process, reduce complexity, and quickly
                      align with ISO 42001 without draining resources.
                    </p>
                  </div>

                  {/* What Is ISO 42001 */}
                  <div id="what-is-iso" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      What Is ISO 42001?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      ISO 42001 is the world's first international standard for
                      AI management systems (AIMS). It provides structured
                      guidelines for:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Establishing AI governance policies.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Managing risks around AI bias, privacy, and
                          transparency.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Ensuring accountability and ethical use of AI.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Building audit-ready documentation for regulators and
                          stakeholders.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      In short, ISO 42001 creates a blueprint for trustworthy AI
                      development, ensuring organizations meet both ethical and
                      legal expectations.
                    </p>
                  </div>

                  {/* Challenges */}
                  <div id="challenges" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenges Startups Face with ISO 42001 Compliance
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Startups often struggle with compliance due to:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Limited Resources:</strong> Unlike
                          enterprises, startups can't always afford big
                          compliance teams.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Complex Standards:</strong> ISO 42001 requires
                          extensive documentation and monitoring.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Time Pressure:</strong> Startups need to focus
                          on growth, not just governance.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Investor Demands:</strong> Investors are
                          increasingly asking for proof of AI compliance before
                          funding.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This is why a tool like PRISM is invaluable—it simplifies
                      the process and helps startups prove compliance faster and
                      more efficiently.
                    </p>
                  </div>

                  {/* How PRISM Helps */}
                  <div id="how-prism-helps" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      How PRISM Helps Startups Align with ISO 42001 Quickly
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM is designed to remove the heavy lifting from
                      compliance by providing automation, templates, and
                      real-time monitoring. Here's how:
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                      1. Automated Compliance Documentation
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM generates ISO 42001-ready documents without manual
                      effort. Startups no longer need to spend weeks creating
                      policies or reports—it's built into the platform.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      2. Continuous Risk Monitoring
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Unlike traditional audits that happen once a year, PRISM
                      continuously tracks risks such as bias, data privacy
                      issues, and model drift. This ensures ongoing alignment
                      with ISO standards.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      3. Benchmarking Against Best Practices
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM scores and benchmarks your AI systems against ISO
                      42001 requirements and industry peers, showing exactly
                      where improvements are needed.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      4. Audit-Ready Reporting
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      When regulators, investors, or clients ask for proof,
                      startups can instantly generate audit-ready reports that
                      align with ISO 42001.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      5. Cost-Efficient Compliance
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Instead of hiring costly consultants, startups can rely on
                      PRISM's automation to reduce compliance costs while
                      maintaining high-quality governance.
                    </p>
                  </div>

                  {/* Competitive Edge */}
                  <div id="competitive-edge" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Why ISO 42001 Compliance Gives Startups a Competitive Edge
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Startups that achieve ISO 42001 compliance benefit from:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Stronger Investor Confidence:</strong>{" "}
                          Demonstrates readiness and accountability.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Market Differentiation:</strong> Proves your
                          startup takes responsible AI seriously.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Regulatory Preparedness:</strong>{" "}
                          Future-proofs against incoming AI laws like the EU AI
                          Act.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Customer Trust:</strong> Enhances credibility
                          with clients who expect ethical AI.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Scalable Governance:</strong> Sets a strong
                          foundation for compliance as the company grows.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      By aligning early with ISO 42001, startups don't just meet
                      compliance—they signal leadership in responsible AI.
                    </p>
                  </div>

                  {/* PRISM vs Traditional */}
                  <div id="prism-vs-traditional" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      PRISM vs Traditional Compliance Methods for Startups
                    </h2>
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-brand-lightest">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Feature
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Traditional Compliance
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              PRISM for Startups
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Documentation
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Manual, consultant-driven
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Automated, ISO-ready
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Monitoring
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              One-time, periodic
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Continuous and real-time
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Cost
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              High consulting fees
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Cost-efficient automation
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Audit Prep
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Time-intensive
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Instant, audit-ready
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Scalability
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Difficult for rapid growth
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Built to scale with startups
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Step-by-Step */}
                  <div id="step-by-step" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Step-by-Step: How a Startup Can Achieve ISO 42001 with
                      PRISM
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          1. Sign Up on PRISM
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Get access to governance templates and tools.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          2. Upload AI Project Details
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          PRISM tailors requirements to your use case.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          3. Generate Risk & Compliance Reports
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Automated documentation saves time.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          4. Benchmark & Improve
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Use PRISM's feedback to close compliance gaps.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          5. Stay Audit-Ready
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Continuous monitoring ensures you're always compliant.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: The Fast Track to Responsible AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      For startups, aligning with ISO 42001 is both a challenge
                      and an opportunity. Traditional compliance paths can be
                      slow, costly, and complex—but PRISM simplifies the
                      process, making compliance faster, smarter, and scalable.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      By using PRISM, startups can achieve ISO 42001 compliance
                      without sacrificing growth. More importantly, they
                      position themselves as leaders in ethical, trustworthy AI,
                      winning the trust of investors, regulators, and customers
                      alike.
                    </p>
                  </div>

                  {/* FAQs */}
                  <div id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      FAQs: ISO 42001 for Startups
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          1. Why is ISO 42001 important for startups?
                        </h3>
                        <p className="text-gray-700">
                          It helps startups prove AI trustworthiness, meet
                          regulations, and attract investors.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. How long does it take to achieve compliance with
                          PRISM?
                        </h3>
                        <p className="text-gray-700">
                          PRISM accelerates the process—what normally takes
                          months can often be completed in weeks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. Does PRISM replace consultants?
                        </h3>
                        <p className="text-gray-700">
                          PRISM automates documentation and monitoring, reducing
                          the need for expensive consultants.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Can PRISM grow with a startup?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM scales as your AI systems and compliance
                          needs expand.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. Is ISO 42001 compliance mandatory?
                        </h3>
                        <p className="text-gray-700">
                          Not yet, but it's becoming a global benchmark for
                          responsible AI—and early adopters will have a strong
                          advantage.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Achieve ISO 42001 Compliance?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your startup build trustworthy
                      AI systems and meet global compliance standards quickly.
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
