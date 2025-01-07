import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { Shield, Lock, Eye, FileText, Database, Bell } from "lucide-react";
import { motion } from "framer-motion";

export const PrivacyPage: React.FC = () => {
  const sections = [
    {
      icon: Shield,
      title: "Data Collection",
      content: `We collect information that you provide directly to us, including when you:
        • Create an account or update your profile
        • Use our AI governance and blockchain services
        • Contact us for support or information
        • Subscribe to our newsletters
        • Participate in surveys or promotions`,
    },
    {
      icon: Lock,
      title: "Data Security",
      content: `We implement robust security measures to protect your data:
        • End-to-end encryption for sensitive information
        • Regular security audits and penetration testing
        • Secure blockchain infrastructure
        • Industry-standard SSL/TLS encryption
        • Access controls and authentication protocols`,
    },
    {
      icon: Eye,
      title: "Data Usage",
      content: `We use your information to:
        • Provide and improve our services
        • Personalize your experience
        • Process transactions
        • Send service updates and marketing communications
        • Comply with legal obligations
        • Analyze and enhance platform security`,
    },
    {
      icon: Database,
      title: "Data Storage",
      content: `Your data is stored securely:
        • On encrypted cloud servers
        • Using decentralized blockchain storage
        • With regular backups
        • Following data retention policies
        • In compliance with relevant regulations`,
    },
    {
      icon: Bell,
      title: "Your Rights",
      content: `You have the right to:
        • Access your personal data
        • Request data correction
        • Delete your account
        • Opt-out of marketing
        • Export your data
        • File a complaint`,
    },
    {
      icon: FileText,
      title: "Updates to Policy",
      content: `We may update this Privacy Policy periodically:
        • Changes will be posted on this page
        • Significant changes will be notified via email
        • Continued use constitutes acceptance
        • Previous versions will be archived
        • Updates effective upon posting`,
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600">
                At Block Convey, we take your privacy seriously. This policy
                outlines how we collect, use, and protect your personal
                information.
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
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our Data Protection Officer for any privacy-related
                concerns.
              </p>
              <a
                href="mailto:privacy@blockconvey.com"
                className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-dark transition-colors"
              >
                Contact DPO
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
