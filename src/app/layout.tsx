import type { Metadata } from "next";
import { Geist, Geist_Mono, Anta, Audiowide, Tektur, Syncopate, Archivo, Afacad } from "next/font/google";
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

const afacad = Afacad({
  weight: [ "400","500","600","700"],
  variable: "--font-afacad",
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
      <body className={`${afacad.variable} 
        bg-white dark:bg-zinc-900
        `}>
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