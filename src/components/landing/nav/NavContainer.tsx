import React from "react";

export const NavContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <nav className="absolute top-5 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[38px] shadow-sm border border-teal-500/30 px-5 py-2.5">
          {children}
        </div>
      </div>
    </nav>
  );
};
