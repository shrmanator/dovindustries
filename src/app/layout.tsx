import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Dovindustries - Crypto Platforms & VR Locomotion Research",
  description:
    "Building crypto donation platforms and VR locomotion systems. DigiDov simplifies crypto donations with automated tax compliance. Headset-only VR locomotion research.",
  metadataBase: new URL("https://dovindustries.com"),
  keywords: [
    "crypto platform",
    "blockchain development",
    "crypto donations",
    "tax compliance",
    "VR locomotion",
    "virtual reality",
    "Web3 development",
    "Ethereum",
    "NFT platform",
    "DigiDov",
  ],
  authors: [{ name: "Dovindustries" }],
  appleWebApp: {
    title: "dovindustries",
    statusBarStyle: "black",
  },
  openGraph: {
    title: "Dovindustries - Crypto Platforms & VR Locomotion Research",
    description:
      "Building crypto donation platforms and VR locomotion systems. DigiDov simplifies crypto donations with automated tax compliance.",
    url: "https://dovindustries.com",
    siteName: "Dovindustries",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dovindustries",
    url: "https://dovindustries.com",
    logo: "https://dovindustries.com/images/dovindustries-bear-white-transparent.png",
    description:
      "Building crypto donation platforms and VR locomotion systems.",
    email: "contact@dovindustries.com",
    sameAs: ["https://github.com/shrmanator"],
    foundingDate: "2024",
    keywords:
      "crypto platform, blockchain development, VR locomotion, Web3, Ethereum",
  };

  return (
    <html lang="en" className="bg-slate-950 text-slate-50">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
