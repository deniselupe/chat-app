import React from "react";
import NavBar from "@/components/navbar";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { SessionProvider } from "@/contexts/session";
import { Metadata } from "next";

const outfit = Outfit({ weight: ["300", "400", "700"], subsets: ["latin"] });
const outfitClassName = outfit.className;

export const metadata: Metadata = {
  title: "Chat App",
  description: "A chat app built with Next.js"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${outfitClassName} h-screen w-screen bg-custom-purple`}>
      <body className="tracking-wide">
        <SessionProvider>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}