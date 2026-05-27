# PrintForge 3D 打印跨境电商企业官网

> 🧩 基于 **钉钉 AI 应用开发平台（Vibe Coding）** 搭建的 3D 打印产品企业官网，结合 Cursor 辅助代码优化，面向全球跨境贸易场景。  
> 🎨 融合 **3D 插画设计** 与 **现代企业官网搭建** 思维，打造沉浸式品牌展示与产品呈现体验。

---

## 📌 项目背景

本项目是为一家 3D 打印产品跨境电商企业量身定制的品牌官网。核心页面与布局通过钉钉 AI 应用开发工具快速生成，并在 Cursor 中进行精细的代码级优化。项目遵循 **Vibe Coding** 理念：用自然语言驱动 AI 生成代码骨架，再借力 AI 编程助手迭代完善，实现从创意到可部署网站的高效交付。

**重要说明**：  
- 项目脚手架由 **钉钉 AI 应用开发平台** 自动生成，内置钉钉生态相关组件（如鉴权、通讯录、上传等）。  
- 官网本身为纯静态前端页面，可脱离钉钉后端独立部署与访问；`server/` 目录为可选后端服务，仅在需要调用钉钉 OpenAPI 时才需启动。  
- 用户鉴权方式已在 `SPEC.md` 中明确为 **dingtalk-platform**，即基于钉钉开放平台的身份认证。

---

## ✨ 核心特性

- **跨境电商风格设计**：专业、国际化视觉语言，贴合海外采购商浏览习惯。  
- **3D 产品视觉呈现**：利用 3D 插画技能，强化产品结构展示与品牌科技感。  
- **响应式 & 暗黑模式**：完美适配桌面端、平板和手机，自动跟随系统主题。  
- **模块化组件架构**：基于 shadcn/ui 构建 50+ UI 组件，风格统一、可维护性强。  
- **钉钉生态集成（可选）**：内置钉钉登录、通讯录、文件上传等模块，可在需要时启用。  
- **流畅的滚动动画**：使用 Framer Motion 或自定义 hooks 实现元素淡入、数字滚动等微交互。

---

## 🛠️ 技术栈

| 层级 | 技术 |
|------|------|
| **搭建工具** | 钉钉 AI 应用开发（Vibe Coding） |
| **前端框架** | React 18 + TypeScript |
| **构建工具** | Vite |
| **样式方案** | Tailwind CSS + shadcn/ui |
| **路由** | React Router v6 |
| **动画** | Framer Motion |
| **后端（可选）** | Express (TypeScript)，用于对接钉钉 API |
| **代码优化** | Cursor（AI 辅助编程） |
| **设计技能** | 企业官网搭建 + 3D 插画设计 |
| **部署** | GitHub Pages / Vercel / 自托管 |

---

## 📁 项目结构概览

```
3d 打印企业官网-钉钉搭建/
├── index.html               # HTML 入口
├── package.json             # 依赖与脚本
├── vite.config.ts           # Vite 配置（别名 @ → src）
├── tailwind.config.js       # Tailwind 主题
├── tsconfig.json            # TypeScript 配置
├── .gitignore
├── SPEC.md                  # 技术规格（含鉴权方式：dingtalk-platform）
├── SCAFFOLD.md              # 脚手架说明
│
├── public/
│   └── app-icon.svg         # 站点图标
│
├── src/
│   ├── main.tsx             # 应用入口
│   ├── app.tsx              # 路由 & 布局
│   ├── pages/
│   │   ├── HomePage.tsx     # 首页
│   │   ├── AboutPage.tsx    # 关于我们
│   │   ├── ProductsPage.tsx # 产品与服务
│   │   ├── ContactPage.tsx  # 联系我们
│   │   └── not-found.tsx    # 404
│   ├── components/
│   │   ├── SiteHeader.tsx   # 全局导航栏
│   │   ├── SiteFooter.tsx   # 全局页脚
│   │   ├── ui/              # shadcn/ui 组件库
│   │   ├── providers/       # 主题 & 消息提供者
│   │   ├── upload/          # 文件上传组件
│   │   ├── employee-selector/ # 钉钉人员选择器
│   │   └── dept-selector/   # 钉钉部门选择器
│   ├── hooks/               # 自定义 Hooks（滚动动画、暗黑模式等）
│   ├── lib/                 # 工具函数（API 请求、鉴权等）
│   └── types/               # TypeScript 类型定义
│
├── server/                  # 可选后端服务
│   ├── index.ts             # Express 入口
│   ├── _core/auth.ts        # dingtalk-platform 鉴权中间件
│   └── official-apis/       # 钉钉通讯录、存储等 API 封装
│
└── dist/                    # 构建输出（npm run build 生成，已 gitignore）
```

