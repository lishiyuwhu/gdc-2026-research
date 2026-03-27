"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { industryStats, keynotes, awards, gameDesignCases, summitCommunities, gdcNights, techTrends } from "@/lib/content";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Zap, Shield, Gamepad2, Code, Trophy, Mic, Calendar, Music } from "lucide-react";

const categoryColors: Record<string, string> = {
  Tech: "bg-red-50 text-red-600 border-red-100",
  Design: "bg-blue-50 text-blue-600 border-blue-100",
  Indie: "bg-purple-50 text-purple-600 border-purple-100",
  Narrative: "bg-orange-50 text-orange-600 border-orange-100",
  Marketing: "bg-stone-50 text-stone-600 border-stone-200",
};

const statColors: Record<string, string> = {
  red: "text-red-600 bg-red-50 border-red-100",
  blue: "text-blue-600 bg-blue-50 border-blue-100",
  green: "text-green-600 bg-green-50 border-green-100",
  orange: "text-orange-600 bg-orange-50 border-orange-100",
  gray: "text-stone-600 bg-stone-50 border-stone-200",
};

const iconMap: Record<string, any> = { TrendingUp, Users, Zap, Shield, Gamepad2, Code, Trophy, Mic, Calendar, Music };

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-100 via-orange-50 to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/3" />
        <div className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-stone-100 to-transparent rounded-full blur-3xl opacity-70" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="tag tag-red animate-fade-up opacity-0 mb-6 inline-flex">
              📋 深度调研报告 · 2026年3月
            </span>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6 animate-fade-up opacity-0 delay-1">
              GDC 2026
              <br />
              <span className="text-[#DC2626]">深度调研</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-500 font-medium mb-8 max-w-xl leading-relaxed animate-fade-up opacity-0 delay-2">
              覆盖 GDC 2026 行业报告、主题演讲、游戏设计案例、技术趋势、奖项全解析
              <br />基于 2,300+ 行业专业人士数据
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up opacity-0 delay-3">
              <Link href="/industry-report" className="btn-primary">
                行业报告
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/keynotes" className="btn-outline">主题演讲</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label">Key Numbers</p>
            <h2 className="section-title">行业核心数据</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industryStats.map((stat, i) => (
              <div key={i} className={`stat-card text-center ${statColors[stat.color]}`}>
                <div className="font-display font-black text-2xl md:text-3xl mb-1">{stat.value}</div>
                <div className="text-sm font-semibold leading-tight mb-1">{stat.label}</div>
                <div className="text-xs opacity-70">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keynotes Preview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label">Keynotes</p>
              <h2 className="section-title">主题演讲</h2>
              <p className="text-stone-500 mt-2">GDC 40周年，小岛秀夫5年来首次登台</p>
            </div>
            <Link href="/keynotes" className="hidden md:flex items-center gap-1 text-sm font-semibold text-[#DC2626] hover:gap-2 transition-all">
              查看全部 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {keynotes.map((k, i) => (
              <div key={i} className={`card p-8 ${i === 0 ? 'md:col-span-2' : ''}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="tag tag-red">
                    <Calendar className="w-3 h-3" /> {k.day}
                  </span>
                  {k.highlight && <span className="tag tag-dark">头条演讲</span>}
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-stone-900 mb-1">{k.speaker}</h3>
                <p className="text-[#DC2626] font-semibold text-lg mb-1">{k.title}</p>
                <p className="text-stone-400 text-sm font-medium mb-4">{k.subtitle}</p>
                <p className="text-stone-600 leading-relaxed mb-5">{k.description}</p>
                <blockquote className="border-l-3 border-[#DC2626] pl-4 italic text-stone-500 text-sm">
                  "{k.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Preview */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label">Awards</p>
              <h2 className="section-title">🏆 奖项中心</h2>
              <p className="text-stone-500 mt-2">GDCA & IGF 2026 完整获奖名单</p>
            </div>
            <Link href="/awards" className="hidden md:flex items-center gap-1 text-sm font-semibold text-[#DC2626] hover:gap-2 transition-all">
              完整名单 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* GOTY */}
          <div className="bg-white rounded-2xl border border-stone-200 p-8 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="text-yellow-600 font-bold text-sm uppercase tracking-wider">Game of the Year</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="font-display font-black text-3xl md:text-4xl text-stone-900 mb-1">
                  {awards.gdca.gameOfYear.game}
                </h3>
                <p className="text-stone-500 font-medium">{awards.gdca.gameOfYear.dev}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[1,2,3,4,5].map(n => (
                  <span key={n} className="text-lg" title={`+${awards.gdca.gameOfYear.awards - n + 1} awards`}>🏆</span>
                ))}
                <span className="text-sm font-bold text-yellow-600 self-center ml-1">
                  狂揽 {awards.gdca.gameOfYear.awards} 项大奖
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <p className="text-stone-400 text-xs uppercase tracking-wider mb-2">IGF Grand Prize</p>
              <p className="font-display font-bold text-xl text-stone-900">{awards.igf.grandPrize}</p>
              <p className="text-stone-500 text-sm mt-1">策略游戏 · Fellow Traveller</p>
            </div>
            <div className="bg-white rounded-xl border border-stone-200 p-6">
              <p className="text-stone-400 text-xs uppercase tracking-wider mb-2">Lifetime Achievement</p>
              <p className="font-display font-bold text-xl text-stone-900">{awards.lifetime[0].name}</p>
              <p className="text-stone-500 text-sm mt-1">{awards.lifetime[0].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Design Preview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label">Game Design</p>
              <h2 className="section-title">游戏设计案例</h2>
              <p className="text-stone-500 mt-2">GDC 2026 最值得关注的设计与创意分享</p>
            </div>
            <Link href="/game-design" className="hidden md:flex items-center gap-1 text-sm font-semibold text-[#DC2626] hover:gap-2 transition-all">
              全部案例 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gameDesignCases.map((c, i) => (
              <div key={i} className="card p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${categoryColors[c.type] || categoryColors.Design}`}>
                    {c.type}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-stone-900 mb-1">{c.title}</h3>
                <p className="text-sm text-[#DC2626] font-semibold mb-1">{c.speaker}</p>
                <p className="text-xs text-stone-400 mb-3">{c.company}</p>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{c.summary}</p>
                <div className="border-t border-stone-100 pt-3">
                  <p className="text-xs font-semibold text-stone-500 mb-2">💡 {c.keyInsight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Trends + Summit Grid */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="section-label text-red-400">Tech Trends</p>
              <h2 className="section-title text-white mb-4">技术趋势</h2>
              <p className="text-stone-400 mb-8">AI争议持续、引擎格局演变、新兴平台崛起</p>
              <div className="space-y-4">
                {techTrends.slice(0, 3).map((t, i) => (
                  <div key={i} className="p-5 bg-stone-800 rounded-xl border border-stone-700">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xl">{t.icon}</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        t.trend.includes('↑') ? 'bg-green-500/20 text-green-400' :
                        t.trend.includes('↓') ? 'bg-red-500/20 text-red-400' :
                        'bg-stone-700 text-stone-300'
                      }`}>
                        {t.trend}
                      </span>
                    </div>
                    <h3 className="font-semibold text-white mb-1">{t.title}</h3>
                    <p className="text-sm text-stone-400">{t.data}</p>
                    <p className="text-xs text-stone-500 mt-2">{t.detail}</p>
                  </div>
                ))}
              </div>
              <Link href="/tech-trends" className="btn-outline mt-6 border-stone-600 text-stone-300 hover:border-white hover:text-white hover:bg-transparent">
                查看全部趋势 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <p className="section-label text-orange-400">Summit Communities</p>
              <h2 className="section-title text-white mb-4">16个社区</h2>
              <p className="text-stone-400 mb-8">GDC 按专业领域划分的专题频道，覆盖游戏开发全领域</p>
              <div className="grid grid-cols-2 gap-2">
                {summitCommunities.map((s, i) => (
                  <div key={i} className="p-3 bg-stone-800 rounded-lg border border-stone-700 hover:bg-stone-700 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{s.icon}</span>
                      <span className="font-semibold text-white text-sm">{s.name}</span>
                    </div>
                    <p className="text-xs text-stone-500">{s.zh}</p>
                  </div>
                ))}
              </div>
              <Link href="/summit" className="btn-outline mt-6 border-stone-600 text-stone-300 hover:border-white hover:text-white hover:bg-transparent">
                16个社区详解 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GDC Nights */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label">GDC Nights</p>
            <h2 className="section-title">社交活动</h2>
            <p className="text-stone-500 mt-2">40周年庆特别活动，每晚与同行交流的绝佳机会</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gdcNights.map((n, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-4xl mb-4">{n.icon}</div>
                <h3 className="font-display font-bold text-stone-900 mb-1">{n.name}</h3>
                <p className="text-sm text-stone-400 mb-1">{n.place}</p>
                <p className="text-xs text-[#DC2626] font-semibold mb-3">{n.date}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#DC2626] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-4">
            深入阅读全部调研内容
          </h2>
          <p className="text-red-100 text-lg mb-8">
            从行业报告到游戏设计，从技术趋势到奖项全解析——<br />
            GDC 2026 最完整的深度调研
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/industry-report" className="px-6 py-3 bg-white text-[#DC2626] font-bold rounded-lg hover:bg-red-50 transition-colors">
              行业报告
            </Link>
            <Link href="/keynotes" className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              主题演讲
            </Link>
            <Link href="/awards" className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              奖项中心
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
