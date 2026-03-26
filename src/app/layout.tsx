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
  metadataBase: new URL("https://www.dev-surya.online"),
  title: {
    default: "Surya Kiran Palipireddy | Senior Shopify Developer & Team Lead",
    template: "%s | Surya Kiran Palipireddy",
  },
  description:
    "Senior Shopify Developer and Team Lead with 3+ years of experience delivering 50+ successful eCommerce projects for brands like UCB, US Polo, Nasher Miles, and Birkenstock. Expert in Liquid, React, JavaScript, and Shopify Plus.",
  keywords: [
    "Surya Kiran",
    "Surya Kiran Palipireddy",
    "Senior Shopify Developer",
    "Shopify Team Lead",
    "Shopify Plus Developer",
    "Shopify Expert India",
    "Frontend Developer",
    "React Developer",
    "eCommerce Developer",
    "Liquid Developer",
    "Shopify Theme Developer",
    "Shopify Custom App Developer",
    "Shopify Store Migration",
    "Core Web Vitals Optimization",
    "Shopify Headless Commerce",
  ],
  authors: [{ name: "Surya Kiran Palipireddy", url: "https://www.dev-surya.online" }],
  creator: "Surya Kiran Palipireddy",
  openGraph: {
    title: "Surya Kiran Palipireddy | Senior Shopify Developer & Team Lead",
    description:
      "50+ eCommerce projects delivered for brands like UCB, US Polo, Nasher Miles. Expert in Shopify, React, and performance optimization.",
    type: "website",
    url: "https://www.dev-surya.online",
    siteName: "Surya Kiran Palipireddy Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Surya Kiran Palipireddy — Senior Shopify Developer & Team Lead Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Kiran Palipireddy | Senior Shopify Developer & Team Lead",
    description:
      "50+ eCommerce projects delivered. Expert in Shopify, React, and performance optimization.",
    images: ["/thumbnail.jpg"],
    creator: "@suryakiran",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.dev-surya.online",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Surya Kiran Palipireddy",
    url: "https://www.dev-surya.online",
    jobTitle: "Senior Shopify Developer & Team Lead",
    description:
      "Senior Shopify Developer and Team Lead with 3+ years of experience delivering 50+ successful eCommerce projects.",
    email: "suryakiran0257@gmail.com",
    telephone: "+918886999441",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kakinada",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/surya-kiran-palipireddy-0bb873217",
      "https://github.com/surya-kiran27",
    ],
    knowsAbout: [
      "Shopify",
      "Shopify Plus",
      "Liquid",
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "eCommerce Development",
      "Frontend Development",
      "Core Web Vitals",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
