"use client";

import { Box, Button } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const LoginPage = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      redirect("/");
    }
  }, [session, status]);

  const handleLogin = (provider: string) => async (event: React.MouseEvent) => {
    event.preventDefault();
    const result = await signIn(provider);

    if (result) {
      redirect("/");
    }
  };

  return <Button onClick={handleLogin("google")}>Googleでログイン</Button>;
};

export default LoginPage;
