"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PreventingBiasRecruitmentAIClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  const tableOfContents = [
    { id: "introduction", title: "Preventing Bias in Recruitment AI" },
    { id: "why-bias-happens", title: "Why Bias Happens in Recruitment AI" },
    { id: "risks", title: "The Risks of Biased Recruitment AI" },
    {
      id: "how-prism-prevents",
      title: "How PRISM Prevents Bias in Recruitment AI",
    },
    { id: "benefits", title: "Benefits of Using PRISM for Recruitment AI" },
    {
      id: "prism-vs-traditional",
      title: "PRISM vs Traditional Recruitment AI Auditing",
    },
    {
      id: "use-cases",
      title: "Use Cases: Where PRISM Helps Recruitment Teams",
    },
    { id: "conclusion", title: "Conclusion" },
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

  useEffect(() => {
    const observerOptions = { rootMargin: "-20% 0px -80% 0px", threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    tableOfContents.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <section className="pt-40 pb-16 px-4 bg-brand-lightest">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link
                href="/blogs"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-brand transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to all articles
              </Link>
            </div>

            <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/preventing-bias-recruitment-ai.png"
                alt="Preventing Bias in Recruitment AI"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Preventing Bias in Recruitment AI: A Guide Using PRISM
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>October 3, 2025</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
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

              <div className="lg:w-3/4">
                <div className="max-w-4xl">
                  <div id="introduction" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Preventing Bias in Recruitment AI: A Guide Using PRISM
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Artificial intelligence is revolutionizing
                      recruitment—automating resume screening, improving
                      candidate matching, and streamlining hiring decisions. But
                      alongside these benefits comes a significant risk: bias in
                      recruitment AI.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      If unchecked, AI-powered hiring tools can unintentionally
                      reinforce existing discrimination, unfairly rejecting
                      candidates based on gender, ethnicity, age, or background.
                      Regulators, job seekers, and advocacy groups are
                      increasingly calling for fair and transparent AI hiring
                      systems.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      That's where PRISM by Block Convey plays a critical role.
                      PRISM helps organizations identify, prevent, and manage
                      bias in recruitment AI, ensuring compliance with
                      regulations and building trust with candidates.
                    </p>
                  </div>

                  <div id="why-bias-happens" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Why Bias Happens in Recruitment AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI models learn from data. If the training data reflects
                      historical biases, the model may carry those biases
                      forward into hiring decisions.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Some common causes include:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Historical data bias</strong> → If past hiring
                          favored certain demographics, AI replicates those
                          patterns.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Feature selection bias</strong> → Variables
                          like education, location, or language can act as
                          proxies for race or gender.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Imbalanced datasets</strong> →
                          Overrepresentation of certain groups leads to skewed
                          results.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Opaque algorithms</strong> → Lack of
                          transparency makes it difficult to identify and
                          correct bias.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div id="risks" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Risks of Biased Recruitment AI
                    </h2>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                      1. Legal and Regulatory Risks
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Discrimination in hiring violates employment laws and
                      emerging AI regulations (like EU AI Act and local labor
                      laws).
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      2. Reputational Damage
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      News of biased AI hiring systems spreads quickly, damaging
                      employer branding and candidate trust.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      3. Loss of Diverse Talent
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Bias can filter out highly qualified candidates, reducing
                      workplace diversity and innovation.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      4. Employee Morale and Retention
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If employees perceive hiring as unfair, it negatively
                      impacts culture and retention.
                    </p>
                  </div>

                  <div id="how-prism-prevents" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      How PRISM Prevents Bias in Recruitment AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM provides a structured governance and auditing
                      framework for recruitment AI.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                      1. Automated Bias Detection
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM continuously scans hiring algorithms for
                      discriminatory patterns in candidate selection and
                      ranking, flagging potential issues early.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      2. Fairness Metrics and Benchmarking
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      It measures demographic parity, equal opportunity, and
                      outcome fairness, comparing recruitment AI performance
                      against industry benchmarks.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      3. Explainability Tools
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM makes recruitment AI decisions transparent and
                      explainable. Employers can understand and justify why
                      certain candidates were shortlisted or rejected.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      4. Compliance with Employment Regulations
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM aligns AI hiring tools with labor laws, ISO 42001,
                      GDPR, and the EU AI Act, ensuring compliance with evolving
                      standards.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      5. Continuous Monitoring and Reporting
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Instead of one-time checks, PRISM enables ongoing
                      auditing, with audit-ready reports that can be shared with
                      regulators, HR leaders, and diversity officers.
                    </p>
                  </div>

                  <div id="benefits" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Benefits of Using PRISM for Recruitment AI
                    </h2>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Fairer hiring outcomes through proactive bias
                          detection
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Legal protection by aligning with global AI and
                          employment laws
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Improved candidate trust via transparent, explainable
                          hiring processes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Enhanced diversity and inclusion in talent acquisition
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Stronger employer branding with commitment to
                          responsible AI
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div id="prism-vs-traditional" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      PRISM vs Traditional Recruitment AI Auditing
                    </h2>
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-brand-lightest">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Feature
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              Traditional Recruitment Auditing
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                              PRISM Recruitment Auditing
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Bias Detection
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Manual, periodic reviews
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Automated, real-time
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
                              Built-in transparency
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Compliance
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Fragmented, consultant-driven
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Automated, regulation-ready
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Monitoring
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              One-off audits
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Continuous auditing
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Diversity Impact
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Hard to measure
                            </td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                              Benchmarked with fairness metrics
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="use-cases" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Use Cases: Where PRISM Helps Recruitment Teams
                    </h2>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Resume Screening AI</strong> → Detect and
                          correct bias in automated candidate filtering.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Interview Scheduling Bots</strong> → Ensure
                          fairness in candidate engagement.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Candidate Ranking Algorithms</strong> →
                          Promote equal opportunity in shortlisting.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Predictive Hiring Tools</strong> → Monitor
                          bias in long-term performance predictions.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Global Recruitment Systems</strong> → Stay
                          compliant with varying local and international hiring
                          regulations.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: Building Fair and Transparent Hiring with
                      PRISM
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI can make recruitment faster and smarter—but without
                      governance, it can also amplify hidden biases. For
                      organizations committed to fairness, compliance, and
                      transparency, addressing recruitment AI bias is
                      non-negotiable.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With PRISM by Block Convey, companies gain the tools to
                      detect and prevent bias, generate audit-ready compliance
                      reports, and foster diverse, inclusive workplaces. By
                      making recruitment AI fair, explainable, and auditable,
                      PRISM helps HR leaders build trustworthy hiring processes
                      that attract top talent and safeguard employer reputation.
                    </p>
                  </div>

                  <div id="faqs" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      FAQs: Preventing Bias in Recruitment AI with PRISM
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          1. What causes bias in recruitment AI?
                        </h3>
                        <p className="text-gray-700">
                          Bias often comes from historical data, imbalanced
                          datasets, or opaque algorithms.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. How does PRISM detect bias in AI hiring tools?
                        </h3>
                        <p className="text-gray-700">
                          PRISM uses automated bias detection and fairness
                          metrics to identify discriminatory patterns in
                          recruitment decisions.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. Does PRISM ensure compliance with hiring
                          regulations?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM aligns recruitment AI systems with
                          employment laws, ISO 42001, GDPR, and the EU AI Act.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Can PRISM improve diversity in hiring?
                        </h3>
                        <p className="text-gray-700">
                          Absolutely. By removing bias, PRISM ensures more
                          equitable candidate selection, leading to stronger
                          workplace diversity.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. Is PRISM suitable for global recruitment
                          operations?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM supports compliance across multiple
                          geographies, making it ideal for multinational
                          companies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Build Fair Recruitment AI?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your organization prevent
                      bias, ensure compliance, and build trustworthy hiring
                      processes.
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
