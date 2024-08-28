"use client";

import { Box, Button } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Login = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      redirect("/todos");
    }
  }, [session, status]);

  const handleLogin = (provider: string) => async (event: React.MouseEvent) => {
    event.preventDefault();
    const result = await signIn(provider);

    if (result) {
      redirect("/todos");
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="center" p={250}>
        <Button
          w={200}
          bgColor="#b0c4de"
          _hover={{
            backgroundColor: "#4169e1",
            color: "white",
          }}
          _active={{ transform: "scale(0.85)", opacity: 0.1 }}
          onClick={handleLogin("google")}
        >
          Googleでログイン
        </Button>
      </Box>
    </>
  );
};

export default Login;
