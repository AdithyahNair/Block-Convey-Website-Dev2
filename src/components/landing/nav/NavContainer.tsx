import React from "react";

export const NavContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <nav className="fixed top-5 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 px-6 py-3">
          {children}
        </div>
      </div>
    </nav>
  );
};
