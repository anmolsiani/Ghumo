import type { Metadata } from "next";
import { Oxanium, Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const oxanium = Oxanium({ 
  subsets: ["latin"],
  variable: '--font-oxanium',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ghumo Holidays | Premium Travel Experiences",
  description: "Explore 43 curated packages across 8 stunning Indian states.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${inter.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
