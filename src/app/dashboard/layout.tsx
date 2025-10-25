"use client";
import Header from "@/components/Header";
import TitleHeader from "@/components/TitleHeader";
import { TitleProvider } from "@/context/TitleContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TitleProvider>
          <ProtectedRoute>
            <section>
              <Header />
              <TitleHeader />
              <div >{children}</div>
            </section>
          </ProtectedRoute>
        </TitleProvider>
      </body>
    </html>
  );
}