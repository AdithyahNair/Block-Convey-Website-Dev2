"use client";
import React from "react";
import { Navbar } from "../landing/Navbar";
import { Footer } from "../landing/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { StructuredData } from "../common/StructuredData";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useScrollToTop();

  return (
    <>
      <StructuredData />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
