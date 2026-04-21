import localFont from "next/font/local";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { clarityScript, structuredData } from "./site-metadata";
import "./globals.css";

export { metadata, viewport } from "./site-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const rashiHebrew = localFont({
  src: "./fonts/NotoRashiHebrew-Regular.ttf",
  variable: "--font-rashi-hebrew",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/images/dovindustries-bear-white-transparent.png"
        />
        {structuredData.map((entry) => (
          <script
            key={entry.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(entry.schema) }}
          />
        ))}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${rashiHebrew.variable} antialiased`}>
        <Script
          id="clarity-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: clarityScript,
          }}
        />
        {children}
      </body>
    </html>
  );
}
