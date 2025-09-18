import type { Metadata } from "next";
import { Geist, Geist_Mono, Anta, Audiowide, Tektur, Syncopate, Archivo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/Themecontext";
import { NavMenu } from "@/components/layout/nav-menu";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tektur = Tektur({
  weight: [ "700"],
  variable: "--font-tektur",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  weight: [ "400"],
  variable: "--font-syncopate",
  subsets: ["latin"],
});

const archivo = Archivo({
  weight: [ "400"],
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Overture Agency",
  description: "A modern Next.js application with dark mode support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${geistSans.variable} ${geistMono.variable} ${tektur.variable} ${syncopate.variable} ${archivo.variable} font-sans min-h-screen transition-colors duration-200`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">

            <main className="flex-1 pt-20">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}