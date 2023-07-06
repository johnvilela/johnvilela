"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

export function Navbar() {
  const currentRoute = usePathname();

  const defaultStyle = "p-4 text-xl hover:bg-custom-green hover:text-stone-950";
  const activeStyle = `${defaultStyle} bg-custom-green text-stone-950`;
  const nonActiveStyle = `${defaultStyle} bg-stone-950 text-custom-green`;

  return (
    <nav className="flex items-center justify-center">
      <Link href="/" className=" text-3xl py-2 px-4 bg-custom-green text-stone-950 tracking-tighter absolute top-4 left-4">
        JV
      </Link>
      <Link href="/about" className={currentRoute === "/about" ? activeStyle : nonActiveStyle}>
        About
      </Link>
      <Link href="/projects" className={currentRoute === "/projects" ? activeStyle : nonActiveStyle}>
        Projects
      </Link>
      <Link href="/contact" className={currentRoute === "/contact" ? activeStyle : nonActiveStyle}>
        Contact
      </Link>
    </nav>
  )
}
