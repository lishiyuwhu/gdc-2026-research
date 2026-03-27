"use client";

import React from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { gameDesignCases } from "@/lib/content";

const typeStyles: Record<string, React.CSSProperties> = {
  Tech: { background: '#fef2f2', color: '#dc2626', borderColor: '#fecaca' },
  Design: { background: '#eff6ff', color: '#2563eb', borderColor: '#bfdbfe' },
  Indie: { background: '#faf5ff', color: '#9333ea', borderColor: '#e9d5ff' },
  Narrative: { background: '#fff7ed', color: '#ea580c', borderColor: '#fed7aa' },
  Marketing: { background: '#f4f4f5', color: '#525252', borderColor: '#d4d4d8' },
};

export default function GameDesign() {
  return (
    <main>
      <Nav />
      <div style={{ paddingTop: '56px' }}>
        <div style={{ background: '#fafafa', borderBottom: '1px solid #e4e4e7' }}>
          <div className="container py-16">
            <p className="section-eyebrow">Game Design Cases</p>
            <h1 className="text-headline mb-3">游戏设计案例</h1>
            <p className="text-[#666] text-base">GDC 2026 最值得关注的设计与创意分享</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="space-y-6">
            {gameDesignCases.map((c, i) => (
              <div key={i} className="card p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded border" style={typeStyles[c.type] || typeStyles.Design}>{c.type}</span>
                  {c.tags.map(t => <span key={t} className="tag tag-muted">{t}</span>)}
                </div>
                <div className="grid-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-bold mb-1">{c.title}</h2>
                    <p className="text-sm text-[#dc2626] font-medium mb-1">{c.speaker}</p>
                    <p className="text-xs text-[#999] mb-5">{c.company}</p>
                    <p className="text-sm text-[#666] leading-relaxed">{c.body}</p>
                  </div>
                  <div style={{ background: '#fafafa', borderRadius: '8px', border: '1px solid #e4e4e7', padding: '20px' }}>
                    <p className="text-xs text-[#999] uppercase tracking-wider font-semibold mb-2">核心洞察</p>
                    <p className="text-sm font-semibold text-[#000] leading-relaxed mb-3">{c.keyInsight}</p>
                    <p className="text-xs text-[#999] italic">"{c.summary}"</p>
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
