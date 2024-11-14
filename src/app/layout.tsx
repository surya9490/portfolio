import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
import grainImage from "../assets/images/noise.51a05f55.png";
import { Footer } from "@/sections/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Surya Kiran Palipireddy | Web Developer Portfolio",
  description: "Surya Kiran Palipireddy's professional portfolio in web development, React, and Shopify.",
  keywords: [
    "Surya Kiran",
    "Surya Kiran Palipireddy",
    "Surya portfolio",
    "Surya Kiran portfolio",
    "web developer",
    "frontend developer",
    "React developer",
    "Shopify developer",
    "Next.js developer",
    "JavaScript developer",
    "professional portfolio",
  ],
  openGraph: {
    title: "Surya Kiran Palipireddy | Web Developer Portfolio",
    description: "Explore projects and skills in React and Shopify development.",
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
    title: "Surya Kiran Palipireddy | Web Developer Portfolio",
    description: "Discover projects and expertise in React and Shopify.",
    images: "/thumbnail.jpg",
  },
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-zinc-900 text-white antialiased font-sans")} 
      style={{ backgroundImage: `url(${grainImage.src})`,backgroundSize: "200px 200px",backgroundPosition: "0 0"}}>
        <div className="">
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
        </div>
      </body>
    </html>
  );
}
