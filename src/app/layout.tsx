import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga, Russo_One } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/sections/Header";
import { ThemeProviderComponent } from "@/components/provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Surya Kiran Palipireddy | Senior Shopify Developer & Team Lead",
  description:
    "Senior Shopify Developer and Team Lead with 3+ years of experience delivering 50+ successful eCommerce projects. Expert in Liquid, React, JavaScript, and Shopify Plus.",
  keywords: [
    "Surya Kiran",
    "Surya Kiran Palipireddy",
    "Senior Shopify Developer",
    "Shopify Team Lead",
    "Shopify Plus Developer",
    "Frontend Developer",
    "React Developer",
    "eCommerce Developer",
    "Liquid Developer",
    "Shopify Expert",
  ],
  openGraph: {
    title: "Surya Kiran Palipireddy | Senior Shopify Developer & Team Lead",
    description:
      "50+ eCommerce projects delivered. Expert in Shopify, React, and performance optimization.",
    type: "website",
    url: "https://www.dev-surya.online",
    images: [
      {
        url: "/thumbnail.jpg",
        alt: "Surya Kiran Palipireddy Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Kiran Palipireddy | Senior Shopify Developer & Team Lead",
    description:
      "50+ eCommerce projects delivered. Expert in Shopify, React, and performance optimization.",
    images: "/thumbnail.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          russoOne.variable,
          "bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased font-sans min-h-screen transition-colors duration-500"
        )}
      >
        <ThemeProviderComponent>
          <div className="flex flex-col min-h-screen relative">
            <Header />
            <main className="flex-1">{children}</main>
            <Analytics />
            <SpeedInsights />
            <Footer />
          </div>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
