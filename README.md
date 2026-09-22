# 我的技术博客

纯静态技术博客,由 GitHub Pages 托管,零构建工具。

## 结构

- `index.html` — 首页(目录 + 分类 + 搜索)
- `notes.js` — 笔记索引,加笔记时维护它
- `notes/` — 每篇笔记一个 HTML
- `assets/` — 样式与渲染脚本

## 添加笔记

1. 在 `notes/` 新建 `YYYY-MM-DD-标题.html`
2. 在 `notes.js` 的 `NOTES` 数组追加一条
3. `git add` + `git commit` + `git push`

## 部署

GitHub 仓库 Settings → Pages → Source 选 main 分支。
