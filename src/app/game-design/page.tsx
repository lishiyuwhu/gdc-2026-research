"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { gameDesignCases } from "@/lib/content";

const typeColors: Record<string, string> = {
  Tech: "bg-red-50 text-red-600 border-red-100",
  Design: "bg-blue-50 text-blue-600 border-blue-100",
  Indie: "bg-purple-50 text-purple-600 border-purple-100",
  Narrative: "bg-orange-50 text-orange-600 border-orange-100",
  Marketing: "bg-stone-50 text-stone-600 border-stone-200",
};

export default function GameDesign() {
  return (
    <main>
      <Nav />
      <div className="pt-24 pb-24">
        <div className="bg-white border-b border-stone-200 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="section-label">Game Design Cases</p>
            <h1 className="section-title mb-4">游戏设计案例</h1>
            <p className="text-stone-500 text-lg">
              GDC 2026 最值得关注的设计与创意分享，涵盖 AAA 大作到独立游戏
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="space-y-8">
            {gameDesignCases.map((c, i) => (
              <div key={i} className="card p-8">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${typeColors[c.type] || typeColors.Design}`}>
                    {c.type}
                  </span>
                  {c.tags.map(t => (
                    <span key={t} className="tag tag-muted">{t}</span>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h2 className="font-display font-black text-2xl text-stone-900 mb-1">{c.title}</h2>
                    <p className="text-sm text-[#DC2626] font-semibold mb-1">{c.speaker}</p>
                    <p className="text-xs text-stone-400 mb-4">{c.company}</p>
                    <p className="text-stone-600 leading-relaxed">{c.body}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">核心洞察</p>
                    <p className="text-sm font-semibold text-stone-800 leading-relaxed mb-3">{c.keyInsight}</p>
                    <p className="text-stone-500 text-sm italic">"{c.summary}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
