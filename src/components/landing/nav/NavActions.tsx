import React from "react";
import { ArrowRight } from "lucide-react";

export const NavActions: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://app.blockconvey.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-brand-light/20 text-gray-900 px-6 py-2.5 rounded-xl hover:bg-brand-light/40 transition-colors font-medium whitespace-nowrap"
      >
        Get Started
        <ArrowRight className="h-4 w-4" />
      </a>
      <a
        href="https://calendly.com/arunprasad-11/product-demo-call"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-brand text-white px-6 py-2.5 rounded-xl hover:bg-brand-dark transition-colors font-medium whitespace-nowrap"
      >
        Book Demo
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
};
