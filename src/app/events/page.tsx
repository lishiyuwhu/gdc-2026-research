"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { gdcNights } from "@/lib/content";

export default function Events() {
  return (
    <main>
      <Nav />
      <div style={{ paddingTop: '56px' }}>
        <div style={{ background: '#fafafa', borderBottom: '1px solid #e4e4e7' }}>
          <div className="container py-16">
            <p className="section-eyebrow">GDC Nights</p>
            <h1 className="text-headline mb-3">社交活动</h1>
            <p className="text-[#666] text-base">GDC 40周年庆特别活动</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="space-y-4 mb-16">
            {gdcNights.map((n, i) => (
              <div key={i} className="card p-8 flex gap-6">
                <span className="text-4xl">{n.icon}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="font-bold text-lg">{n.name}</h2>
                    <span className="tag tag-dark text-xs">{n.date}</span>
                  </div>
                  <p className="text-xs text-[#999] mb-2">{n.place}</p>
                  <p className="text-sm text-[#666] leading-relaxed">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-8 mb-8">
            <h2 className="font-bold text-lg mb-4">🛡️ 安全措施</h2>
            <p className="text-sm text-[#666] mb-4">GDC 致力于为所有参会者提供安全、包容的环境。</p>
            <div className="p-4 rounded-lg border border-[#fecaca] inline-block" style={{ background: '#fef2f2' }}>
              <p className="text-xs font-semibold text-[#dc2626] mb-1">24/7 安全热线</p>
              <p className="text-sm font-mono text-[#dc2626]">+1-925-852-4361</p>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="font-bold text-lg mb-4">📜 GDC 40周年</h2>
            <p className="text-sm text-[#666] mb-6">从1988年首届在客厅里开始的小型同行会议，发展成为全球最重要的游戏开发者盛会。</p>
            <div className="grid-2 gap-4 text-sm">
              {[
                { y: "1988", e: "始于客厅的小型同行会议" },
                { y: "1990s", e: "成为技术学习、postmortems 的全球目的地" },
                { y: "2000s", e: "添加 IGF 和 GDCA" },
                { y: "2026", e: "第40届，首次 Festival of Gaming 主题" },
              ].map((d, i) => (
                <div key={i} className="flex gap-3">
                  <span className="font-bold text-[#dc2626] shrink-0">{d.y}</span>
                  <span className="text-[#666]">{d.e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
