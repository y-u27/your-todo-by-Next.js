"use client"

import LoginPage from "@/components/Login";
import { SessionProvider } from "next-auth/react";
import React from "react";

const authPage = () => {
  return (
    <SessionProvider>
      <LoginPage />
    </SessionProvider>
  );
};

export default authPage;
