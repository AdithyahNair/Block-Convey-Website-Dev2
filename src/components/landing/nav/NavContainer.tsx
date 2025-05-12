import React from "react";

export const NavContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-2">{children}</div>
      </div>
    </nav>
  );
};
