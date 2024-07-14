import Header from "@/components/ui/header";
import "./css/style.css";
import * as dotenv from "dotenv";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

dotenv.config({
  path: "../.env",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Prodtracker",
  description: "Modern task manager for coders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <Toaster />
          {children}
        </div>
      </body>
    </html>
  );
}
