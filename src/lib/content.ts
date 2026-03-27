// ─── Industry Report Data ─────────────────────────────────────────────────────
export const industryStats = [
  { value: "52%", label: "开发者认为AI将产生负面影响", sublabel: "较2024年(18%)上升近3倍", color: "red" },
  { value: "42%", label: "使用Unreal Engine", sublabel: "最常用游戏引擎", color: "blue" },
  { value: "82%", label: "美国开发者支持工会化", sublabel: "创历史新高", color: "green" },
  { value: "28%", label: "为Steam Deck开发/优化", sublabel: "第4大目标平台", color: "orange" },
  { value: "28%", label: "过去两年被裁员", sublabel: "AAA工作室中占66%", color: "red" },
  { value: "30%", label: "使用Unity", sublabel: "较去年下降", color: "gray" },
];

// ─── Keynotes Data ─────────────────────────────────────────────────────────────
export const keynotes = [
  {
    speaker: "小岛秀夫",
    en: "Hideo Kojima",
    title: "Restarting from Zero",
    subtitle: "KOJIMA PRODUCTIONS 创始人",
    day: "3月12日",
    description: "五年来首位进行GDC主题演讲的嘉宾，分享从零开始建立工作室的历程与创业心得",
    highlight: true,
    tags: ["独立游戏", "创业", "创意"],
    quote: "Creativity is not a solitary act. It's a dialogue with your audience.",
  },
  {
    speaker: "Rob Pardo",
    en: "Rob Pardo",
    title: "An Odyssey in Building Games That Last",
    subtitle: "Bonfire Studios创始人 / 暴雪前首席创意官",
    day: "3月12日",
    description: "暴雪黄金时代的缔造者，分享如何打造能够经受时间考验的长寿游戏，以及建立痴迷于玩家体验的团队文化",
    highlight: true,
    tags: ["游戏设计", "团队文化", "长寿游戏"],
    quote: "Play to build games. Let players decide if your game is worth continuing.",
  },
];

// ─── Awards Data ───────────────────────────────────────────────────────────────
export const awards = {
  gdca: {
    gameOfYear: { game: "Clair Obscur: Expedition 33", dev: "Sandfall Interactive", awards: 5 },
    categories: [
      { name: "Game of the Year", winner: "Clair Obscur: Expedition 33" },
      { name: "Best Debut", winner: "Clair Obscur: Expedition 33" },
      { name: "Best Visual Art", winner: "Clair Obscur: Expedition 33" },
      { name: "Best Narrative", winner: "Clair Obscur: Expedition 33" },
      { name: "Best Audio", winner: "Clair Obscur: Expedition 33" },
      { name: "Best Design", winner: "Blue Prince" },
      { name: "Innovation Award", winner: "Blue Prince" },
      { name: "Best Technology", winner: "Death Stranding 2: On the Beach" },
      { name: "Social Impact", winner: "Consume Me" },
    ],
  },
  igf: {
    grandPrize: "Titanium Court",
    audienceAward: "ChromaCorp",
    categories: [
      { name: "Grand Prize", winner: "Titanium Court", game: "AP Thomson / Fellow Traveller" },
      { name: "Best Student Game", winner: "SPRKLS.exe", game: "" },
      { name: "Excellence in Design", winner: "Öoo", game: "" },
      { name: "Excellence in Narrative", winner: "Perfect Tides: Station to Station", game: "" },
      { name: "Excellence in Audio", winner: "Morsels", game: "" },
      { name: "Nuovo Award", winner: "Mini Mini Golf Golf", game: "" },
    ],
  },
  lifetime: [
    { name: "Don Daglow", award: "终身成就奖", desc: "55年职业生涯，100+款游戏，首款图形MMORPG缔造者" },
    { name: "Rebecca Ann Heineman", award: "大使奖(追授)", desc: "首位国家视频游戏锦标赛冠军，250+款游戏贡献者" },
  ],
};

