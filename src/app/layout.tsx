import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga, Russo_One } from "next/font/google";
import { twMerge } from "tailwind-merge";
import grainImage from "../assets/images/noise.51a05f55.png";
import { Footer } from "@/sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/sections/Header";
import { ThemeProviderComponent } from "@/components/provider";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dev-surya.online'),
  title: {
    default: "Surya Kiran Palipireddy | Web Developer Portfolio",
    template: "%s | Surya Kiran Palipireddy"
  },
  description:
    "Surya Kiran Palipireddy's professional portfolio in web development, React, and Shopify.",
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
    description:
      "Explore projects and skills in React and Shopify development.",
    type: "website",
    url: "https://www.dev-surya.online",
    images: [
      {
        url: "/thumbnail.jpg",
        alt: "Surya Kiran Palipireddy Portfolio Preview",
        width: 1200,
        height: 630
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Kiran Palipireddy | Web Developer Portfolio",
    description: "Discover projects and expertise in React and Shopify.",
    images: "/thumbnail.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          russoOne.variable,
          "bg-neutral-100 dark:bg-zinc-900 text-zinc-900 dark:text-white antialiased font-sans h-full transition-colors duration-300 ease-in-out selection:bg-[rgb(222_29_141)]/20 selection:text-[rgb(222_29_141)]"
        )}
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundSize: "200px 200px",
          backgroundPosition: "0 0",
        }}
      >
        <ThemeProviderComponent>
          <ErrorBoundary>
            <div className="flex flex-col min-h-screen transition-colors duration-300 ease-in-out">
              <Header />
              <main className="flex-1 transition-colors duration-300 ease-in-out">{children}</main>
              <Analytics />
              <SpeedInsights />
              <Footer />
            </div>
          </ErrorBoundary>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
