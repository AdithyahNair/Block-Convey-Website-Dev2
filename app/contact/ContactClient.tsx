"use client";
import React from "react";
import { ContactPage } from "../../components/contact/ContactPage";
import { MainLayout } from "../../components/layout/MainLayout";

export default function ContactClient() {
  return (
    <MainLayout>
      <ContactPage />
    </MainLayout>
  );
}
