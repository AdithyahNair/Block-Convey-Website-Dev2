"use client";
import React, { useState, useEffect } from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResponsibleAIExplainabilityClient() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Table of contents data
  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-explainability", title: "What is Explainability in AI?" },
    {
      id: "link-to-responsible-ai",
      title: "The Link Between Explainability and Responsible AI",
    },
    { id: "benefits", title: "Benefits of Explainability in Responsible AI" },
    { id: "industries", title: "Industries Where Explainability is Critical" },
    { id: "challenges", title: "Challenges of Explainability in AI" },
    {
      id: "prism-enhances",
      title: "How PRISM Enhances Explainability in Responsible AI",
    },
    { id: "future", title: "The Future of Explainability in AI" },
    { id: "faqs", title: "FAQs" },
    {
      id: "conclusion",
      title: "Conclusion: Explainability as the Heart of Responsible AI",
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
                src="/images/role-explainability.png"
                alt="The Role of Explainability in Responsible AI"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Role of Explainability in Responsible AI
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>By Block Convey</span>
              <span className="mx-2">•</span>
              <span>August 25, 2025</span>
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
                      Artificial Intelligence (AI) has become central to
                      decision-making in finance, healthcare, hiring, and more.
                      However, as AI systems grow more complex, they often
                      operate as "black boxes": delivering results without clear
                      reasoning.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This lack of transparency raises concerns about bias,
                      accountability, and trust. Responsible AI requires more
                      than accuracy: it requires explainability. By making AI
                      decisions understandable, organizations can build trust
                      with users, regulators, and stakeholders.
                    </p>
                  </div>

                  {/* What is Explainability in AI? */}
                  <div id="what-is-explainability" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      What is Explainability in AI?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Explainability in AI is the ability to understand and
                      interpret how an AI model arrives at its outputs,
                      providing clarity on why an algorithm made a certain
                      prediction, classification, or recommendation.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Examples include:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          In finance, it reveals why a loan application was
                          approved or rejected.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          In healthcare, it clarifies how an AI model diagnosed
                          a medical condition.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          In recruitment, it shows why a candidate was
                          shortlisted or excluded.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Without it, AI risks becoming opaque, leading to mistrust
                      and regulatory challenges.
                    </p>
                  </div>

                  {/* The Link Between Explainability and Responsible AI */}
                  <div id="link-to-responsible-ai" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Link Between Explainability and Responsible AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Responsible AI is built on fairness, transparency,
                      accountability, and compliance. Explainability supports
                      these principles by:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Promoting Transparency:</strong> Users and
                          regulators can see how AI works.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Ensuring Fairness:</strong> Hidden biases can
                          be detected and corrected.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Strengthening Accountability:</strong>{" "}
                          Decisions can be traced back to processes and data.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Supporting Compliance:</strong> It aligns with
                          regulations like GDPR (Right to Explanation) and the
                          EU AI Act.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Explainability is not optional: it is a core requirement
                      for ethical and responsible AI.
                    </p>
                  </div>

                  {/* Benefits of Explainability */}
                  <div id="benefits" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Benefits of Explainability in Responsible AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Organizations that prioritize explainability gain multiple
                      advantages:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Regulatory Readiness:</strong> Stay compliant
                          with global AI governance standards.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Customer Trust:</strong> Users are more likely
                          to adopt AI when they understand it.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Reduced Risk:</strong> Transparency helps
                          detect flaws before they cause harm.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Investor Confidence:</strong> Explainability
                          shows responsible innovation.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Ethical Advantage:</strong> Businesses stand
                          out as leaders in responsible AI deployment.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Industries Where Explainability is Critical */}
                  <div id="industries" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Industries Where Explainability is Critical
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      While explainability is valuable everywhere, it is
                      mission-critical in industries where decisions impact
                      lives and livelihoods:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Healthcare:</strong> Explaining AI-driven
                          diagnoses and treatments.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Finance:</strong> Justifying credit scoring,
                          lending, and fraud detection.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Recruitment & HR:</strong> Ensuring fair
                          candidate evaluation.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Government:</strong> Promoting transparency in
                          public-sector AI use.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Retail & E-commerce:</strong> Building trust
                          in recommendations and pricing algorithms.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Challenges of Explainability */}
                  <div id="challenges" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Challenges of Explainability in AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Despite its importance, explainability faces several
                      challenges:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Complex Models:</strong> Deep learning models
                          often function as black boxes.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Trade-Off with Accuracy:</strong> Simpler
                          models are more explainable but may reduce
                          performance.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>Lack of Standards:</strong> Different
                          industries demand different levels of explanation.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          <strong>User Understanding:</strong> Technical
                          explanations may not be accessible to non-experts.
                        </span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      These challenges highlight the need for specialized AI
                      governance tools like PRISM.
                    </p>
                  </div>

                  {/* How PRISM Enhances Explainability */}
                  <div id="prism-enhances" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      How PRISM Enhances Explainability in Responsible AI
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          1. Model Transparency Reports
                        </h3>
                        <p className="text-gray-700">
                          PRISM generates explainability reports that break down
                          how AI models make decisions. These reports are
                          tailored for regulators, investors, and business
                          users, ensuring clarity at every level.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          2. Bias and Fairness Detection
                        </h3>
                        <p className="text-gray-700">
                          By providing transparency, PRISM helps identify
                          unintended bias in AI models. Businesses can
                          understand why a certain group is impacted differently
                          and take corrective measures to ensure fairness.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          3. Regulatory Compliance Support
                        </h3>
                        <p className="text-gray-700">
                          Explainability is a legal requirement in many
                          jurisdictions. PRISM ensures compliance with GDPR, ISO
                          42001, NIST AI RMF, and the EU AI Act by embedding
                          explainability into its governance framework.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          4. Stakeholder Confidence
                        </h3>
                        <p className="text-gray-700">
                          With PRISM's explainability features, organizations
                          can demonstrate accountability to stakeholders. This
                          builds confidence among customers, regulators, and
                          investors that AI systems are ethical and trustworthy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* The Future of Explainability */}
                  <div id="future" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      The Future of Explainability in AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      As AI continues to evolve, explainability will become a
                      standard requirement. Governments worldwide are
                      introducing stricter compliance rules, and businesses that
                      lack explainability risk falling behind.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      By using tools like PRISM, organizations can stay ahead of
                      these changes, ensuring their AI systems are not only
                      powerful but also responsible and trustworthy.
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
                          1. Why is explainability important in AI?
                        </h3>
                        <p className="text-gray-700">
                          It ensures transparency, fairness, and accountability:
                          key pillars of responsible AI.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          2. Does explainability affect AI accuracy?
                        </h3>
                        <p className="text-gray-700">
                          In some cases, simpler, explainable models may trade
                          accuracy for clarity. PRISM helps balance both.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          3. Is explainability a legal requirement?
                        </h3>
                        <p className="text-gray-700">
                          Yes. Regulations like GDPR and the EU AI Act mandate
                          explainability for high-risk AI systems.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          4. How does PRISM improve explainability?
                        </h3>
                        <p className="text-gray-700">
                          PRISM generates transparency reports, detects bias,
                          and ensures regulatory compliance.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          5. Which industries need explainability the most?
                        </h3>
                        <p className="text-gray-700">
                          Healthcare, finance, recruitment, government, and
                          retail are most affected by explainability
                          requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Conclusion: Explainability as the Heart of Responsible AI
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      AI can only transform industries if it is trusted.
                      Explainability bridges the gap between technical
                      performance and human accountability, making AI systems
                      transparent, ethical, and compliant.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With PRISM by Block Convey, organizations gain the ability
                      to explain, monitor, and govern AI systems responsibly. By
                      prioritizing explainability, businesses not only reduce
                      risks but also unlock the full potential of AI in a way
                      that earns trust and drives sustainable success.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-brand-lightest p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Enhance AI Explainability?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how PRISM can help your organization build
                      transparent, accountable, and trustworthy AI systems.
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