---

## 🚀 快速开始

### 环境要求
- Node.js ≥ 18
- npm ≥ 9（项目使用 npm 镜像源配置，详见 `.npmrc`）

### 安装依赖
```bash
cd 3d 打印企业官网-钉钉搭建
npm install
```

### 本地开发
```bash
npm run dev
```
浏览器打开 `http://localhost:5173` 即可预览。

### 生产构建
```bash
npm run build
```
构建产物输出到 `dist/` 目录，可直接用于部署。

### 构建预览
```bash
npm run preview
```

---

## 🌐 部署指南

项目为 **纯静态前端**，你可以选择任意静态托管服务。

### 方式一：GitHub Pages（推荐）
1. 将代码推送到 GitHub 仓库（Public 仓库）。  
2. 在仓库 `Settings → Pages` 中，选择 `main` 分支的 `/ (root)` 目录，保存。  
3. 几分钟后网站即可通过 `https://你的用户名.github.io/仓库名/` 访问。

### 方式二：Vercel
1. 在 [Vercel](https://vercel.com) 导入 GitHub 仓库。  
2. 框架预设自动识别为 Vite，直接点击 Deploy。  
3. 每次推送代码 Vercel 会自动重新部署，并分配 `xxx.vercel.app` 域名。

> ⚠️ 如果部署 GitHub Pages 后出现路由刷新 404，请在 `vite.config.ts` 中设置 `base: '/仓库名/'`，或使用 Hash 路由。

---

## 🔐 关于钉钉鉴权（dingtalk-platform）

本项目脚手架原生支持 **钉钉开放平台用户鉴权**，鉴权方式已在 `SPEC.md` 中声明为 `dingtalk-platform`。

- 前端通过 `src/lib/auth.ts` 读取 Cookie 或运行时注入的 token。  
- 后端（`server/`）的 `_core/auth.ts` 中间件实现了钉钉身份验证逻辑。  
- **官网浏览无需登录**，仅当启用钉钉侧边栏应用或需要获取通讯录数据时才需要鉴权。

若你只需部署官网展示页面，可完全忽略 `server/` 目录，不影响网站的访问。

---

## 🧑‍💻 关于 Vibe Coding 与开发历程

本项目是 **Vibe Coding** 理念的一次成功实践：

1. **需求明确**：梳理跨境电商行业定位与 3D 打印产品展示需求。  
2. **AI 脚手架生成**：通过钉钉 AI 应用开发平台输入描述，快速生成包含页面、路由、组件的完整脚手架。  
3. **精细代码优化**：将生成的项目导入 Cursor，利用 AI 辅助逐文件优化样式、交互、性能与多语言细节。  
4. **版本管理 & 部署**：通过 Git 进行版本控制，并部署到公开访问平台，形成完整的交付闭环。

---

## 📝 署名与说明

- 本项目脚手架与基础组件由 **钉钉 AI 应用开发平台** 生成，在此基础上进行了定制化开发与视觉设计。  
- 所有业务页面内容（首页、关于、产品、联系）及 3D 插画视觉风格为原创设计。  
- 钉钉相关代码版权归钉钉（或相应开源协议）所有，其余部分遵循本项目的开源协议。

---

## 📄 许可证

本项目代码遵循 [MIT License](LICENSE)（可自行选择并添加 LICENSE 文件）。  
其中 `src/components/ui/` 目录下的 shadcn/ui 组件遵循其自身协议。  
钉钉平台生成的基础代码版权归属于钉钉（或遵循其生成条款），二次开发部分由项目作者所有。

---

## 📧 联系方式

如有任何问题或合作意向，欢迎联系：  
- 邮箱：SageFoster07simone@gmail.com
- GitHub：https://github.com/Simone-techAIGC

---

*Built with ❤️ using DingTalk AI App Builder + Cursor AI. Keep exploring the vibe of creation.*