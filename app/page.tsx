"use client";

import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[var(--font-geist-sans)]">
      <header className="mb-8 text-center">
        <Image
          className="dark:invert mx-auto"
          src="/dovcoin.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </header>
      <Tabs defaultValue="crypto">
        <TabsList className="mb-4 flex justify-center gap-4">
          <TabsTrigger value="crypto" className="px-4 py-2">
            Crypto
          </TabsTrigger>
          <TabsTrigger value="vr" className="px-4 py-2">
            VR
          </TabsTrigger>
          <TabsTrigger value="other" className="px-4 py-2">
            Other
          </TabsTrigger>
        </TabsList>
        <TabsContent value="crypto" className="p-4">
          <h2 className="text-2xl font-bold mb-2">Crypto Projects</h2>
          <p>
            Here you can showcase your crypto-related projects. Describe your blockchain apps, DeFi platforms, NFTs, or any crypto innovation.
          </p>
        </TabsContent>
        <TabsContent value="vr" className="p-4">
          <h2 className="text-2xl font-bold mb-2">VR Projects</h2>
          <p>
            Display your VR experiences here. Whether it’s immersive environments or VR-based games, share your projects and ideas.
          </p>
        </TabsContent>
        <TabsContent value="other" className="p-4">
          <h2 className="text-2xl font-bold mb-2">Other Projects</h2>
          <p>
            List any other projects you’re working on that don’t fit the above categories.
          </p>
        </TabsContent>
      </Tabs>
      <footer className="mt-16 flex flex-col sm:flex-row gap-6 items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
