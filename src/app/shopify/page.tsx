import type { Metadata } from "next";
import { projectList } from "./data";
import ShopifyClient from "./ShopifyClient";

export const metadata: Metadata = {
  title: "Shopify Projects",
  description:
    "Explore 50+ Shopify projects by Surya Kiran Palipireddy — including full builds, retainer work, and custom apps for brands like UCB, US Polo, Nasher Miles, Raymonds, Levis, Milton, and Borosil.",
  openGraph: {
    title: "Shopify Projects | Surya Kiran Palipireddy",
    description:
      "Full builds, theme customizations, and store migrations for 15+ enterprise brands on Shopify and Shopify Plus.",
    url: "https://www.dev-surya.online/shopify",
  },
  alternates: {
    canonical: "https://www.dev-surya.online/shopify",
  },
};

export default function ShopifyPage() {
  return <ShopifyClient projectList={projectList} />;
}
