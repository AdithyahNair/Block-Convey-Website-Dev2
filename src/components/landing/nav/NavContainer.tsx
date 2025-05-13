import React from "react";

export const NavContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-full shadow-md px-6 py-2">
          {children}
        </div>
      </div>
    </nav>
  );
};
