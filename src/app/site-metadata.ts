import type { Metadata, Viewport } from "next";

const SITE_URL = "https://dovindustries.com";
const SITE_TITLE =
  "Dovindustries | Crypto Donations, VR Locomotion & Electric Transport";
const SITE_DESCRIPTION =
  "Technology company building DigiDov (IRS-compliant crypto donation platform for nonprofits), headset-only VR locomotion systems, and compact electric transport. Innovation in Web3, virtual reality, and sustainable mobility.";
const SITE_OG_IMAGE =
  `${SITE_URL}/images/dovindustries-bear-white-transparent.png`;
const SITE_LOGO =
  `${SITE_URL}/images/dovindustries-bear-black-transparent.png`;

export const clarityScript = `
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "tydx5dffoa");
`;

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  keywords: [
    "crypto donation platform",
    "nonprofit crypto donations",
    "IRS compliant crypto donations",
    "VR locomotion technology",
    "walk in place VR",
    "headset only VR movement",
    "electric transport",
    "technology company",
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
    title: "Dovindustries",
    statusBarStyle: "black",
  },
  icons: {
    icon: [
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/web-app-manifest-192x192.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Dovindustries",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dovindustries - Technology Company - Crypto Donations, VR Research, Electric Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Technology company building DigiDov (crypto donation platform), VR locomotion systems, and electric transport.",
    images: [SITE_OG_IMAGE],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const structuredData = [
  {
    id: "organization",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Dovindustries",
      alternateName: "Dov Industries",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
        width: "800",
        height: "800",
        caption: "Dovindustries Logo",
      },
      image: SITE_LOGO,
      description: SITE_DESCRIPTION,
      email: "contact@dovindustries.com",
      sameAs: ["https://github.com/shrmanator"],
      foundingDate: "2024",
      foundingLocation: {
        "@type": "Place",
        name: "Canada",
      },
      areaServed: {
        "@type": "Place",
        name: "Global",
      },
      keywords:
        "crypto donation platform, nonprofit crypto donations, VR locomotion, headset-only VR, electric transport, Web3 technology, blockchain donations, sensor fusion VR",
    },
  },
  {
    id: "digidov",
    schema: {
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
        url: SITE_URL,
      },
      featureList: [
        "Crypto donation acceptance",
        "Automated IRS Form 8283 generation",
        "Tax-compliant receipts",
        "No crypto knowledge required",
        "USD deposit conversion",
        "Multi-cryptocurrency support",
      ],
      applicationSubCategory:
        "Cryptocurrency, Nonprofit Management, Tax Compliance",
    },
  },
  {
    id: "vr",
    schema: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "VR Walk-in-Place Locomotion System",
      description:
        "Headset-only VR locomotion technology using sensor fusion. Walk in place to move in virtual reality without external hardware, trackers, or treadmills. Natural movement using IMU data and head tracking algorithms.",
      category: "Virtual Reality Technology",
      brand: {
        "@type": "Organization",
        name: "Dovindustries",
        url: SITE_URL,
      },
      image: SITE_LOGO,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        price: "0",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        url: `${SITE_URL}#vr`,
      },
    },
  },
  {
    id: "breadcrumbs",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "DigiDov",
          item: `${SITE_URL}#digidov`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "VR Locomotion",
          item: `${SITE_URL}#vr`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Electric Transport",
          item: `${SITE_URL}#transport`,
        },
      ],
    },
  },
  {
    id: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Dovindustries",
      url: SITE_URL,
      description:
        "Technology company building innovative products in crypto donations, VR locomotion, and electric transport.",
      publisher: {
        "@type": "Organization",
        name: "Dovindustries",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  },
] as const;