// ─── Game Design Cases ─────────────────────────────────────────────────────────
export const gameDesignCases = [
  {
    title: "Donkey Kong Bananza",
    speaker: "Kenta Motokura & Tatsuya Kurihara",
    company: "Nintendo EPD",
    type: "Tech / Design",
    color: "red",
    summary: "体素技术如何实现 juicy 游戏循环——毁灭即探索",
    keyInsight: "环境规模达 3.47 亿体素，通过毁灭链驱动战斗与探索融合",
    tags: ["体素技术", "环境破坏", "战斗设计"],
    body: `Donkey Kong Bananza 展示了体素破坏技术如何驱动游戏循环：玩家接近敌人 → 抓起岩石 → 攻击敌人 → 敌人被击飞撞穿墙壁 → 发现新区域。Nintendo 的核心理念是"毁灭即探索"——技术投资应为玩家和开发者创造机会。`,
  },
  {
    title: "Despelote",
    speaker: "Julián Cordero",
    company: "Panic",
    type: "Design",
    color: "blue",
    summary: "即兴表演驱动的真实性——踢球作为通用语言",
    keyInsight: "所有NPC对话全部即兴创作，录制朋友和家人真实聊天，无剧本",
    tags: ["即兴表演", "叙事设计", "真实性"],
    body: `Despelote 聚焦2001年厄瓜多尔一个小社区的生活。开发者在制作《FIFA》NPC 对话时决定：不写任何对话，全部即兴创作。召集朋友视频通话录制他们讨论足球、政治和日常生活的对话，直接放入游戏。效果远超预期——真实感来自于"人们只是在开始交谈，带来了很多自我"。`,
  },
  {
    title: "Battlefield 6",
    speaker: "Jac Carlsson",
    company: "DICE",
    type: "Design",
    color: "green",
    summary: "舞蹈编排增强游戏手感——动觉战斗系统",
    keyInsight: "FPS 的基础 = 稳固输入 + 低延迟 + 与游戏现实感相连的射击反馈",
    tags: ["游戏手感", "动作设计", "FPS"],
    body: `DICE 的 Jac Carlsson 将舞蹈编排思维引入 FPS 设计。"The action is the juice"——玩家是表演者，输入响应和射击反馈的定性行为决定了玩家序列情感和动作的能力。FPS 基础 = 稳固输入 + 低延迟 + 与游戏现实感相连的射击反馈。`,
  },
  {
    title: "Peak — Aggro Crab",
    speaker: "Nick Kaman",
    company: "Aggro Crab",
    type: "Indie",
    color: "purple",
    summary: "文本即恶魔——独立工作室的文化变革",
    keyInsight: "从 Landfall Games 学到的：减少文字沟通，面对面/语音交流更高效",
    tags: ["独立游戏", "工作室文化", "团队协作"],
    body: `与 Landfall Games 合作开发 Peak 后，Nick Kaman 重新思考了工作室运营方式。核心洞见："Discord 必须有某种技术，让我的信息扭曲成这条消息能接收到的最负面版本。" 解决方案：优先面对面交流、减少计划性会议、每周独立工作时间。"Peak 是我制作游戏时最开心的一次。"`,
  },
  {
    title: "Dispatch — AdHoc",
    speaker: "Nick Herman & Dennis Lenart",
    company: "AdHoc",
    type: "Narrative",
    color: "orange",
    summary: "叙事 ≠ 剧情——叙事 = 精彩对话",
    keyInsight: "讲述非常简单故事 + 复杂角色，而非复杂剧情 + 简单角色",
    tags: ["叙事设计", "游戏写作", "角色塑造"],
    body: `AdHoc 认为："你走出电影院时，不会说'叙事很棒'。你会谈论写作。" 叙事 = 精彩对话 → 令人难忘的角色 → 人们真正关心的关系。设计策略：非常简单的故事 + 复杂的角色；用约100名盲测用户进行最终测试，确认故事和角色是否真正引起共鸣后才开始正式动画制作。`,
  },
  {
    title: "Gen Z 市场营销",
    speaker: "Sharon Tal Yguado",
    company: "Astrid Entertainment",
    type: "Marketing",
    color: "gray",
    summary: "真实性是货币——Z世代 BS 检测器",
    keyInsight: "Z世代不关心高保真图形和长教程，游戏 = 社交空间",
    tags: ["市场营销", "Z世代", "真实性"],
    body: `Sharon Tal Yguado 的核心观点：Z世代有 BS 检测器，他们非常愤世嫉俗和批判。真实性是一种巨大的货币。他们想听真正信任的内容创作者和影响者的话。85%的青少年玩电子游戏，游戏不再是爱好——游戏是闲逛的地方，是与朋友在一起的地方。放弃传统 polished 营销。`,
  },
];

