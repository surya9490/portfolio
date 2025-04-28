"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo.png";
import ScrollProgressBar from "@/components/scrollProgressBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import Search from "@/components/Search";

const links: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Shopify",
    href: "/shopify",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-[99] transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm border-b' 
          : 'bg-transparent'
      } ${isOpen ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image 
                src={Logo} 
                alt="Logo" 
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" 
                priority 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.title}
                  {pathname === link.href && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-100 transition-transform duration-300" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Search />
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-background transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image src={Logo} alt="Logo" className="h-8 w-auto" />
            </Link>
            <button
              className="p-2 rounded-lg hover:bg-accent transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex-1 p-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-300 ${
                  pathname === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-accent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {!isOpen && <ScrollProgressBar />}
    </>
  );
}
