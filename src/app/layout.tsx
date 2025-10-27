import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ConsoleMessage } from "@/components/console-message";
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
  title: "Dovindustries — Technology company & R&D",
  description:
    "Dovindustries — Toronto-based technology company building DigiDov (crypto donations), VR locomotion systems, and compact electric transport. R&D and product development.",
  metadataBase: new URL("https://dovindustries.com"),
  alternates: {
    canonical: "https://dovindustries.com",
  },
  keywords: [
    "technology company",
    "product development",
    "crypto platform",
    "VR research",
    "DigiDov",
    "Web3",
    "R&D",
  ],
  authors: [{ name: "Dovindustries" }],
  category: "Technology",
  appleWebApp: {
    title: "dovindustries",
    statusBarStyle: "black",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/manifest.json" },
    ],
  },
  openGraph: {
  title: "Dovindustries — Technology company & R&D",
    description:
      "Dovindustries — Toronto-based technology company building DigiDov (crypto donations), VR locomotion systems, and compact electric transport.",
    url: "https://dovindustries.com",
    siteName: "Dovindustries",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dovindustries.com/images/dovindustries-bear-white-transparent.png",
        width: 1200,
        height: 630,
        alt: "Dovindustries - Technology Company",
      },
    ],
  },
  // No Twitter metadata included (no Twitter account configured)
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
      "Technology company. Built DigiDov crypto donation platform, VR locomotion systems, and other products.",
    email: "contact@dovindustries.com",
    sameAs: ["https://github.com/shrmanator"],
    foundingDate: "2024",
    keywords:
      "technology company, product development, crypto platform, VR research",
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
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="canonical" href="https://dovindustries.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Dovindustries",
              url: "https://dovindustries.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://dovindustries.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
        suppressHydrationWarning
      >
        <ConsoleMessage />
        {children}
      </body>
    </html>
  );
}
