"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { techTrends } from "@/lib/content";

export default function TechTrends() {
  return (
    <main>
      <Nav />
      <div className="pt-24 pb-24">
        <div className="bg-white border-b border-stone-200 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="section-label">Tech Trends</p>
            <h1 className="section-title mb-4">技术趋势</h1>
            <p className="text-stone-500 text-lg">
              AI/ML 从概念走向落地，引擎格局持续演变，新兴平台重新定义开发目标
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="space-y-6">
            {techTrends.map((t, i) => (
              <div key={i} className="card p-8">
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-3xl">{t.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="tag tag-muted text-xs">{t.category}</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        t.trend.includes('↑') ? 'bg-green-100 text-green-700' :
                        t.trend.includes('↓') ? 'bg-red-100 text-red-700' :
                        'bg-stone-100 text-stone-600'
                      }`}>
                        {t.trend}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-xl text-stone-900 mb-1">{t.title}</h2>
                    <p className="text-[#DC2626] font-bold">{t.data}</p>
                  </div>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">{t.detail}</p>
                {t.recommendations.map((r, j) => (
                  <div key={j} className="text-sm text-stone-600 bg-stone-50 rounded-lg p-4">
                    {r.use && <p className="text-green-700 mb-1">{r.use}</p>}
                    {r.avoid && <p className="text-red-700">{r.avoid}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* AI Deep Dive */}
          <section className="mt-16">
            <h2 className="font-display font-bold text-2xl mb-6">🔍 LLM 在游戏中的真实水平</h2>
            <div className="card p-8 bg-gradient-to-br from-stone-50 to-white">
              <blockquote className="border-l-4 border-[#DC2626] pl-5 mb-6">
                <p className="italic text-stone-700 text-lg">"LLM 在 Aspirationally 中等（mid）水平。"</p>
                <p className="text-stone-500 text-sm mt-1">— Hilary Mason, Hidden Door CEO</p>
              </blockquote>
              <p className="text-stone-600 leading-relaxed mb-4">
                Hilary Mason 表示：LLM 能够生成看起来合理的对话，但在复杂情境下仍存在逻辑漏洞和"幻觉"问题。
                当前 LLM 在 NPC 和对话系统中的应用正处于从实验阶段走向早期实用化的过渡期。
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-5 bg-green-50 rounded-xl border border-green-100">
                  <h3 className="font-semibold text-green-800 mb-3">应用场景</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• NPC 个性化对话</li>
                    <li>• 动态任务生成</li>
                    <li>• NPC 记忆系统</li>
                  </ul>
                </div>
                <div className="p-5 bg-red-50 rounded-xl border border-red-100">
                  <h3 className="font-semibold text-red-800 mb-3">技术挑战</h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• 实时推理延迟（尤其移动端）</li>
                    <li>• 推理成本控制</li>
                    <li>• 内容安全与审核</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tencent AI */}
          <section className="mt-16">
            <h2 className="font-display font-bold text-2xl mb-6">🎬 Tencent AI 动画工具争议</h2>
            <div className="card p-8">
              <p className="text-stone-600 leading-relaxed mb-5">
                Tencent 子公司 MoreFun Studios 展示了实时 AI 功夫动作生成工具。核心技术包括：
                实时 AI 中间帧生成（解决穿模和滑步问题）、设备端处理（保护数据隐私）、风格控制。
              </p>
              <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                <h3 className="font-semibold text-red-800 mb-3">⚠️ 争议焦点</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 武术表演者的版权和权益问题——真实功夫表演者的动作被用于训练</li>
                  <li>• 训练数据的伦理边界尚无明确行业规范</li>
                  <li>• 记者实测显示营销宣传与实际效果存在差距</li>
                </ul>
              </div>
            </div>
          </section>

          {/* VR/AR */}
          <section className="mt-16">
            <h2 className="font-display font-bold text-2xl mb-6">🥽 VR/AR 市场状态</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Meta Quest 3/3S", status: "继续主导消费级 VR 市场，累计销量超过千万", c: "blue" },
                { name: "Apple Vision Pro", status: "空间计算设备早期探索，商业化道路尚不明朗", c: "gray" },
                { name: "PlayStation VR2", status: "索尼第二代 VR 产品，销量未达预期", c: "gray" },
                { name: "Valve Deckard", status: "传闻中的 Valve 自有 VR 设备，尚未发布", c: "orange" },
              ].map((d, i) => (
                <div key={i} className="card p-5">
                  <h3 className="font-semibold text-stone-900 mb-1">{d.name}</h3>
                  <p className="text-xs text-stone-500">{d.status}</p>
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
