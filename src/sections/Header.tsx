"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo.png";
import ScrollProgressBar from "@/components/scrollProgressBar";
import { ThemeToggle } from "@/components/ThemeToggle";

const links: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Shopify", href: "/shopify" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navBgRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const link = event.currentTarget;
    const nav = navRef.current;
    if (nav && navBgRef.current) {
      const linkRect = link.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      navBgRef.current.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
      navBgRef.current.style.width = `${linkRect.width}px`;
      navBgRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeaveNav = () => {
    if (navBgRef.current) {
      navBgRef.current.style.opacity = "0";
      navBgRef.current.style.transform = "translateY(-50%) scale(0.95)";
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-[99] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm' 
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
            <nav 
              ref={navRef}
              className="hidden md:flex items-center space-x-6 relative"
              onMouseLeave={handleMouseLeaveNav}
            >
              <div className="absolute inset-0 pointer-events-none">
                <span 
                  ref={navBgRef} 
                  className="absolute h-9 bg-[rgb(222_29_141)]/10 backdrop-blur-sm rounded-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 shadow-[0_0_20px_rgba(222,29,141,0.15)] border border-[rgb(222_29_141)]/20"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                />
              </div>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    pathname === link.href
                      ? 'text-[rgb(222_29_141)]'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-[rgb(222_29_141)]'
                  }`}
                  onMouseEnter={(e) => {
                    if (navBgRef.current) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const navRect = navRef.current?.getBoundingClientRect();
                      if (navRect) {
                        navBgRef.current.style.left = `${rect.left - navRect.left}px`;
                        navBgRef.current.style.width = `${rect.width}px`;
                        navBgRef.current.style.opacity = "1";
                        navBgRef.current.style.transform = `translateY(-50%) scale(1.05)`;
                      }
                    }
                  }}
                >
                  {link.title}
                  {pathname === link.href && (
                    <span 
                      className="absolute inset-0 rounded-lg bg-[rgb(222_29_141)]/10 transform scale-100 transition-transform duration-300 ease-out"
                      style={{
                        boxShadow: '0 0 20px rgba(222,29,141,0.15)',
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6 text-zinc-600 dark:text-zinc-300"
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
        className={`md:hidden fixed inset-0 z-50 bg-white dark:bg-zinc-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image src={Logo} alt="Logo" className="h-8 w-auto" />
            </Link>
            <button
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6 text-zinc-600 dark:text-zinc-300"
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
                    ? 'bg-[rgb(222_29_141)]/10 text-[rgb(222_29_141)]'
                    : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      {!isOpen && <ScrollProgressBar />}
    </>
  );
}
