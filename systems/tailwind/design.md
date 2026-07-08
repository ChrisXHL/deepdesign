# Tailwind CSS 设计系统

> 工具优先的实用主义设计系统。深色画布上高对比代码块，青蓝渐变点缀，JetBrains Mono 等宽字体。每个 class 都是一块彩色积木。

Tailwind CSS 的核心理念：**utility-first**。不以组件为单位分发样式，而是提供原子化的 CSS 工具类，让开发者在 HTML 中直接组合样式。v4 全部颜色使用 OKLCH 色彩空间定义。

## 1. 色彩系统

### 内置调色板（23 色 × 11 色阶）

| 类别 | 颜色 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|------|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 暖色 | Red | #fef2f2 | #fee2e2 | #fecaca | #fca5a5 | #f87171 | #ef4444 | #dc2626 | #b91c1c | #991b1b | #7f1d1d | #450a0a |
| 暖色 | Orange | #fff7ed | #ffedd5 | #fed7aa | #fdba74 | #fb923c | #f97316 | #ea580c | #c2410c | #9a3412 | #7c2d12 | #431407 |
| 暖色 | Amber | #fffbeb | #fef3c7 | #fde68a | #fcd34d | #fbbf24 | #f59e0b | #d97706 | #b45309 | #92400e | #78350f | #451a03 |
| 暖色 | Yellow | #fefce8 | #fef9c3 | #fef08a | #fde047 | #facc15 | #eab308 | #ca8a04 | #a16207 | #854d0e | #713f12 | #422006 |
| 暖色 | Rose | #fff1f2 | #ffe4e6 | #fecdd3 | #fda4af | #fb7185 | #f43f5e | #e11d48 | #be123c | #9f1239 | #881337 | #4c0519 |
| 暖色 | Pink | #fdf2f8 | #fce7f3 | #fbcfe8 | #f9a8d4 | #f472b6 | #ec4899 | #db2777 | #be185d | #9d174d | #831843 | #500724 |
| 自然 | Lime | #f7fee7 | #ecfccb | #bef264 | #a3e635 | #84cc16 | #65a30d | #4d7c0f | #3f6212 | #365314 | #2f4e13 | #1a2e05 |
| 自然 | Green | #f0fdf4 | #dcfce7 | #bbf7d0 | #86efac | #4ade80 | #22c55e | #16a34a | #15803d | #166534 | #14532d | #052e16 |
| 自然 | Emerald | #ecfdf5 | #d1fae5 | #a7f3d0 | #6ee7b7 | #34d399 | #10b981 | #059669 | #047857 | #065f46 | #064e3b | #022c22 |
| 自然 | Teal | #f0fdfa | #ccfbf1 | #99f6e4 | #5eead4 | #2dd4bf | #14b8a6 | #0d9488 | #0f766e | #115e59 | #134e4a | #042f2e |
| 冷色 | Cyan | #ecfeff | #cffafe | #a5f3fc | #67e8f9 | #22d3ee | #06b6d4 | #0891b2 | #0e7490 | #155e75 | #164e63 | #083344 |
| 冷色 | Sky | #f0f9ff | #e0f2fe | #bae6fd | #7dd3fc | #38bdf8 | #0ea5e9 | #0284c7 | #0369a1 | #075985 | #0c4a6e | #082f49 |
| 冷色 | Blue | #eff6ff | #dbeafe | #bfdbfe | #93c5fd | #60a5fa | #3b82f6 | #2563eb | #1d4ed8 | #1e40af | #1e3a8a | #172554 |
| 冷色 | Indigo | #eef2ff | #e0e7ff | #c7d2fe | #a5b4fc | #818cf8 | #6366f1 | #4f46e5 | #4338ca | #3730a3 | #312e81 | #1e1b4b |
| 冷色 | Violet | #f5f3ff | #ede9fe | #ddd6fe | #c4b5fd | #a78bfa | #8b5cf6 | #7c3aed | #6d28d9 | #5b21b6 | #4c1d95 | #2e1065 |
| 冷色 | Purple | #faf5ff | #f3e8ff | #e9d5ff | #d8b4fe | #c084fc | #a855f7 | #9333ea | #7e22ce | #6b21a8 | #581c87 | #3b0764 |
| 冷色 | Fuchsia | #fdf4ff | #fae8ff | #f5d0fe | #f0abfc | #e879f9 | #d946ef | #c026d3 | #a21caf | #86198f | #701a75 | #4a044e |
| 中性 | Slate | #f8fafc | #f1f5f9 | #e2e8f0 | #cbd5e1 | #94a3b8 | #64748b | #475569 | #334155 | #1e293b | #0f172a | #020617 |
| 中性 | Gray | #f9fafb | #f3f4f6 | #e5e7eb | #d1d5db | #9ca3af | #6b7280 | #4b5563 | #374151 | #1f2937 | #111827 | #030712 |
| 中性 | Zinc | #fafafa | #f4f4f5 | #e4e4e7 | #d4d4d8 | #a1a1aa | #71717a | #52525b | #3f3f46 | #27272a | #18181b | #09090b |
| 中性 | Neutral | #fafafa | #f5f5f5 | #e5e5e5 | #d4d4d4 | #a3a3a3 | #737373 | #525252 | #404040 | #262626 | #171717 | #0a0a0a |
| 中性 | Stone | #fafaf9 | #f5f5f4 | #e7e5e4 | #d6d3d1 | #a8a29e | #78716c | #57534e | #44403c | #292524 | #1c1917 | #0c0a09 |

