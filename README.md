# 免费在线游戏平台

🎮 **官方网站**: [doodle-baseball.net](https://doodle-baseball.net/)

📖 **English Version**: [README_EN.md](./README_EN.md)

这是一个基于 Next.js 构建的免费在线游戏网站项目。该网站提供一系列经典和令人上瘾的浏览器游戏，并针对搜索引擎和 AI 爬虫进行了优化。

## 项目概述

本项目旨在提供一个高质量的免费在线游戏平台，玩家可以直接在浏览器中体验各种有趣的游戏，无需下载或安装。

## 支持的游戏列表

1.  **[Doodle Baseball](https://doodle-baseball.net/doodle-baseball)** - 一款重现经典Google Doodle的棒球游戏，玩法简单却富有挑战。
2.  **[Drift Boss](https://doodle-baseball.net/drift-boss)** - 在无尽的弯曲道路上考验你的漂移技巧和反应能力。

### 主要功能

- **多款游戏体验** - 在一个平台上享受不同类型的经典游戏。
- **游戏特性、玩法和 FAQ 介绍** - 每个游戏都提供详细的指南和常见问题解答。
- **针对搜索引擎优化 (SEO)** - 完整的meta标签和结构化数据。
- **针对 AI 爬虫的特殊内容优化** - 专用的llms.txt文件。
- **响应式设计** - 支持各种设备和屏幕尺寸。
- **无障碍访问** - 确保所有用户都能享受游戏。

## 项目结构

```
/
├── app/                    # 应用主目录
│   ├── layout.tsx          # 全局布局
│   ├── page.tsx            # 首页
│   ├── [game_slug]/        # 游戏页面目录 (例如: doodle-baseball/, drift-boss/)
│   ├── about/              # 关于页面
│   ├── contact/            # 联系页面
│   ├── privacy-policy/     # 隐私政策页面
│   └── terms-of-service/   # 服务条款页面
├── components/             # React 组件库
│   └── ...
├── config/                 # 配置文件
│   ├── site.js/ts          # 站点基本配置
│   └── content.ts          # 全局内容配置
├── public/                 # 静态资源
│   ├── assets/             # 图片和其他资源
│   │   ├── [game_slug]/    # 游戏相关图片
│   │   └── img/            # 站点通用图片
│   ├── game/               # 游戏文件目录
│   │   └── [game_slug]/    # 游戏嵌入文件
│   ├── llms.txt            # AI 爬虫专用内容摘要
│   ├── llms-full.txt       # AI 爬虫专用完整内容
│   └── ...
└── next.config.js          # 配置文件 (包含游戏路由重写)
```

## 开发指南

### 环境要求
- Node.js 16.x 或更高版本
- npm 或 yarn

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 本地开发
```bash
npm run dev
# 或
yarn dev
```
访问 http://localhost:3000 查看网站。

### 构建项目
```bash
npm run build
# 或
yarn build
```

## 游戏嵌入

网站通过 iframe 嵌入游戏，重写规则在 `next.config.js` 中定义：

- `/[game_slug].embed` → `/game/[game_slug]/index.html`

游戏文件位于 `public/game/[game_slug]/` 目录中。

## 环境变量配置
在项目根目录创建 `.env.local` 文件：
```bash
# Google Analytics Configuration (可选)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Bing Webmaster Tools (可选)
BING_VERIFICATION_KEY=BingVerificationXXXXXXXXXXXXXXXX
```

## 相关链接和资源

### 官方页面
- 🏠 **主页**: [官方网站](https://doodle-baseball.net/)
- 📞 **联系我们**: [联系我们](https://doodle-baseball.net/contact)
- ℹ️ **关于我们**: [关于我们](https://doodle-baseball.net/about)
- 🔒 **隐私政策**: [隐私政策](https://doodle-baseball.net/privacy-policy)
- 📋 **服务条款**: [服务条款](https://doodle-baseball.net/terms-of-service)

## AI 爬虫优化

本项目针对 AI 爬虫进行了特殊优化：
1.  **专用内容文件**: 提供了 `llms.txt` 和 `llms-full.txt` 文件，包含结构化的游戏信息。
2.  **robots.txt 配置**: 引导 AI 爬虫访问专用文件。
3.  **支持的AI爬虫**: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, DeepseekBot 等。

## 部署

项目配置为通过 Vercel 自动部署。推送到主分支的更改将自动部署到生产环境。

### 自动部署
- **生产环境**: 推送到 `main` 分支自动部署
- **预览环境**: 创建 Pull Request 自动生成预览链接

## 许可证

© 2025 Doodle Baseball. 保留所有权利。