import React from "react";

export const NavActions: React.FC = () => {
  return (
    <div className="flex items-center mr-12">
      <a
        href="https://calendly.com/arunprasad-11/product-demo-call"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-brand text-white px-4 py-2 rounded-xl hover:bg-brand-dark transition-all duration-200 font-medium whitespace-nowrap shadow-sm hover:shadow-md text-sm"
      >
        Book Demo
      </a>
    </div>
  );
};
