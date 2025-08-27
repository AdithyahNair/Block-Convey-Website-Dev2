"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight } from "lucide-react";

export default function TrustworthyAISystemsClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    {
      id: "what-is-trustworthy-ai",
      title: "What Does It Mean to Build Trustworthy AI?",
    },
    { id: "challenges", title: "Challenges in Building Trustworthy AI" },
    { id: "ai-risk-assessment", title: "AI Risk Assessment and Governance" },
    {
      id: "transparency-reports",
      title: "Transparency and Explainability Reports",
    },
    { id: "compliance-monitoring", title: "Continuous Compliance Monitoring" },
    { id: "benchmarking", title: "Benchmarking Against Industry Standards" },
    {
      id: "automated-reporting",
      title: "Automated Reporting for Stakeholders",
    },
    {
      id: "business-benefits",
      title: "Business Benefits of Building Trustworthy AI with PRISM",
    },
    {
      id: "industries",
      title: "Industries That Benefit from Trustworthy AI with PRISM",
    },
    {
      id: "why-prism",
      title: "Why PRISM is the Right Solution for Trustworthy AI",
    },
    { id: "faqs", title: "FAQs" },
    {
      id: "conclusion",
      title: "Conclusion: Trust as the Foundation of AI Success",
    },
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
            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/trustworthy-systems.png"
                alt="How PRISM Helps You Build Trustworthy AI Systems"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How PRISM Helps You Build Trustworthy AI Systems
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>August 2, 2025</span>
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
                      Artificial Intelligence (AI) is rapidly transforming
                      industries, but with this growth comes increased scrutiny.
                      Businesses, regulators, and customers all want assurance
                      that AI systems are fair, unbiased, and accountable. A
                      lack of trust can result in reputational damage, financial
                      loss, and even regulatory penalties.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This is where Block Convey's PRISM comes in. Designed as a
                      comprehensive AI governance and compliance solution, PRISM
                      enables organizations to design, deploy, and monitor AI
                      systems that people can trust.
                    </p>
                  </div>

                  {/* What Does It Mean to Build Trustworthy AI? */}
                  <div id="what-is-trustworthy-ai" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      What Does It Mean to Build Trustworthy AI?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Trustworthy AI goes beyond technical performance: it is
                      about ethics, transparency, and accountability. A truly
                      trustworthy AI system must:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Be Fair:</strong> Avoid discrimination and
                          bias in decision-making.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Be Transparent:</strong> Provide clarity on
                          how decisions are made.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Be Accountable:</strong> Have clear
                          responsibility for outcomes.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Be Safe and Reliable:</strong> Operate
                          consistently without harmful errors.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Be Compliant:</strong> Align with regulatory
                          and ethical standards.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Without these qualities, AI systems risk eroding
                      confidence among stakeholders, from investors to
                      end-users.
                    </p>
                  </div>

                  {/* Challenges in Building Trustworthy AI */}
                  <div id="challenges" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenges in Building Trustworthy AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Many organizations face hurdles in creating trustworthy AI
                      systems:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Bias in data leading to unfair outcomes.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Lack of explainability in complex models.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Fragmented regulations across industries and regions.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Difficulty in monitoring AI risks over time.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Resource-intensive compliance processes.</span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      These challenges make it clear that building trustworthy
                      AI requires more than good intentions: it requires
                      structured governance tools like PRISM.
                    </p>
                  </div>

                  {/* AI Risk Assessment and Governance */}
                  <div id="ai-risk-assessment" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      1. AI Risk Assessment and Governance
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM provides a structured framework for identifying and
                      mitigating AI risks, ranging from bias detection to model
                      transparency. It helps businesses align their AI systems
                      with global governance standards such as ISO 42001 and
                      NIST AI RMF.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This ensures AI systems are not only compliant but also
                      operate ethically and safely.
                    </p>
                  </div>

                  {/* Transparency and Explainability Reports */}
                  <div id="transparency-reports" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      2. Transparency and Explainability Reports
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      The "black box" effect is a major barrier to trust in AI.
                      PRISM addresses this by generating explainability reports
                      that clarify how AI systems make decisions.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This empowers businesses to demonstrate transparency and
                      accountability to regulators, investors, and customers.
                    </p>
                  </div>

                  {/* Continuous Compliance Monitoring */}
                  <div id="compliance-monitoring" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      3. Continuous Compliance Monitoring
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Compliance is an ongoing responsibility, not a one-time
                      activity. PRISM offers real-time monitoring to track AI
                      system performance against global compliance frameworks
                      like GDPR, EU AI Act, and HIPAA.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This ensures AI systems remain trustworthy even as laws
                      evolve and risks change.
                    </p>
                  </div>

                  {/* Benchmarking Against Industry Standards */}
                  <div id="benchmarking" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      4. Benchmarking Against Industry Standards
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      PRISM benchmarks AI systems against best practices and
                      global compliance standards. Businesses can measure how
                      their AI stacks up against competitors, identify gaps, and
                      improve accordingly.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This builds confidence with investors, vendors, and
                      regulators, showing that your AI is not just functional,
                      but trustworthy.
                    </p>
                  </div>

                  {/* Automated Reporting for Stakeholders */}
                  <div id="automated-reporting" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      5. Automated Reporting for Stakeholders
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Trustworthiness in AI is also about communication. PRISM
                      generates customized reports for investors, regulators,
                      and internal stakeholders. These reports demonstrate
                      fairness, compliance, and accountability in simple,
                      digestible formats.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With automated reporting, companies save time and provide
                      clear evidence of responsible AI use.
                    </p>
                  </div>

                  {/* Business Benefits */}
                  <div id="business-benefits" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Business Benefits of Building Trustworthy AI with PRISM
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Organizations that use PRISM to strengthen trust in their
                      AI gain multiple advantages:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Investor Confidence:</strong> Transparent and
                          ethical AI attracts funding.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Regulatory Readiness:</strong> Compliance
                          reduces risk of fines or penalties.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Customer Loyalty:</strong> Users trust AI that
                          is fair, safe, and explainable.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Competitive Edge:</strong> Trusted AI systems
                          stand out in regulated industries.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Risk Reduction:</strong> Early detection and
                          mitigation of AI risks prevent costly mistakes.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Industries */}
                  <div id="industries" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Industries That Benefit from Trustworthy AI with PRISM
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      While trustworthy AI is critical across all sectors, PRISM
                      is particularly impactful in:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Financial Services:</strong> Preventing bias
                          in lending, fraud detection, and trading AI.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Retail & E-commerce:</strong> Building trust
                          in recommendation engines and pricing algorithms.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Government & Public Sector:</strong> Deploying
                          ethical AI for public decision-making.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Technology Startups:</strong> Establishing
                          credibility early to secure funding and partnerships.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Why PRISM */}
                  <div id="why-prism" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Why PRISM is the Right Solution for Trustworthy AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Building trustworthy AI isn't just about technology: it's
                      about governance, compliance, and accountability. PRISM
                      was designed to simplify these challenges by combining:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Automated risk assessments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Compliance alignment with ISO 42001, NIST, GDPR, and
                          more
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Ongoing monitoring and reporting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Flexibility for different industries and regulations
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      By using PRISM, businesses can transform compliance from a
                      burden into a competitive advantage.
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
                          1. What makes AI trustworthy?
                        </h3>
                        <p className="text-gray-700">
                          AI is trustworthy when it is fair, transparent, safe,
                          reliable, and compliant with ethical and legal
                          standards.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. How does PRISM improve AI transparency?
                        </h3>
                        <p className="text-gray-700">
                          PRISM generates explainability reports that make AI
                          decision-making clear and easy to understand.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. Can PRISM help with global compliance?
                        </h3>
                        <p className="text-gray-700">
                          Yes, PRISM aligns with ISO 42001, NIST AI RMF, GDPR,
                          EU AI Act, HIPAA, and more.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. Why is trustworthy AI important for businesses?
                        </h3>
                        <p className="text-gray-700">
                          It builds investor confidence, customer trust, ensures
                          regulatory compliance, and reduces risks.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. Who should use PRISM?
                        </h3>
                        <p className="text-gray-700">
                          Any organization deploying AI: including startups,
                          enterprises, or government agencies: benefits from
                          PRISM's compliance and governance features.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: Trust as the Foundation of AI Success
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI's success hinges on public trust, and organizations
                      neglecting trustworthy AI risk losing market credibility,
                      customers, and regulatory approval.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Block Convey's PRISM enables businesses to design,
                      monitor, and scale AI systems that are fair, transparent,
                      compliant, and trustworthy. By adopting PRISM,
                      organizations not only meet compliance requirements but
                      also build a foundation for sustainable growth and
                      long-term success in the AI era.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Build Trustworthy AI?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your organization build
                      ethical, transparent, and compliant AI systems.
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
