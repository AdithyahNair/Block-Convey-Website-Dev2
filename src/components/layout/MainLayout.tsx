import React from "react";
// import { AIAgentButton } from '../common/AIAgentButton';
import { Navbar } from "../landing/Navbar";
import { Footer } from "../landing/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { DynamicMetaTags } from "../common/DynamicMetaTags";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useScrollToTop();

  return (
    <>
      <DynamicMetaTags />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
        {/* <AIAgentButton /> */}
      </div>
    </>
  );
};
