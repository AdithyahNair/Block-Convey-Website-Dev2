import React from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
  Zap,
  Shield,
  Rocket,
  Lightbulb,
  Crown,
} from 'lucide-react'
import { Footer } from '../components/landing/Footer'
import { Navbar } from '../components/landing/Navbar'
import { Link } from 'react-router-dom'

export const PrismPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-lightest">
      {/* Navigation */}
      <Navbar />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lightest to-transparent" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-light/10 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
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
                  <h1 className="text-5xl md:text-6xl font-bold mb-8">
                    <span className="text-brand">PRISM:</span>{' '}
                    <span className="text-gray-900">
                      Deploy AI With Confidence
                    </span>
                  </h1>
                </motion.div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Transform Your AI Journey with PRISM
              </h2>

              <p className="text-lg text-gray-800 max-w-xl mb-8">
                Experience the power of transparent AI governance. Sign up for
                PRISM Free and take the first step towards building trustworthy,
                high-performing AI systems.
              </p>

              <div className="flex items-center space-x-4">
                <Link
                  to="/coming-soon"
                  className="inline-flex items-center justify-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-dark transition-colors shadow-sm hover:shadow-md"
                >
                  Get Started with PRISM Free Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Testimonial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">
                <Quote className="h-12 w-12 text-brand/20 mb-4" />
                <p className="text-gray-800 italic text-lg mb-6 relative z-10">
                  "PRISM is the ultimate game-changer for ethical AI
                  development, offering a seamless blend of transparency,
                  performance, and regulatory compliance."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-700 font-bold">DZ</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Davor Zillac</p>
                    <p className="text-gray-600 text-sm">
                      AML Consultant, D28 Finance
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">
                <Quote className="h-12 w-12 text-brand/20 mb-4" />
                <p className="text-gray-800 italic text-lg mb-6 relative z-10">
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
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-gradient-to-br from-brand-light/10 to-brand-light/5 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Challenge of AI Governance
              </h3>
              <p className="text-gray-800 mb-6">
                As AI becomes increasingly integral to decision-making
                processes, ensuring transparency, fairness, and compliance is
                crucial. However, complex regulatory landscapes and the lack of
                explainability in AI models pose significant challenges.
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
      <section className="py-16 bg-brand-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <span>Enhance transparency and trust in your AI models</span>
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
                  <span>Identify and mitigate bias in AI-driven decisions</span>
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
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/10">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Blockchain-Enabled Storage
              </h4>
              <ul className="text-gray-800 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                  <span>Secure and immutable data storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                  <span>
                    Ensure auditability and compliance with evolving regulations
                  </span>
                </li>
              </ul>
            </div>
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
            <h3 className="text-3xl font-bold text-gray-900 inline-block relative">
              Benefits
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                  Mitigate regulatory and operational risks through transparent
                  AI governance and continuous compliance monitoring.
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
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-brand-light/10 rounded-2xl p-12 shadow-sm"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white p-3 rounded-full shadow-sm">
              <Crown className="h-6 w-6" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Coming Soon: <span className="text-brand">PRISM Pro</span>
            </h3>

            <p className="text-gray-800 max-w-3xl mx-auto mb-10">
              Elevate your compliance and Fintech operations with advanced AI
              governance. Purpose-built for fintech AI teams, PRISM Pro
              accelerates the deployment of models in critical areas such as
              Anti-Money Laundering (AML), Know Your Customer (KYC), and fraud
              detection, all while ensuring strict compliance with evolving AI
              regulations.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-brand" />
                <span className="text-gray-800">
                  Automated Compliance Reporting
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-brand" />
                <span className="text-gray-800">
                  Regulatory Change Management
                </span>
              </div>
            </div>

            <p className="text-xl text-brand italic font-medium">
              Transform compliance from a cost center to a competitive advantage
              with PRISM Pro
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
