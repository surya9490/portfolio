"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollProgressBar from "@/components/scrollProgressBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const links: { title: string; href: string; external?: boolean }[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/shopify" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-[99] transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-sm shadow-zinc-200/50 dark:shadow-zinc-900/50 border-b border-zinc-200/50 dark:border-zinc-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative">
              <span className="text-xl font-heading font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                SK
              </span>
              <span className="text-xl font-heading font-bold text-violet-500">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    pathname === link.href
                      ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
              <a
                href="https://eshop-olive-nine.vercel.app/collections/men"
                target="_blank"
                rel="noopener"
                className="px-4 py-2 text-sm font-medium rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-300"
              >
                Headless
              </a>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="/documents/resume.pdf"
                target="_blank"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
              >
                Resume
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                  <span
                    className={`w-5 h-0.5 bg-zinc-600 dark:bg-zinc-300 rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-[3px]" : ""
                    }`}
                  />
                  <span
                    className={`w-5 h-0.5 bg-zinc-600 dark:bg-zinc-300 rounded-full transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-[3px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-[98] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-8 py-4 text-2xl font-heading font-medium text-center transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-violet-600 dark:text-violet-400"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: links.length * 0.1, duration: 0.4 }}
              >
                <a
                  href="https://eshop-olive-nine.vercel.app/collections/men"
                  target="_blank"
                  rel="noopener"
                  className="block px-8 py-4 text-2xl font-heading font-medium text-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Headless
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: (links.length + 1) * 0.1, duration: 0.4 }}
                className="mt-4"
              >
                <a
                  href="/documents/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-full bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Download Resume
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgressBar />
    </>
  );
}
