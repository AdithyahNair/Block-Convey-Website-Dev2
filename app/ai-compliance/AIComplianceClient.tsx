"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Eye,
  Lock,
  FileText,
  Target,
  AlertTriangle,
  Scale,
  Gavel,
  Building2,
  Heart,
  ShoppingCart,
  Landmark,
} from "lucide-react";
import { MainLayout } from "../../components/layout/MainLayout";

export default function AIComplianceClient() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-brand-lightest overflow-x-hidden w-full max-w-[100vw]">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-96 -left-96 w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-brand-light/20 to-brand/10 blur-3xl"
            style={{ transform: "translate3d(0, 0, 0)" }}
          />
          <div
            className="absolute -bottom-96 -right-96 w-[50rem] h-[50rem] rounded-full bg-gradient-to-tr from-brand-light/20 to-brand/10 blur-3xl"
            style={{ transform: "translate3d(0, 0, 0)" }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left pt-4 sm:pt-6 lg:pt-8"
              >
                <div className="relative mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10"
                  >
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                      <div className="text-gray-900">AI Compliance:</div>
                      <div className="text-brand break-words">
                        Ensuring Trust, Transparency & Legal Alignment
                      </div>
                    </h1>
                  </motion.div>
                </div>

                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-6 sm:mb-8">
                  with Block Convey's PRISM
                </h2>

                <div className="space-y-4 sm:space-y-6 max-w-2xl">
                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                    Artificial Intelligence is no longer experimental: it's
                    embedded in how we diagnose diseases, approve loans, assess
                    risks, and engage with digital content. But with great power
                    comes greater scrutiny.
                  </p>

                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                    As AI's influence grows, so do questions from regulators,
                    investors, and end-users: Is your AI fair? Is it
                    explainable? Is it safe and legal?
                  </p>

                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                    Welcome to the era of AI compliance: where governance, risk
                    assessment, and regulatory alignment aren't optional:
                    they're essential. Block Convey is leading this revolution
                    with PRISM, our flagship platform that empowers companies to
                    build, audit, and govern AI systems with full transparency
                    and confidence.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Key Questions */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full relative max-w-full"
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Critical Questions for AI Systems
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">Is your AI fair?</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Eye className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">Is it explainable?</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">
                        Is it safe and legal?
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is AI Compliance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is AI Compliance?
              </h2>
              <p className="text-lg text-gray-800 max-w-4xl mx-auto">
                AI Compliance refers to the set of practices, tools, and
                processes used to ensure AI systems meet ethical standards,
                legal frameworks, and internal governance policies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-800 mb-6">
                  Whether you're a startup launching your first machine learning
                  model or an enterprise deploying at scale, compliance ensures
                  your AI:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">Doesn't discriminate.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Is explainable and auditable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Aligns with GDPR, HIPAA, the EU AI Act, and other
                      regulations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Maintains user privacy and consent.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Has human oversight and accountability.
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-lightest p-8 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  PRISM Solution
                </h3>
                <p className="text-gray-800 mb-6">
                  With PRISM by Block Convey, AI compliance becomes systematic:
                  not a patchwork of spreadsheets and after-the-fact reviews,
                  but a seamless, scalable process.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">
                    Key Benefits:
                  </p>
                  <ul className="text-sm text-gray-800 mt-2 space-y-1">
                    <li>• Automated compliance monitoring</li>
                    <li>• Real-time risk assessment</li>
                    <li>• Audit-ready reporting</li>
                    <li>• Regulatory framework mapping</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Growing Importance of AI Compliance */}
        <section className="py-16 bg-brand-lightest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Growing Importance of AI Compliance
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Gavel className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  1. Global Regulations Are Tightening
                </h3>
                <p className="text-gray-800 mb-4">
                  Governments worldwide are enforcing stronger AI policies:
                </p>
                <ul className="text-gray-800 text-sm space-y-2">
                  <li>
                    • EU AI Act classifies AI systems by risk levels and imposes
                    strict documentation and audit rules.
                  </li>
                  <li>
                    • OECD AI Principles emphasize human-centered values,
                    transparency, and accountability.
                  </li>
                  <li>
                    • U.S. AI Bill of Rights outlines protections from
                    algorithmic discrimination and unexplainable decisions.
                  </li>
                </ul>
                <p className="text-gray-800 mt-4">
                  Non-compliance isn't just a PR risk: it's a legal and
                  financial one. PRISM keeps your models within the legal lines
                  from day one.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  2. Consumer Trust Is Fragile
                </h3>
                <p className="text-gray-800 mb-4">
                  Users are more aware than ever. One scandal: like algorithmic
                  bias or misuse of personal data: can tank your brand's
                  reputation.
                </p>
                <p className="text-gray-800">
                  PRISM helps earn trust by embedding explainability and
                  fairness into every layer of your AI pipeline.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  3. Investors and Boards Expect Ethical Governance
                </h3>
                <p className="text-gray-800 mb-4">
                  Stakeholders want to know your AI practices won't lead to
                  litigation or media fallout.
                </p>
                <p className="text-gray-800">
                  PRISM provides compliance reports, model lineage, and risk
                  scores tailored for board-level visibility.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pillars of AI Compliance */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Pillars of AI Compliance (Enabled by PRISM)
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  1. Fairness & Bias Mitigation
                </h3>
                <p className="text-gray-800 text-sm">
                  PRISM scans datasets and models to identify potential
                  discrimination or bias. It offers pre-deployment fairness
                  testing and recommends interventions: ensuring equity is baked
                  into the model, not bolted on.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  2. Explainability
                </h3>
                <p className="text-gray-800 text-sm">
                  Many AI models are "black boxes." PRISM opens them up. With
                  built-in interpretability tools, it shows why a decision was
                  made: especially critical for finance, healthcare, and legal
                  sectors.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  3. Auditability
                </h3>
                <p className="text-gray-800 text-sm">
                  Every change, input, or decision is logged and traceable.
                  PRISM's audit trail ensures you can backtrack and justify
                  every output, reducing regulatory exposure.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  4. Human Oversight
                </h3>
                <p className="text-gray-800 text-sm">
                  AI should never operate unchecked. PRISM enables role-based
                  access control, model approval workflows, and
                  human-in-the-loop review cycles.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  5. Data Governance & Privacy
                </h3>
                <p className="text-gray-800 text-sm">
                  Whether you're managing sensitive health records or behavioral
                  data, PRISM applies privacy-by-design protocols and supports
                  compliance with GDPR, HIPAA, and CCPA.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How PRISM Delivers AI Compliance */}
        <section className="py-16 bg-brand-lightest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How PRISM Delivers AI Compliance at Scale
              </h2>
              <p className="text-lg text-gray-800 max-w-4xl mx-auto">
                PRISM is not a monitoring tool: it's your AI compliance
                operating system.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="bg-brand/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Risk Scoring Engine
                </h3>
                <p className="text-gray-800 text-sm">
                  Instantly assess model risk level (low, medium, high) based on
                  use case, impact, and data sensitivity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="bg-brand/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Compliance Dashboards
                </h3>
                <p className="text-gray-800 text-sm">
                  Centralize and monitor compliance status across your entire AI
                  portfolio.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="bg-brand/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Policy Rule Builder
                </h3>
                <p className="text-gray-800 text-sm">
                  Define and enforce custom AI governance policies with
                  point-and-click templates.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="bg-brand/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Real-Time Alerts
                </h3>
                <p className="text-gray-800 text-sm">
                  Get notified when models drift from original parameters or
                  fail compliance checks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="bg-brand/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Lifecycle Traceability
                </h3>
                <p className="text-gray-800 text-sm">
                  Capture metadata, decisions, and ownership from development to
                  production.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who Needs AI Compliance */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who Needs AI Compliance (And Why)
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20 text-center"
              >
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Landmark className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Finance
                </h3>
                <p className="text-gray-800 text-sm">
                  Ensure your underwriting models avoid discriminatory outcomes
                  and meet FCRA & fair lending laws.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20 text-center"
              >
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Healthcare
                </h3>
                <p className="text-gray-800 text-sm">
                  Validate AI-driven diagnostics align with clinical standards
                  and patient consent.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20 text-center"
              >
                <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Retail</h3>
                <p className="text-gray-800 text-sm">
                  Keep pricing engines and recommendation algorithms fair,
                  explainable, and privacy-respecting.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20 text-center"
              >
                <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Public Sector
                </h3>
                <p className="text-gray-800 text-sm">
                  Deploy citizen-facing AI (e.g., facial recognition or social
                  scoring) with full transparency and auditability.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real-World Challenges Section */}
        <section className="py-16 bg-brand-lightest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real-World AI Compliance Challenges Solved by PRISM
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Problem: AI loan model rejects minority applicants at higher
                  rates.
                </h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-red-800 text-sm font-medium">Challenge</p>
                  <p className="text-red-700 text-sm">
                    Algorithmic bias in lending decisions leading to
                    discriminatory outcomes.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 text-sm font-medium">
                    PRISM Solution
                  </p>
                  <p className="text-green-700 text-sm">
                    Identifies bias, adjusts weights, and produces a fairness
                    audit report.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Problem: No record of who approved a model's deployment.
                </h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-red-800 text-sm font-medium">Challenge</p>
                  <p className="text-red-700 text-sm">
                    Lack of accountability and audit trail for model approvals.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 text-sm font-medium">
                    PRISM Solution
                  </p>
                  <p className="text-green-700 text-sm">
                    Role-based workflows and automated documentation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Problem: Can't explain why a healthcare model flagged a
                  patient as high-risk.
                </h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-red-800 text-sm font-medium">Challenge</p>
                  <p className="text-red-700 text-sm">
                    Black-box AI decisions without explainability for critical
                    healthcare decisions.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 text-sm font-medium">
                    PRISM Solution
                  </p>
                  <p className="text-green-700 text-sm">
                    Visual explanation tools show contributing factors in
                    seconds.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Problem: Global operations need to meet different legal
                  requirements.
                </h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-red-800 text-sm font-medium">Challenge</p>
                  <p className="text-red-700 text-sm">
                    Complex regulatory landscape across multiple jurisdictions.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 text-sm font-medium">
                    PRISM Solution
                  </p>
                  <p className="text-green-700 text-sm">
                    Configurable templates for regional laws and multilingual
                    compliance settings.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Best Practices for Achieving AI Compliance
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Start Early
                </h3>
                <p className="text-gray-800 text-sm">
                  Bake compliance into the model development process.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Automate Governance
                </h3>
                <p className="text-gray-800 text-sm">
                  Use PRISM to replace spreadsheets with smart dashboards and
                  triggers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Update Regularly
                </h3>
                <p className="text-gray-800 text-sm">
                  AI evolves, so your compliance workflows should too.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Train Your Teams
                </h3>
                <p className="text-gray-800 text-sm">
                  PRISM includes educational modules for developers, risk
                  officers, and executives.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Prove It
                </h3>
                <p className="text-gray-800 text-sm">
                  Keep audit logs, risk assessments, and approval records ready
                  for any review.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Block Convey Section */}
        <section className="py-16 bg-brand-lightest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Block Convey & PRISM Are the Right Partners
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-800 mb-6">
                  At Block Convey, we're not just building tools: we're shaping
                  how AI governance should look in a transparent future. PRISM
                  is the product of years of AI, compliance, and regulatory
                  research: turned into a practical platform any organization
                  can use.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Backed by compliance experts and data scientists
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Built to support both technical teams and policy
                      stakeholders
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Designed to grow with your AI operations
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Your Compliance Journey Partner
                </h3>
                <p className="text-gray-800 mb-6">
                  You're not alone on your compliance journey. With PRISM, you
                  get a partner that evolves with regulations, industry trends,
                  and your business goals.
                </p>
                <div className="bg-brand-lightest p-4 rounded-lg border border-brand-light/20">
                  <p className="text-gray-800 font-medium mb-2">
                    Key Advantages:
                  </p>
                  <ul className="text-sm text-gray-800 space-y-1">
                    <li>• Regulatory expertise built-in</li>
                    <li>• Scalable compliance framework</li>
                    <li>• Continuous updates and support</li>
                    <li>• Industry-specific solutions</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Take the Next Step Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Take the Next Step Toward Responsible AI
              </h2>
              <p className="text-lg text-gray-800 mb-6">
                Compliance isn't a burden: it's a competitive advantage.
              </p>
              <p className="text-lg text-gray-800 mb-8">
                Start earning trust. Start ensuring transparency. Start
                achieving compliance.
              </p>
              <p className="text-xl text-brand font-semibold mb-8">
                Sign up for PRISM Free and see how Block Convey makes
                responsible AI achievable, scalable, and sustainable.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open("https://prism.blockconvey.com", "_blank");
                }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20 hover:bg-brand-light/30 transition-colors duration-200 cursor-pointer w-full text-left relative z-10"
              >
                <span className="text-gray-800 font-medium inline-flex items-center gap-2">
                  👉 Visit Block Convey to try PRISM
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-brand-lightest">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  1. What makes PRISM different from standard AI monitoring
                  tools?
                </h3>
                <p className="text-gray-800">
                  PRISM goes beyond performance: it tracks fairness,
                  accountability, transparency, and legal alignment across the
                  entire AI lifecycle.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  2. Is AI compliance required by law?
                </h3>
                <p className="text-gray-800">
                  In many jurisdictions, yes. And even where it isn't mandated,
                  it's expected by investors, customers, and regulators.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  3. How long does it take to implement PRISM?
                </h3>
                <p className="text-gray-800">
                  Most teams are up and running within a few days, thanks to
                  pre-built templates and guided onboarding.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  4. Can PRISM help with documentation for audits or board
                  reviews?
                </h3>
                <p className="text-gray-800">
                  Absolutely. PRISM auto-generates compliance reports and
                  maintains audit trails for each model.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  5. Is PRISM suitable for small teams or only large
                  enterprises?
                </h3>
                <p className="text-gray-800">
                  PRISM is built to scale: whether you're a 5-person team or a
                  multinational enterprise.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
