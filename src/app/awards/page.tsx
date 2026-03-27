"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { awards } from "@/lib/content";
import { Trophy, Star } from "lucide-react";

export default function Awards() {
  const gdca = awards.gdca;
  const igf = awards.igf;

  return (
    <main>
      <Nav />
      <div className="pt-24 pb-24">
        {/* Header */}
        <div className="bg-white border-b border-stone-200 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="section-label">Awards 2026</p>
            <h1 className="section-title mb-4">🏆 奖项中心</h1>
            <p className="text-stone-500 text-lg">
              GDCA & IGF 2026 完整获奖名单，Clair Obscur: Expedition 33 狂揽5项大奖成最大赢家
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-16">
          {/* GDCA GOTY */}
          <section className="mb-16">
            <div className="card p-10 text-center bg-gradient-to-br from-stone-50 to-stone-100 border-stone-200 mb-8">
              <div className="flex justify-center mb-4">
                <Trophy className="w-10 h-10 text-yellow-500" />
              </div>
              <p className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-3">Game Developers Choice Awards · Game of the Year</p>
              <h2 className="font-display font-black text-4xl md:text-5xl text-stone-900 mb-3">
                {gdca.gameOfYear.game}
              </h2>
              <p className="text-stone-500 font-medium mb-6">{gdca.gameOfYear.dev}</p>
              <div className="flex justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(n => (
                  <span key={n} className="text-2xl">🏆</span>
                ))}
              </div>
              <p className="text-yellow-700 font-bold">狂揽 {gdca.gameOfYear.awards} 项大奖</p>
            </div>

            {/* GDCA Categories */}
            <h3 className="font-display font-bold text-xl mb-4">GDCA 完整获奖名单</h3>
            <div className="space-y-2 mb-8">
              {gdca.categories.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200">
                  <span className="text-stone-500 text-sm">{c.name}</span>
                  <span className="font-semibold text-stone-800">{c.winner}</span>
                </div>
              ))}
            </div>

            {/* Lifetime Achievement */}
            <h3 className="font-display font-bold text-xl mb-4">🏅 终身成就奖</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {awards.lifetime.map((p, i) => (
                <div key={i} className="card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#DC2626] flex items-center justify-center text-white font-black font-display">
                      {p.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900">{p.name}</h4>
                      <p className="text-xs text-[#DC2626] font-semibold">{p.award}</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* IGF */}
          <section>
            <h3 className="font-display font-bold text-xl mb-4">🎮 IGF 2026 独立游戏节</h3>
            <div className="card p-8 mb-6 border-purple-100 bg-gradient-to-br from-purple-50 to-white">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-purple-500" />
                <span className="text-purple-600 text-xs font-bold uppercase tracking-wider">Grand Prize</span>
              </div>
              <h4 className="font-display font-black text-3xl text-stone-900 mb-1">{igf.grandPrize}</h4>
              <p className="text-stone-500 text-sm">Strategy · Fellow Traveller</p>
            </div>

            <div className="space-y-2">
              {igf.categories.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200">
                  <div>
                    <span className="text-stone-500 text-sm">{c.name}</span>
                    {c.game && <span className="text-xs text-stone-400 ml-2">{c.game}</span>}
                  </div>
                  <span className="font-semibold text-stone-800">{c.winner}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-stone-50 rounded-xl border border-stone-200">
              <p className="text-sm font-semibold text-stone-700 mb-3">🌟 IGF 领跑游戏 — Baby Steps</p>
              <p className="text-sm text-stone-600">
                Bennett Foddy（QWOP开发者）新作，5项提名领跑本届 IGF：Grand Prize、Narrative、Design、Audio、Nuovo Award。
                游戏概念："把一只脚放在另一只前面"的解谜游戏。
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
