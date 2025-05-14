import React from "react";

export const NavActions: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://prism.blockconvey.com"
        className="inline-flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full text-sm font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started
      </a>
      <a
        href="https://calendly.com/arunprasad-11/product-demo-call"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center text-teal-600 border border-teal-600 hover:bg-teal-50 px-4 py-2 rounded-full text-sm font-medium"
      >
        Book Demo
      </a>
    </div>
  );
};
