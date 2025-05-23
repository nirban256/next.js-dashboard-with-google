/**
 * This file defines the root layout for the Next.js Dashboard with Google project.
 * 
 * - Applies custom Google fonts (Geist Sans and Geist Mono) globally.
 * - Wraps all pages with the NextAuth SessionProvider for authentication context.
 * - Imports global styles from `globals.css`.
 * - Sets up basic metadata for SEO.
 * 
 * All pages and components rendered in this app will inherit these settings.
 */


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientSessionProvider from "@/components/ClientSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Dashboard with Google",
  description: "Frontend AI Engineer Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientSessionProvider>
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}