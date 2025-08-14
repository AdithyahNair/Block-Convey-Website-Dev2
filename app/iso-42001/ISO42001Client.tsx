"use client";

import React from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import {
  CheckCircle,
  AlertTriangle,
  FileText,
  Users,
  BarChart3,
  Target,
  Zap,
} from "lucide-react";

export default function ISO42001Client() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-lightest via-white to-brand-lightest pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
            >
              <div className="text-gray-900 mb-2 sm:mb-3">
                ISO 42001 Compliance:
              </div>
              <div className="text-brand break-words text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                How PRISM by Block Convey Helps You Build Responsible and
                Compliant AI Systems
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              AI is transforming industries: but with great power comes the
              responsibility to govern that power properly.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Enter ISO/IEC 42001, the world's first international AI Management
              System standard. Published in December 2023, ISO 42001 sets a
              global framework for organizations to govern AI responsibly,
              ensuring transparency, fairness, accountability, and trust.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-800 max-w-3xl mx-auto"
            >
              If you're building or deploying AI, especially in regulated
              sectors like finance, healthcare, insurance, or government,
              aligning with ISO 42001 isn't just a "nice to have": it's becoming
              a competitive and regulatory necessity.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-gray-800 max-w-3xl mx-auto mt-6"
            >
              That's where PRISM by Block Convey steps in: your all-in-one
              solution for aligning AI development with ISO 42001 requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Is ISO/IEC 42001 Section */}
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
              What Is ISO/IEC 42001? A Quick Overview
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              ISO 42001 provides a structured approach to manage risks, ensure
              ethical design, and foster trust in AI systems. Think of it as ISO
              27001 (for information security), but tailored specifically to the
              governance and lifecycle of artificial intelligence.
            </p>

            <div className="bg-brand-lightest p-6 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key objectives of ISO 42001:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Define roles and responsibilities for AI governance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Ensure transparency in AI decision-making
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Establish controls for bias, fairness, and security
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Promote continuous improvement and monitoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">
                    Provide documentation for regulators and auditors
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Needs to Comply Section */}
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
              Who Needs to Comply with ISO 42001?
            </h2>
            <p className="text-lg text-gray-800 mb-8 text-center">
              ISO 42001 applies to any organization developing, deploying, or
              managing AI systems: regardless of size or industry.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  This includes:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Fintechs using AI for credit scoring or fraud detection
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Healthcare startups using machine learning for diagnostics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Enterprises deploying AI chatbots or automation systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Government and defense using AI for surveillance or
                      decision support
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      SaaS companies embedding LLMs into their products
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4">
                  Common Compliance Challenges with ISO 42001
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700">
                      Lack of AI system documentation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700">
                      No centralized risk management framework
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700">
                      Difficulty auditing black-box AI models
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700">
                      Inconsistent governance across teams
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700">
                      No bias or fairness assessments in place
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How PRISM Simplifies Section */}
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
              How PRISM Simplifies ISO 42001 Compliance
            </h2>
            <p className="text-lg text-gray-800 mb-8 text-center">
              PRISM by Block Convey is designed from the ground up to help teams
              achieve and maintain ISO 42001 compliance with minimal friction.
            </p>
            <p className="text-lg text-gray-800 mb-12 text-center">
              Let's break it down by core ISO 42001 requirements and how PRISM
              helps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clause-by-Clause Alignment Section */}
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
              🧩 Clause-by-Clause Alignment with PRISM
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Clause 4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    1. Context of the Organization (Clause 4)
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  PRISM enables organizations to define and map AI roles,
                  responsibilities, and stakeholders across teams.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Role-based dashboards</li>
                  <li>• Centralized AI inventory management</li>
                  <li>• Organizational risk mapping</li>
                </ul>
              </motion.div>

              {/* Clause 5 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    2. Leadership (Clause 5)
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  PRISM supports leadership with executive-level overviews of AI
                  risks, compliance status, and audit readiness.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Automated alerts on compliance gaps</li>
                  <li>• Custom reports for board meetings</li>
                  <li>• Governance workflows with sign-offs</li>
                </ul>
              </motion.div>

              {/* Clause 6 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    3. Planning (Clause 6)
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  PRISM facilitates the creation of clear AI risk mitigation
                  plans and objectives.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Risk assessment templates</li>
                  <li>• KPI tracking for responsible AI goals</li>
                  <li>• Action plans and review scheduling</li>
                </ul>
              </motion.div>

              {/* Clause 7 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    4. Support (Clause 7)
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  From training to documentation, PRISM provides the tools
                  needed to support a culture of AI compliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Embedded AI ethics training modules</li>
                  <li>• Auto-generated policy documentation</li>
                  <li>• Integration with knowledge bases</li>
                </ul>
              </motion.div>

              {/* Clause 8 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    5. Operation (Clause 8)
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  PRISM helps teams manage the AI lifecycle with built-in
                  operational controls.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ML model monitoring & drift detection</li>
                  <li>• Fairness & bias evaluations</li>
                  <li>• Explainability layers for transparency</li>
                </ul>
              </motion.div>

              {/* Clause 9 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    6. Performance Evaluation (Clause 9)
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  PRISM tracks performance metrics and generates audit logs
                  aligned with ISO 42001 expectations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Audit dashboards</li>
                  <li>• Version control for model changes</li>
                  <li>• A/B testing frameworks with compliance scoring</li>
                </ul>
              </motion.div>

              {/* Clause 10 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 md:col-span-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    7. Improvement (Clause 10)
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  With continuous feedback loops and issue tracking, PRISM
                  enables ongoing improvement in your AI systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Issue reporting & resolution tracking</li>
                  <li>• Continuous risk scoring updates</li>
                  <li>• Model revalidation reminders</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Table Section */}
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
              ISO 42001 + PRISM = Trustworthy, Scalable, and Auditable AI
            </h2>
            <p className="text-lg text-gray-800 mb-8 text-center max-w-3xl mx-auto">
              Here's what your team gains by aligning ISO 42001 efforts with
              PRISM:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200">
                <thead>
                  <tr className="bg-brand-lightest">
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                      Benefit
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                      PRISM's Advantage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Faster compliance
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Pre-built ISO 42001 controls & templates
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Centralized oversight
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Unified dashboards for leadership and auditors
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Reduced operational burden
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Automated reporting, documentation & tracking
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Improved AI reliability
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Bias checks, drift detection, explainability
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Stronger stakeholder confidence
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Transparent, documented, ethical AI practices
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Real-World Use Cases: PRISM for ISO 42001 in Action
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  A fintech startup
                </h3>
                <p className="text-gray-700">
                  Used PRISM to align credit scoring models with ISO 42001,
                  automating fairness checks and creating audit-ready
                  documentation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  A health AI provider
                </h3>
                <p className="text-gray-700">
                  Deployed PRISM to manage data privacy risks and ensure
                  clinical decision support systems met ethical transparency
                  standards.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  A government agency
                </h3>
                <p className="text-gray-700">
                  Adopted PRISM to govern procurement and deployment of
                  surveillance AI tools: ensuring accountability and compliance.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consequences Section */}
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
              What Happens if You Ignore ISO 42001?
            </h2>
            <p className="text-lg text-gray-800 mb-8 text-center">
              While ISO 42001 is voluntary now, it's quickly becoming the de
              facto standard for responsible AI: especially in regulated
              industries.
            </p>

            <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                Failure to comply could result in:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700">Regulatory setbacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700">Lawsuits or penalties</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700">
                    Loss of stakeholder trust
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700">
                    Blocked contracts or partnerships
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700">
                    AI system failure or harm
                  </span>
                </li>
              </ul>
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
              Ready to Make ISO 42001 Compliance Simple? Try PRISM
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Instead of scrambling for audits or struggling to define AI
              policies, PRISM helps you turn ISO 42001 into a competitive
              advantage.
            </p>

            <div className="bg-white p-6 rounded-2xl text-gray-900 mb-8">
              <h3 className="text-xl font-semibold mb-4">
                With one platform, you get:
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm">
                    Complete visibility into your AI systems
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm">Audit-ready compliance tools</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm">Governance built for scale</p>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open("https://prism.blockconvey.com", "_blank");
              }}
              className="bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors duration-200 cursor-pointer"
            >
              👉 Sign up for PRISM Free at Block Convey
            </button>
            <p className="text-white/90 mt-4">
              Start building AI that's ethical, compliant, and future-proof.
            </p>
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
                  1. Is ISO 42001 mandatory?
                </h3>
                <p className="text-gray-700">
                  Not yet, but it's already being adopted by leading companies
                  and may become mandatory in government or regulated sectors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  2. Do I need to hire a full-time compliance team to be ISO
                  42001 certified?
                </h3>
                <p className="text-gray-700">
                  No. With PRISM, much of the heavy lifting is automated:
                  allowing small teams to meet ISO requirements efficiently.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  3. Can PRISM be used with ISO 27001 or SOC 2 frameworks too?
                </h3>
                <p className="text-gray-700">
                  Yes! PRISM is modular and can align with multiple compliance
                  frameworks including ISO 27001, SOC 2, and GDPR.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  4. How long does it take to align with ISO 42001 using PRISM?
                </h3>
                <p className="text-gray-700">
                  Most teams start aligning within weeks. Full alignment depends
                  on the complexity of your AI use cases, but PRISM accelerates
                  the process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  5. Can PRISM help with external audits?
                </h3>
                <p className="text-gray-700">
                  Absolutely. PRISM includes exportable audit logs, compliance
                  documentation, and dashboards specifically designed to support
                  third-party reviews.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
