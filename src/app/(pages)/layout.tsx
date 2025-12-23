import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import React from 'react';
import Header from '~/widgets/header/ui/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Electric avenue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <div className='px-3 max-w-7xl mx-auto min-h-screen flex flex-col'>
          <Header />
          <main>
            {children}
          </main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
