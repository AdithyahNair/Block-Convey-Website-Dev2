"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { MainLayout } from "../components/layout/MainLayout";

const ComingSoonPage: React.FC = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="min-h-screen bg-brand-lightest">
        {/* Coming Soon Content */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-brand-light/10 p-12"
            >
              <Clock className="h-16 w-16 text-brand mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Coming Soon
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Our application portal is currently in development and will be
                available soon. Thank you for your patience as we put the
                finishing touches on our platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => router.back()}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Go Back
                </button>
                <a
                  href="https://calendly.com/arunprasad-11/product-demo-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand text-white hover:bg-brand-dark px-6 py-3 rounded-xl transition-colors"
                >
                  Book a Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ComingSoonPage;
