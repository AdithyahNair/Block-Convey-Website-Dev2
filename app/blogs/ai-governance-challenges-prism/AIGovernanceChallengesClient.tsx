"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIGovernanceChallengesClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "challenge-1", title: "Challenge 1: AI Bias and Fairness" },
    { id: "challenge-2", title: "Challenge 2: Regulatory Compliance" },
    { id: "challenge-3", title: "Challenge 3: Lack of Explainability" },
    {
      id: "challenge-4",
      title: "Challenge 4: Risk Management Across Multiple AI Systems",
    },
    {
      id: "challenge-5",
      title: "Challenge 5: Audit Readiness and Investor Confidence",
    },
    { id: "challenge-6", title: "Challenge 6: Cost and Resource Constraints" },
    { id: "challenge-7", title: "Challenge 7: Building Stakeholder Trust" },
    {
      id: "prism-vs-traditional",
      title: "PRISM vs Traditional Governance Approaches",
    },
    {
      id: "conclusion",
      title: "Conclusion: Solving Governance Challenges with PRISM",
    },
    { id: "faqs", title: "FAQs: AI Governance Challenges" },
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
                src="/images/ai-governance-challenges.png"
                alt="Top AI Governance Challenges and How PRISM Solves Them"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Top AI Governance Challenges and How PRISM Solves Them
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>October 7, 2025</span>
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
                      AI is no longer a futuristic concept—it's powering
                      decisions in healthcare, finance, retail, and beyond. But
                      with its rapid adoption comes growing concern: How do we
                      ensure AI is safe, ethical, transparent, and compliant?
                      That's where AI governance comes in.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      While organizations understand the need for governance,
                      many struggle with practical challenges like bias,
                      evolving regulations, lack of explainability, and
                      scalability issues. Without the right tools, governance
                      can feel like a never-ending uphill battle.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This is where PRISM by Block Convey offers a breakthrough.
                      PRISM is built to simplify AI governance with automation,
                      compliance frameworks, and continuous monitoring, helping
                      businesses overcome these challenges head-on.
                    </p>
                  </div>

                  {/* Challenge 1 */}
                  <div id="challenge-1" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenge 1: AI Bias and Fairness
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      One of the biggest governance concerns is bias—AI models
                      often reflect or even amplify societal inequalities. This
                      can result in unfair hiring systems, biased credit
                      scoring, or discriminatory healthcare outcomes.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      How PRISM Solves It
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM helps organizations detect, measure, and mitigate
                      bias by continuously monitoring data inputs, model
                      behavior, and outputs. It provides bias reports that
                      highlight risks and recommend corrective actions, ensuring
                      AI systems stay fair and ethical.
                    </p>
                  </div>

                  {/* Challenge 2 */}
                  <div id="challenge-2" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenge 2: Regulatory Compliance (ISO 42001, GDPR, EU AI
                      Act)
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Global regulations for AI are evolving rapidly. From ISO
                      42001 to the EU AI Act, organizations must prove they're
                      managing AI responsibly. The challenge? Compliance demands
                      are complex, time-consuming, and vary across regions.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      How PRISM Solves It
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM automates compliance documentation, aligning with
                      key frameworks such as ISO 42001, NIST AI RMF, GDPR,
                      HIPAA, and EU AI Act. Instead of spending weeks preparing
                      reports, businesses can generate audit-ready documentation
                      instantly.
                    </p>
                  </div>

                  {/* Challenge 3 */}
                  <div id="challenge-3" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenge 3: Lack of Explainability
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI often functions as a "black box," making decisions
                      without clear explanations. For high-stakes use cases like
                      healthcare, law, and finance, this lack of explainability
                      erodes trust.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      How PRISM Solves It
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM integrates explainability features that clarify how
                      AI systems reach decisions. By making AI outputs
                      transparent and interpretable, organizations can build
                      trust with regulators, investors, and end-users.
                    </p>
                  </div>

                  {/* Challenge 4 */}
                  <div id="challenge-4" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenge 4: Risk Management Across Multiple AI Systems
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      As organizations scale, managing risk across dozens of AI
                      models becomes overwhelming. Traditional tools like
                      spreadsheets or one-time audits can't keep up with the
                      dynamic nature of AI risks.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      How PRISM Solves It
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM provides continuous, centralized monitoring across
                      all AI systems. It benchmarks performance, highlights
                      anomalies, and ensures governance policies are
                      consistently applied, even as the AI portfolio grows.
                    </p>
                  </div>

                  {/* Challenge 5 */}
                  <div id="challenge-5" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenge 5: Audit Readiness and Investor Confidence
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Investors, partners, and vendors increasingly demand proof
                      of responsible AI governance. But creating detailed,
                      audit-ready reports manually takes enormous time and
                      resources.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      How PRISM Solves It
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With PRISM, organizations can instantly generate
                      audit-ready, standardized reports. These reports not only
                      satisfy compliance requirements but also boost investor
                      confidence by demonstrating proactive governance.
                    </p>
                  </div>

                  {/* Challenge 6 */}
                  <div id="challenge-6" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenge 6: Cost and Resource Constraints
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Governance often feels like a luxury for startups or
                      mid-sized companies. Hiring compliance teams and
                      consultants can be prohibitively expensive.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      How PRISM Solves It
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM makes governance cost-efficient by replacing manual
                      processes with automation. Startups and enterprises alike
                      can achieve compliance at a fraction of the cost of
                      traditional methods.
                    </p>
                  </div>

                  {/* Challenge 7 */}
                  <div id="challenge-7" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenge 7: Building Stakeholder Trust
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Ultimately, governance is about trust—from customers,
                      regulators, and society at large. Without strong
                      governance, AI adoption risks slowing down due to
                      skepticism and fear.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      How PRISM Solves It
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      PRISM provides transparent governance dashboards and
                      reports, enabling businesses to demonstrate
                      responsibility, build credibility, and earn stakeholder
                      trust.
                    </p>
                  </div>

                  {/* PRISM vs Traditional */}
                  <div id="prism-vs-traditional" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      PRISM vs Traditional Governance Approaches
                    </h2>
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-brand-lightest">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Challenge
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Traditional Approach
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              PRISM Solution
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              AI Bias
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Periodic manual checks
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Continuous bias detection & reporting
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Compliance
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Consultant-heavy audits
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Automated ISO, NIST, GDPR alignment
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Explainability
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Limited transparency
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Built-in explainability reports
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Risk Management
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Fragmented, manual
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Centralized, real-time monitoring
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Audit Readiness
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Weeks of prep work
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Instant audit-ready reports
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Costs
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              High compliance spend
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Cost-efficient automation
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Trust
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Minimal proof
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Transparent dashboards & reporting
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: Solving Governance Challenges with PRISM
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI governance is essential—but it doesn't have to be
                      overwhelming. From bias detection and regulatory
                      compliance to explainability and investor readiness, PRISM
                      streamlines every part of governance.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      By adopting PRISM, businesses not only meet compliance but
                      also gain a strategic advantage: they build AI systems
                      that are trustworthy, transparent, and future-ready.
                    </p>
                  </div>

                  {/* FAQs */}
                  <div id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      FAQs: AI Governance Challenges
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          1. What is the biggest challenge in AI governance?
                        </h3>
                        <p className="text-gray-700">
                          Bias and regulatory compliance are the most common
                          challenges, especially for high-risk AI systems.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. How does PRISM handle global regulations like ISO
                          42001 and GDPR?
                        </h3>
                        <p className="text-gray-700">
                          PRISM automates documentation and aligns with multiple
                          standards, saving organizations significant time and
                          effort.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. Is PRISM suitable for startups?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM is designed to help startups manage
                          compliance cost-effectively while building investor
                          trust.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Can PRISM improve AI explainability?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM offers explainability features that make AI
                          outputs transparent and interpretable.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. Why is PRISM better than traditional tools?
                        </h3>
                        <p className="text-gray-700">
                          Traditional governance is manual and reactive, while
                          PRISM is automated, proactive, and scalable.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Overcome AI Governance Challenges?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your organization solve bias,
                      compliance, and trust challenges with automation and
                      real-time monitoring.
                    </p>
                    <a
                      href="/prism"
                      className="inline-flex items-center bg-brand text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors"
                    >
                      Explore PRISM Solutions
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
