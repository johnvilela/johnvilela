"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BlinkingCursor } from "./blinking-cursor";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "CAREER", href: "/career" },
  { label: "PROJECTS", href: "/projects" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 sm:gap-8 py-3 px-4 border-b border-amber-dim">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-all ${
              isActive
                ? "text-amber-bright text-glow-strong"
                : "text-amber-dim hover:text-amber"
            }`}
          >
            <span className="text-amber-dim">&gt;</span> {item.label}
            {isActive && (
              <span className="ml-1">
                <BlinkingCursor />
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
