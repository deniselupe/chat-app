import "@/styles/globals.css";
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SessionProvider } from "@/contexts/session";

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
    <html lang="en" className={`${outfitClassName} bg-custom-purple`}>
      <body className="tracking-wide">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}