"use client";

import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import Link from "next/link";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <SessionProvider>
          <ChakraProvider>
            <Link href="/todos">
              <Header />
            </Link>
            <RecoilRoot>{children}</RecoilRoot>
          </ChakraProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
