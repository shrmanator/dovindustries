import Script from "next/script";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { clarityScript, structuredData } from "./site-metadata";
import "./globals.css";
export { metadata, viewport } from "./site-metadata";
const sans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });
const serif = Instrument_Serif({ variable: "--font-instrument-serif", subsets: ["latin"], weight: "400", display: "swap", preload: false });
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <head>{structuredData.map((entry) => <script key={entry.id} type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entry.schema) }} />)}</head>
    <body className={sans.variable + " " + serif.variable}>
      {children}
      <Script id="clarity-script" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: clarityScript }} />
    </body>
  </html>;
}
