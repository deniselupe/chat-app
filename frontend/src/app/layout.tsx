import React from "react";
import NavBar from "@/components/navbar";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ weight: ["300", "400", "700"], subsets: ["latin"] });
const outfitClassName = outfit.className;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${outfitClassName} h-screen w-screen bg-gradient-to-br from-seecho-darkgreen to-seecho-lightgreen`}>
      <body className="tracking-wide">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
