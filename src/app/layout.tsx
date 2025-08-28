import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomScrollbar from "@/components/Scrollbar";

import "@/style/theme.css";
import "@/style/globals.css";
import "@/style/utility.css";
import "@/style/misc.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MANAA Serine",
  description: "My personal Portfolio!",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
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
        <CustomScrollbar />
        {children}
      </body>
    </html>
  );
}
