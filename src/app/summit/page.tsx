import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { summitCommunities } from "@/lib/content";

export default function Summit() {
  return (
    <main>
      <Nav />
      <div style={{ paddingTop: '56px' }}>
        <div style={{ background: '#fafafa', borderBottom: '1px solid #e4e4e7' }}>
          <div className="container py-16">
            <p className="section-eyebrow">Summit Communities</p>
            <h1 className="text-headline mb-3">16个社区</h1>
            <p className="text-[#666] text-base">GDC 按专业领域划分的专题频道</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid-4 mb-16">
            {summitCommunities.map((s, i) => (
              <div key={i} className="card p-5">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-semibold text-sm mb-0.5">{s.name}</div>
                <div className="text-xs text-[#dc2626] font-medium mb-2">{s.zh}</div>
                <div className="text-xs text-[#bbb] leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>

          <p className="section-eyebrow mb-6">重点详解</p>
          <div className="space-y-3">
            {[
              { icon: "🤖", name: "Game AI", zh: "游戏人工智能", c: "LLM 为 NPC 注入记忆和个性，实现更自然的对话体验" },
              { icon: "🧠", name: "Machine Learning", zh: "机器学习", c: "端侧 ML 模型普及，强化学习训练 NPC/动态难度调整" },
              { icon: "🦀", name: "Independent Games", zh: "独立游戏", c: "Godot 崛起（11% 使用率），朋友滑类型兴起" },
              { icon: "📖", name: "Narrative", zh: "叙事设计", c: "LLM 驱动动态叙事，NPC 根据玩家行为生成个性化对话" },
              { icon: "⚡", name: "Technical Artist", zh: "技术美术", c: "Nanite 引领虚拟几何体技术，VFX Graph / Niagara 可视化特效" },
              { icon: "🎨", name: "Art Direction", zh: "美术指导", c: "风格化渲染双向探索，AI 生成概念美术争议与边界" },
            ].map((s, i) => (
              <div key={i} className="card p-5 flex gap-4">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <h3 className="font-semibold text-sm">{s.name} <span className="text-[#dc2626] font-normal text-xs">— {s.zh}</span></h3>
                  <p className="text-xs text-[#666] mt-1 leading-relaxed">{s.c}</p>
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