**纯色**：Black `#000`，White `#fff`

**透明度语法**：`bg-sky-500/50`（50% 透明度），支持 CSS 变量 `bg-cyan-400/(--my-alpha)`


## 2. 间距系统

**基准单位**：`--spacing: 0.25rem`（4px）

| Token | 值 | px 等价 | Token | 值 | px 等价 |
|-------|-----|---------|-------|-----|---------|
| `p-0` | 0 | 0 | `p-8` | 2rem | 32px |
| `p-0.5` | 0.125rem | 2px | `p-9` | 2.25rem | 36px |
| `p-1` | 0.25rem | 4px | `p-10` | 2.5rem | 40px |
| `p-2` | 0.5rem | 8px | `p-11` | 2.75rem | 44px |
| `p-3` | 0.75rem | 12px | `p-12` | 3rem | 48px |
| `p-4` | 1rem | 16px | `p-14` | 3.5rem | 56px |
| `p-5` | 1.25rem | 20px | `p-16` | 4rem | 64px |
| `p-6` | 1.5rem | 24px | `p-20` | 5rem | 80px |
| `p-7` | 1.75rem | 28px | 最大 | `96` (24rem) | 384px |


## 3. 排版系统

| Token | 字号 | 行高 Token | 计算行高 |
|-------|------|-----------|----------|
| `text-xs` | 0.75rem (12px) | `calc(1 / 0.75)` | 1.333 |
| `text-sm` | 0.875rem (14px) | `calc(1.25 / 0.875)` | 1.429 |
| `text-base` | 1rem (16px) | `calc(1.5 / 1)` | 1.5 |
| `text-lg` | 1.125rem (18px) | `calc(1.75 / 1.125)` | 1.556 |
| `text-xl` | 1.25rem (20px) | `calc(1.75 / 1.25)` | 1.4 |
| `text-2xl` | 1.5rem (24px) | `calc(2 / 1.5)` | 1.333 |
| `text-3xl` | 1.875rem (30px) | `calc(2.25 / 1.875)` | 1.2 |
| `text-4xl` | 2.25rem (36px) | `calc(2.5 / 2.25)` | 1.111 |
| `text-5xl` | 3rem (48px) | 1 | — |
| `text-6xl` | 3.75rem (60px) | 1 | — |
| `text-7xl` | 4.5rem (72px) | 1 | — |
| `text-8xl` | 6rem (96px) | 1 | — |
| `text-9xl` | 8rem (128px) | 1 | — |

**字重 Token**：thin (100), extralight (200), light (300), normal (400), medium (500), semibold (600), bold (700), extrabold (800), black (900)

**Letter Spacing Token**：tighter, tight, normal, wide, wider, widest


## 4. 圆角系统

| Token | 值 |
|-------|-----|
| `rounded-none` | 0 |
| `rounded-xs` | 0.125rem (2px) |
| `rounded-sm` | 0.25rem (4px) |
| `rounded-md` | 0.375rem (6px) |
| `rounded-lg` | 0.5rem (8px) |
| `rounded-xl` | 0.75rem (12px) |
| `rounded-2xl` | 1rem (16px) |
| `rounded-3xl` | 1.5rem (24px) |
| `rounded-4xl` | 2rem (32px) |
| `rounded-full` | 9999px |


## 5. 阴影层级

| Token | CSS 值 |
|-------|--------|
| `shadow-2xs` | `0 1px rgb(0 0 0 / 0.05)` |
| `shadow-xs` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| `shadow-sm` | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` |
| `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` |
| `shadow-2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)` |


## 6. 动效规范

| Token | 用途 | 持续 | 缓动 |
|-------|------|------|------|
| `ease-in` | 入场 | — | `cubic-bezier(0.4, 0, 1, 1)` |
| `ease-out` | 出场 | — | `cubic-bezier(0, 0, 0.2, 1)` |
| `ease-in-out` | 双向 | — | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `animate-spin` | 旋转 | 1s | linear, infinite |
| `animate-ping` | 脉冲扩散 | 1s | ease-out, infinite |
| `animate-pulse` | 淡入淡出 | 2s | ease-in-out, infinite |
| `animate-bounce` | 弹跳 | 1s | —, infinite |

**duration Token**：75ms, 100ms, 150ms, 200ms, 300ms, 500ms, 700ms, 1000ms


## 7. 响应式断点

| 断点 | 最小宽度 | 前缀 |
|------|---------|------|
| `sm` | 640px | `sm:` |
| `md` | 768px | `md:` |
| `lg` | 1024px | `lg:` |
| `xl` | 1280px | `xl:` |
| `2xl` | 1536px | `2xl:` |


## 8. 使用准则

### Do
- 优先使用 utility class 组合，避免自定义 CSS
- 所有交互元素必须有 `hover:` 和 `focus:` 变体
- 使用 `dark:` 前缀实现暗色模式
- 响应式设计从最小断点开始，用 `sm:` / `lg:` 等前缀逐步增强
- 色彩透明使用 `/` 语法（如 `bg-blue-500/75`）

### Don't
- 不要使用 `@apply` 过度提取组件（这是 utility 反模式）
- 不要在同一个元素上使用超过 3 个 padding/margin 变体
- 不要混用多个灰色系（选定 slate/gray/zinc/neutral 之一）
