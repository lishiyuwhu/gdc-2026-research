"use client";

import Link from "next/link";
import { navItems } from "@/lib/content";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav-dark fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 116 100" fill="none">
              <path d="M57.5 0L115 100H0L57.5 0Z" fill="white"/>
            </svg>
            <span className="text-white font-bold text-sm tracking-tight">GDC 2026</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link href="/" className="text-white/50 hover:text-white text-sm font-medium transition-colors">
          ← 首页
        </Link>
      </div>
    </header>
  );
}
