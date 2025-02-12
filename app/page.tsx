"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[var(--font-geist-sans)]">
      <header className="mb-8 text-center">
        <Image
          className="dark:invert mx-auto"
          src="/dovcoin.png"
          alt="DovCoin Logo"
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
            Here you can showcase your crypto-related projects. Describe your
            blockchain apps, DeFi platforms, NFTs, or any crypto innovation.
          </p>
        </TabsContent>
        <TabsContent value="vr" className="p-4">
          <h2 className="text-2xl font-bold mb-2">VR Projects</h2>
          <p>
            Display your VR experiences here. Whether it’s immersive
            environments or VR-based games, share your projects and ideas.
          </p>
        </TabsContent>
        <TabsContent value="other" className="p-4">
          <h2 className="text-2xl font-bold mb-2">Other Projects</h2>
          <p>
            List any other projects you’re working on that don’t fit the above
            categories.
          </p>
        </TabsContent>
      </Tabs>
      <footer className="mt-16 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DovCoin. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