// ─── Tech Trends ───────────────────────────────────────────────────────────────
export const techTrends = [
  {
    icon: "🤖",
    category: "AI / ML",
    title: "开发者对AI担忧创历史新高",
    data: "52% 认为AI产生负面影响",
    trend: "↑ (2024: 18%, 2025: 30%)",
    detail: "视觉美术(64%)、游戏设计(63%)、编程(59%)持最负面看法。仅7%认为AI有正面影响。",
    recommendations: [
      { use: "✅ 资产变体生成、本地化翻译、QA自动化、代码辅助", avoid: "❌ 替代核心叙事、替代专业表演者、Text-to-game管线" },
    ],
  },
  {
    icon: "🎮",
    category: "Engine",
    title: "Unreal Engine 扩大领先优势",
    data: "Unreal 42% | Unity 30% | Godot 11%",
    trend: "Unreal 在 AAA/AA 工作室持续扩大优势",
    detail: "AA工作室59%使用Unreal；AAA工作室47%；老一代独立工作室54%仍用Unity；Godot吸引新一代独立开发者（免费开源）",
    recommendations: [],
  },
  {
    icon: "🕹️",
    category: "Platform",
    title: "Steam Deck 崛起",
    data: "28% 为其开发/优化游戏",
    trend: "第4大目标平台，与 Switch 2 (39%) 持平",
    detail: "40% 开发者有兴趣为其开发；PC 仍主导（73% 高管将PC列为前三平台）",
    recommendations: [],
  },
  {
    icon: "🏗️",
    category: "Union",
    title: "工会化支持率创历史新高",
    data: "82% 美国开发者支持工会化",
    trend: "↑ (2025: 75%)",
    detail: "年收入<20万美元者支持率87%；过去两年被裁者88%；18-24岁无反对者；10%已是工会成员；62%有兴趣加入。United Videogame Workers-CWA 于2025年GDC成立。",
    recommendations: [],
  },
];

