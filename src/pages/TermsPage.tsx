import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import {
  Scale,
  FileCheck,
  AlertTriangle,
  Ban,
  Wallet,
  ScrollText,
} from "lucide-react";
import { motion } from "framer-motion";

export const TermsPage: React.FC = () => {
  const sections = [
    {
      icon: FileCheck,
      title: "Agreement to Terms",
      content: `By accessing our services, you agree to these Terms of Service:
        • These terms govern your use of Block Convey
        • You must be at least 18 years old to use our services
        • You must have the authority to accept these terms
        • You are responsible for maintaining account security
        • Violation of terms may result in account termination`,
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: `Rights and ownership of content and services:
        • All platform content is our intellectual property
        • You retain ownership of your uploaded data
        • Limited license to use our services
        • Prohibition on unauthorized use
        • Respect for third-party intellectual property`,
    },
    {
      icon: Wallet,
      title: "Payment Terms",
      content: `Financial terms and conditions:
        • Subscription fees are billed in advance
        • All payments are non-refundable
        • Automatic renewal unless cancelled
        • Price changes with 30 days notice
        • Taxes may apply to all transactions`,
    },
    {
      icon: AlertTriangle,
      title: "Limitations of Liability",
      content: `Scope of our liability:
        • Services provided "as is"
        • No warranty of uninterrupted service
        • Limited liability for damages
        • Force majeure exceptions
        • Indemnification requirements`,
    },
    {
      icon: Ban,
      title: "Prohibited Activities",
      content: `Activities not permitted on our platform:
        • Unauthorized access attempts
        • Distribution of malware
        • Data scraping without permission
        • Violation of others' rights
        • Interference with service operation`,
    },
    {
      icon: ScrollText,
      title: "Modifications",
      content: `Changes to terms and services:
        • Right to modify terms at any time
        • Notice of material changes
        • Continued use implies acceptance
        • Right to discontinue services
        • Regular review of terms recommended`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div
          id="hero"
          className="relative pt-32 pb-16 bg-gradient-to-b from-brand-lightest to-white"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600">
                Please read these terms carefully before using Block Convey's
                services. By using our services, you agree to be bound by these
                terms.
              </p>
              <p className="text-gray-600 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-brand-light/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-light/20 rounded-xl">
                      <section.icon className="h-6 w-6 text-brand" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-gray-600 whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-brand-lightest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our legal team for any questions about these terms.
              </p>
              <a
                href="mailto:legal@blockconvey.com"
                className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-dark transition-colors"
              >
                Contact Legal Team
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
