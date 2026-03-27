"use client";

import React from "react";
import Link from "next/link";
import { navItems } from "@/lib/content";
import { industryStats, keynotes, awards, gameDesignCases, summitCommunities, gdcNights } from "@/lib/content";
import { ArrowRight } from "lucide-react";

const categoryStyles: Record<string, React.CSSProperties> = {
  Tech: { background: '#fef2f2', color: '#dc2626', borderColor: '#fecaca' },
  Design: { background: '#eff6ff', color: '#2563eb', borderColor: '#bfdbfe' },
  Indie: { background: '#faf5ff', color: '#9333ea', borderColor: '#e9d5ff' },
  Narrative: { background: '#fff7ed', color: '#ea580c', borderColor: '#fed7aa' },
  Marketing: { background: '#f4f4f5', color: '#525252', borderColor: '#d4d4d8' },
};

export default function Home() {
  return (
    <main>
      {/* ── Dark Navigation ── */}
      <header className="nav-dark fixed top-0 left-0 right-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 116 100" fill="none">
                <path d="M57.5 0L115 100H0L57.5 0Z" fill="white"/>
              </svg>
              <span className="text-white font-bold text-sm tracking-tight">GDC 2026</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <Link href="/industry-report" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
            开始阅读 →
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="pt-14">
        <div className="hero-gradient">
          <div className="container py-24 md:py-36">
            <p className="section-eyebrow mb-6 animate-fade-up">GDC Festival of Gaming 2026 · 深度调研</p>
            <h1 className="text-display mb-6 animate-fade-up delay-1" style={{ maxWidth: '700px' }}>
              GDC 2026<br />
              <span style={{ color: '#666' }}>深度调研报告</span>
            </h1>
            <p className="text-lg text-[#666] mb-10 animate-fade-up delay-2" style={{ maxWidth: '520px', lineHeight: 1.7 }}>
              基于 GDC 2026 官方内容、Game Developer 现场报道、行业现状调查（2,300+样本）汇编
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up delay-3">
              <Link href="/industry-report" className="btn-black">
                行业报告 <ArrowRight size={14} />
              </Link>
              <Link href="/keynotes" className="btn-outline">
                主题演讲
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="page-section" style={{ background: '#fafafa' }}>
        <div className="container">
          <p className="section-eyebrow">核心数据</p>
          <h2 className="text-headline mb-12">GDC 2026 关键数字</h2>
          <div className="grid-3">
            {industryStats.map((stat, i) => (
              <div key={i} className="card p-6">
                <div className="stat-number mb-2">{stat.value}</div>
                <div className="font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-[#999]">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Keynotes ── */}
      <section className="page-section">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-eyebrow">Keynotes</p>
              <h2 className="text-headline">主题演讲</h2>
            </div>
            <Link href="/keynotes" className="text-sm font-medium text-[#666] hover:text-black transition-colors hidden md:flex items-center gap-1">
              全部 <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid-2 gap-4">
            {keynotes.map((k, i) => (
              <div key={i} className={`card p-8 ${i === 0 ? 'md:col-span-2' : ''}`}>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="tag tag-dark">{k.day}</span>
                  {k.tags.slice(0, 2).map(t => (
                    <span key={t} className="tag tag-muted">{t}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-1">{k.speaker}</h3>
                <p className="text-[#666] font-medium text-sm mb-3">{k.title}</p>
                <p className="text-[#999] text-sm leading-relaxed mb-5">{k.description}</p>
                <blockquote className="border-l border-[#e4e4e7] pl-4 text-sm text-[#666] italic">
                  "{k.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="page-section" style={{ background: '#fafafa' }}>
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-eyebrow">Awards</p>
              <h2 className="text-headline">GDCA & IGF 2026</h2>
            </div>
            <Link href="/awards" className="text-sm font-medium text-[#666] hover:text-black transition-colors hidden md:flex items-center gap-1">
              完整名单 <ArrowRight size={13} />
            </Link>
          </div>
          <div className="card p-8 mb-4">
            <p className="text-xs text-[#999] uppercase tracking-wider font-semibold mb-3">Game of the Year</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-1">{awards.gdca.gameOfYear.game}</h3>
                <p className="text-[#999] text-sm">{awards.gdca.gameOfYear.dev}</p>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(n => (
                  <span key={n} style={{ fontSize: '18px' }}>🏆</span>
                ))}
                <span className="text-sm font-bold text-[#dc2626] self-center ml-2">
                  {awards.gdca.gameOfYear.awards}项大奖
                </span>
              </div>
            </div>
          </div>
          <div className="grid-3 gap-4">
            {awards.gdca.categories.slice(3, 9).map((c, i) => (
              <div key={i} className="card p-4 flex items-center justify-between">
                <span className="text-sm text-[#999]">{c.name}</span>
                <span className="text-sm font-semibold text-right">{c.winner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Game Design ── */}
      <section className="page-section">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-eyebrow">Game Design</p>
              <h2 className="text-headline">游戏设计案例</h2>
            </div>
            <Link href="/game-design" className="text-sm font-medium text-[#666] hover:text-black transition-colors hidden md:flex items-center gap-1">
              全部 <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid-3 gap-4">
            {gameDesignCases.map((c, i) => (
              <div key={i} className="card p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold px-2 py-1 rounded border" style={categoryStyles[c.type] || categoryStyles.Design}>
                    {c.type}
                  </span>
                </div>
                <h3 className="text-title mb-1">{c.title}</h3>
                <p className="text-xs text-[#999] mb-3">{c.speaker} · {c.company}</p>
                <p className="text-sm text-[#666] leading-relaxed">{c.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Trends ── */}
      <section className="page-section" style={{ background: '#fafafa' }}>
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-eyebrow">Tech Trends</p>
              <h2 className="text-headline">技术趋势</h2>
            </div>
            <Link href="/tech-trends" className="text-sm font-medium text-[#666] hover:text-black transition-colors hidden md:flex items-center gap-1">
              全部 <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid-2 gap-4">
            {[
              { icon: "🤖", title: "AI担忧创历史新高", data: "52%", sub: "认为AI产生负面影响", trend: "+34pp vs 2024" },
              { icon: "🎮", title: "Unreal Engine 领先", data: "42%", sub: "最常用游戏引擎", trend: "Unity 30% / Godot 11%" },
              { icon: "🕹️", title: "Steam Deck 崛起", data: "28%", sub: "为 Deck 开发/优化", trend: "第4大目标平台" },
              { icon: "🏗️", title: "工会化支持率", data: "82%", sub: "美国开发者", trend: "创历史新高" },
            ].map((t, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{t.icon}</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded border border-[#e4e4e7] text-[#999]">{t.trend}</span>
                </div>
                <div className="stat-number mb-1" style={{ fontSize: '32px' }}>{t.data}</div>
                <div className="font-semibold text-sm mb-0.5">{t.title}</div>
                <div className="text-xs text-[#999]">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Summit Communities ── */}
      <section className="page-section">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-eyebrow">Summit</p>
              <h2 className="text-headline">16个社区</h2>
            </div>
            <Link href="/summit" className="text-sm font-medium text-[#666] hover:text-black transition-colors hidden md:flex items-center gap-1">
              详解 <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid-4 gap-3">
            {summitCommunities.map((s, i) => (
              <div key={i} className="card p-5">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-semibold text-sm mb-0.5">{s.name}</div>
                <div className="text-xs text-[#999] mb-1">{s.zh}</div>
                <div className="text-xs text-[#bbb] leading-relaxed">{s.desc.split('、')[0]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GDC Nights ── */}
      <section className="page-section" style={{ background: '#fafafa' }}>
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-eyebrow">Events</p>
              <h2 className="text-headline">GDC Nights</h2>
            </div>
            <Link href="/events" className="text-sm font-medium text-[#666] hover:text-black transition-colors hidden md:flex items-center gap-1">
              全部活动 <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid-4 gap-4">
            {gdcNights.map((n, i) => (
              <div key={i} className="card p-6">
                <div className="text-2xl mb-3">{n.icon}</div>
                <h3 className="font-bold text-sm mb-1">{n.name}</h3>
                <p className="text-xs text-[#999] mb-2">{n.place}</p>
                <p className="text-xs font-semibold text-[#dc2626] mb-2">{n.date}</p>
                <p className="text-xs text-[#bbb] leading-relaxed">{n.desc.slice(0, 50)}…</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#000', color: '#fff' }}>
        <div className="container py-24 text-center">
          <h2 className="text-display mb-4" style={{ color: '#fff' }}>深入阅读</h2>
          <p className="text-[#999] text-lg mb-10" style={{ maxWidth: '400px', margin: '0 auto 40px' }}>
            行业报告、主题演讲、技术趋势——最完整的 GDC 2026 调研
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/industry-report" className="btn-black">
              行业报告
            </Link>
            <Link href="/keynotes" className="btn-outline" style={{ color: '#fff', borderColor: '#333' }}>
              主题演讲
            </Link>
            <Link href="/awards" className="btn-outline" style={{ color: '#fff', borderColor: '#333' }}>
              奖项
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#000', borderTop: '1px solid #222' }}>
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 116 100" fill="none">
              <path d="M57.5 0L115 100H0L57.5 0Z" fill="white"/>
            </svg>
            <span className="text-white/60 text-sm">GDC 2026 调研报告</span>
          </div>
          <p className="text-white/40 text-xs">
            基于 GDC 官方内容、Game Developer 报道、行业现状调查（2,300+样本）
          </p>
          <div className="flex gap-4">
            <a href="https://gdconf.com" target="_blank" className="text-white/40 hover:text-white text-xs transition-colors">GDC</a>
            <a href="https://www.gamedeveloper.com" target="_blank" className="text-white/40 hover:text-white text-xs transition-colors">Game Developer</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
