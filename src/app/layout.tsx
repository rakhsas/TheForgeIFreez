import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge",
  description: "Powred by walid oumechtak",
  icons: {
    icon: "/logo.png",
  },
};

import React from "react";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html className="light" lang="en" suppressHydrationWarning>
        {/* <head /> */}
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin=""
          />
        </Head>

        <body
          className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          
        >
          {children}
        </body>
      </html>
    </>
  );
}
