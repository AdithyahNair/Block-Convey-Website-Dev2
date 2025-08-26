"use client";
import React from "react";
import { MainLayout } from "../../components/layout/MainLayout";

export default function InvestorReadinessClient() {
  return (
    <MainLayout>
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex items-center bg-brand-lightest overflow-hidden pt-40 pb-20 px-4 lg:pr-0">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lightest to-transparent" />

          {/* Subtle gradient orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-light/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[600px] bg-brand/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto lg:pr-0">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <div className="text-left lg:pr-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
                  Investor Readiness: Accelerate Your Funding with Confidence
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8">
                  Show Investors You're Audit-Ready, Funding-Ready,
                  Future-Ready.
                </p>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-brand-light">
                  <p className="text-lg text-gray-600 mb-4">
                    Investors don't just fund ideas. They fund trust.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    With Block Convey's Investor Readiness reports, you show VCs
                    and angels that your AI models are transparent, compliant,
                    and where you would invest the money.
                  </p>
                  <a
                    href="https://demo.blockconvey.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brand text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl"
                  >
                    Get Your Investor Readiness Report
                  </a>
                </div>
              </div>

              {/* Right Column - Dashboard Image */}
              <div className="relative lg:ml-16">
                <div className="bg-white rounded-2xl shadow-2xl border border-brand-light overflow-hidden h-full">
                  <img
                    src="/images/investor-readiness-dashboard.png"
                    alt="Block Convey Investor Readiness Dashboard"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Investor Readiness Matters */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Why Investor Readiness Matters
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-left p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Funding Faster
                    </h3>
                    <p className="text-gray-600">
                      Cut due diligence time by up to 60% with pre-built
                      compliance and risk insights.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Data-Backed Confidence
                    </h3>
                    <p className="text-gray-600">
                      Demonstrate performance, fairness, and governance metrics
                      that investors demand.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Valuation Booster
                    </h3>
                    <p className="text-gray-600">
                      Highlight improvements between pre- and post-investment
                      model versions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Strategic Investment
                    </h3>
                    <p className="text-gray-600">
                      Where the investment will go and why that improvement is
                      needed for better sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside an Investor Readiness Report */}
        <section className="py-20 px-4 bg-brand-lightest">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              What's Inside an Investor Readiness Report
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Performance Benchmarks
                </h3>
                <p className="text-gray-600">
                  Clear ranges showing where your AI stands today (e.g., 'Model
                  Accuracy: 88% - Within Optimal Range').
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  ROI Scenarios
                </h3>
                <p className="text-gray-600">
                  Example: 'Improving accuracy by 1% could approve 5 more
                  customers in a 500-person dataset = more revenue potential.'
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Compliance Mapping
                </h3>
                <p className="text-gray-600">
                  Evidence your model aligns with AI regulations (NIST, ISO, EU
                  AI Act).
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Risk Indicators
                </h3>
                <p className="text-gray-600">
                  Identify overtraining, bias, and gaps investors should factor
                  into scaling plans.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Improvement Pathway
                </h3>
                <p className="text-gray-600">
                  Pre- and post-investment roadmap showcasing how new funding
                  translates into model performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              How It Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-brand">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Evaluate
                </h3>
                <p className="text-gray-600">
                  We run your model through Block Convey's AI governance engine.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-brand">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Score</h3>
                <p className="text-gray-600">
                  Generate risk, compliance, and performance scores investors
                  can trust.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-brand">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Report</h3>
                <p className="text-gray-600">
                  Deliver a PDF dashboard tailored for investors, easy to share
                  in boardrooms or pitch decks.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-brand">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Plan</h3>
                <p className="text-gray-600">
                  Outline the 'use of funds' tied directly to AI risk &
                  performance improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Investors Love It */}
        <section className="py-20 px-4 bg-brand-lightest">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Why Investors Love It
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-emerald-500 text-2xl mr-3">✓</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Pre-Investment
                  </h3>
                </div>
                <p className="text-gray-600">
                  Spot weak areas early and justify why funding is needed.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-emerald-500 text-2xl mr-3">✓</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Post-Investment
                  </h3>
                </div>
                <p className="text-gray-600">
                  Show measurable improvements in fairness, performance, and
                  readiness.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-emerald-500 text-2xl mr-3">✓</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Comparative Edge
                  </h3>
                </div>
                <p className="text-gray-600">
                  Stand out from competitors by proving AI is responsibly
                  managed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Scenario */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Case Study Scenario
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fintech KYC Model
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Pre-Investment
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Model accuracy = 88% (optimal but improvable).
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Investor Insight
                  </h4>
                  <p className="text-gray-600">
                    Each 1% accuracy gain could approve 5 more customers per 500
                    applications, unlocking more revenue.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Post-Investment
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Accuracy improved to 91% with bias reduced by 12%.
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Outcome
                  </h4>
                  <p className="text-gray-600">
                    Faster approvals, higher compliance score, and investor
                    confidence in scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="border-t border-b border-gray-700 py-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Accelerate Your Funding?
              </h2>
              <a
                href="/contact"
                className="inline-block bg-brand text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-brand-dark transition-colors"
              >
                Contact US
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
