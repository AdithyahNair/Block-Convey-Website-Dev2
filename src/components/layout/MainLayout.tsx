import React from "react";
import { Navbar } from "../landing/Navbar";
import { Footer } from "../landing/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { DynamicMetaTags } from "../common/DynamicMetaTags";
import { StructuredData } from "../common/StructuredData";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useScrollToTop();

  return (
    <>
      {/* Enhanced Meta Tags */}
      <DynamicMetaTags />
      <StructuredData />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </div>
    </>
  );
};
