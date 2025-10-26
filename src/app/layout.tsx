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
  alternates: {
    canonical: "https://dovindustries.com",
  },
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
  category: "Technology",
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
    images: [
      {
        url: "https://dovindustries.com/images/dovindustries-bear-white-transparent.png",
        width: 1200,
        height: 630,
        alt: "Dovindustries - Crypto Platforms & VR Research",
      },
    ],
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
  const organizationSchema = {
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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DigiDov",
    applicationCategory: "FinanceTechnologyApplication",
    description:
      "Crypto donation platform for nonprofits with automated tax compliance and IRS form generation.",
    url: "https://digidov.com",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: "Dovindustries",
    },
  };

  return (
    <html lang="en" className="bg-slate-950 text-slate-50">
      <head>
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
