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
  title: "Dovindustries - Projects & Experiments",
  description:
    "Explore the latest Dovindustries experiments, prototypes, and production work across design, code, and emerging interfaces.",
  metadataBase: new URL("https://dovindustries.com"),
  openGraph: {
    title: "Dovindustries",
    description:
      "The active playground for dovin - product experiments, design systems, and production feats.",
    url: "https://dovindustries.com",
    siteName: "Dovindustries",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dovindustries",
    description:
      "Dovindustries: shipping interfaces, pipelines, and beautiful systems.",
    creator: "@dovin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-50">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
