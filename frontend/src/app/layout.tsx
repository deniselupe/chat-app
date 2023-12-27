import "@/styles/globals.css";
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SessionProvider } from "@/contexts/session";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <body className="md:h-screen tracking-wide flex flex-col">
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}