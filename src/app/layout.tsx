import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "User finder",
  description: "Generated by create next app",
};

interface LayoutProps {
  types: string;
  children: ReactNode;
}

export default function RootLayout({ types, children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-dark`}>{children}</body>
    </html>
  );
}
