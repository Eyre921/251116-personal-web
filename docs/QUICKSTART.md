# 🚀 快速启动指南

## 项目已完成配置！

你的个人主页项目已经成功创建并配置完成。以下是项目的主要特性和使用方法。

## ✨ 已实现的功能

### 1. **完整的个人主页内容**
- ✅ Hero 区域 - 个人介绍和签名
- ✅ 关于我 - 个人特质、正在做的事、擅长的技能
- ✅ 知识空间 - 8 个知识领域卡片
- ✅ 技能与生活 - 兴趣爱好和 2025 年成就
- ✅ 联系方式 - 所有社交媒体链接

### 2. **多语言支持 🌍**
- ✅ 中文和英文双语
- ✅ 完整的翻译文件
- ✅ 导航栏语言切换按钮

### 3. **主题切换 🎨**
- ✅ 明亮/暗黑主题
- ✅ 主题偏好本地存储
- ✅ 导航栏主题切换按钮

### 4. **现代化技术栈**
- React 19 + TypeScript
- Vite (极速构建)
- Tailwind CSS (实用优先的样式)
- HeroUI (美观的 React 组件)
- i18next (国际化)

## 🎯 如何运行

### 1. 启动开发服务器
```bash
pnpm dev
```
然后访问: http://localhost:5173

### 2. 构建生产版本
```bash
pnpm build
```
构建结果在 `dist/` 目录

### 3. 预览生产构建
```bash
pnpm preview
```

## 🎨 如何自定义

### 修改个人信息
编辑这些文件中的翻译内容：
- `src/i18n/locales/zh.json` (中文)
- `src/i18n/locales/en.json` (英文)

### 修改主题颜色
编辑 `src/index.css` 中的 CSS 变量

### 添加新的组件
在 `src/components/` 目录创建新组件并在 `App.tsx` 中引入

## 📁 项目结构

```
src/
├── components/       # 所有 React 组件
│   ├── Navbar.tsx   # 顶部导航栏
│   ├── Hero.tsx     # 首屏介绍
│   ├── About.tsx    # 关于我
│   ├── Knowledge.tsx # 知识空间
│   ├── Skills.tsx   # 技能与生活
│   └── Contact.tsx  # 联系方式
├── contexts/        # React Contexts
│   └── ThemeContext.tsx # 主题管理
├── i18n/           # 国际化
│   ├── config.ts   # i18n 配置
│   └── locales/    # 翻译文件
├── lib/            # 工具函数
└── App.tsx         # 主应用
```

## 🔧 常见问题

### Q: 如何更换 Logo 图片？
A: 替换组件中的图片 URL 或放在 `public/` 目录

### Q: 如何添加更多语言？
A: 
1. 在 `src/i18n/locales/` 创建新的 JSON 文件
2. 在 `src/i18n/config.ts` 注册新语言
3. 在 Navbar 组件添加语言选项

### Q: 如何修改路由跳转？
A: 导航栏使用平滑滚动到对应 section，每个 section 都有 id 属性

## 🎉 现在开始

运行以下命令启动你的个人主页：

```bash
pnpm dev
```

然后在浏览器中打开 http://localhost:5173 查看效果！

---

**提示**: 
- 使用浏览器的开发者工具测试响应式布局
- 尝试切换语言和主题体验功能
- 查看 README.md 了解更多技术细节
