# 符航康的个人主页

一个现代化的个人主页项目，使用 React + TypeScript + Vite 构建，集成了 HeroUI 和 shadcn/ui 组件库。

## 功能特性

- ✨ **现代化设计**: 使用最新的 React 19 和 TypeScript
- 🎨 **双主题模式**: 支持明暗主题切换
- 🌍 **多语言支持**: 中文和英文双语切换
- 📱 **响应式布局**: 完美适配各种设备
- 🎯 **组件库**: 集成 HeroUI 和 shadcn/ui
- 🚀 **快速开发**: 使用 Vite 实现极速热更新

## 技术栈

- **框架**: React 19 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **组件库**: HeroUI + shadcn/ui
- **图标**: Lucide React
- **国际化**: i18next + react-i18next
- **包管理器**: PNPM

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 项目结构

```
src/
├── components/       # React 组件
│   ├── Navbar.tsx   # 导航栏（包含主题和语言切换）
│   ├── Hero.tsx     # 英雄区域
│   ├── About.tsx    # 关于我
│   ├── Knowledge.tsx # 知识空间
│   ├── Skills.tsx   # 技能与生活
│   └── Contact.tsx  # 联系方式
├── contexts/        # React Contexts
│   └── ThemeContext.tsx # 主题切换上下文
├── i18n/           # 国际化配置
│   ├── config.ts   # i18n 配置
│   └── locales/    # 翻译文件
│       ├── zh.json # 中文翻译
│       └── en.json # 英文翻译
├── lib/            # 工具函数
│   └── utils.ts    # Tailwind 类名合并工具
├── App.tsx         # 主应用组件
├── main.tsx        # 应用入口
└── index.css       # 全局样式

## 自定义配置

### 修改主题颜色

编辑 `src/index.css` 中的 CSS 变量来自定义主题颜色。

### 添加新语言

1. 在 `src/i18n/locales/` 创建新的语言文件
2. 在 `src/i18n/config.ts` 中注册新语言
3. 在导航栏添加语言选项

### 修改内容

所有文本内容都在 `src/i18n/locales/` 的翻译文件中，修改这些文件即可更新内容。

## 特性说明

### 主题切换

点击导航栏的月亮/太阳图标可以切换明暗主题，主题偏好会保存在 localStorage 中。

### 语言切换

点击导航栏的语言图标可以在中英文之间切换。

### 响应式设计

网站在移动设备、平板和桌面端都有良好的显示效果。

## License

MIT

## 作者

符航康 (Eyre)
- GitHub: [@Eyre921](https://github.com/Eyre921)
- Email: eyre@hnu.edu.cn
- Website: [NFEyre.top](https://nfeyre.top/)
