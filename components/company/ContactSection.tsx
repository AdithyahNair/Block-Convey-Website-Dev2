"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Shield, Zap } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwS_bjDPgwCmz0I0QuAflvtkpI-Y3nraBaOXMOEfpy-9PwwpLnyP3R-LQchuCylOMc/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Since no-cors doesn't give us access to the response body,
      // we'll assume success if we get here (no error thrown)
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        description: "",
      });
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Embark on your AI Development with Block Convey Today
            </h2>
            <p className="text-xl text-white mb-8">
              Schedule a consultation with our experts to learn more about how
              we can serve your AI needs.
            </p>

            {/* Benefits Section */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Expert AI Governance
                  </h3>
                  <p className="text-white/90">
                    Get guidance from industry experts with 15+ years of
                    experience in AI governance and regulatory compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Compliance Assurance
                  </h3>
                  <p className="text-white/90">
                    Ensure your AI systems meet evolving regulatory requirements
                    and industry standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Zap className="h-6 w-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Rapid Implementation
                  </h3>
                  <p className="text-white/90">
                    Fast-track your AI governance with our proven frameworks and
                    best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-white/90">
                    Receive ongoing support and guidance throughout your AI
                    governance journey.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand resize-none"
                  placeholder="Tell us about your needs"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-brand text-white py-4 rounded-xl font-medium transition-colors
                  ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-brand-dark"
                  }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-center">
                  Thank you for your submission!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Book a Discussion Button - Now at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://calendly.com/arunprasad-11/product-demo-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Book a Discussion
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
