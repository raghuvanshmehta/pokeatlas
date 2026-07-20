import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "PokéAtlas — The Pokémon Encyclopedia", template: "%s · PokéAtlas" },
  description: "A beautiful, open Pokémon encyclopedia for curious trainers.",
  openGraph: { title: "PokéAtlas — The Pokémon Encyclopedia", description: "Explore every Pokémon, region, type, move and ability.", type: "website" },
  twitter: { card: "summary_large_image", title: "PokéAtlas", description: "Your pocket guide to the Pokémon world." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${inter.variable} ${space.variable}`}><SiteShell>{children}</SiteShell></body></html>;
}
