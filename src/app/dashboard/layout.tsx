"use client";
import Header from "@/components/Header";
import TitleHeader from "@/components/TitleHeader";
import { TitleProvider } from "@/context/TitleContext";
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
          <section>
            <Header />
            <TitleHeader />
            <div >{children}</div>
          </section>
        </TitleProvider>
      </body>
    </html>
  );
}