import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import ScrollProgressBar from "@/components/scrollProgressBar";

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
  return (
    <>
      <header className=" sticky top-0 ">
        <div className="border-b bg-zinc-900 border-zinc-800 z-30 py-6 md:px-16 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} width={25} height={25} alt="logo" />
          </Link>
          <nav>
            <ul className="flex items-center gap-x-8">
              {links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="hover:text-purple-400 duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        </div>
      </header>
      
    </>
  );
}
