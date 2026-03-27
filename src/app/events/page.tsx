"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { gdcNights } from "@/lib/content";

export default function Events() {
  return (
    <main>
      <Nav />
      <div className="pt-24 pb-24">
        <div className="bg-white border-b border-stone-200 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="section-label">GDC Nights</p>
            <h1 className="section-title mb-4">社交活动</h1>
            <p className="text-stone-500 text-lg">
              GDC 40周年庆特别活动，每晚与全球同行交流的绝佳机会
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="space-y-6">
            {gdcNights.map((n, i) => (
              <div key={i} className="card p-8">
                <div className="flex items-start gap-5">
                  <span className="text-5xl">{n.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="font-display font-black text-2xl text-stone-900">{n.name}</h2>
                      <span className="tag tag-red">{n.date}</span>
                    </div>
                    <p className="text-sm text-stone-400 font-medium mb-2">{n.place}</p>
                    <p className="text-stone-600 leading-relaxed">{n.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Safety Info */}
          <section className="mt-16">
            <h2 className="font-display font-bold text-2xl mb-6">🛡️ 安全措施</h2>
            <div className="card p-6">
              <p className="text-sm text-stone-600 mb-4">
                GDC 致力于为所有参会者提供安全、包容的环境。
              </p>
              <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                <p className="text-sm font-semibold text-red-800 mb-2">24/7 安全热线</p>
                <p className="text-sm text-red-700 font-mono">+1-925-852-4361</p>
              </div>
              <p className="text-xs text-stone-500 mt-4">
                GDC 禁止任何形式的歧视，包括种族、性别、身份、国籍、宗教、残障、婚姻状况、年龄、性取向等方面的歧视。
              </p>
            </div>
          </section>

          {/* GDC History */}
          <section className="mt-16">
            <h2 className="font-display font-bold text-2xl mb-6">📜 GDC 40周年</h2>
            <div className="card p-8 bg-gradient-to-br from-stone-50 to-white">
              <p className="text-stone-600 leading-relaxed mb-6">
                GDC 2026 迎来<strong>第40届大会</strong>，从1988年首届在客厅里开始的小型同行会议，
                发展成为全球最重要的游戏开发者盛会。
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  { year: "1988", event: "始于客厅的小型同行会议" },
                  { year: "1990s", event: "成为技术学习、postmortems 的全球目的地" },
                  { year: "2000s", event: "添加 IGF 和 GDCA" },
                  { year: "2026", event: "第40届，首次 Festival of Gaming 主题" },
                ].map((d, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-display font-bold text-[#DC2626] shrink-0">{d.year}</span>
                    <span className="text-stone-600">{d.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
