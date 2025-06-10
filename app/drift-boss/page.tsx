import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { driftBossContent } from "./content";

export const metadata: Metadata = {
  title: `Drift Boss | Play Unblocked Game | ${siteConfig.domain}`,
  description: "Play Drift Boss unblocked online for free! Test your timing and precision in this fun 3D drifting game. No download needed – start playing instantly in browser!",
  openGraph: {
    title: `Drift Boss Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Drift Boss - a free skill-based driving game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/drift-boss`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/drift-boss/drift-boss.webp`,
        alt: `Drift Boss Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drift Boss - Free Online Unblocked Game',
    description: 'Play Drift Boss free online game without download',
    images: [`/assets/drift-boss/drift-boss.webp`],
  },
  alternates: {
    canonical: `/drift-boss`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Drift Boss",
    description: "Play Drift Boss - a free skill-based driving game right in your browser. No downloads required.",
    url: "/drift-boss"
  },
  content: driftBossContent
};

export default function DriftBossPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}




