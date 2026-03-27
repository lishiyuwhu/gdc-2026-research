import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 py-12 bg-stone-100 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#DC2626] flex items-center justify-center">
              <span className="text-white font-black text-xs font-display">G</span>
            </div>
            <span className="font-display font-bold text-base">GDC 2026 调研报告</span>
          </div>
          <p className="text-stone-500 text-sm text-center">
            基于 GDC 2026 官方内容、Game Developer 现场报道、行业现状调查（2,300+样本）汇编
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://gdconf.com" target="_blank" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
              GDC 官网
            </Link>
            <Link href="https://www.gamedeveloper.com" target="_blank" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
              Game Developer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
