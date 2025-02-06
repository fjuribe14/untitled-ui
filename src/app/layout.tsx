import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Untitled UI",
  description: "Test Frontend Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          "flex flex-col min-h-screen antialiased bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50"
        )}>
        {children}
      </body>
    </html>
  );
}
