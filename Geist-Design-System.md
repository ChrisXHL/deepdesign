# Vercel Geist 设计系统 — 完整设计规范

> **版本**: alpha | **名称**: Geist
> **描述**: Vercel 的 Geist 设计系统，用于构建一致的 Web 体验
> **字体**: Geist Sans / Geist Mono（专为开发者和设计师打造的开源字体）
> **源文件**: [design.md](https://vercel.com/design.md)（亮色）/ [design.dark.md](https://vercel.com/design.dark.md)（暗色）

---

## 目录

1. [设计哲学](#1-设计哲学)
2. [完整色彩系统](#2-完整色彩系统)
3. [排版系统](#3-排版系统)
4. [间距系统](#4-间距系统)
5. [圆角规范](#5-圆角规范)
6. [阴影层级](#6-阴影层级)
7. [动效规范](#7-动效规范)
8. [组件规范](#8-组件规范)
9. [响应式断点](#9-响应式断点)
10. [交互状态规则](#10-交互状态规则)
11. [文案与内容规范](#11-文案与内容规范)
12. [设计准则与禁忌](#12-设计准则与禁忌)

---

## 1. 设计哲学

Geist 的核心理念：**颜色是用来传达信息的，而非装饰。**

- 强调色（蓝、红、琥珀等）仅在两种场景出现：**状态反馈**和**核心操作**
- 其余所有界面元素一律使用灰色系
- 克制的配色策略确保高信息密度工具界面中的视觉清晰度
- 动效原则：**"0ms 往往是最好的选择"** — 能不动就不动，要动就短、要快
- 圆角全产品统一不混用，仅三档
- 所有标题 `letter-spacing` 为负值，字号越大字间距越紧

---

## 2. 完整色彩系统

### 2.1 语义颜色

#### 亮色主题

| Token | 值 | 说明 |
|---|---|---|
| `primary` | `#171717` | 主要文本/前景 |
| `secondary` | `#4d4d4d` | 次要文本 |
| `tertiary` | `#006bff` | 强调色（链接/聚焦） |
| `neutral` | `#f2f2f2` | 中性色 |
| `background-100` | `#ffffff` | 主背景 |
| `background-200` | `#fafafa` | 次背景（仅用于微妙分隔） |

#### 暗色主题

| Token | 值 | 说明 |
|---|---|---|
| `primary` | `#ededed` | 主要文本/前景 |
| `secondary` | `#a0a0a0` | 次要文本 |
| `tertiary` | `#006efe` | 强调色（链接/聚焦） |
| `neutral` | `#1a1a1a` | 中性色 |
| `background-100` | `#000000` | 主背景 |
| `background-200` | `#000000` | 次背景 |

### 2.2 色阶语义索引

每个非背景色阶 10 步（`100`–`1000`），步数编码意图：

| 步数 | 语义 |
|---|---|
| `100` | 默认背景 |
| `200` | Hover 背景 |
| `300` | Active 背景 |
| `400` | 默认边框 |
| `500` | Hover 边框 |
| `600` | Active 边框 |
| `700` | 实心填充，高对比度 |
| `800` | 实心填充，Hover |
| `900` | 次要文本和图标 |
| `1000` | 主要文本和图标 |

### 2.3 强调色语义

| 色阶 | 含义 |
|---|---|
| `blue` | 成功、链接、焦点 |
| `red` | 错误 |
| `amber` | 警告 |
| `green` | 辅助强调 |
| `teal` | 辅助强调 |
| `purple` | 辅助强调 |
| `pink` | 辅助强调 |

---

### 2.4 Gray 实色阶（100–1000）

| 步数 | 亮色 (sRGB Hex) | 暗色 (sRGB Hex) |
|---|---|---|
| `gray-100` | `#f2f2f2` | `#1a1a1a` |
| `gray-200` | `#ebebeb` | `#1f1f1f` |
| `gray-300` | `#e6e6e6` | `#292929` |
| `gray-400` | `#eaeaea` | `#2e2e2e` |
| `gray-500` | `#c9c9c9` | `#454545` |
| `gray-600` | `#a8a8a8` | `#878787` |
| `gray-700` | `#8f8f8f` | `#8f8f8f` |
| `gray-800` | `#7d7d7d` | `#7d7d7d` |
| `gray-900` | `#4d4d4d` | `#a0a0a0` |
| `gray-1000` | `#171717` | `#ededed` |

### 2.5 Gray Alpha 半透明阶（100–1000）

| 步数 | 亮色 | 暗色 |
|---|---|---|
| `gray-alpha-100` | `#0000000d` | `#ffffff12` |
| `gray-alpha-200` | `#00000015` | `#ffffff17` |
| `gray-alpha-300` | `#0000001a` | `#ffffff21` |
| `gray-alpha-400` | `#00000014` | `#ffffff24` |
| `gray-alpha-500` | `#00000036` | `#ffffff3d` |
| `gray-alpha-600` | `#0000003d` | `#ffffff82` |
| `gray-alpha-700` | `#00000070` | `#ffffff8a` |
| `gray-alpha-800` | `#00000082` | `#ffffff78` |
| `gray-alpha-900` | `#000000b3` | `#ffffff9c` |
| `gray-alpha-1000` | `#000000e8` | `#ffffffeb` |

> **使用规则**: `gray-alpha-*`（半透明）用于边框、分隔线、遮罩层、Hover 状态，可叠加于任何背景；`gray-*`（实心）用于文字和不透明填充。

---

### 2.6 Blue 色阶

| 步数 | 亮色 Hex | 暗色 Hex | 亮色 P3 (oklch) | 暗色 P3 (oklch) |
|---|---|---|---|---|
| `blue-100` | `#f0f7ff` | `#06193a` | `oklch(97.32% 0.0141 251.56)` | `oklch(22.17% 0.069 259.89)` |
| `blue-200` | `#e9f4ff` | `#022248` | `oklch(96.29% 0.0195 250.59)` | `oklch(25.45% 0.0811 255.8)` |
| `blue-300` | `#dfefff` | `#002f62` | `oklch(94.58% 0.0293 249.85)` | `oklch(30.86% 0.1022 255.21)` |
| `blue-400` | `#cae7ff` | `#003674` | `oklch(91.58% 0.0473 245.12)` | `oklch(34.1% 0.121 254.74)` |
| `blue-500` | `#94ccff` | `#00418b` | `oklch(82.75% 0.0979 248.48)` | `oklch(38.5% 0.1403 254.4)` |
| `blue-600` | `#48aeff` | `#0090ff` | `oklch(73.08% 0.1583 248.13)` | `oklch(64.94% 0.1982 251.81)` |
| `blue-700` | `#006bff` | `#006efe` | `oklch(57.61% 0.2508 258.23)` | `oklch(57.61% 0.2321 258.23)` |
| `blue-800` | `#0059ec` | `#005be7` | `oklch(51.51% 0.2399 257.85)` | `oklch(51.51% 0.2307 257.85)` |
| `blue-900` | `#005ff2` | `#47a8ff` | `oklch(53.18% 0.2399 256.99)` | `oklch(71.7% 0.1648 250.79)` |
| `blue-1000` | `#002359` | `#eaf6ff` | `oklch(26.67% 0.1099 254.34)` | `oklch(96.75% 0.0179 242.42)` |

### 2.7 Red 色阶

| 步数 | 亮色 Hex | 暗色 Hex | 亮色 P3 (oklch) | 暗色 P3 (oklch) |
|---|---|---|---|---|
| `red-100` | `#ffeeef` | `#330a11` | `oklch(96.5% 0.0223 13.09)` | `oklch(22.1% 0.0657 15.11)` |
| `red-200` | `#ffe8ea` | `#440d13` | `oklch(95.41% 0.0299 14.25)` | `oklch(25.93% 0.0834 19.02)` |
| `red-300` | `#ffe3e4` | `#5d0e17` | `oklch(94.33% 0.0369 15.01)` | `oklch(31.47% 0.1105 20.96)` |
| `red-400` | `#ffd7d6` | `#6f101b` | `oklch(91.51% 0.0471 19.8)` | `oklch(35.27% 0.1273 21.23)` |
| `red-500` | `#ffb1b3` | `#88151f` | `oklch(84.47% 0.1018 17.71)` | `oklch(40.68% 0.1479 23.16)` |
| `red-600` | `#ff676d` | `#f32e40` | `oklch(71.12% 0.1881 21.22)` | `oklch(62.56% 0.2277 23.03)` |
| `red-700` | `#fc0035` | `#f13242` | `oklch(62.56% 0.2524 23.03)` | `oklch(62.56% 0.2234 23.03)` |
| `red-800` | `#ea001d` | `#e2162a` | `oklch(58.19% 0.2482 25.15)` | `oklch(58.01% 0.227 25.12)` |
| `red-900` | `#d8001b` | `#ff565f` | `oklch(54.99% 0.232 25.29)` | `oklch(69.96% 0.2136 22.03)` |
| `red-1000` | `#47000c` | `#ffe9ed` | `oklch(24.8% 0.1041 18.86)` | `oklch(95.6% 0.0293 6.61)` |

### 2.8 Amber 色阶

| 步数 | 亮色 Hex | 暗色 Hex | 亮色 P3 (oklch) | 暗色 P3 (oklch) |
|---|---|---|---|---|
| `amber-100` | `#fff6de` | `#2a1700` | `oklch(97.48% 0.0331 85.79)` | `oklch(22.46% 0.0538 76.04)` |
| `amber-200` | `#fff4cf` | `#361900` | `oklch(96.81% 0.0495 90.24)` | `oklch(24.95% 0.0642 64.78)` |
| `amber-300` | `#fff1c1` | `#502800` | `oklch(95.93% 0.0636 90.52)` | `oklch(32.34% 0.0837 63.83)` |
| `amber-400` | `#ffdc73` | `#5b3000` | `oklch(91.02% 0.1322 88.25)` | `oklch(35.53% 0.0903 66.3)` |
| `amber-500` | `#ffc543` | `#703e00` | `oklch(86.55% 0.1583 79.63)` | `oklch(41.55% 0.1044 67.98)` |
| `amber-600` | `#ffa600` | `#ed9a00` | `oklch(80.25% 0.1953 73.59)` | `oklch(75.04% 0.1737 74.49)` |
| `amber-700` | `#ffae00` | `#ffae00` | `oklch(81.87% 0.1969 76.46)` | `oklch(81.87% 0.1969 76.46)` |
| `amber-800` | `#ff9300` | `#ff9300` | `oklch(77.21% 0.1991 64.28)` | `oklch(77.21% 0.1991 64.28)` |
| `amber-900` | `#aa4d00` | `#ff9300` | `oklch(52.79% 0.1496 54.65)` | `oklch(77.21% 0.1991 64.28)` |
| `amber-1000` | `#561900` | `#fff3d5` | `oklch(30.83% 0.099 45.48)` | `oklch(96.7% 0.0418 84.59)` |

### 2.9 Green 色阶

| 步数 | 亮色 Hex | 暗色 Hex | 亮色 P3 (oklch) | 暗色 P3 (oklch) |
|---|---|---|---|---|
| `green-100` | `#ecfdec` | `#002608` | `oklch(97.59% 0.0289 145.42)` | `oklch(23.09% 0.0716 149.68)` |
| `green-200` | `#e5fce7` | `#00320b` | `oklch(96.92% 0.037 147.15)` | `oklch(27.12% 0.0895 150.09)` |
| `green-300` | `#d3fad1` | `#003a0e` | `oklch(94.6% 0.0674 144.23)` | `oklch(29.84% 0.096 149.25)` |
| `green-400` | `#b9f5bc` | `#004615` | `oklch(91.49% 0.0976 146.24)` | `oklch(34.39% 0.1039 147.78)` |
| `green-500` | `#82eb8d` | `#006717` | `oklch(85.45% 0.1627 146.3)` | `oklch(44.19% 0.1484 147.2)` |
| `green-600` | `#4ce15e` | `#00952d` | `oklch(80.25% 0.214 145.18)` | `oklch(58.11% 0.1815 146.55)` |
| `green-700` | `#28a948` | `#00ac3a` | `oklch(64.58% 0.1746 147.27)` | `oklch(64.58% 0.199 147.27)` |
| `green-800` | `#279141` | `#009432` | `oklch(57.81% 0.1507 147.5)` | `oklch(57.81% 0.1776 147.5)` |
| `green-900` | `#107d32` | `#00ca50` | `oklch(51.75% 0.1453 147.65)` | `oklch(73.1% 0.2158 148.29)` |
| `green-1000` | `#003a00` | `#d8ffe4` | `oklch(29.15% 0.1197 147.38)` | `oklch(96.76% 0.056 154.18)` |

### 2.10 Teal 色阶

| 步数 | 亮色 Hex | 暗色 Hex | 亮色 P3 (oklch) | 暗色 P3 (oklch) |
|---|---|---|---|---|
| `teal-100` | `#defffb` | `#00231b` | `oklch(97.72% 0.0359 186.7)` | `oklch(22.1% 0.0544 178.74)` |
| `teal-200` | `#ddfef6` | `#002b22` | `oklch(97.06% 0.0347 180.66)` | `oklch(25.06% 0.062 178.76)` |
| `teal-300` | `#ccf9f1` | `#003d34` | `oklch(94.92% 0.0478 182.07)` | `oklch(31.5% 0.0767 180.99)` |
| `teal-400` | `#b1f7ec` | `#004035` | `oklch(92.76% 0.0718 183.78)` | `oklch(32.43% 0.0763 180.13)` |
| `teal-500` | `#52f0db` | `#006354` | `oklch(86.88% 0.1344 182.42)` | `oklch(43.35% 0.1055 180.97)` |
| `teal-600` | `#00e3c4` | `#009e86` | `oklch(81.5% 0.161 178.96)` | `oklch(60.71% 0.1485 180.24)` |
| `teal-700` | `#00ac96` | `#00aa95` | `oklch(64.92% 0.1572 181.95)` | `oklch(64.92% 0.1403 181.95)` |
| `teal-800` | `#00927f` | `#00927f` | `oklch(57.53% 0.1392 181.66)` | `oklch(57.53% 0.1392 181.66)` |
| `teal-900` | `#007f70` | `#00cfb7` | `oklch(52.08% 0.1251 182.93)` | `oklch(74.56% 0.1765 182.8)` |
| `teal-1000` | `#003f34` | `#cbfff5` | `oklch(32.11% 0.0788 179.82)` | `oklch(96.46% 0.056 180.29)` |

### 2.11 Purple 色阶

| 步数 | 亮色 Hex | 暗色 Hex | 亮色 P3 (oklch) | 暗色 P3 (oklch) |
|---|---|---|---|---|
| `purple-100` | `#faf0ff` | `#290c33` | `oklch(96.65% 0.0244 312.19)` | `oklch(22.34% 0.0779 316.87)` |
| `purple-200` | `#f9f0ff` | `#341142` | `oklch(96.73% 0.0228 309.8)` | `oklch(25.91% 0.0921 314.41)` |
| `purple-300` | `#f6e8ff` | `#47185e` | `oklch(94.85% 0.0364 310.15)` | `oklch(31.98% 0.1219 312.41)` |
| `purple-400` | `#f2d9ff` | `#541a76` | `oklch(91.77% 0.0614 312.82)` | `oklch(35.93% 0.1504 309.78)` |
| `purple-500` | `#dfa7ff` | `#642290` | `oklch(81.26% 0.1409 310.8)` | `oklch(40.99% 0.1721 307.92)` |
| `purple-600` | `#c979ff` | `#9440d5` | `oklch(72.07% 0.2083 308.19)` | `oklch(55.5% 0.2191 306.12)` |
| `purple-700` | `#a000f8` | `#9440d5` | `oklch(55.5% 0.3008 306.12)` | `oklch(55.5% 0.2186 306.12)` |
| `purple-800` | `#8500d1` | `#7d2bba` | `oklch(48.58% 0.2638 305.73)` | `oklch(48.58% 0.2102 305.73)` |
| `purple-900` | `#7d00cc` | `#c472fb` | `oklch(47.18% 0.2579 304)` | `oklch(69.87% 0.2037 309.51)` |
| `purple-1000` | `#2f004e` | `#fbecff` | `oklch(23.96% 0.13 305.66)` | `oklch(96.1% 0.0304 316.46)` |

### 2.12 Pink 色阶

| 步数 | 亮色 Hex | 暗色 Hex | 亮色 P3 (oklch) | 暗色 P3 (oklch) |
|---|---|---|---|---|
| `pink-100` | `#ffe8f6` | `#310d1e` | `oklch(95.69% 0.0359 344.62)` | `oklch(22.67% 0.0628 354.73)` |
| `pink-200` | `#ffe8f3` | `#420c25` | `oklch(95.71% 0.0321 353.14)` | `oklch(26.2% 0.0859 356.68)` |
| `pink-300` | `#ffdfeb` | `#571032` | `oklch(93.83% 0.0451 356.29)` | `oklch(31.15% 0.1067 355.93)` |
| `pink-400` | `#ffd3e1` | `#5d0c34` | `oklch(91.12% 0.0573 358.82)` | `oklch(32.13% 0.1174 356.71)` |
| `pink-500` | `#fdb3cc` | `#76063f` | `oklch(84.28% 0.0915 356.99)` | `oklch(37.01% 0.1453 358.39)` |
| `pink-600` | `#f97ea7` | `#ba0056` | `oklch(74.33% 0.1547 0.24)` | `oklch(50.33% 0.2089 4.33)` |
| `pink-700` | `#f22782` | `#f12b82` | `oklch(63.52% 0.238 1.01)` | `oklch(63.52% 0.2346 1.01)` |
| `pink-800` | `#e4106e` | `#e7006d` | `oklch(59.51% 0.2339 4.21)` | `oklch(59.51% 0.2429 4.21)` |
| `pink-900` | `#c41562` | `#ff4d8d` | `oklch(53.5% 0.2058 2.84)` | `oklch(69.36% 0.2223 3.91)` |
| `pink-1000` | `#460523` | `#ffe9f4` | `oklch(26% 0.0977 359)` | `oklch(95.74% 0.0326 350.08)` |

> **P3 宽色域**: 所有色阶均提供 oklch 格式的 P3 变体，在支持的浏览器和显示器上提供更广色域。使用 CSS `color(display-p3 ...)` 或 `oklch()` 函数。

---

## 3. 排版系统

### 3.1 字体家族

| 字体 | 用途 |
|---|---|
| **Geist Sans** | 默认正文字体，专为 UI 界面设计 |
| **Geist Mono** | 代码、等宽场景（inline code、terminal、数据表格） |

### 3.2 标题（Headings）

用于引入页面或章节。所有标题 `font-weight: 600`，`letter-spacing` 为负值（字号越大越紧）。

| Token | Tailwind 类名 | fontFamily | fontSize | fontWeight | lineHeight | letterSpacing | 用途 |
|---|---|---|---|---|---|---|---|
| `heading-72` | `text-heading-72` | Geist Sans | 72px | 600 | 72px | -4.32px | Marketing hero |
| `heading-64` | `text-heading-64` | Geist Sans | 64px | 600 | 64px | -3.84px | — |
| `heading-56` | `text-heading-56` | Geist Sans | 56px | 600 | 56px | -3.36px | — |
| `heading-48` | `text-heading-48` | Geist Sans | 48px | 600 | 56px | -2.88px | — |
| `heading-40` | `text-heading-40` | Geist Sans | 40px | 600 | 48px | -2.4px | — |
| `heading-32` | `text-heading-32` | Geist Sans | 32px | 600 | 40px | -1.28px | Marketing 副标题、段落、Dashboard 标题 |
| `heading-24` | `text-heading-24` | Geist Sans | 24px | 600 | 32px | -0.96px | 支持 Subtle 修饰 |
| `heading-20` | `text-heading-20` | Geist Sans | 20px | 600 | 26px | -0.4px | 支持 Subtle 修饰 |
| `heading-16` | `text-heading-16` | Geist Sans | 16px | 600 | 24px | -0.32px | 支持 Subtle 修饰 |
| `heading-14` | `text-heading-14` | Geist Sans | 14px | 600 | 20px | -0.28px | — |

> **Subtle / Strong 修饰**: 在排版类名的后代中使用 `<strong>` 元素即可激活。

### 3.3 按钮（Buttons）

仅用于渲染按钮的组件。

| Token | Tailwind 类名 | fontFamily | fontSize | fontWeight | lineHeight | 用途 |
|---|---|---|---|---|---|---|
| `button-16` | `text-button-16` | Geist Sans | 16px | 500 | 20px | 最大按钮 |
| `button-14` | `text-button-14` | Geist Sans | 14px | 500 | 20px | 默认按钮 |
| `button-12` | `text-button-12` | Geist Sans | 12px | 500 | 16px | 输入框内微型按钮 |

### 3.4 标签（Label）

为单行设计，给予充足行高以配合图标和高亮。

| Token | Tailwind 类名 | fontFamily | fontSize | fontWeight | lineHeight | 用途 |
|---|---|---|---|---|---|---|
| `label-20` | `text-label-20` | Geist Sans | 20px | 400 | 32px | Marketing 文本 |
| `label-18` | `text-label-18` | Geist Sans | 18px | 400 | 20px | — |
| `label-16` | `text-label-16` | Geist Sans | 16px | 400 | 20px | 标题中区分常规文本（支持 Strong） |
| `label-14` | `text-label-14` | Geist Sans | 14px | 400 | 20px | 最常见文本样式，用于菜单（支持 Strong） |
| `label-14-mono` | `text-label-14-mono` | Geist Mono | 14px | 400 | 20px | 最大等宽，配合 >14 的文本 |
| `label-13` | `text-label-13` | Geist Sans | 13px | 400 | 16px | 次级标签，支持 Tabular 数字（支持 Strong） |
| `label-13-mono` | `text-label-13-mono` | Geist Mono | 13px | 400 | 20px | 配合 label-14 使用 |
| `label-12` | `text-label-12` | Geist Sans | 12px | 400 | 16px | 三级文本（评论、展开更多、日历大写）（支持 Strong + CAPS） |
| `label-12-mono` | `text-label-12-mono` | Geist Mono | 12px | 400 | 16px | — |

### 3.5 正文（Copy）

为多行文本设计，行高高于 Label。

| Token | Tailwind 类名 | fontFamily | fontSize | fontWeight | lineHeight | 用途 |
|---|---|---|---|---|---|---|
| `copy-24` | `text-copy-24` | Geist Sans | 24px | 400 | 36px | Marketing hero 区域（支持 Strong） |
| `copy-20` | `text-copy-20` | Geist Sans | 20px | 400 | 36px | Marketing hero 区域（支持 Strong） |
| `copy-18` | `text-copy-18` | Geist Sans | 18px | 400 | 28px | Marketing、大引用（支持 Strong） |
| `copy-16` | `text-copy-16` | Geist Sans | 16px | 400 | 24px | Modal 等较大视图（支持 Strong） |
| `copy-14` | `text-copy-14` | Geist Sans | 14px | 400 | 20px | 最常用正文样式（支持 Strong） |
| `copy-14-mono` | `text-copy-14-mono` | Geist Mono | 14px | 400 | 20px | — |
| `copy-13` | `text-copy-13` | Geist Sans | 13px | 400 | 18px | 次要文本、空间紧凑视图 |
| `copy-13-mono` | `text-copy-13-mono` | Geist Mono | 13px | 400 | 18px | inline code 引用 |

---

## 4. 间距系统

### 4.1 间距阶梯

基准单位：**4px**

| Token | 值 |
|---|---|
| `spacing.base` | `4px` |
| `spacing.1` | `4px` |
| `spacing.2` | `8px` |
| `spacing.3` | `12px` |
| `spacing.4` | `16px` |
| `spacing.6` | `24px` |
| `spacing.8` | `32px` |
| `spacing.10` | `40px` |
| `spacing.16` | `64px` |
| `spacing.24` | `96px` |

### 4.2 间距使用指南

| 场景 | 推荐值 |
|---|---|
| 组内间距 | 8px |
| 组间间距 | 16px |
| 区段间间距 | 32–40px |
| 卡片默认内边距 | 24px |
| 卡片紧凑内边距 | 16px |
| 卡片 Hero 区域内边距 | 32px |

---

## 5. 圆角规范

全产品统一，不混用。

| Token | 值 | 用途 |
|---|---|---|
| `rounded.sm` | `6px` | 日常表面和控件（按钮、输入框、Badge） |
| `rounded.md` | `12px` | 菜单和模态框 |
| `rounded.lg` | `16px` | 全屏表面 |
| `rounded.full` | `9999px` | 药丸形、头像、圆形控件 |

---

## 6. 阴影层级

### 亮色主题

| 层级 | box-shadow 值 |
|---|---|
| **Raised cards**（凸起卡片） | `0 2px 2px rgba(0, 0, 0, 0.04)` |
| **Popovers and menus**（弹出菜单） | `0 1px 1px rgba(0, 0, 0, 0.02), 0 4px 8px -4px rgba(0, 0, 0, 0.04), 0 16px 24px -8px rgba(0, 0, 0, 0.06)` |
| **Modals and dialogs**（模态对话框） | `0 1px 1px rgba(0, 0, 0, 0.02), 0 8px 16px -4px rgba(0, 0, 0, 0.04), 0 24px 32px -8px rgba(0, 0, 0, 0.06)` |
| **Tooltips**（工具提示） | 使用最轻阴影（即 Raised cards 级别） |

### 暗色主题

| 层级 | box-shadow 值 |
|---|---|
| **Raised cards**（凸起卡片） | `0 1px 2px rgba(0, 0, 0, 0.16)` |
| **Popovers and menus**（弹出菜单） | `0 1px 1px rgba(0, 0, 0, 0.02), 0 4px 8px -4px rgba(0, 0, 0, 0.04), 0 16px 24px -8px rgba(0, 0, 0, 0.06)` |
| **Modals and dialogs**（模态对话框） | `0 1px 1px rgba(0, 0, 0, 0.02), 0 8px 16px -4px rgba(0, 0, 0, 0.04), 0 24px 32px -8px rgba(0, 0, 0, 0.06)` |

---

## 7. 动效规范

| 属性 | 值 |
|---|---|
| **默认时长** | `0ms`（瞬时，多数情况最佳） |
| **缓动函数** | `cubic-bezier(0.175, 0.885, 0.32, 1.1)` |
| **状态变化** | ~150ms |
| **弹出层 / 工具提示** | ~200ms |
| **覆盖层 / 模态框** | ~300ms |
| **无障碍** | 遵守 `prefers-reduced-motion`，移除非必要动画 |

### 动画原则

- 动画仅用于**阐明变化**，绝不用于装饰
- 避免：长动画、循环动画、注意力吸引型动画
- 所有交互默认应感觉**即时**
- 能不动就不动，要动就短、要快

---

## 8. 组件规范

### 8.1 Button（按钮）

#### 变体

| 变体 | 背景色 | 文字色 | 字体 | 圆角 | 内边距 | 高度 |
|---|---|---|---|---|---|---|
| **Primary** | `primary` / `background-100` | `background-100` / `primary` | `button-14` | 6px | `0 10px` | 40px |
| **Secondary** | `background-100` / `background-100` | `primary` / `primary` | `button-14` | 6px | `0 10px` | 40px |
| **Tertiary** | 透明 | `primary` | `button-14` | 6px | `0 10px` | 40px |
| **Error** | `red-800` | `#ffffff` | `button-14` | 6px | `0 10px` | 40px |
| **Warning** | — | — | `button-14` | 6px | `0 10px` | 40px |

> 亮色主题值 / 暗色主题值（Primary 背景/文字交替）

#### 尺寸

| 尺寸 | 字体 | 圆角 | 内边距 | 高度 |
|---|---|---|---|---|
| **Small** | `button-14` (14px/500) | 6px | `0 6px` | 32px |
| **Medium**（默认） | `button-14` (14px/500) | 6px | `0 10px` | 40px |
| **Large** | `button-16` (16px/500) | 6px | `0 14px` | 48px |

#### 形状

| 形状 | 说明 |
|---|---|
| **Default** | 矩形，`rounded.sm` (6px) |
| **Rounded** | `shape="rounded"`，配合 `shadow` 属性，常用于 Marketing 页面 |
| **Circle** | 图标按钮，需 `svgOnly` + `aria-label` |

#### 禁用变体

Default / Secondary / Tertiary / Error / Warning 均有 disabled 状态。

#### 最佳实践

- `Button` 用于改变状态的操作（部署、保存、删除）；`ButtonLink` 用于导航
- Primary 是主要操作；`type="secondary"` 是辅助操作；`type="error"` 用于危险确认
- 有效的 `type` 值：`default` / `secondary` / `error`（`primary`、`success`、`ghost`、`violet` **不是**有效值）
- 用 `loading` 属性而非替换 spinner，保持按钮可聚焦
- 仅在操作当前不可能时禁用（缺少输入、权限不足），配合 Tooltip 解释原因
- 标签使用 Title Case，动宾结构：`Deploy Project`、`Invite Member`
- 危险按钮遵循 `Verb + Noun`，与 toast 1:1 对应：`Delete Project` → `Project deleted`
- 图标按钮需 `svgOnly` + `aria-label`（描述操作和目标，非图标名）

---

### 8.2 Input（输入框）

#### 尺寸

| 尺寸 | 字体 | 圆角 | 内边距 | 高度 |
|---|---|---|---|---|
| **Small** | `label-14` (14px/400) | 6px | `0 12px` | 32px |
| **Medium**（默认） | `label-14` (14px/400) | 6px | `0 12px` | 40px |
| **Large** | `label-16` (16px/400) | 6px | `0 12px` | 48px |

#### 属性

| 属性 | 值 |
|---|---|
| 背景色 | `background-100` |
| 文字色 | `primary` |
| 边框 | 半透明 `gray-alpha` 边框 |

#### 变体

| 变体 | 说明 |
|---|---|
| **Default** | 标准文本输入 |
| **Prefix / Suffix** | 前缀/后缀（如域名输入框的 `https://` 前缀） |
| **Search** | 自动在按 Escape 时清空 |
| **⌘K** | 显示 `⌘K` 快捷键，字段脏时切换为 `Esc` |
| **Error** | 错误信息展示 |
| **Label** | 带标签的输入框 |
| **Rounded prefix/suffix** | 圆角前缀/后缀 |

#### 最佳实践

- 单行自由文本用 `<Input>`；多行用 Textarea；已知列表用 Combobox
- 在 blur 时验证，不是每次按键
- 提交前 trim 首尾空格
- Label 为短 Title Case 名词：`Project Name`、`Domain`
- Placeholder 显示示例值（`my-awesome-project`），非指令
- Helper text 为句子大小写，一句一周期，通过 `aria-describedby` 关联
- 验证消息命名字段和约束，以句号结尾，不用 `please`

---

### 8.3 Card（卡片）

| 变体 | 说明 |
|---|---|
| **Default** | 简单卡片，分组相关内容和操作 |
| **Hover** | 悬停状态卡片 |
| **Border** | 带边框卡片 |
| **Border Between** | 卡片间用边框分隔（水平） |
| **Border Between Vertical** | 卡片间用边框分隔（垂直） |
| **Secondary** | 次要卡片变体 |

> 卡片默认内边距 24px，紧凑 16px，Hero 区域 32px。

---

### 8.4 Badge（徽章）

#### 变体

| 变体 | 说明 |
|---|---|
| `gray` / `gray-subtle` | 中性 |
| `blue` / `blue-subtle` | 信息/生产环境 |
| `purple` / `purple-subtle` | 紫色强调 |
| `amber` / `amber-subtle` | 警告 |
| `red` / `red-subtle` | 错误 |
| `pink` / `pink-subtle` | 粉色强调 |
| `green` / `green-subtle` | 健康/成功 |
| `teal` / `teal-subtle` | 青色强调 |
| `inverted` | 反色 |

#### 尺寸

Small / Medium / Large

#### 其他

- 支持图标（icon + text，不可堆叠两个图标或嵌套 Badge）
- **Pill**: 特殊链接变体，不如按钮突出，基于 Badge 样式
- 语义映射：`green` = 健康，`red` = 错误，`amber` = 警告，`blue` = 信息/生产，`gray` = 中性
- `-subtle` 后缀在密集表面上降低色调
- Badge 是静态标签，不应绑定 `onClick`
- Title Case，一个词优先，最多两个：`Active`、`Pending`、`Pro`
- 匹配 API/日志术语：`Production` 非 `Prod`，`Deployed` 非 `Live`，`Canceled` 非 `Cancelled`

---

### 8.5 Grid（网格）

| 属性 | 说明 |
|---|---|
| 类型 | 二维单元格+引导线布局 |
| 响应式 | 支持在 3 个断点设置 `rows` 和 `columns` |
| `solid` 属性 | 单元格遮挡引导线（不透明背景） |
| 引导线 | 可隐藏行/列引导线 |
| 嵌套 | 不超过一层 |
| 可访问性 | 引导线标记 `aria-hidden="true"` |

> 对于简单的 n 列响应式内容，使用 Tailwind `grid grid-cols-*` 工具类即可。

---

## 9. 响应式断点

| 断点名 | 值 |
|---|---|
| `sm` | `401px` |
| `md` | `601px` |
| `lg` | `961px` |
| `xl` | `1200px` |
| `2xl` | `1400px` |

### 布局规则

- 内容居中于 **1200px** 列宽
- 侧边 padding 随断点变宽而增大
- 所有布局需在 mobile 和 desktop 上均可工作
- Grid 组件在所有 3 个断点设置 `rows` 和 `columns`

---

## 10. 交互状态规则

### 10.1 状态阶梯映射

| 状态 | 填充变化 | 边框变化 |
|---|---|---|
| **默认** | `100` | `400` |
| **Hover** | `100` → `200` | `400` → `500` |
| **Active** | `200` → `300` | `500` → `600` |
| **Disabled** | `gray-100` 填充 | — |
| **Disabled 文字** | `gray-700` | — |
| **Disabled 光标** | `not-allowed` | — |

### 10.2 焦点环（Focus Ring）

#### 亮色主题

```css
box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #006bff;
```

- 内层：2px 白色间隙（表面色 `background-100`）
- 外层：2px `blue-700` (`#006bff`) 环

#### 暗色主题

```css
box-shadow: 0 0 0 2px #000000, 0 0 0 4px #47a8ff;
```

- 内层：2px 黑色间隙（表面色 `background-100`）
- 外层：2px `blue-900` (`#47a8ff`) 环

> 焦点环仅在 `:focus-visible` 时触发。

---

## 11. 文案与内容规范

### 11.1 大小写规则

| 场景 | 规则 | 示例 |
|---|---|---|
| 标签 / 按钮 / 标题 / Tab | Title Case | `Deploy Project` |
| 正文 / 帮助文本 / Toast | Sentence case | `Build failed.` |

### 11.2 命名规范

| 规则 | 示例 |
|---|---|
| 动作命名：动词 + 名词 | `Deploy Project`、`Invite Member`、`Rotate Key` |
| 禁止裸动词 | `Submit` |
| 禁止通用确认 | `OK`、`Confirm` |
| 危险按钮 + Toast 1:1 | `Delete Project` → `Project deleted` |
| 模式切换 | `Use a Recovery Code Instead` |

### 11.3 消息格式

| 类型 | 格式 | 示例 |
|---|---|---|
| **错误** | 事件 + 下一步 | `Build failed. Bundle exceeds 50 MB. Reduce it or raise the limit.` |
| **Toast** | 具体变更物，无句号，禁止 `successfully` | `Project deleted` |
| **空状态** | 指向首个操作 | `No deployments yet. Push to your Git repository to create one.` |
| **进行中** | 现在分词 + 省略号 | `Deploying…`、`Saving…` |
| **验证** | 命名字段 + 约束，句号结尾，不用 `please` | `Project name is required.`、`Code must be 6 digits.` |

### 11.4 标点与数字

| 规则 | 说明 |
|---|---|
| 数字 | 使用阿拉伯数字：`3 projects` |
| 引号 | 弯引号 `""` |
| 省略号 | 省略号字符 `…`（非三个点） |
| 禁用词 | `please`、营销夸张词 |

---

## 12. 设计准则与禁忌

### 应该做的

1. 用灰阶排序信息层级：`1000` 主要文本 → `900` 次要 → `700` 禁用
2. 实心强调色仅用于状态和视图中**唯一最重要**的操作
3. 保持 WCAG AA 对比度（正文 4.5:1）
4. 每个交互元素在 `:focus-visible` 时显示焦点环
5. 移除 outline 时必须提供可见替代
6. 使用 typography token，不手动设置 `font-size` / `line-height` / `weight`

### 不应该做的

1. 不要仅用颜色传达状态 — 配合图标或文字标签
2. 不要将 `background-200` 用作通用填充 — 仅用于微妙分隔
3. 不要在同一个视图中混用圆角和直角
4. 不要在同一个视图中使用超过两种字重
5. 不要将 `gray-*` 与 `background-*` 互换 — 它们是独立的色阶
6. 不要嵌套 Grid 超过一层
7. 不要在 Badge 中堆叠两个图标或嵌套 Badge

---

## 统计汇总

| 类别 | Token 数量 |
|---|---|
| 语义颜色 | 6 |
| Gray 实色阶 | 10 |
| Gray Alpha 半透明阶 | 10 |
| 强调色阶 sRGB | 8 色 × 10 步 = 80 |
| 强调色阶 P3 (oklch) | 8 色 × 10 步 = 80 |
| 排版 Token | 31 |
| 间距 Token | 10 |
| 圆角 Token | 4 |
| 组件 Token | 9+ |
| 阴影定义 | 4 |
| 断点 | 5 |
| **总计** | **~249+ 个 Token** |

---

## 参考链接

| 资源 | URL |
|---|---|
| Geist 介绍 | https://vercel.com/geist/introduction |
| 色彩系统 | https://vercel.com/geist/colors |
| 排版 | https://vercel.com/geist/typography |
| Button 组件 | https://vercel.com/geist/button |
| Input 组件 | https://vercel.com/geist/input |
| Card 组件 | https://vercel.com/geist/card |
| Badge 组件 | https://vercel.com/geist/badge |
| Grid 组件 | https://vercel.com/geist/grid |
| Geist 字体 | https://vercel.com/font |
| 亮色主题完整 Token (MD) | https://vercel.com/design.md |
| 暗色主题完整 Token (MD) | https://vercel.com/design.dark.md |
