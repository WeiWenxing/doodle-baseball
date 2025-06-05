# Doodle Baseball 游戏网站

🎮 **官方网站**: [Doodle Baseball 官方网站](https://doodle-baseball.net/)

📖 **English Version**: [README_EN.md](./README_EN.md)

这是 Doodle Baseball 游戏的官方网站项目，基于 Next.js 构建。该网站提供经典的Google Doodle棒球游戏体验，针对搜索引擎和 AI 爬虫进行了优化。

## 项目概述

Doodle Baseball 是一款基于经典Google Doodle的棒球游戏，可直接在浏览器中运行，无需下载安装。本项目是游戏的官方网站，重现了那个让数百万玩家着迷的经典棒球游戏体验。

## 关于游戏

**Doodle Baseball** 是对经典Google Doodle棒球游戏的忠实重现和增强版本。游戏保持了原版简单而令人上瘾的玩法，同时添加了现代化的改进，包括更好的图形效果、更流畅的动画和优化的性能。

### 游戏亮点

🎯 **经典棒球体验**: 重现原版Google Doodle的经典时机挑战玩法

⚡ **简单易学**: 只需点击或触摸屏幕，任何人都能立即上手

🌟 **完美时机**: 成功取决于精确的时机掌握，而非复杂的操作

📱 **跨平台兼容**: 在桌面、平板和手机上都能完美运行

🎮 **免费畅玩**: 完全免费，无需下载，无广告干扰

### 为什么选择我们的Doodle Baseball？

- **怀旧体验**: 重温经典Google Doodle的美好回忆
- **现代优化**: 保持原味的同时提供更好的性能和体验
- **即时游玩**: 打开浏览器就能开始游戏，无任何障碍
- **全年龄适宜**: 适合所有年龄段的玩家享受
- **技能挑战**: 简单的规则下隐藏着对时机的极致考验

游戏完美捕捉了棒球运动的精髓 - 投手与击球手之间永恒的对决。每一次投球都是新的挑战，每一次完美击球都带来满足感。

### 主要功能

- **经典棒球游戏体验** - 忠实重现Google Doodle棒球的核心玩法
- **游戏特性、玩法和 FAQ 介绍** - 详细的游戏指南和常见问题解答
- **针对搜索引擎优化 (SEO)** - 完整的meta标签和结构化数据
- **针对 AI 爬虫的特殊内容优化** - 专用的llms.txt文件
- **响应式设计** - 支持各种设备和屏幕尺寸
- **无障碍访问** - 确保所有用户都能享受游戏

## 项目结构

```
/
├── app/                    # 应用主目录
│   ├── layout.tsx          # 全局布局
│   ├── page.tsx            # 首页 (Doodle Baseball)
│   ├── about/              # 关于页面
│   ├── contact/            # 联系页面
│   ├── privacy-policy/     # 隐私政策页面
│   └── terms-of-service/   # 服务条款页面
├── components/             # React 组件库
│   ├── game-section/       # 游戏展示组件
│   ├── layout/             # 布局组件 (Header, Footer)
│   ├── home/               # 首页组件
│   ├── features/           # 游戏特性组件
│   ├── what-is/            # 游戏介绍组件
│   ├── how-to-play/        # 玩法说明组件
│   ├── faq/                # FAQ组件
│   └── ui/                 # 基础UI组件
├── config/                 # 配置文件
│   ├── site.js/ts          # 站点基本配置
│   └── content.ts          # 游戏内容配置
├── public/                 # 静态资源
│   ├── assets/             # 图片和其他资源
│   │   ├── doodle-baseball/ # Doodle Baseball 相关图片
│   │   └── img/            # 站点通用图片
│   ├── game/               # 游戏文件目录
│   │   └── doodle-baseball/ # Doodle Baseball 游戏文件
│   ├── llms.txt            # AI 爬虫专用内容摘要
│   ├── llms-full.txt       # AI 爬虫专用完整内容
│   ├── robots.txt          # 搜索引擎爬虫规则
│   └── sitemap.xml         # 网站地图
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

网站通过 iframe 嵌入游戏：

- `/doodle-baseball.embed` → `/game/doodle-baseball/index.html`

游戏文件位于 `public/game/doodle-baseball/` 目录中，包含完整的游戏资源和启动页面。

## 环境变量配置

在项目根目录创建 `.env.local` 文件：

```bash
# Google Analytics Configuration (可选)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Bing Webmaster Tools (可选)
NEXT_PUBLIC_BING_ID=XXXXXXXXXX
```

## 相关链接和资源

### 官方页面
- 🏠 **主页**: [Doodle Baseball 官方网站](https://doodle-baseball.net/)
- 📞 **联系我们**: [联系我们](https://doodle-baseball.net/contact)
- ℹ️ **关于我们**: [关于我们](https://doodle-baseball.net/about)
- 🔒 **隐私政策**: [隐私政策](https://doodle-baseball.net/privacy-policy)
- 📋 **服务条款**: [服务条款](https://doodle-baseball.net/terms-of-service)

## AI 爬虫优化

本项目针对 AI 爬虫进行了特殊优化：

1. **专用内容文件**: 提供了 `llms.txt` 和 `llms-full.txt` 文件，包含结构化的游戏信息
2. **robots.txt 配置**: 引导 AI 爬虫访问专用文件
3. **支持的AI爬虫**: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, DeepseekBot 等

## 部署

项目配置为通过 Vercel 自动部署。推送到主分支的更改将自动部署到生产环境。

### 自动部署

- **生产环境**: 推送到 `main` 分支自动部署
- **预览环境**: 创建 Pull Request 自动生成预览链接

## 游戏特色

### 核心玩法
- **经典棒球机制**: 真实的投球和击球物理效果
- **完美时机系统**: 成功取决于精确的时机掌握
- **渐进难度**: 随着游戏进行难度逐渐增加
- **得分追踪**: 记录你的最佳表现和进步

### 技术优势
- **无需下载**: 完全基于浏览器的游戏体验
- **跨平台兼容**: 在桌面、平板和手机上无缝运行
- **优化性能**: 在现代浏览器上流畅的60fps游戏体验
- **响应式设计**: 自动适应不同屏幕尺寸和方向

### 用户体验
- **直观控制**: 简单的点击或触摸操作
- **视觉反馈**: 清晰的视觉和音频提示
- **家庭友好**: 适合所有年龄段，无暴力或不当内容
- **无障碍设计**: 为不同能力的用户设计

## 许可证

© 2025 Doodle Baseball. 保留所有权利。