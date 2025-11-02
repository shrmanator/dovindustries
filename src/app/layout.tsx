import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Dovindustries | Crypto Donations, VR Locomotion & Electric Transport | Toronto Tech",
  description:
    "Toronto technology company building DigiDov (IRS-compliant crypto donation platform for nonprofits), headset-only VR locomotion systems, and compact electric transport. Innovation in Web3, virtual reality, and sustainable mobility.",
  metadataBase: new URL("https://dovindustries.com"),
  alternates: {
    canonical: "https://dovindustries.com",
  },
  keywords: [
    "crypto donation platform",
    "nonprofit crypto donations",
    "IRS compliant crypto donations",
    "VR locomotion technology",
    "walk in place VR",
    "headset only VR movement",
    "electric transport Toronto",
    "technology company Toronto",
    "product development",
    "DigiDov",
    "Web3 donations",
    "blockchain donations",
    "VR research",
    "sensor fusion VR",
    "compact electric vehicle",
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
    other: [{ rel: "manifest", url: "/manifest.json" }],
  },
  openGraph: {
    title: "Dovindustries | Crypto Donations, VR Locomotion & Electric Transport",
    description:
      "Toronto technology company building DigiDov (IRS-compliant crypto donation platform), headset-only VR locomotion systems, and compact electric transport. Innovation in Web3, VR, and sustainable mobility.",
    url: "https://dovindustries.com",
    siteName: "Dovindustries",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dovindustries.com/images/dovindustries-bear-white-transparent.png",
        width: 1200,
        height: 630,
        alt: "Dovindustries - Toronto Technology Company - Crypto Donations, VR Research, Electric Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dovindustries | Crypto Donations, VR Locomotion & Electric Transport",
    description:
      "Toronto tech company building DigiDov (crypto donation platform), VR locomotion systems, and electric transport.",
    images: ["https://dovindustries.com/images/dovindustries-bear-white-transparent.png"],
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
    alternateName: "Dov Industries",
    url: "https://www.dovindustries.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.dovindustries.com/images/dovindustries-bear-black-transparent.png",
      width: "800",
      height: "800",
      caption: "Dovindustries Logo",
    },
    image: "https://www.dovindustries.com/images/dovindustries-bear-black-transparent.png",
    description:
      "Technology company building DigiDov crypto donation platform, VR locomotion systems, and electric transport solutions. Based in Toronto, focused on innovation in Web3, virtual reality, and sustainable mobility.",
    email: "contact@dovindustries.com",
    sameAs: ["https://github.com/shrmanator"],
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
    keywords:
      "crypto donation platform, nonprofit crypto donations, VR locomotion, headset-only VR, electric transport, Web3 technology, blockchain donations, sensor fusion VR",
  };

  const digiDovProductSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DigiDov",
    applicationCategory: "FinanceTechnologyApplication",
    description:
      "IRS-compliant crypto donation platform for nonprofits. Accepts cryptocurrency donations, auto-generates tax receipts and IRS Form 8283, handles compliance. Nonprofits receive USD deposits without managing crypto wallets.",
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
    featureList: [
      "Crypto donation acceptance",
      "Automated IRS Form 8283 generation",
      "Tax-compliant receipts",
      "No crypto knowledge required",
      "USD deposit conversion",
      "Multi-cryptocurrency support",
    ],
    applicationSubCategory: "Cryptocurrency, Nonprofit Management, Tax Compliance",
  };

  const vrProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "VR Walk-in-Place Locomotion System",
    description:
      "Headset-only VR locomotion technology using sensor fusion. Walk in place to move in virtual reality without external hardware, trackers, or treadmills. Natural movement using IMU data and head tracking algorithms.",
    category: "Virtual Reality Technology",
    brand: {
      "@type": "Organization",
      name: "Dovindustries",
      url: "https://www.dovindustries.com",
    },
    image: "https://www.dovindustries.com/images/dovindustries-bear-black-transparent.png",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      url: "https://www.dovindustries.com#vr",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dovindustries.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "DigiDov",
        item: "https://dovindustries.com#digidov",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "VR Locomotion",
        item: "https://dovindustries.com#vr",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Electric Transport",
        item: "https://dovindustries.com#transport",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dovindustries",
    url: "https://dovindustries.com",
    description:
      "Toronto technology company building innovative products in crypto donations, VR locomotion, and electric transport.",
    publisher: {
      "@type": "Organization",
      name: "Dovindustries",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dovindustries.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="bg-slate-950 text-slate-50">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Toronto technology company building DigiDov (IRS-compliant crypto donation platform for nonprofits), headset-only VR locomotion systems, and compact electric transport. Innovation in Web3, virtual reality, and sustainable mobility."
        />
        {/* Preconnect common font origins and preload the main social/OG image used in metadata */}
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
        <link rel="canonical" href="https://dovindustries.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(digiDovProductSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(vrProductSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
        suppressHydrationWarning
      >
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tydx5dffoa");
            `,
          }}
        />
        <Script
          id="suppress-radix-warnings"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const originalWarn = console.warn;
                console.warn = (...args) => {
                  if (args[0]?.includes?.('DialogContent') || args[0]?.includes?.('DialogTitle')) {
                    return;
                  }
                  originalWarn.apply(console, args);
                };
              }
            `,
          }}
        />
        <ConsoleMessage />
        {children}
      </body>
    </html>
  );
}
