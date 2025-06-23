import React from "react";
import { ConsultingService } from "../components/services/ConsultingService";
import { MainLayout } from "../components/layout/MainLayout";

export const ConsultingPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <main>
          <ConsultingService />
        </main>
      </div>
    </MainLayout>
  );
};
