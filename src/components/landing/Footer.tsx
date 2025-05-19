import React from "react";
import { FooterLogo } from "./footer/FooterLogo";
import { FooterNavLinks } from "./footer/FooterNavLinks";
import { FooterSocialLinks } from "./footer/FooterSocialLinks";
import { FooterCopyright } from "./footer/FooterCopyright";
import { NewsletterForm } from "./footer/NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-brand-lightest to-white border-t border-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3 space-y-4">
            <div className="mb-0">
              <FooterLogo />
            </div>
            <div className="text-gray-600 max-w-md space-y-2">
              <p className="font-medium text-gray-700">
                The Fastest Path to AI Compliance
              </p>
              <p className="text-sm">
                Secure, transparent, and audit-ready AI governance powered by
                blockchain technology.
              </p>
            </div>
            <NewsletterForm />
          </div>
          <div className="lg:col-span-9">
            <FooterNavLinks />
          </div>
        </div>
        <div className="border-t border-brand-light/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <FooterCopyright />
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
};
