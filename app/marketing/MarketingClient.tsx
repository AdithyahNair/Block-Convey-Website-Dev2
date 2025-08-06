"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const MarketingClient: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    companySize: "",
    frameworks: [] as string[],
    referralSource: "",
    isReseller: false,
    allowContact: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showModal, setShowModal] = useState(false);

  const complianceFrameworks = ["ISO 42001", "NIST", "EU AI Act"];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "500+ employees",
  ];

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "India",
    "Singapore",
    "Other",
  ];

  const handleFrameworkToggle = (framework: string) => {
    setFormData((prev) => ({
      ...prev,
      frameworks: prev.frameworks.includes(framework)
        ? prev.frameworks.filter((f) => f !== framework)
        : [...prev.frameworks, framework],
    }));
  };

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
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            companyName: formData.company,
            description: `Marketing Page Lead - Company Size: ${
              formData.companySize
            }, Country: ${
              formData.country
            }, Frameworks: ${formData.frameworks.join(", ")}, Referral: ${
              formData.referralSource
            }, Reseller Interest: ${formData.isReseller}`,
          }),
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
        company: "",
        country: "",
        companySize: "",
        frameworks: [],
        referralSource: "",
        isReseller: false,
        allowContact: true,
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-lightest overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ADD2C933_1px,transparent_1px),linear-gradient(to_bottom,#ADD2C933_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lightest to-transparent" />

      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-light/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[600px] bg-brand/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />

      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer transition-opacity hover:opacity-90">
              <img
                src="/images/logo.svg"
                alt="Block Convey"
                className="h-16 w-40 object-cover object-center transform"
                style={{
                  transform: "scale(1.2)",
                  objectPosition: "center",
                }}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="bg-brand text-white px-6 py-2 rounded-lg font-medium hover:bg-brand/90 transition-colors"
            >
              Schedule a Demo
            </motion.button>
          </div>
        </div>
      </header>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 pt-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI Governance.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">
                  Simplified.
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Quick to deploy. Easy to configure. Streamline your AI
                governance and compliance processes with Block Convey's
                comprehensive platform.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Make the smart choice – pick Block Convey TODAY
            </motion.button>

            {/* Testimonials */}
            <div className="pt-8 space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <blockquote className="text-xl text-gray-900 font-medium italic mb-4">
                  "Block Convey is the best AI governance tool in the space."
                </blockquote>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">Davor Žilić</div>
                  <div>AML Consultant, D28 Finance</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <blockquote className="text-lg text-gray-900 font-medium italic mb-4">
                  "Weeks of compliance work reduced to minutes? That's not just
                  innovation it's operational gold. Great share!"
                </blockquote>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">Sachin S.</div>
                  <div>AI Developer for a Stealth Startup</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <blockquote className="text-lg text-gray-900 font-medium italic mb-4">
                  "The fact that you don't need a data science team to
                  understand the results is huge."
                </blockquote>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">Atul Kumar</div>
                  <div>AI Enthusiast</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                See Block Convey in action
              </h2>
              <p className="text-gray-600">
                Get a personalized demo of our AI governance platform
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First name*"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name*"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
              </div>

              <input
                type="email"
                placeholder="Business email*"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              />

              <input
                type="tel"
                placeholder="Phone number*"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              />

              <input
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              />

              <select
                required
                value={formData.country}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, country: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                <option value="">Headquarters Country*</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <select
                required
                value={formData.companySize}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    companySize: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                <option value="">Company size*</option>
                {companySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>

              {/* Compliance Frameworks */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  What frameworks do you need to comply with?*
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {complianceFrameworks.map((framework) => (
                    <button
                      key={framework}
                      type="button"
                      onClick={() => handleFrameworkToggle(framework)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.frameworks.includes(framework)
                          ? "bg-brand text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {framework}
                    </button>
                  ))}
                </div>
              </div>

              <select
                value={formData.referralSource}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    referralSource: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                <option value="">How did you hear about us?</option>
                <option value="Google/Bing">Google/Bing</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral</option>
                <option value="Conference">Conference</option>
                <option value="Other">Other</option>
              </select>

              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.isReseller}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        isReseller: e.target.checked,
                      }))
                    }
                    className="w-4 h-4 text-brand focus:ring-brand border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I am interested in becoming a Block Convey-authorized
                    Reseller/Partner
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.allowContact}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        allowContact: e.target.checked,
                      }))
                    }
                    className="w-4 h-4 text-brand focus:ring-brand border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I allow Block Convey to contact me for scheduling and
                    marketing, as per its{" "}
                    <a href="/privacy" className="text-brand hover:underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">
                      Thank you! We'll be in touch soon.
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <span className="text-red-800">
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand text-white py-4 rounded-lg font-semibold text-lg hover:bg-brand/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Scheduling..." : "Schedule a call"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full max-h-[95vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Schedule a Demo
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name*"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                />
              </div>

              <input
                type="email"
                placeholder="Business email*"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              />

              <input
                type="tel"
                placeholder="Phone number*"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              />

              <input
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              />

              <select
                required
                value={formData.country}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, country: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                <option value="">Headquarters Country*</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <select
                required
                value={formData.companySize}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    companySize: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                <option value="">Company size*</option>
                {companySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>

              {/* Compliance Frameworks */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What frameworks do you need to comply with?*
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {complianceFrameworks.map((framework) => (
                    <button
                      key={framework}
                      type="button"
                      onClick={() => handleFrameworkToggle(framework)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.frameworks.includes(framework)
                          ? "bg-brand text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {framework}
                    </button>
                  ))}
                </div>
              </div>

              <select
                value={formData.referralSource}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    referralSource: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                <option value="">How did you hear about us?</option>
                <option value="Google/Bing">Google/Bing</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral</option>
                <option value="Conference">Conference</option>
                <option value="Other">Other</option>
              </select>

              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.isReseller}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        isReseller: e.target.checked,
                      }))
                    }
                    className="w-4 h-4 text-brand focus:ring-brand border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I am interested in becoming a Block Convey-authorized
                    Reseller/Partner
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.allowContact}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        allowContact: e.target.checked,
                      }))
                    }
                    className="w-4 h-4 text-brand focus:ring-brand border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I allow Block Convey to contact me for scheduling and
                    marketing, as per its{" "}
                    <a href="/privacy" className="text-brand hover:underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">
                      Thank you! We'll be in touch soon.
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <span className="text-red-800">
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand text-white py-3 rounded-lg font-semibold hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};
