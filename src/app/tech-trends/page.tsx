"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { techTrends } from "@/lib/content";

export default function TechTrends() {
  return (
    <main>
      <Nav />
      <div style={{ paddingTop: '56px' }}>
        <div style={{ background: '#fafafa', borderBottom: '1px solid #e4e4e7' }}>
          <div className="container py-16">
            <p className="section-eyebrow">Tech Trends</p>
            <h1 className="text-headline mb-3">技术趋势</h1>
            <p className="text-[#666] text-base">AI/ML、引擎格局、新兴平台</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="space-y-4 mb-16">
            {techTrends.map((t, i) => (
              <div key={i} className="card p-8">
                <div className="flex items-start gap-5 mb-4">
                  <span className="text-3xl">{t.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="tag tag-muted text-xs">{t.category}</span>
                      <span className="text-xs font-semibold px-2 py-1 rounded border border-[#e4e4e7] text-[#999]">{t.trend}</span>
                    </div>
                    <h2 className="font-bold text-lg mb-0.5">{t.title}</h2>
                    <p className="text-[#dc2626] font-semibold text-sm">{t.data}</p>
                  </div>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <p className="section-eyebrow mb-6">LLM 真实水平</p>
            <div className="card p-8">
              <blockquote className="border-l-2 border-[#000] pl-4 mb-5">
                <p className="italic text-[#000] text-lg font-medium">"LLM 在 Aspirationally 中等（mid）水平。"</p>
                <p className="text-xs text-[#999] mt-1">— Hilary Mason, Hidden Door CEO</p>
              </blockquote>
              <p className="text-sm text-[#666] leading-relaxed mb-6">
                LLM 能够生成看起来合理的对话，但在复杂情境下仍存在逻辑漏洞和"幻觉"问题。
              </p>
              <div className="grid-2 gap-4">
                <div className="p-5 rounded-lg" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                  <h3 className="font-semibold text-sm mb-3" style={{ color: '#15803d' }}>应用场景</h3>
                  <div className="text-sm space-y-1" style={{ color: '#15803d' }}>
                    <p>• NPC 个性化对话</p>
                    <p>• 动态任务生成</p>
                    <p>• NPC 记忆系统</p>
                  </div>
                </div>
                <div className="p-5 rounded-lg" style={{ background: '#fef2f2', border: '1px solid #fecaca' }}>
                  <h3 className="font-semibold text-sm mb-3" style={{ color: '#b91c1c' }}>技术挑战</h3>
                  <div className="text-sm space-y-1" style={{ color: '#b91c1c' }}>
                    <p>• 实时推理延迟</p>
                    <p>• 推理成本控制</p>
                    <p>• 内容安全与审核</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <p className="section-eyebrow mb-6">VR/AR 市场</p>
            <div className="grid-2 gap-4">
              {[
                { n: "Meta Quest 3/3S", s: "继续主导消费级 VR 市场，累计销量超过千万", c: "#000" },
                { n: "Apple Vision Pro", s: "空间计算设备早期探索，商业化道路尚不明朗", c: "#525252" },
                { n: "PlayStation VR2", s: "索尼第二代 VR 产品，销量未达预期", c: "#999" },
                { n: "Valve Deckard", s: "传闻中的 Valve 自有 VR 设备，尚未发布", c: "#999" },
              ].map((d, i) => (
                <div key={i} className="card p-5">
                  <h3 className="font-semibold text-sm mb-1">{d.n}</h3>
                  <p className="text-xs" style={{ color: d.c }}>{d.s}</p>
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