// ─── Summit Communities ───────────────────────────────────────────────────────
export const summitCommunities = [
  { name: "Audio", zh: "音频", icon: "🎵", desc: "动态音乐系统、AI辅助作曲、空间音频" },
  { name: "Animation", zh: "动画", icon: "🎬", desc: "动作捕捉、AI动画生成、程序化动画" },
  { name: "Art Direction", zh: "美术指导", icon: "🎨", desc: "视觉风格一致性、技术美术协作" },
  { name: "Community Management", zh: "社区运营", icon: "👥", desc: "UGC生态、内容审核、反馈闭环" },
  { name: "Game AI", zh: "游戏AI", icon: "🤖", desc: "行为树、LLM对话、NPC决策" },
  { name: "Level Design", zh: "关卡设计", icon: "🗺️", desc: "程序化关卡、开放世界、体素技术" },
  { name: "Tabletop", zh: "桌游", icon: "🎲", desc: "数字转换、异步游戏、IP改编" },
  { name: "Product Management", zh: "产品管理", icon: "📦", desc: "Live Service、数据驱动、玩家生命周期" },
  { name: "Independent Games", zh: "独立游戏", icon: "🦀", desc: "小团队协作、Godot、朋友滑类型" },
  { name: "Machine Learning", zh: "机器学习", icon: "🧠", desc: "ML-Agents、强化学习、端侧推理" },
  { name: "Technical Artist", zh: "技术美术", icon: "⚡", desc: "着色器、DCC工具集成、性能优化" },
  { name: "Tools", zh: "开发工具", icon: "🔧", desc: "内部工具、CI/CD、AI编程辅助" },
  { name: "Narrative", zh: "叙事设计", icon: "📖", desc: "分支叙事、LLM动态叙事、互动戏剧" },
  { name: "UX", zh: "用户体验", icon: "🔮", desc: "可访问性、情感设计、自适应界面" },
  { name: "Visual Effects", zh: "视觉特效", icon: "✨", desc: "粒子系统、光线追踪、体积渲染" },
  { name: "Thriving Players", zh: "玩家生态", icon: "🌱", desc: "玩家社区、电子竞技、玩家心理健康" },
];

// ─── GDC Nights ───────────────────────────────────────────────────────────────
export const gdcNights = [
  { name: "Opening Night", place: "Oracle Park", date: "3月9日", desc: "GDC历史上首次在Oracle Park举办开幕式，游戏社区在球场灯下团聚", icon: "🏟️" },
  { name: "Developer's Concert", place: "Moscone Center", date: "3月10日", desc: "Austin Wintory 带领旧金山音乐学院现场演出，庆祝游戏音乐艺术", icon: "🎼" },
  { name: "IGF Awards", place: "Moscone Center", date: "3月11日", desc: "独立游戏节奖项，庆祝边界突破的团队和学生创作者", icon: "🏆" },
  { name: "GDCA", place: "Moscone Center", date: "3月12日", desc: "Game Developers Choice Awards，同伴认可的年度成就", icon: "🎮" },
];

// ─── Luminaries ────────────────────────────────────────────────────────────────
export const luminaries = [
  { day: "3月10日 AI与新兴技术", speakers: [
    { name: "Bryan Catanzaro", title: "VP, Applied Deep Learning Research", company: "NVIDIA" },
    { name: "Julien Merceron", title: "CTO", company: "Bandai Namco Studios" },
    { name: "Zhen Zhai", title: "Associate Director, Applied Science", company: "Blizzard Entertainment" },
    { name: "Alexandre Moufarek", title: "Product Lead", company: "Google DeepMind" },
  ]},
  { day: "3月11日 投资、全球扩张与玩家生态", speakers: [
    { name: "Brian Ward", title: "CEO", company: "Savvy Games Group" },
    { name: "Moritz Baier-Lentz", title: "Partner & Head of Gaming", company: "Lightspeed Venture Partners" },
    { name: "Marcus Liassides", title: "SVP, Global Head of Digital", company: "Mattel" },
  ]},
  { day: "3月12日 跨媒体、玩家参与与灵感", speakers: [
    { name: "Justin Scarpone", title: "EVP & Global Head of Transmedia", company: "SEGA" },
    { name: "Sharon Tal Yguado", title: "CEO & Founder", company: "Astrid Entertainment" },
    { name: "Fran Goncalves", title: "SVP, Global Head of Sync", company: "Universal Music Group" },
  ]},
];

// ─── Navigation ────────────────────────────────────────────────────────────────
export const navItems = [
  { label: "行业报告", href: "/industry-report" },
  { label: "主题演讲", href: "/keynotes" },
  { label: "奖项", href: "/awards" },
  { label: "游戏设计", href: "/game-design" },
  { label: "技术趋势", href: "/tech-trends" },
  { label: "16个社区", href: "/summit" },
  { label: "GDC Nights", href: "/events" },
];
