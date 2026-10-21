import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DocsLayoutShell from "@/components/docs-layout-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orbit Docs | Developer Documentation",
    template: "%s | Orbit Docs",
  },
  description:
    "Explore routing, layouts, data fetching, and configuration with Orbit Docs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <DocsLayoutShell>{children}</DocsLayoutShell>
      </body>
    </html>
  );
}
