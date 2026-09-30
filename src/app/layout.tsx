import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/client/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus Hardware & Tech",
  description: "E-commerce platform implementing CSR, SSR, SSG, and ISR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}