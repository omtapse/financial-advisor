import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

const calSans = localFont({
  src: [
    {
      path: '../../public/fonts/CalSans-SemiBold.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/CalSans-SemiBold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-raleway'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={calSans.className}>{children}</body>
    </html>
  );
}
