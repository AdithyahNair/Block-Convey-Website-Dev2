"use client";
import React from "react";
import { AboutSection } from "../../components/company/AboutSection";
import { MainLayout } from "../../components/layout/MainLayout";

export default function CompanyClient() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <main>
          <AboutSection />
        </main>
      </div>
    </MainLayout>
  );
}
