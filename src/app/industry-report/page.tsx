"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { industryStats } from "@/lib/content";

const statColors: Record<string, string> = {
  red: "text-red-600 bg-red-50 border-red-100",
  blue: "text-blue-600 bg-blue-50 border-blue-100",
  green: "text-green-600 bg-green-50 border-green-100",
  orange: "text-orange-600 bg-orange-50 border-orange-100",
  gray: "text-stone-600 bg-stone-50 border-stone-200",
};

const statBg: Record<string, string> = {
  red: "bg-red-100",
  blue: "bg-blue-100",
  green: "bg-green-100",
  orange: "bg-orange-100",
  gray: "bg-stone-200",
};

export default function IndustryReport() {
  return (
    <main>
      <Nav />
      <div className="pt-24 pb-24">
        {/* Header */}
        <div className="bg-white border-b border-stone-200 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="section-label">Industry Report</p>
            <h1 className="section-title mb-4">行业现状报告</h1>
            <p className="text-stone-500 text-lg">
              基于 GDC 2026 官方行业现状调查，覆盖超过 2,300 名游戏行业专业人士的观点和数据
            </p>
            <div className="flex gap-3 mt-6">
              <span className="tag tag-muted">样本: 2,300+</span>
              <span className="tag tag-muted">来源: GDC 官方</span>
              <span className="tag tag-red">GDC 2026</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-16">
          {/* Key Stats Grid */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl mb-6">核心数据一览</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industryStats.map((stat, i) => (
                <div key={i} className={`stat-card ${statColors[stat.color]}`}>
                  <div className="font-display font-black text-3xl mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold leading-tight mb-1">{stat.label}</div>
                  <div className="text-xs opacity-70">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Section */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl mb-6">🤖 生成式 AI 态度</h2>
            <div className="card p-8 mb-6">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <div className="font-display font-black text-5xl text-red-600 mb-1">52%</div>
                  <p className="text-stone-600 font-medium">认为生成式 AI 将对行业产生<strong>负面影响</strong></p>
                </div>
                <div className="text-right">
                  <div className="text-stone-400 text-2xl font-black">↑</div>
                  <div className="text-xs text-stone-500">从 2024 年的 18% 激增</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { v: "18%", y: "2024年" },
                  { v: "30%", y: "2025年" },
                  { v: "52%", y: "2026年" },
                ].map((d, i) => (
                  <div key={i} className={`p-4 rounded-xl ${statBg[d.v === '52%' ? 'red' : d.v === '30%' ? 'orange' : 'gray']}`}>
                    <div className="font-display font-black text-2xl">{d.v}</div>
                    <div className="text-xs font-medium text-stone-500">{d.y}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card p-6">
                <h3 className="font-semibold text-stone-800 mb-3">负面情绪来源</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li>• 视觉美术/技术美术：64% 认为负面影响</li>
                  <li>• 游戏设计/叙事：63% 认为负面影响</li>
                  <li>• 游戏编程：59% 认为负面影响</li>
                  <li>• 仅 7% 认为 AI 有正面影响</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-stone-800 mb-3">AI 使用现状</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li>• 36% 的行业人士使用生成式 AI 工具</li>
                  <li>• ChatGPT 最常用（74%）</li>
                  <li>• 主要用于：研究/头脑风暴（81%）</li>
                  <li>• 游戏工作室 AI 使用率：30%</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Layoffs */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl mb-6">💼 裁员冲击</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { v: "28%", l: "过去两年被裁员", c: "red" },
                { v: "33%", l: "美国受访者被裁员", c: "red" },
                { v: "66%", l: "AAA工作室进行过裁员", c: "orange" },
                { v: "74%", l: "学生对就业前景担忧", c: "gray" },
              ].map((d, i) => (
                <div key={i} className={`stat-card ${statColors[d.c]}`}>
                  <div className="font-display font-black text-3xl">{d.v}</div>
                  <div className="text-sm font-medium mt-1">{d.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Platforms & Engines */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl mb-6">🎮 平台与引擎格局</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-semibold text-stone-800 mb-4">游戏引擎使用率</h3>
                <div className="space-y-4">
                  {[
                    { name: "Unreal Engine", pct: 42, color: "bg-blue-500" },
                    { name: "Unity", pct: 30, color: "bg-stone-400" },
                    { name: "Godot", pct: 11, color: "bg-green-500" },
                    { name: "其他", pct: 17, color: "bg-stone-300" },
                  ].map((e, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-stone-700">{e.name}</span>
                        <span className="font-bold text-stone-600">{e.pct}%</span>
                      </div>
                      <div className="h-2 bg-stone-100 rounded-full">
                        <div className={`h-2 rounded-full ${e.color}`} style={{ width: `${e.pct * 2}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-stone-800 mb-4">新兴平台</h3>
                <div className="space-y-4">
                  {[
                    { name: "Steam Deck 开发比例", v: "28%", sub: "第4大目标平台", c: "blue" },
                    { name: "Steam Deck 开发兴趣", v: "40%", sub: "与 Switch 2 (39%) 持平", c: "green" },
                    { name: "PC 高管首选率", v: "73%", sub: "最受青睐的下代平台", c: "orange" },
                  ].map((d, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-display font-black text-lg ${statColors[d.c]}`}>
                        {d.v}
                      </div>
                      <div>
                        <p className="font-semibold text-stone-800">{d.name}</p>
                        <p className="text-xs text-stone-500">{d.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Union */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl mb-6">🏛️ 工会化运动</h2>
            <div className="card p-8 text-center mb-6">
              <div className="font-display font-black text-6xl text-green-600 mb-2">82%</div>
              <p className="text-stone-600 font-medium text-lg">美国开发者支持游戏行业工作者工会化</p>
              <p className="text-stone-400 text-sm mt-2">创历史新高 | 2025年成立 United Videogame Workers-CWA</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { v: "87%", l: "年收入 &lt;20万支持" },
                { v: "88%", l: "被裁者支持" },
                { v: "10%", l: "已是工会成员" },
                { v: "62%", l: "有兴趣加入" },
              ].map((d, i) => (
                <div key={i} className="card p-4 text-center">
                  <div className="font-display font-bold text-xl text-stone-800">{d.v}</div>
                  <div className="text-xs text-stone-500 mt-1">{d.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Recommendations */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl mb-6">✅ AI 工具使用建议</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card p-6 border-green-200 bg-green-50">
                <h3 className="font-semibold text-green-700 mb-4">推荐场景</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>✓ 资产变体生成</li>
                  <li>✓ 本地化翻译</li>
                  <li>✓ QA 测试自动化</li>
                  <li>✓ 代码辅助（Copilot 类）</li>
                  <li>✓ 设计研究/头脑风暴</li>
                </ul>
              </div>
              <div className="card p-6 border-red-200 bg-red-50">
                <h3 className="font-semibold text-red-700 mb-4">不推荐场景</h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>✗ 替代核心叙事创作</li>
                  <li>✗ Text-to-game 管线</li>
                  <li>✗ 替代专业表演者</li>
                  <li>✗ 替代关卡设计</li>
                  <li>✗ 大规模美术资产直接生成</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
