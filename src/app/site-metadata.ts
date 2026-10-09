import type { Metadata, Viewport } from "next";
const SITE_URL = "https://www.dovindustries.com";
const SITE_TITLE = "Dovindustries | Software, hardware & research";
const SITE_DESCRIPTION = "Live projects in seforim and crypto donations. Research in AI drawing, movement in VR, and compact electric transport. Explore the work of Dovindustries.";
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
  alternates: { canonical: SITE_URL },
  authors: [{ name: "Dovindustries" }],
  category: "Technology",
  openGraph: {
    title: SITE_TITLE, description: SITE_DESCRIPTION, url: SITE_URL,
    siteName: "Dovindustries", locale: "en_US", type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dovindustries — software, hardware, and room to explore" }],
  },
  twitter: {
    card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f8f9fa" };
export const structuredData = [{
  id: "organization",
  schema: {
    "@context": "https://schema.org", "@type": "Organization",
    name: "Dovindustries", alternateName: "Dov Industries", url: SITE_URL,
    logo: SITE_URL + "/images/bear-mark.webp", description: SITE_DESCRIPTION,
    email: "contact@dovindustries.com", sameAs: ["https://github.com/shrmanator"],
  },
}, {
  id: "website",
  schema: {
    "@context": "https://schema.org", "@type": "WebSite",
    name: "Dovindustries", url: SITE_URL, description: SITE_DESCRIPTION,
  },
}];
