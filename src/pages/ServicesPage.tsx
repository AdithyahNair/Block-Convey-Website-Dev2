import React from "react";
import { StorageService } from "../components/services/StorageService";
import { ServicesCTA } from "../components/common/cta/ServicesCTA";
import { MainLayout } from "../components/layout/MainLayout";

export const ServicesPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <main>
          <StorageService />
          <ServicesCTA />
        </main>
      </div>
    </MainLayout>
  );
};
