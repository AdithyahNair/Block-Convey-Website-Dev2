import React from "react";
import { AboutSection } from "../components/company/AboutSection";
import { ContactSection } from "../components/company/ContactSection";
import { MainLayout } from "../components/layout/MainLayout";

export const CompanyPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <main>
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </MainLayout>
  );
};
