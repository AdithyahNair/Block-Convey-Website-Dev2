"use client";
import React from "react";
import { MainLayout } from "../../components/layout/MainLayout";

export default function VendorReadinessClient() {
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
                  Vendor Readiness: Win More Deals, Faster
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8">
                  Turn Risk Assessments into Revenue Opportunities.
                </p>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-brand-light">
                  <p className="text-lg text-gray-600 mb-4">
                    Your customers don't just buy products. They buy confidence.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    With Block Convey's Vendor Readiness reports, you give
                    procurement teams the evidence they need to say{" "}
                    <strong>YES</strong>, faster, smoother, and with less
                    friction.
                  </p>
                  <a
                    href="https://demo.blockconvey.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brand text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl"
                  >
                    Get Your Vendor Readiness Report
                  </a>
                </div>
              </div>

              {/* Right Column - Dashboard Image */}
              <div className="relative lg:ml-16">
                <div className="bg-white rounded-2xl shadow-2xl border border-brand-light overflow-hidden h-full">
                  <img
                    src="/images/investor-readiness-dashboard.png"
                    alt="Block Convey Vendor Readiness Dashboard"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Vendor Readiness Matters */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Why Vendor Readiness Matters
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
                      Shorten Sales Cycles
                    </h3>
                    <p className="text-gray-600">
                      Procurement teams waste months on due diligence — come
                      prepared.
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
                      Pre-Approved Confidence
                    </h3>
                    <p className="text-gray-600">
                      Show you meet compliance and risk standards before they
                      ask.
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
                      Differentiate Instantly
                    </h3>
                    <p className="text-gray-600">
                      Stand out against competitors who can't prove governance
                      maturity.
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
                      Strategic Advantage
                    </h3>
                    <p className="text-gray-600">
                      Tell why a newer model is necessary and prove its value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside a Vendor Readiness Report */}
        <section className="py-20 px-4 bg-brand-lightest">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              What's Inside a Vendor Readiness Report
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Procurement-Ready Compliance Mapping
                </h3>
                <p className="text-gray-600">
                  NIST AI RMF, ISO, and financial risk guidelines baked in.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Risk Transparency Dashboard
                </h3>
                <p className="text-gray-600">
                  Bias, drift, and overtraining scores shown simply.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Performance Metrics
                </h3>
                <p className="text-gray-600">
                  Contextualized for enterprise buyers (e.g., 'Model Accuracy
                  88%: optimal for KYC onboarding at scale').
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Operational Controls
                </h3>
                <p className="text-gray-600">
                  Evidence of tenant isolation, access control, and
                  auditability.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Readiness Badge
                </h3>
                <p className="text-gray-600">
                  Certification-style summary vendors can attach to decks, RFP
                  responses, and bids.
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
                  Run Evaluation
                </h3>
                <p className="text-gray-600">
                  Block Convey runs AI risk & compliance checks on your model.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-brand">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Vendor Dashboard
                </h3>
                <p className="text-gray-600">
                  Tailored reporting format procurement officers understand.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-brand">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Attach & Share
                </h3>
                <p className="text-gray-600">
                  Embed readiness reports in RFPs, sales decks, or enterprise
                  onboarding.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-brand">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Win Deals
                </h3>
                <p className="text-gray-600">
                  Close faster by removing compliance objections upfront.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Vendors Love It */}
        <section className="py-20 px-4 bg-brand-lightest">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Why Vendors Love It
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-emerald-500 text-2xl mr-3">✓</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Enterprise-Grade Trust
                  </h3>
                </div>
                <p className="text-gray-600">
                  Give banks and fintechs assurance you meet governance
                  standards.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-emerald-500 text-2xl mr-3">✓</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    RFP Differentiation
                  </h3>
                </div>
                <p className="text-gray-600">
                  Outpace competitors by proving you're 'ready on day one.'
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-brand-light hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-emerald-500 text-2xl mr-3">✓</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Faster Procurement
                  </h3>
                </div>
                <p className="text-gray-600">
                  Reduce sales cycles from 6+ months to weeks.
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
                Fraud Detection Vendor Pitch
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Challenge
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Vendor pitching to a Tier 1 bank faced 6+ months of
                    compliance reviews.
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    With Vendor Readiness
                  </h4>
                  <p className="text-gray-600">
                    Presented Block Convey's Vendor Report with compliance
                    mapping + bias evaluation.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Result
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Procurement cut due diligence by 40%. Vendor won deal in 3
                    months instead of 7.
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Impact
                  </h4>
                  <p className="text-gray-600">
                    Faster revenue recognition and reduced sales cycle costs.
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
                Ready to Win More Clients?
              </h2>
              <a
                href="/contact"
                className="inline-block bg-brand text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-brand-dark transition-colors"
              >
                Book Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
