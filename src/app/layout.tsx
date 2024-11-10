import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
import grainImage from "../assets/images/noise.51a05f55.png";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
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
        </div>
      </body>
    </html>
  );
}
