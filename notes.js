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
  }
];
