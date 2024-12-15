"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import ScrollProgressBar from "@/components/scrollProgressBar";
import { ThemeToggle } from "@/components/ThemeToggle";

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
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header for Desktop and Mobile */}
      <header className="sticky top-0 z-[99] dark:bg-primary-dark bg-primary-light  border-b border-zinc-800">
        <div className="py-6 md:px-16 px-6 max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src={Logo} width={25} height={25} alt="logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-x-8">
              {links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="hover:text-purple-400 duration-300 dark:text-white text-zinc-600"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Icon */}
          <div className="flex gap-8 justify-center items-center">
          <ThemeToggle />
            <button
              className="flex flex-col items-center h-full space-y-1 w-8 h-8 md:hidden focus:outline-none"
              onClick={toggleDrawer}
            >
              <div
                className={`h-1 w-full dark:bg-white bg-zinc-400 rounded transform transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`h-1 w-full dark:bg-white bg-zinc-400 rounded transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`h-1 w-full  dark:bg-white bg-zinc-400 rounded transform transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </button>
           
          </div>
        </div>
        <ScrollProgressBar />

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 h-full z-[100] w-64 dark:bg-zinc-900 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-zinc-400 hover:text-white focus:outline-none"
            onClick={toggleDrawer}
          >
            ✕
          </button>

          {/* Mobile Navigation */}
          <ul className="mt-16 space-y-6 px-6">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  onClick={toggleDrawer}
                  className="block text-lg  text-zinc-900 dark:text-white hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
