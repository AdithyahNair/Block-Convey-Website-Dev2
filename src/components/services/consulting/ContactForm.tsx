import React from "react";
import { motion } from "framer-motion";

export const ContactForm: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-brand-light/30"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Build Solutions Together</h3>
      <p className="text-gray-600 mb-6">
        Get in touch with our experts to discuss your specific needs and challenges.
      </p>

      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service of Interest
          </label>
          <select
            id="service"
            className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
          >
            <option value="">Select a service</option>
            <option value="ai">AI Consulting</option>
            <option value="blockchain">Blockchain Consulting</option>
            <option value="security">Security & Compliance</option>
            <option value="implementation">Implementation Support</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
            placeholder="Tell us about your project or requirements"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-dark transition-colors"
        >
          Get in Touch
        </button>
      </form>
    </motion.div>
  );
};