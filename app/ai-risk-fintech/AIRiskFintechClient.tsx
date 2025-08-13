"use client";

import React from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import {
  Shield,
  AlertTriangle,
  BarChart3,
  Lock,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function AIRiskFintechClient() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-lightest via-white to-brand-lightest py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight mt-12"
            >
              <span className="text-gray-900">AI Risk in Fintech</span>
              <br />
              <span className="text-brand">
                How PRISM by Block Convey Enables Safer, Smarter Financial AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Artificial Intelligence has become the beating heart of the
              fintech revolution: powering fraud detection, automating credit
              scoring, personalizing investments, and optimizing financial
              operations. But beneath the innovation lies significant AI risk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 max-w-2xl mx-auto"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Think about it:
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    What happens if your AI model discriminates against
                    borrowers?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    How do you prove decisions were fair, explainable, and
                    compliant?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Can your AI stand up to audits from regulators like the SEC
                    or GDPR authorities?
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-800 mt-8 max-w-3xl mx-auto"
            >
              This is where AI Risk Management becomes mission-critical: and
              where PRISM by Block Convey helps fintechs navigate risk,
              regulation, and reputational exposure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is AI Risk in Fintech Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              What is AI Risk in Fintech?
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              AI risk in fintech refers to the potential negative impacts that
              artificial intelligence systems can create when used in financial
              services. These risks can be legal, ethical, operational,
              reputational, or financial.
            </p>

            <div className="bg-brand-lightest p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Common examples include:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Bias in loan approvals</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Inaccurate fraud detection
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Opaque investment recommendations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Privacy breaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Regulatory non-compliance
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-800 leading-relaxed">
              PRISM acts as your fintech's AI Risk Management Hub, enabling you
              to identify, assess, monitor, and mitigate these risks: before
              they become costly problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Top AI Risks Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Top AI Risks Facing the Fintech Industry
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Risk 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    1. Algorithmic Bias in Lending Decisions
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Many fintechs use machine learning to approve or reject credit
                  applications. But biased training data can lead to unfair
                  outcomes against certain groups.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    PRISM's Solution:
                  </h4>
                  <p className="text-green-700 text-sm">
                    Automated bias detection, fairness scoring, and model
                    auditing tools ensure ethical decision-making.
                  </p>
                </div>
              </motion.div>

              {/* Risk 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    2. Lack of Explainability
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Financial institutions must often justify why a decision was
                  made: especially in consumer-facing applications like credit,
                  insurance, or robo-advisors.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    PRISM's Solution:
                  </h4>
                  <p className="text-green-700 text-sm">
                    PRISM includes built-in explainability layers that decode
                    black-box models into transparent, human-readable outputs.
                  </p>
                </div>
              </motion.div>

              {/* Risk 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    3. Model Drift and Unmonitored Predictions
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  As data patterns change over time, AI models can become
                  inaccurate: a risk for fraud detection, trading bots, or
                  underwriting.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    PRISM's Solution:
                  </h4>
                  <p className="text-green-700 text-sm">
                    Real-time monitoring of model behavior and alert systems for
                    drift detection help maintain performance and reduce
                    surprises.
                  </p>
                </div>
              </motion.div>

              {/* Risk 4 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    4. Regulatory Non-Compliance
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  From GDPR and CCPA to the EU AI Act and financial-specific
                  laws, regulators now demand explainability, fairness, and
                  accountability in AI.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    PRISM's Solution:
                  </h4>
                  <p className="text-green-700 text-sm">
                    PRISM aligns with leading compliance frameworks and provides
                    audit-ready documentation for regulators and stakeholders.
                  </p>
                </div>
              </motion.div>

              {/* Risk 5 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 md:col-span-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Lock className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    5. Data Privacy Violations
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Using personal financial or behavioral data can lead to
                  privacy breaches if not properly governed.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    PRISM's Solution:
                  </h4>
                  <p className="text-green-700 text-sm">
                    Privacy-by-design features, role-based access, and data
                    lineage tracking ensure sensitive information stays
                    protected.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Board-Level Concern Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why AI Risk is a Board-Level Concern in Fintech
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              AI isn't just a tool: it's a governance issue. Investors,
              regulators, and boards now demand:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-brand-lightest p-6 rounded-2xl text-center">
                <FileText className="h-12 w-12 text-brand mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Clear documentation of AI decisions
                </h3>
              </div>
              <div className="bg-brand-lightest p-6 rounded-2xl text-center">
                <Shield className="h-12 w-12 text-brand mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Proactive risk mitigation
                </h3>
              </div>
              <div className="bg-brand-lightest p-6 rounded-2xl text-center">
                <BarChart3 className="h-12 w-12 text-brand mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ethics and transparency in automation
                </h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                With PRISM, fintechs gain the ability to:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Map AI risks across use cases
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Assign accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Automate risk scoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Build trust with end-users and regulators
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRISM Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Key PRISM Features That Power AI Risk Management in Fintech
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200">
                <thead>
                  <tr className="bg-brand-lightest">
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                      Functionality
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Risk Scoring Engine
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Instantly categorize model risks (e.g., high-risk fraud
                      models vs. low-risk ops automations)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Bias & Fairness Audits
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Detect and flag discriminatory outcomes
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Explainability Dashboard
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Visual tools to help developers and compliance officers
                      interpret model decisions
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Compliance Toolkit
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Documentation templates, audit logs, and governance
                      workflows aligned with global fintech regulations
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Drift Detection Alerts
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Catch shifts in model performance and intervene before
                      failure occurs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Real-World Use Cases: Fintechs Using PRISM to Reduce AI Risk
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Credit Scoring
                </h3>
                <p className="text-gray-700 mb-4">
                  A neobank uses PRISM to audit its lending models for
                  demographic bias, ensuring FCRA compliance and fair access to
                  credit.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fraud Detection
                </h3>
                <p className="text-gray-700 mb-4">
                  A payment platform uses PRISM to monitor AI model drift and
                  reduce false positives in its fraud engine: improving user
                  experience and security.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Robo-Advisors
                </h3>
                <p className="text-gray-700 mb-4">
                  An investment startup leverages PRISM's explainability tools
                  to clarify how portfolios are recommended, boosting investor
                  confidence.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Consequences of Ignoring AI Risk in Fintech
            </h2>

            <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Fines and penalties from data privacy violations or
                    discrimination
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Loss of customer trust after unexplained or unfair outcomes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Investor hesitation due to governance gaps
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Regulatory delays in new product approvals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Brand damage due to public scandal or legal action
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-800 text-center">
              PRISM helps mitigate all of the above: saving time, money, and
              your reputation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regulatory Landscape Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Navigating the Regulatory Landscape with PRISM
            </h2>
            <p className="text-lg text-gray-800 mb-8 text-center max-w-3xl mx-auto">
              Here's how PRISM aligns with leading fintech compliance mandates:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200">
                <thead>
                  <tr className="bg-brand-lightest">
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                      Regulation
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                      PRISM Alignment
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      GDPR (EU)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Supports data minimization, consent tracking, and user
                      rights
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      CCPA (California)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Ensures data transparency and opt-out compliance
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      EU AI Act
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Classifies AI systems, documents risk, and enforces
                      oversight
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      FCRA (USA)
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Ensures fairness in lending decisions
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Basel III/IV
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Offers risk documentation and governance evidence for
                      audits
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trustworthy AI Section */}
      <section className="py-16 bg-brand-lightest">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              PRISM = Trustworthy AI for Fintech
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              The PRISM platform is built specifically to help modern fintech
              teams:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Move fast without breaking compliance
                </h3>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Scale AI responsibly
                </h3>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Win the trust of users and regulators
                </h3>
              </div>
            </div>

            <p className="text-lg text-gray-800 leading-relaxed">
              By integrating PRISM into your AI development lifecycle, you embed
              governance from day one: avoiding reactive patches later.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              PRISM Drives ROI and Long-Term Growth
            </h2>
            <p className="text-lg text-gray-800 mb-8 text-center">
              Risk isn't just a threat: it's a signal of opportunity. By
              understanding and managing risk better than competitors, you can
              move faster and gain an edge.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand-lightest p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  With PRISM, you:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Reduce compliance overhead
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Lower risk of legal action
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Improve AI model performance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Retain more users with fair and clear decisions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Win faster approvals for new products and markets
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Competitive Advantage
                </h3>
                <p className="text-gray-700 mb-4">
                  While competitors struggle with reactive compliance, you build
                  proactive governance that scales with your business.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-semibold">
                    "PRISM helped us launch our AI-powered lending platform 3
                    months ahead of schedule while maintaining full regulatory
                    compliance."
                  </p>
                  <p className="text-green-700 text-sm mt-2">
                    - CTO, Digital Bank
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand to-brand-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Start Managing AI Risk Today with PRISM
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              AI is here to stay. So is the risk. But with PRISM by Block
              Convey, you can turn AI risk into AI readiness.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Protect your users.
                </h3>
                <p className="text-white/90">
                  Build trust through transparency
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Defend your models.
                </h3>
                <p className="text-white/90">Ensure compliance and fairness</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Satisfy your regulators.
                </h3>
                <p className="text-white/90">
                  Meet all compliance requirements
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Grow your fintech with confidence.
                </h3>
                <p className="text-white/90">
                  Scale responsibly and sustainably
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl text-gray-900">
              <h3 className="text-xl font-semibold mb-4">
                Sign up for PRISM Free at Block Convey and see how easy
                responsible AI can be.
              </h3>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open("https://prism.blockconvey.com", "_blank");
                }}
                className="bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors duration-200 cursor-pointer"
              >
                Try PRISM Free
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  1. What kind of fintech companies can use PRISM?
                </h3>
                <p className="text-gray-700">
                  PRISM is built for both early-stage fintech startups and
                  large-scale financial institutions. Whether you're building
                  credit scoring tools or fraud engines, PRISM scales with you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  2. Does PRISM integrate with my existing AI/ML workflows?
                </h3>
                <p className="text-gray-700">
                  Yes! PRISM is platform-agnostic and integrates easily with
                  your current tech stack, from Python-based models to
                  enterprise data systems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  3. How does PRISM identify bias in AI models?
                </h3>
                <p className="text-gray-700">
                  PRISM runs fairness audits across demographics, features, and
                  outcomes: providing actionable insights to mitigate bias.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  4. Is PRISM compliant with international data laws?
                </h3>
                <p className="text-gray-700">
                  Absolutely. PRISM is built with GDPR, CCPA, HIPAA, and the EU
                  AI Act in mind, helping you meet all regulatory requirements
                  globally.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  5. How long does it take to implement PRISM in a fintech
                  stack?
                </h3>
                <p className="text-gray-700">
                  Most teams are live within a week thanks to plug-and-play
                  templates, expert onboarding, and flexible APIs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
