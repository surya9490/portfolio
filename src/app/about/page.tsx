import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Surya Kiran Palipireddy — Senior Shopify Developer & Team Lead with 3+ years of experience delivering 50+ eCommerce projects for brands like UCB, US Polo, Nasher Miles, and Birkenstock.",
  openGraph: {
    title: "About Surya Kiran Palipireddy | Senior Shopify Developer",
    description:
      "3+ years of experience, 50+ eCommerce projects, 15+ enterprise brands. Skills in Shopify, Liquid, React, JavaScript, and performance optimization.",
    url: "https://www.dev-surya.online/about",
  },
  alternates: {
    canonical: "https://www.dev-surya.online/about",
  },
};

export default function About() {
  return <AboutClient />;
}
