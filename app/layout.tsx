import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header/Header"
import {Footer} from "@/components/Footer/Footer"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desektor",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-gg w-screen overflow-x-hidden scroll-smooth" lang="en">
      <body className={inter.className + ` flex flex-col justify-between w-full`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
