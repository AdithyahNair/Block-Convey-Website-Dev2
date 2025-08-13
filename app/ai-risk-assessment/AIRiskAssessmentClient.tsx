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
  Globe,
  Award,
} from "lucide-react";
import { MainLayout } from "../../components/layout/MainLayout";

export default function AIRiskAssessmentClient() {
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
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left pt-8"
              >
                <div className="relative mb-8 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                      <span className="text-gray-900">
                        AI Risk Assessment with{" "}
                      </span>
                      <span className="text-brand">PRISM</span>
                    </h1>
                  </motion.div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  The Future of Transparent AI Governance
                </h2>

                <p className="text-lg text-gray-800 max-w-xl mb-8">
                  Discover how PRISM by Block Convey revolutionizes AI risk
                  assessment with transparent governance, bias detection, and
                  regulatory compliance for fintech organizations.
                </p>
              </motion.div>

              {/* Right Column - Key Benefits */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full relative max-w-full"
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Key Benefits
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">
                        Automated bias detection and fairness evaluation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">
                        Regulatory compliance with NIST, ISO, EU AI Act
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">
                        Synthetic data generation for safe testing
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">
                        Audit-ready reports in minutes
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Growing Influence Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Growing Influence of AI in Decision-Making
              </h2>
              <p className="text-lg text-gray-800 max-w-4xl mx-auto">
                Artificial intelligence is no longer just a trend; it's now at
                the core of how modern organizations make decisions.
                AI-augmented decision-making is enhancing the speed, quality,
                and scale of strategic analysis for businesses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6"
              >
                <div className="bg-brand/5 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Strategic Analysis
                </h3>
                <p className="text-gray-800">
                  Large language models able to generate and evaluate strategies
                  on par with human experts.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="bg-brand/5 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Customer Support
                </h3>
                <p className="text-gray-800">
                  AI is streamlining response times, automating inquiries, and
                  helping companies reduce operational costs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6"
              >
                <div className="bg-brand/5 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Market Trends
                </h3>
                <p className="text-gray-800">
                  AI analyzes massive datasets to deliver more accurate,
                  bias-free forecasts for proactive strategic choices.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Importance of Responsible AI Governance */}
        <section className="py-16 bg-brand-lightest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Importance of Responsible AI Governance
              </h2>
              <p className="text-lg text-gray-800 max-w-4xl mx-auto">
                Without proper oversight, AI can become a black box; making
                decisions that are difficult to explain or justify. That's why
                transparent AI governance is not just recommended, it's
                essential.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The Risks of Unchecked AI
                </h3>
                <ul className="text-gray-800 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Discrimination in credit scoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Flawed hiring decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reputational damage and regulatory fines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Loss of customer trust</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The Solution: Transparent Governance
                </h3>
                <ul className="text-gray-800 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Assess, monitor, and mitigate AI risks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Safeguard users, reputation, and bottom line</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Build trust with stakeholders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ensure regulatory compliance</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Block Convey */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Block Convey?
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Company Vision and Mission
                </h3>
                <p className="text-lg text-gray-800 mb-6">
                  Block Convey is a technology company with a bold mission: to
                  make artificial intelligence more transparent, ethical, and
                  accountable. Our company believes in responsible innovations
                  when AI systems are aligned with human values and regulatory
                  standards.
                </p>
                <div className="bg-brand-lightest p-6 rounded-xl border border-brand-light/20">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Our Core Belief
                  </h4>
                  <p className="text-gray-800">
                    Through our products and services, Block Convey equips
                    organizations with the tools they need to assess risk,
                    ensure fairness, and remain compliant with emerging AI
                    regulations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-lightest p-8 rounded-2xl border border-brand-light/20"
              >
                <div className="text-center">
                  <div className="bg-brand/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                    <Award className="h-10 w-10 text-brand" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Role in Promoting Ethical AI Adoption
                  </h4>
                  <p className="text-gray-800 mb-6">
                    With a strong emphasis on ethics, transparency, and
                    governance, Block Convey is shaping the future of AI with
                    integrity at its core.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-brand">100%</div>
                      <div className="text-sm text-gray-600">Transparent</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand">
                        Ethical
                      </div>
                      <div className="text-sm text-gray-600">AI Focus</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PRISM Overview */}
        <section className="py-16 bg-brand-lightest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Overview of PRISM – Block Convey's Flagship Solution
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What is PRISM?
                </h3>
                <p className="text-lg text-gray-800 mb-6">
                  PRISM (Predictive Risk & Intelligence Surveillance Monitor) is
                  Block Convey's flagship AI governance engine; built to bring
                  transparency and trust to AI. PRISM automatically evaluates AI
                  models for fairness, bias, explainability, and performance,
                  generating audit-ready reports aligned with leading frameworks
                  like NIST AI RMF, ISO 42001, and the EU AI Act.
                </p>
                <p className="text-lg text-gray-800 mb-6">
                  Whether you're building credit scoring systems or fraud
                  detection tools, PRISM ensures your models stay compliant,
                  reliable, and safe: without ever needing access to raw
                  customer data. It's how forward-thinking companies take
                  control of AI risk before it becomes a liability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Unique Features That Power PRISM
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Regulatory Mapping
                      </h5>
                      <p className="text-gray-800 text-sm">
                        PRISM is built with pre-mapped frameworks like NIST AI
                        RMF, ISO 42001, and the EU AI Act, making compliance
                        alignment seamless from day one.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Automated Assessment Generation
                      </h5>
                      <p className="text-gray-800 text-sm">
                        It automatically evaluates models for bias, fairness,
                        explainability, and performance: producing audit-ready
                        reports without manual effort.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Synthetic Data Generation
                      </h5>
                      <p className="text-gray-800 text-sm">
                        PRISM uses proprietary synthetic data techniques to test
                        model behavior in edge cases and protect sensitive
                        information.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Framework-Agnostic Model Support
                      </h5>
                      <p className="text-gray-800 text-sm">
                        Whether you use scikit-learn, TensorFlow, PyTorch, or
                        LLM-based pipelines, PRISM adapts to your model stack
                        with ease.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                A Tool for Every AI Lifecycle Stage
              </h4>
              <p className="text-lg text-gray-800">
                Whether you're just building your model, testing it in
                production, or evaluating its post-deployment impact, PRISM
                provides the insights you need at every step to assess and
                manage risk proactively.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why AI Risk Assessment Matters */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why AI Risk Assessment Matters More Than Ever
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Emerging Risks with AI-Driven Systems
                </h3>
                <p className="text-gray-800">
                  AI models learn from data. If that data is biased, outdated,
                  or incomplete, the resulting predictions can be harmful,
                  unfair, or even dangerous.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The Cost of Unchecked AI Behavior
                </h3>
                <p className="text-gray-800">
                  Reputational damage, regulatory fines, loss of customer trust:
                  these are just some of the outcomes organizations face when AI
                  systems behave unpredictably.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Increasing Pressure from Global Regulatory Bodies
                </h3>
                <p className="text-gray-800">
                  Governments around the world are racing to regulate AI. The
                  EU's AI Act, the U.S. Executive Order on Safe AI, and
                  frameworks from NIST and ISO all highlight the need for
                  transparent governance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="py-16 bg-brand-lightest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Core Pillars of Effective AI Risk Assessment
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Bias and Fairness Evaluation
                </h3>
                <p className="text-gray-800 text-sm">
                  AI must treat everyone fairly. A strong risk assessment
                  program identifies demographic biases within models and data.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Explainability and Interpretability
                </h3>
                <p className="text-gray-800 text-sm">
                  Black-box algorithms are out. Stakeholders need to understand
                  how and why a model makes a decision.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Accountability and Auditability
                </h3>
                <p className="text-gray-800 text-sm">
                  Risk assessment ensures that all AI-related decisions are
                  tracked and traceable for audits and compliance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Privacy and Data Security Compliance
                </h3>
                <p className="text-gray-800 text-sm">
                  Risk assessment checks whether models are compliant with
                  privacy laws like GDPR, HIPAA, or CCPA.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PRISM for Fintech Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How PRISM Supports AI Risk Assessment in Fintech
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Regulatory Compliance Made Simple
                </h3>
                <p className="text-lg text-gray-800 mb-6">
                  PRISM comes pre-mapped to key regulatory frameworks like NIST
                  AI RMF, ISO 42001, the EU AI Act, and state-level laws in
                  California, New York, and Colorado. It helps your team clearly
                  understand where your models stand with respect to financial
                  AI regulations.
                </p>
                <p className="text-lg text-gray-800 mb-6">
                  Whether it's Article 9 in the EU AI Act or a provision in SR
                  11-7, PRISM translates regulations into actionable insights.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-lightest p-8 rounded-2xl border border-brand-light/20"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Key Capabilities for Fintech
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Continuous evaluation of bias, fairness, explainability,
                      and drift
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Audit-ready risk assessment reports within minutes
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Domain-specific synthetic datasets for safe testing
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">
                      Support for TensorFlow, PyTorch, XGBoost, and scikit-learn
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-brand-lightest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of AI Risk Assessment for Businesses
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Improved Trust and Transparency
                </h3>
                <p className="text-gray-800">
                  By showing how your models work: and proving they're fair: you
                  gain the trust of customers, partners, and regulators.
                  Transparency is not just ethical: it's strategic.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Streamlined Regulatory Compliance
                </h3>
                <p className="text-gray-800">
                  AI risk assessment tools like PRISM help you meet
                  international AI compliance standards, reducing the time and
                  effort spent on audits and regulatory reporting.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center"
              >
                <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Better Business Outcomes with Ethical AI
                </h3>
                <p className="text-gray-800">
                  Responsible AI doesn't just prevent problems: it also leads to
                  better decision-making, stronger user engagement, and
                  long-term competitive advantage.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Applications Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Applications of AI Risk Assessment in Fintech
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
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Credit Scoring
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  PRISM detects and mitigates demographic bias in credit models,
                  helping lenders stay compliant with regulations like ECOA,
                  NIST AI RMF, and the EU AI Act.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Fraud Detection
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  Payment processors use PRISM to monitor model drift, reduce
                  false positives, and ensure real-time fraud systems remain
                  effective and explainable.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  KYC/AML Compliance
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  Regtech and identity verification platforms use PRISM's
                  synthetic data generation to simulate high-risk edge cases,
                  enabling safe and compliant model testing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Neobanking & Wealth Platforms
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  PRISM adds explainability to AI-driven recommendations for
                  portfolios, spending analysis, and financial advice; improving
                  transparency for customers and regulators.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Automated Underwriting
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  Fintech underwriters rely on PRISM to validate model
                  consistency, fairness, and performance: reducing risk of
                  non-compliant lending decisions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-brand-lightest p-6 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Transaction Monitoring
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  Fintechs handling high-volume payments use PRISM to evaluate
                  anomaly detection models, ensuring decisions are traceable and
                  justifiable during compliance audits.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-16 bg-brand-lightest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How to Get Started with PRISM
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Simple Sign-Up Process
                </h3>
                <p className="text-lg text-gray-800 mb-6">
                  Getting started with PRISM is easy. Just visit blockconvey.com
                  and sign up to access your free plan.
                </p>
                <div className="bg-white p-6 rounded-xl border border-brand-light/20">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    What's Included in the Free Trial
                  </h4>
                  <p className="text-gray-800 mb-4">
                    We're offering a 30-day free trial for fintech companies to
                    experience how PRISM can transform their AI governance
                    process.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">
                        Automated risk assessment generation
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">
                        Regulatory framework mapping (NIST, ISO 42001, EU AI
                        Act, etc.)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">
                        Synthetic data testing for compliance and edge cases
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">
                        Compatibility with common frameworks like scikit-learn,
                        XGBoost, TensorFlow, and PyTorch
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Us to Get Started
                </h4>
                <p className="text-gray-800 mb-6">
                  This is your opportunity to test PRISM with your existing AI
                  workflows: at no cost. Validate your models, identify blind
                  spots, and generate audit-ready reports in minutes.
                </p>
                <p className="text-gray-800 mb-6">
                  Whether you're evaluating a fraud detection engine, a credit
                  model, or an AML system, PRISM helps you stay compliant,
                  transparent, and trusted.
                </p>
                <div className="bg-brand-lightest p-4 rounded-lg border border-brand-light/20">
                  <p className="text-gray-800 font-medium mb-2">
                    To get started, contact us at:
                  </p>
                  <p className="text-brand font-semibold">
                    info@blockconvey.com
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Block Convey */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Block Convey?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-lightest p-8 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Expertise & Innovation
                </h3>
                <p className="text-gray-800 mb-6">
                  Block Convey combines the latest in AI innovation with deep
                  industry knowledge in compliance, ethics, and security. It's
                  more than software: it's a governance partner.
                </p>
                <p className="text-gray-800">
                  PRISM is not an afterthought: it's built with risk assessment
                  at the core. That makes it uniquely suited for organizations
                  where trust, transparency, and compliance are top priorities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-lightest p-8 rounded-2xl border border-brand-light/20"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Future-Ready Solution
                </h3>
                <p className="text-gray-800 mb-6">
                  Whether you're launching your first AI model or managing a
                  portfolio of production systems, PRISM scales with your growth
                  while maintaining robust oversight.
                </p>
                <p className="text-gray-800">
                  AI regulation is evolving rapidly. Tools like PRISM will
                  become essential to ensure that innovation doesn't come at the
                  cost of compliance or public safety.
                </p>
              </motion.div>
            </div>
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
                  1. What is AI risk assessment?
                </h3>
                <p className="text-gray-800">
                  AI risk assessment is the process of identifying, evaluating,
                  and mitigating the ethical, legal, and technical risks
                  associated with AI systems. It ensures that AI behaves fairly,
                  transparently, and in compliance with regulations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  2. How does PRISM help with AI compliance?
                </h3>
                <p className="text-gray-800">
                  With built-in regulatory mapping, synthetic data generation
                  for safe testing, and model-agnostic integration, PRISM
                  enables teams to deploy AI with confidence; knowing they can
                  prove compliance, reduce manual effort, and respond quickly to
                  audits or stakeholder reviews.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  3. Is PRISM free to use?
                </h3>
                <p className="text-gray-800">
                  Yes, Block Convey offers a free trial for PRISM that allows
                  users to experience key risk assessment features without cost
                  for a month. Please contact info@blockconvey.com for more
                  information.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  4. Who should use PRISM?
                </h3>
                <p className="text-gray-800">
                  PRISM is ideal for data science teams, compliance officers, AI
                  engineers, risk managers, and any organization deploying AI
                  models in production.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  5. What makes Block Convey different?
                </h3>
                <p className="text-gray-800">
                  Block Convey stands out by focusing entirely on AI governance
                  and ethics. Its flagship platform PRISM is purpose-built to
                  offer transparent, regulation-ready solutions for responsible
                  AI development.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Conclusion
              </h2>
              <p className="text-lg text-gray-800 mb-8">
                AI is transforming every sector: but without oversight, it can
                create as many risks as it solves. Block Convey's AI Risk
                Assessment solution, powered by PRISM, empowers businesses to
                evaluate, manage, and mitigate these risks effectively. With a
                clear focus on transparency, ethics, and regulation, PRISM helps
                organizations build AI that's not only powerful: but also
                trustworthy and accountable.
              </p>
              <p className="text-xl text-brand font-semibold">
                If you're ready to embrace AI with confidence, start with a
                strong foundation. Start with PRISM.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
