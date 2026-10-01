// 笔记索引:加一篇笔记时,在数组里追加一条即可。
// 字段:title 标题 / date 日期(YYYY-MM-DD) / category 分类 / url 文件路径 / desc 一句话描述(可选,用于搜索)
const NOTES = [
  {
    title: "如何使用这个博客",
    date: "2026-09-22",
    category: "其他",
    url: "notes/2026-09-22-how-to-use.html",
    desc: "介绍博客结构、如何添加笔记、如何部署"
  },
  {
    title: "RISC-V IOMMU 驱动 · 从零入门路径",
    date: "2026-09-23",
    category: "RISC-V IOMMU",
    url: "notes/2026-09-23-riscv-iommu-新手入门路径.html",
    desc: "RISC-V IOMMU 驱动从零入门的路径与前置知识"
  },
  {
    title: "RISC-V IOMMU 页表 · 学习攻略",
    date: "2026-09-23",
    category: "RISC-V IOMMU",
    url: "notes/2026-09-23-riscv-iommu-页表学习攻略.html",
    desc: "两级页表格式与地址翻译学习攻略"
  },
  {
    title: "RISC-V IO Mapping Table (RIMT) 规范 · 中文翻译",
    date: "2026-09-23",
    category: "RISC-V IOMMU",
    url: "notes/2026-09-23-riscv-iommu-RIMT规范.html",
    desc: "RISC-V IOMMU RIMT 规范中文翻译"
  },
  {
    title: "RISC-V IOMMU Linux 驱动 · 源码逐模块分析",
    date: "2026-09-23",
    category: "RISC-V IOMMU",
    url: "notes/2026-09-23-riscv-iommu-源码逐模块分析.html",
    desc: "Linux 内核 RISC-V IOMMU 驱动源码逐模块拆解"
  },
  {
    title: "RTL 调试 MCP 工具全景 · wave-mcp / TraceWeave / xverif 与底层原理",
    date: "2026-09-28",
    category: "AI Tools",
    url: "notes/2026-09-28-波形debug工具-使用指南.html",
    desc: "四个 RTL 调试 MCP 工具（wave-mcp / TraceWeave / xverif / fsdb-mcp）的对比，以及波形格式、信号追踪、Verdi NPI 等底层原理"
  },
  {
    title: "Claude Skill 与 skill-seekers · 把资料自动变成 Skill",
    date: "2026-09-28",
    category: "AI Tools",
    url: "notes/2026-09-28-skill-seekers使用指南.html",
    desc: "Claude Skill 概念详解,以及 skill-seekers 工具把 PDF/网站/GitHub 转成 Skill 的用法"
  },
  {
    title: "skill-seekers 家族 · 三方定位与 SystemVerilog/UVM 识别原理",
    date: "2026-09-29",
    category: "AI Tools",
    url: "notes/2026-09-29-skill-seekers-三方对比.html",
    desc: "对比 skill-seekers、simple-skill-seekers、svcode-skill-seekers 三方的定位，以及 tree-sitter 如何解析 SystemVerilog/UVM 源码"
  },
  {
    title: "iPhone 连 Mac 终端跑 Claude Code · 异地远程方案",
    date: "2026-09-30",
    category: "AI Tools",
    url: "notes/2026-09-30-iPhone连Mac跑ClaudeCode.html",
    desc: "Tailscale + SSH + tmux + disablesleep 四件套，异地用 iPhone 连回 Mac 跑 Claude Code 的完整方案与踩坑"
  },
  {
    title: "济南四日游攻略",
    date: "2026-10-01",
    category: "旅行",
    url: "notes/2026-10-01-济南四日游攻略.html",
    desc: "以明湖四季为起点的济南四日串线：趵突泉、山东博物馆、千佛山、老商埠，附美食与避坑"
  }
];
