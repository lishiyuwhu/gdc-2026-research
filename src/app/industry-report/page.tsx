"use client";

import React from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { industryStats } from "@/lib/content";

const statColors: Record<string, React.CSSProperties> = {
  red: { color: '#dc2626' },
  blue: { color: '#2563eb' },
  green: { color: '#16a34a' },
  orange: { color: '#ea580c' },
  gray: { color: '#525252' },
};

export default function IndustryReport() {
  return (
    <main>
      <Nav />
      <div style={{ paddingTop: '56px' }}>

        {/* Header */}
        <div style={{ background: '#fafafa', borderBottom: '1px solid #e4e4e7' }}>
          <div className="container py-16">
            <p className="section-eyebrow">Industry Report</p>
            <h1 className="text-headline mb-3">行业现状报告</h1>
            <p className="text-[#666] text-base max-w-lg">
              基于 GDC 2026 官方行业现状调查，覆盖超过 2,300 名游戏行业专业人士的观点和数据
            </p>
          </div>
        </div>

        <div className="container py-16">
          {/* Stats Grid */}
          <section className="mb-16">
            <p className="section-eyebrow mb-6">核心数据</p>
            <div className="grid-3">
              {industryStats.map((stat, i) => (
                <div key={i} className="card p-6">
                  <div className="stat-number mb-2" style={statColors[stat.color]}>{stat.value}</div>
                  <div className="font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-[#999]">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </section>

          {/* AI */}
          <section className="mb-16">
            <p className="section-eyebrow mb-6">生成式 AI 态度</p>
            <div className="grid-2 gap-6">
              <div className="card p-8">
                <div className="stat-number mb-2" style={{ color: '#dc2626', fontSize: '56px' }}>52%</div>
                <p className="text-sm font-medium mb-1">认为生成式 AI 将对行业产生负面影响</p>
                <p className="text-xs text-[#999]">从 2024 年 18% 激增，创历史新高</p>
                <div className="flex gap-4 mt-6">
                  {[{y:'2024',v:'18%'},{y:'2025',v:'30%'},{y:'2026',v:'52%'}].map((d,i)=>(
                    <div key={i} className="flex-1 text-center p-3 rounded border border-[#e4e4e7]">
                      <div className="font-bold text-lg">{d.v}</div>
                      <div className="text-xs text-[#999]">{d.y}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="card p-6">
                  <h3 className="font-semibold text-sm mb-3">负面情绪来源</h3>
                  <div className="space-y-2 text-sm text-[#666]">
                    <div className="flex justify-between"><span>视觉美术/技术美术</span><span className="font-bold">64%</span></div>
                    <div className="flex justify-between"><span>游戏设计/叙事</span><span className="font-bold">63%</span></div>
                    <div className="flex justify-between"><span>游戏编程</span><span className="font-bold">59%</span></div>
                    <div className="flex justify-between border-t border-[#e4e4e7] pt-2 mt-2"><span>认为 AI 正面影响</span><span className="font-bold text-[#16a34a]">仅 7%</span></div>
                  </div>
                </div>
                <div className="card p-6">
                  <h3 className="font-semibold text-sm mb-3">AI 使用现状</h3>
                  <div className="space-y-2 text-sm text-[#666]">
                    <div className="flex justify-between"><span>使用生成式 AI 工具</span><span className="font-bold">36%</span></div>
                    <div className="flex justify-between"><span>使用 ChatGPT</span><span className="font-bold">74%</span></div>
                    <div className="flex justify-between"><span>用于研究/头脑风暴</span><span className="font-bold">81%</span></div>
                    <div className="flex justify-between border-t border-[#e4e4e7] pt-2 mt-2"><span>游戏工作室 AI 使用率</span><span className="font-bold">30%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Layoffs */}
          <section className="mb-16">
            <p className="section-eyebrow mb-6">裁员冲击</p>
            <div className="grid-4">
              {[
                { v: "28%", l: "过去两年被裁员" },
                { v: "33%", l: "美国受访者被裁员" },
                { v: "66%", l: "AAA工作室进行过裁员" },
                { v: "74%", l: "学生对就业前景担忧" },
              ].map((d, i) => (
                <div key={i} className="card p-6 text-center">
                  <div className="stat-number mb-2" style={{ fontSize: '32px' }}>{d.v}</div>
                  <div className="text-xs text-[#999]">{d.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Engines */}
          <section className="mb-16">
            <p className="section-eyebrow mb-6">游戏引擎格局</p>
            <div className="grid-2 gap-6">
              <div className="card p-6">
                <h3 className="font-semibold text-sm mb-5">引擎使用率</h3>
                <div className="space-y-4">
                  {[
                    { name: "Unreal Engine", pct: 84, c: "#000" },
                    { name: "Unity", pct: 60, c: "#525252" },
                    { name: "Godot", pct: 22, c: "#16a34a" },
                    { name: "其他", pct: 34, c: "#d4d4d8" },
                  ].map((e, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="font-medium">{e.name}</span>
                        <span className="font-bold">{e.pct}%</span>
                      </div>
                      <div style={{ height: '6px', background: '#f4f4f5', borderRadius: '99px' }}>
                        <div style={{ height: '6px', width: `${e.pct}%`, background: e.c, borderRadius: '99px' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-sm mb-5">新兴平台</h3>
                <div className="space-y-4">
                  {[
                    { v: "28%", l: "Steam Deck 开发比例", sub: "第4大目标平台" },
                    { v: "40%", l: "Steam Deck 开发兴趣", sub: "与 Switch 2 (39%) 持平" },
                    { v: "73%", l: "PC 高管首选率", sub: "最受青睐的下代平台" },
                  ].map((d, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="stat-number" style={{ fontSize: '24px', minWidth: '48px' }}>{d.v}</div>
                      <div>
                        <div className="text-sm font-semibold">{d.l}</div>
                        <div className="text-xs text-[#999]">{d.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Union */}
          <section className="mb-16">
            <p className="section-eyebrow mb-6">工会化运动</p>
            <div className="card p-8 text-center mb-6">
              <div className="stat-number mb-2" style={{ color: '#16a34a' }}>82%</div>
              <p className="text-sm font-medium">美国开发者支持游戏行业工作者工会化</p>
              <p className="text-xs text-[#999] mt-1">创历史新高 | United Videogame Workers-CWA 于 2025 年 GDC 成立</p>
            </div>
            <div className="grid-4">
              {[
                { v: "87%", l: "年收入 &lt;20万支持" },
                { v: "88%", l: "被裁者支持" },
                { v: "10%", l: "已是工会成员" },
                { v: "62%", l: "有兴趣加入" },
              ].map((d, i) => (
                <div key={i} className="card p-4 text-center">
                  <div className="font-bold text-lg">{d.v}</div>
                  <div className="text-xs text-[#999] mt-1">{d.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Recommendations */}
          <section>
            <p className="section-eyebrow mb-6">AI 工具使用建议</p>
            <div className="grid-2 gap-4">
              <div className="card p-6" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
                <h3 className="font-semibold text-sm mb-4" style={{ color: '#16a34a' }}>推荐场景</h3>
                <div className="space-y-2 text-sm" style={{ color: '#15803d' }}>
                  <p>✓ 资产变体生成</p>
                  <p>✓ 本地化翻译</p>
                  <p>✓ QA 测试自动化</p>
                  <p>✓ 代码辅助（Copilot 类）</p>
                  <p>✓ 设计研究/头脑风暴</p>
                </div>
              </div>
              <div className="card p-6" style={{ background: '#fef2f2', borderColor: '#fecaca' }}>
                <h3 className="font-semibold text-sm mb-4" style={{ color: '#dc2626' }}>不推荐场景</h3>
                <div className="space-y-2 text-sm" style={{ color: '#b91c1c' }}>
                  <p>✗ 替代核心叙事创作</p>
                  <p>✗ Text-to-game 管线</p>
                  <p>✗ 替代专业表演者</p>
                  <p>✗ 替代关卡设计</p>
                  <p>✗ 大规模美术资产直接生成</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
