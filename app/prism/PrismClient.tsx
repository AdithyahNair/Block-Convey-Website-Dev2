"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Quote,
  Sparkles,
  Star,
  Zap,
  Shield,
  Rocket,
  Lightbulb,
  Crown,
} from "lucide-react";
import { MainLayout } from "../../components/layout/MainLayout";

export default function PrismClient() {
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
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <Sparkles className="h-6 w-6 text-brand" />
                  <div className="bg-gray-100 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                    <span className="text-brand font-bold">P</span>
                    <span className="text-gray-800">redictive</span>
                    <span className="text-brand font-bold"> R</span>
                    <span className="text-gray-800">isk and</span>
                    <span className="text-brand font-bold"> I</span>
                    <span className="text-gray-800">ntelligence</span>
                    <span className="text-brand font-bold"> S</span>
                    <span className="text-gray-800">urveillance</span>
                    <span className="text-brand font-bold"> M</span>
                    <span className="text-gray-800">onitor</span>
                  </div>
                </motion.div>

                <div className="relative mb-8 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                      <span className="text-gray-900">PRISM</span>
                      <span className="mx-2 text-gray-400">:</span>
                      <span className="text-brand">
                        Unlock the Power of Transparent AI
                      </span>
                    </h1>
                  </motion.div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Transform Your AI Journey with PRISM
                </h2>

                <p className="text-lg text-gray-800 max-w-xl mb-8">
                  Experience the power of transparent AI governance. Sign up for
                  PRISM Free and take the first step towards building
                  trustworthy, high-performing AI systems.
                </p>
              </motion.div>

              {/* Right Column - Testimonial */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full relative max-w-full"
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">
                  <Quote className="h-10 w-10 md:h-12 md:w-12 text-brand/20 mb-3 md:mb-4" />
                  <p className="text-gray-800 italic text-base md:text-lg mb-4 md:mb-6 relative z-10 break-words">
                    "PRISM is the ultimate game-changer for ethical AI
                    development, offering a seamless blend of transparency,
                    performance, and regulatory compliance."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-700 font-bold">DZ</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Davor Žilić</p>
                      <p className="text-gray-600 text-sm">
                        AML Consultant, D28 Finance
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">
                  <Quote className="h-10 w-10 md:h-12 md:w-12 text-brand/20 mb-3 md:mb-4" />
                  <p className="text-gray-800 italic text-base md:text-lg mb-4 md:mb-6 relative z-10 break-words">
                    "With PRISM, I can effectively communicate the 'why' behind
                    each prediction, fostering trust and confidence in AI
                    systems."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-700 font-bold">TA</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Tim Adamson</p>
                      <p className="text-gray-600 text-sm">
                        Machine Learning Engineer, Microsoft
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="p-8 bg-gradient-to-br from-brand-light/10 to-brand-light/5 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  The Challenge of AI Governance
                </h3>
                <p className="text-gray-800 mb-6">
                  As AI becomes increasingly integral to decision-making
                  processes, ensuring transparency, fairness, and compliance is
                  crucial. However, complex regulatory landscapes and the lack
                  of explainability in AI models pose significant challenges.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-brand-light/10 to-brand-light/5 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why PRISM Matters
                </h3>
                <p className="text-gray-800 mb-6">
                  PRISM addresses these challenges by providing a comprehensive
                  platform for model evaluation, bias detection, and performance
                  analysis. Our solution empowers you to build trustworthy AI
                  systems while maintaining operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/10">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Explainability Tools
                </h4>
                <ul className="text-gray-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>
                      Utilize SHAP and LIME to understand AI decision-making
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>
                      Enhance transparency and trust in your AI models
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/10">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Bias Detection
                </h4>
                <ul className="text-gray-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>
                      Identify and mitigate bias in AI-driven decisions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>
                      Ensure fairness and compliance with regulatory standards
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/10">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Performance Evaluation
                </h4>
                <ul className="text-gray-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>Assess model accuracy and reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span>Optimize AI performance for better outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-brand-lightest overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 inline-block relative">
                Benefits
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="text-center p-8 rounded-2xl border border-brand-light/10 bg-white shadow-sm">
                  <div className="bg-brand/5 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <Rocket className="h-8 w-8 text-brand" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Accelerate Innovation
                  </h4>
                  <p className="text-gray-800">
                    Streamline AI development with PRISM's comprehensive tools,
                    reducing time-to-market by up to 40%.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="text-center p-8 rounded-2xl border border-brand-light/10 bg-white shadow-sm">
                  <div className="bg-brand/5 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-brand" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Reduce Risk
                  </h4>
                  <p className="text-gray-800">
                    Mitigate regulatory and operational risks through
                    transparent AI governance and continuous compliance
                    monitoring.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="text-center p-8 rounded-2xl border border-brand-light/10 bg-white shadow-sm">
                  <div className="bg-brand/5 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-brand" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Enhance Trust
                  </h4>
                  <p className="text-gray-800">
                    Build confidence with stakeholders by ensuring fair,
                    transparent, and explainable AI-driven decisions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-brand-lightest relative overflow-hidden">
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white border border-brand-light/10 rounded-2xl p-8 md:p-12 shadow-sm"
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white p-2 sm:p-3 rounded-full shadow-sm"
                  style={{ maxWidth: "calc(100% - 2rem)" }}
                >
                  <Crown className="h-6 w-6" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Coming Soon: <span className="text-brand">PRISM Pro</span>
                </h3>

                <p className="text-gray-800 max-w-3xl mx-auto mb-6 md:mb-10 text-sm md:text-base">
                  Elevate your compliance and Fintech operations with advanced
                  AI governance. Purpose-built for fintech AI teams, PRISM Pro
                  accelerates the deployment of models in critical areas such as
                  Anti-Money Laundering (AML), Know Your Customer (KYC), and
                  fraud detection, all while ensuring strict compliance with
                  evolving AI regulations.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-6 md:mb-8">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 flex-shrink-0 text-brand" />
                    <span className="text-gray-800 text-sm md:text-base">
                      Automated Compliance Reporting
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 flex-shrink-0 text-brand" />
                    <span className="text-gray-800 text-sm md:text-base">
                      Regulatory Change Management
                    </span>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-brand italic font-medium">
                  Transform compliance with PRISM Pro
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
