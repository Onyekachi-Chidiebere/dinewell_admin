"use client";

import { useTitle } from "@/context/TitleContext";
import React from "react";

const TitleHeader = () => {
  const { title, action, actionText } = useTitle();

  return (
    <header
      className="max-w-full bg-white flex items-center justify-between"
      style={{
        padding: "20px 52px",
        borderBottom: "1px solid #E2E8F0",
        background: "url('/maze-bg.svg') no-repeat right 32px center, linear-gradient(90deg, #F5F5FF 0%, #F6F8FA 100%)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-red-hat-display)",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: "37.04px",
          color: "#828DA9",
        }}
      >
        {title}
      </h1>
      {action && actionText && (
        <button
          onClick={action}
          style={{
            fontFamily: "var(--font-red-hat-display)",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "18.52px",
            color: "#FFFFFF",
            backgroundColor: "#9B87F6",
            padding: "10px 20px",
            borderRadius: "24px",
            borderColor: "#D2D3F3",
            cursor: "pointer",
          }}
        >
          {actionText}
        </button>
      )}
    </header>
  );
};

export default TitleHeader;