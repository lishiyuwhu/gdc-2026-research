import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { summitCommunities } from "@/lib/content";

export default function Summit() {
  return (
    <main>
      <Nav />
      <div className="pt-24 pb-24">
        <div className="bg-white border-b border-stone-200 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="section-label">Summit Communities</p>
            <h1 className="section-title mb-4">16个社区</h1>
            <p className="text-stone-500 text-lg">
              GDC 按专业领域划分的专题频道，每个 Summit 汇聚该领域最顶尖的开发者与研究者
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {summitCommunities.map((s, i) => (
              <div key={i} className="card p-6 hover:border-stone-300">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h2 className="font-display font-bold text-lg text-stone-900 mb-1">{s.name}</h2>
                <p className="text-sm text-[#DC2626] font-medium mb-3">{s.zh}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="font-display font-bold text-2xl mb-6">重点社区详解</h2>
            <div className="space-y-4">
              {[
                { icon: "🤖", name: "Game AI", zh: "游戏人工智能", content: "涵盖行为树与有限状态机优化、NavMesh 动态障碍处理、HTN/GOAP 决策系统、LLM 驱动的 NPC 对话。LLM 为 NPC 注入记忆和个性成为本届焦点。" },
                { icon: "🧠", name: "Machine Learning", zh: "机器学习", content: "Unity ML-Agents 实践应用、强化学习训练 NPC/动态难度调整、端侧 ML 模型普及、小样本学习减少训练数据需求。" },
                { icon: "🎨", name: "Art Direction", zh: "美术指导", content: "风格化渲染在 AAA 与独立游戏中的双向探索、AI 生成概念美术的争议与实际应用边界、色彩理论与玩家情绪的深度关联。" },
                { icon: "🦀", name: "Independent Games", zh: "独立游戏", content: "Godot 在新一代独立开发者中的崛起（11% 使用率）；朋友滑类型兴起；小团队高效开发与发行策略。" },
                { icon: "📖", name: "Narrative", zh: "叙事设计", content: "LLM 驱动的动态叙事：NPC 根据玩家行为生成个性化对话；分支叙事设计的平衡；Ink、Twine 等叙事工具实践。" },
                { icon: "⚡", name: "Technical Artist", zh: "技术美术", content: "VFX Graph（Unity）与 Niagara（Unreal）可视化特效系统；Nanite 引领的虚拟几何体技术；着色器开发与 DCC 工具集成。" },
              ].map((s, i) => (
                <div key={i} className="card p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <h3 className="font-display font-bold text-stone-900">{s.name} <span className="text-[#DC2626] font-normal text-sm">- {s.zh}</span></h3>
                      <p className="text-sm text-stone-600 leading-relaxed mt-2">{s.content}</p>
                    </div>
                  </div>
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
