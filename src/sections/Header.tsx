"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


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
    "title": "Contact",
    "href": "/contact",
  }
 
];

export const Header = () => {
  const pathname = usePathname();

  const getClassNames = (path: string) => {
    const selected =
      "bg-white text-gray-900 hover:bg-white/70 hover:text-gay-900";
    return pathname === path ? selected : "";
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-[99]">
      <nav className="flex gap-3 p-[4px] border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={`nav-item ${getClassNames(link.href)}`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};
