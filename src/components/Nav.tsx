"use client";

import Link from "next/link";
import { navItems } from "@/lib/content";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#DC2626] flex items-center justify-center">
            <span className="text-white font-black text-xs font-display">G</span>
          </div>
          <span className="font-display font-bold text-base tracking-tight">GDC 2026 调研</span>
        </Link>
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
                pathname === item.href
                  ? "bg-[#DC2626] text-white"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
          ← 返回首页
        </Link>
      </div>
    </nav>
  );
}
