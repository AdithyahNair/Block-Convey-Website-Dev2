"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIRiskManagementFrameworksClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    {
      id: "what-is-framework",
      title: "What is an AI Risk Management Framework?",
    },
    { id: "key-standards", title: "Key AI Risk Management Standards" },
    { id: "tools", title: "Tools for AI Risk Management" },
    {
      id: "prism-simplifies",
      title: "How PRISM Simplifies AI Risk Management",
    },
    { id: "benefits", title: "Benefits of AI Risk Management Frameworks" },
    {
      id: "implementation-strategy",
      title: "Strategy for Implementing AI Risk Management",
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
                src="/images/ai-risk-assessment-frameworks.png"
                alt="AI Risk Management Frameworks: Tools, Standards, and Strategy"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Risk Management Frameworks: Tools, Standards, and Strategy
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>September 28, 2025</span>
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
                      Artificial Intelligence is transforming industries; from
                      finance and healthcare to logistics and government.
                      However, with great power comes great responsibility. AI
                      systems can introduce risks such as bias, security
                      vulnerabilities, regulatory non-compliance, and lack of
                      transparency.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      To manage these risks effectively, organizations need
                      structured AI Risk Management Frameworks. These frameworks
                      provide guidelines, standards, and tools to identify,
                      measure, and mitigate risks. With solutions like PRISM by
                      Block Convey, businesses can operationalize risk
                      management and build AI systems that are both powerful and
                      trustworthy.
                    </p>
                  </div>

                  {/* What is an AI Risk Management Framework? */}
                  <div id="what-is-framework" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      What is an AI Risk Management Framework?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      An AI Risk Management Framework is a structured approach
                      that organizations use to:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Identify Risks:</strong> Detect bias, privacy
                          violations, security weaknesses, and ethical issues.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Evaluate Risks:</strong> Assess the potential
                          impact on users, stakeholders, and compliance
                          requirements.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Mitigate Risks:</strong> Implement safeguards,
                          explainability, and accountability mechanisms.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Monitor Continuously:</strong> Track AI models
                          throughout their lifecycle for emerging risks.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      In short, AI Risk Management is not just about compliance:
                      it's about creating AI systems that are safe, reliable,
                      and aligned with human values.
                    </p>
                  </div>

                  {/* Key AI Risk Management Standards */}
                  <div id="key-standards" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Key AI Risk Management Standards
                    </h2>

                    <div className="space-y-8">
                      {/* NIST AI RMF */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          1. NIST AI Risk Management Framework (AI RMF)
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The U.S. National Institute of Standards and
                          Technology (NIST) developed the AI RMF to help
                          organizations design, develop, and deploy trustworthy
                          AI.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>
                              Focus areas include governance, mapping risks,
                              measuring performance, and managing outcomes.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>
                              It emphasizes fairness, transparency,
                              accountability, and reliability.
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* ISO 42001 */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          2. ISO/IEC 42001: AI Management System Standard
                        </h3>
                        <p className="text-gray-700 mb-4">
                          The ISO 42001 standard (launched in 2023) provides a
                          structured way for organizations to implement AI
                          responsibly.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>
                              It sets requirements for governance, ethics, and
                              risk management.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>
                              ISO 42001 certification is becoming a competitive
                              advantage for startups and enterprises alike.
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* GDPR and EU AI Act */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          3. GDPR and EU AI Act
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>
                              GDPR includes the "Right to Explanation,"
                              requiring organizations to provide clarity on AI
                              decisions.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>
                              The EU AI Act introduces strict compliance
                              requirements for high-risk AI applications,
                              including risk assessments and documentation.
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Other Industry Standards */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          4. Other Industry-Specific Standards
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>
                              HIPAA (Healthcare AI) ensures data privacy and
                              patient safety.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>
                              Basel III & FinTech guidelines address AI risks in
                              banking and finance.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>
                              IEEE Standards provide best practices for ethical
                              AI system design.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tools for AI Risk Management */}
                  <div id="tools" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Tools for AI Risk Management
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI risk management requires more than policies: it
                      requires practical tools that make compliance actionable.
                      Common tools include:
                    </p>
                    <ul className="space-y-4 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Bias Detection Software:</strong> Identifies
                          unfair treatment of demographic groups.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Explainability Tools:</strong> Translates AI
                          decisions into human-understandable reasoning.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Monitoring Dashboards:</strong> Tracks AI
                          performance, drift, and anomalies.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Governance Platforms like PRISM:</strong>{" "}
                          Centralize compliance reporting, risk scoring, and
                          audit trails.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* How PRISM Simplifies AI Risk Management */}
                  <div id="prism-simplifies" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      How PRISM Simplifies AI Risk Management
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM is a governance and compliance platform designed to
                      embed AI risk management into business workflows. It
                      enables organizations to:
                    </p>
                    <div className="bg-brand-lightest p-6 rounded-xl mb-6">
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Generate Risk Assessment Reports:</strong>{" "}
                            PRISM provides AI risk scores and detailed
                            compliance reports.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Benchmark Against Standards:</strong> PRISM
                            aligns AI systems with ISO 42001, NIST, GDPR, and
                            the EU AI Act.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Enhance Transparency:</strong> Automated
                            explainability reports build trust with
                            stakeholders.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Mitigate Vendor & Investor Risks:</strong>{" "}
                            Specialized assessments for vendor readiness and
                            investor confidence.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Enable Continuous Monitoring:</strong> AI
                            risks are not static: PRISM ensures ongoing
                            compliance through monitoring dashboards.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Benefits of AI Risk Management Frameworks */}
                  <div id="benefits" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Benefits of AI Risk Management Frameworks
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Organizations that adopt strong risk management frameworks
                      gain:
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Regulatory Compliance
                        </h3>
                        <p className="text-gray-700">
                          Stay ahead of global AI regulations.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Trust and Transparency
                        </h3>
                        <p className="text-gray-700">
                          Build confidence with users and stakeholders.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Reduced Liability
                        </h3>
                        <p className="text-gray-700">
                          Lower risks of lawsuits, fines, and reputational
                          damage.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Operational Efficiency
                        </h3>
                        <p className="text-gray-700">
                          Detect and fix risks early, saving costs.
                        </p>
                      </div>
                      <div className="border-l-4 border-brand pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Investor & Market Advantage
                        </h3>
                        <p className="text-gray-700">
                          Show commitment to responsible innovation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Strategy for Implementing AI Risk Management */}
                  <div id="implementation-strategy" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Strategy for Implementing AI Risk Management
                    </h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          1. Establish Governance Structures
                        </h3>
                        <p className="text-gray-700">
                          Assign clear roles and responsibilities for AI
                          oversight. Risk management should be part of your
                          organization's AI governance board or compliance team.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          2. Map AI Risks Early
                        </h3>
                        <p className="text-gray-700">
                          Before deployment, map risks related to bias, privacy,
                          cybersecurity, and regulatory compliance. This
                          proactive step reduces reputational and financial
                          risks.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          3. Adopt a Framework (NIST, ISO 42001, EU AI Act)
                        </h3>
                        <p className="text-gray-700">
                          Choose the most relevant framework(s) for your
                          industry and geography. Compliance with recognized
                          standards builds credibility with regulators and
                          investors.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          4. Use Tools like PRISM for Automation
                        </h3>
                        <p className="text-gray-700">
                          Manual risk assessments are time-consuming. Platforms
                          like PRISM automate risk analysis, generate compliance
                          reports, and monitor changes in real time.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          5. Continuously Monitor and Update
                        </h3>
                        <p className="text-gray-700">
                          AI risks evolve with data and environments. Establish
                          ongoing monitoring and periodic audits to stay
                          compliant and trustworthy.
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
                          What is the purpose of AI risk management frameworks?
                        </h3>
                        <p className="text-gray-700">
                          They help organizations identify, assess, and mitigate
                          risks related to AI systems, ensuring trust,
                          compliance, and accountability.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Which AI risk management standards are most important?
                        </h3>
                        <p className="text-gray-700">
                          NIST AI RMF, ISO 42001, GDPR, and the EU AI Act are
                          key global standards.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          How does PRISM help with AI risk management?
                        </h3>
                        <p className="text-gray-700">
                          PRISM provides automated risk reports, benchmarking,
                          continuous monitoring, and compliance alignment with
                          major standards.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Is AI risk management mandatory?
                        </h3>
                        <p className="text-gray-700">
                          For high-risk AI applications, compliance is legally
                          required under regulations like the EU AI Act and
                          GDPR.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Who should use AI risk management frameworks?
                        </h3>
                        <p className="text-gray-700">
                          Startups, enterprises, investors, and vendors across
                          industries: especially finance, healthcare,
                          government, and technology.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: AI Risk Management as a Business Imperative
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI systems are no longer optional: they are strategic
                      assets. But without proper risk management, they can also
                      become liabilities. AI Risk Management Frameworks provide
                      the roadmap for responsible, transparent, and compliant AI
                      adoption.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With PRISM by Block Convey, organizations gain not just a
                      framework but a practical, automated solution to identify,
                      manage, and monitor AI risks continuously. Businesses that
                      integrate PRISM into their AI strategy ensure they remain
                      future-proof, trustworthy, and aligned with global
                      standards.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Implement AI Risk Management?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your organization build trust,
                      ensure compliance, and drive AI success with comprehensive
                      risk management.
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
