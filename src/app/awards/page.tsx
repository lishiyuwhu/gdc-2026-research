"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { awards } from "@/lib/content";

export default function Awards() {
  const gdca = awards.gdca;
  const igf = awards.igf;

  return (
    <main>
      <Nav />
      <div style={{ paddingTop: '56px' }}>
        <div style={{ background: '#fafafa', borderBottom: '1px solid #e4e4e7' }}>
          <div className="container py-16">
            <p className="section-eyebrow">Awards 2026</p>
            <h1 className="text-headline mb-3">🏆 奖项中心</h1>
            <p className="text-[#666] text-base">GDCA & IGF 完整获奖名单</p>
          </div>
        </div>

        <div className="container py-16">
          {/* GDCA */}
          <section className="mb-16">
            <p className="section-eyebrow mb-6">GDCA</p>
            <div className="card p-10 mb-6">
              <p className="text-xs text-[#999] uppercase tracking-wider font-semibold mb-4">Game of the Year</p>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight mb-1">{gdca.gameOfYear.game}</h2>
                  <p className="text-[#999] text-sm">{gdca.gameOfYear.dev}</p>
                </div>
                <div className="flex items-center gap-2">
                  {[1,2,3,4,5].map(n => <span key={n} style={{fontSize:'22px'}}>🏆</span>)}
                  <span className="text-sm font-bold text-[#dc2626] ml-1">狂揽 {gdca.gameOfYear.awards} 项大奖</span>
                </div>
              </div>
            </div>
            <div className="grid-2">
              {gdca.categories.map((c, i) => (
                <div key={i} className="card p-4 flex items-center justify-between">
                  <span className="text-sm text-[#999]">{c.name}</span>
                  <span className="text-sm font-semibold">{c.winner}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Lifetime */}
          <section className="mb-16">
            <p className="section-eyebrow mb-6">终身成就奖</p>
            <div className="grid-2 gap-4">
              {awards.lifetime.map((p, i) => (
                <div key={i} className="card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#000] flex items-center justify-center text-white font-bold text-sm">{p.name.charAt(0)}</div>
                    <div>
                      <h4 className="font-semibold text-sm">{p.name}</h4>
                      <p className="text-xs text-[#dc2626] font-medium">{p.award}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#666]">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* IGF */}
          <section>
            <p className="section-eyebrow mb-6">IGF 2026</p>
            <div className="card p-8 mb-6" style={{ background: '#faf5ff', borderColor: '#e9d5ff' }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#9333ea' }}>Grand Prize</p>
              <h3 className="text-3xl font-bold tracking-tight mb-1">{igf.grandPrize}</h3>
              <p className="text-sm text-[#999]">策略游戏 · Fellow Traveller</p>
            </div>
            <div className="space-y-2">
              {igf.categories.map((c, i) => (
                <div key={i} className="card p-4 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-[#999]">{c.name}</span>
                    {c.game && <span className="text-xs text-[#bbb] ml-2">{c.game}</span>}
                  </div>
                  <span className="text-sm font-semibold">{c.winner}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
