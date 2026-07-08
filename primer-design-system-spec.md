# GitHub Primer 设计系统 — 完整设计规范

> **Primer** 是 GitHub 的官方设计系统。本文档提取了所有可公开获取的设计令牌（Design Tokens）和组件规范。
>
> 数据来源：[primer.style](https://primer.style/) | [@primer/primitives](https://github.com/primer/primitives) v11.9.0
>
> 令牌格式遵循 **W3C Design Token Format 2025.10** 候选推荐规范。

---

## 目录

1. [色彩系统](#1-色彩系统)
2. [排版系统](#2-排版系统)
3. [间距系统](#3-间距系统)
4. [圆角规范](#4-圆角规范)
5. [边框宽度规范](#5-边框宽度规范)
6. [阴影层级](#6-阴影层级)
7. [动效规范](#7-动效规范)
8. [响应式断点与视口](#8-响应式断点与视口)
9. [主题系统](#9-主题系统)
10. [组件规范](#10-组件规范)
   - [Button](#button)
   - [ActionMenu](#actionmenu)
   - [FormControl](#formcontrol)
11. [布局令牌](#11-布局令牌)
12. [数据可视化调色板](#12-数据可视化调色板)
13. [Overlay 令牌](#13-overlay-令牌)

---

## 1. 色彩系统

Primer 的色彩系统采用**语义化功能令牌**（Functional Tokens）而非原始色阶。所有颜色均以 CSS 自定义属性（CSS Variables）形式提供。

### 1.1 前景色（Foreground）

| CSS 变量 | 值 | 语义 |
|---|---|---|
| `--fgColor-default` | `#1f2328` | 默认文本 |
| `--fgColor-muted` | `#59636e` | 弱化文本 |
| `--fgColor-neutral` | `#59636e` | 中性文本 |
| `--fgColor-accent` | `#0969da` | 强调色文本 |
| `--fgColor-link` | `#0969da` | 链接 |
| `--fgColor-success` | `#1a7f37` | 成功 |
| `--fgColor-open` | `#1a7f37` | 开放状态 |
| `--fgColor-attention` | `#9a6700` | 注意 |
| `--fgColor-severe` | `#bc4c00` | 严重 |
| `--fgColor-danger` | `#d1242f` | 危险 |
| `--fgColor-closed` | `#d1242f` | 关闭状态 |
| `--fgColor-done` | `#8250df` | 完成状态 |
| `--fgColor-upsell` | `#8250df` | 追加销售 |
| `--fgColor-sponsors` | `#bf3989` | 赞助 |
| `--fgColor-draft` | `#59636e` | 草稿状态 |
| `--fgColor-disabled` | `#818b98` | 禁用 |
| `--fgColor-white` | `#ffffff` | 白色文本 |
| `--fgColor-black` | `#1f2328` | 黑色文本 |
| `--fgColor-onEmphasis` | `#ffffff` | 强调背景上的文本 |
| `--fgColor-onInverse` | `#ffffff` | 反色背景上的文本 |

### 1.2 背景色（Background）

| CSS 变量 | 值 | 语义 |
|---|---|---|
| `--bgColor-default` | `#ffffff` | 默认背景 |
| `--bgColor-muted` | `#f6f8fa` | 弱化背景 |
| `--bgColor-inset` | `#f6f8fa` | 内嵌背景 |
| `--bgColor-emphasis` | `#25292e` | 强调背景 |
| `--bgColor-inverse` | `#25292e` | 反色背景 |
| `--bgColor-white` | `#ffffff` | 白色背景 |
| `--bgColor-black` | `#1f2328` | 黑色背景 |
| `--bgColor-transparent` | `#ffffff00` | 透明背景 |
| `--bgColor-disabled` | `#eff2f5` | 禁用背景 |
| `--bgColor-accent-emphasis` | `#0969da` | 强调——实色 |
| `--bgColor-accent-muted` | `#ddf4ff` | 强调——柔和 |
| `--bgColor-success-emphasis` | `#1f883d` | 成功——实色 |
| `--bgColor-success-muted` | `#dafbe1` | 成功——柔和 |
| `--bgColor-open-emphasis` | `#1f883d` | 开放——实色 |
| `--bgColor-open-muted` | `#dafbe1` | 开放——柔和 |
| `--bgColor-attention-emphasis` | `#9a6700` | 注意——实色 |
| `--bgColor-attention-muted` | `#fff8c5` | 注意——柔和 |
| `--bgColor-severe-emphasis` | `#bc4c00` | 严重——实色 |
| `--bgColor-severe-muted` | `#fff1e5` | 严重——柔和 |
| `--bgColor-danger-emphasis` | `#cf222e` | 危险——实色 |
| `--bgColor-danger-muted` | `#ffebe9` | 危险——柔和 |
| `--bgColor-closed-emphasis` | `#cf222e` | 关闭——实色 |
| `--bgColor-closed-muted` | `#ffebe9` | 关闭——柔和 |
| `--bgColor-done-emphasis` | `#8250df` | 完成——实色 |
| `--bgColor-done-muted` | `#fbefff` | 完成——柔和 |
| `--bgColor-upsell-emphasis` | `#8250df` | 追加——实色 |
| `--bgColor-upsell-muted` | `#fbefff` | 追加——柔和 |
| `--bgColor-sponsors-emphasis` | `#bf3989` | 赞助——实色 |
| `--bgColor-sponsors-muted` | `#ffeff7` | 赞助——柔和 |
| `--bgColor-neutral-emphasis` | `#59636e` | 中性——实色 |
| `--bgColor-neutral-muted` | `#818b981f` | 中性——柔和 |
| `--bgColor-draft-emphasis` | `#59636e` | 草稿——实色 |
| `--bgColor-draft-muted` | `#818b981f` | 草稿——柔和 |

> **命名规则**：`emphasis` = 饱和高对比度实色（用于按钮/徽章填充）；`muted` = 低饱和度柔和色（用于背景提示条/标签）。

### 1.3 边框色（Border）

| CSS 变量 | 值 | 语义 |
|---|---|---|
| `--borderColor-default` | `#d1d9e0` | 默认边框 |
| `--borderColor-muted` | `#d1d9e0b3` | 弱化边框 |
| `--borderColor-emphasis` | `#818b98` | 强调边框 |
| `--borderColor-disabled` | `#818b981a` | 禁用边框 |
| `--borderColor-translucent` | `#1f232826` | 半透明边框 |
| `--borderColor-transparent` | `#ffffff00` | 透明边框 |
| `--borderColor-accent-emphasis` | `#0969da` | 强调——实色 |
| `--borderColor-accent-muted` | `#54aeff66` | 强调——柔和 |
| `--borderColor-success-emphasis` | `#1a7f37` | 成功——实色 |
| `--borderColor-success-muted` | `#4ac26b66` | 成功——柔和 |
| `--borderColor-open-emphasis` | `#1a7f37` | 开放——实色 |
| `--borderColor-open-muted` | `#4ac26b66` | 开放——柔和 |
| `--borderColor-attention-emphasis` | `#9a6700` | 注意——实色 |
| `--borderColor-attention-muted` | `#d4a72c66` | 注意——柔和 |
| `--borderColor-severe-emphasis` | `#bc4c00` | 严重——实色 |
| `--borderColor-severe-muted` | `#fb8f4466` | 严重——柔和 |
| `--borderColor-danger-emphasis` | `#cf222e` | 危险——实色 |
| `--borderColor-danger-muted` | `#ff818266` | 危险——柔和 |
| `--borderColor-closed-emphasis` | `#cf222e` | 关闭——实色 |
| `--borderColor-closed-muted` | `#ff818266` | 关闭——柔和 |
| `--borderColor-done-emphasis` | `#8250df` | 完成——实色 |
| `--borderColor-done-muted` | `#c297ff66` | 完成——柔和 |
| `--borderColor-upsell-emphasis` | `#8250df` | 追加——实色 |
| `--borderColor-upsell-muted` | `#c297ff66` | 追加——柔和 |
| `--borderColor-sponsors-emphasis` | `#bf3989` | 赞助——实色 |
| `--borderColor-sponsors-muted` | `#ff80c866` | 赞助——柔和 |
| `--borderColor-neutral-emphasis` | `#59636e` | 中性——实色 |
| `--borderColor-neutral-muted` | `#d1d9e0b3` | 中性——柔和 |
| `--borderColor-draft-emphasis` | `#59636e` | 草稿——实色 |
| `--borderColor-draft-muted` | `#d1d9e0b3` | 草稿——柔和 |

> 带 `66` 后缀的值为带 40% alpha 透明度的十六进制色。

### 1.4 焦点与覆盖层

| CSS 变量 | 值 | 语义 |
|---|---|---|
| `--focus-outlineColor` | `#0969da` | 焦点轮廓色 |
| `--overlay-bgColor` | `#ffffff` | 覆盖层背景 |
| `--overlay-borderColor` | `#d1d9e080` | 覆盖层边框 |
| `--overlay-backdrop-bgColor` | `#c8d1da66` | 背景遮罩 |

---

## 2. 排版系统

### 2.1 字体族（Font Family）

| CSS 变量 | 值 |
|---|---|
| `--fontStack-sansSerif` | `'Mona Sans VF', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'` |
| `--fontStack-sansSerifDisplay` | `'Mona Sans VF', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'` |
| `--fontStack-system` | `'Mona Sans VF', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'` |
| `--fontStack-monospace` | `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace` |

> **Mona Sans VF** 是 GitHub 的自定义可变字体，Variable Font 格式。Display 与 Sans 字体族使用同一字体栈但用于不同语义场景。

### 2.2 字号阶梯（Font Size Scale）

| CSS 变量 | rem 值 | px 值 | 语义 |
|---|---|---|---|
| `--base-text-size-xs` | `0.75rem` | 12px | 超小 |
| `--base-text-size-sm` | `0.875rem` | 14px | 小 |
| `--base-text-size-md` | `1rem` | 16px | 中（基准） |
| `--base-text-size-lg` | `1.25rem` | 20px | 大 |
| `--base-text-size-xl` | `2rem` | 32px | 超大 |
| `--base-text-size-2xl` | `2.5rem` | 40px | 超超大 |

### 2.3 字重（Font Weight）

| CSS 变量 | 值 | 语义 |
|---|---|---|
| `--base-text-weight-light` | `300` | 细体 |
| `--base-text-weight-normal` | `400` | 常规 |
| `--base-text-weight-medium` | `500` | 中等 |
| `--base-text-weight-semibold` | `600` | 半粗 |

### 2.4 行高（Line Height）

| CSS 变量 | 值 | 语义 |
|---|---|---|
| `--base-text-lineHeight-tight` | `1.25` | 紧凑 |
| `--base-text-lineHeight-snug` | `1.375` | 贴合 |
| `--base-text-lineHeight-normal` | `1.5` | 常规 |
| `--base-text-lineHeight-relaxed` | `1.625` | 宽松 |
| `--base-text-lineHeight-loose` | `1.75` | 松散 |

### 2.5 排版样式令牌（Typographic Style Tokens）

每个样式令牌包含 `font-weight`、`font-size`、`line-height`、`font-family` 四个属性，可通过 `font` 简写一次性设置。

#### Display（展示标题）

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-display-size` | `2.5rem` (40px) |
| font-weight | `--text-display-weight` | `500` (medium) |
| line-height | `--text-display-lineHeight` | `1.375` (snug) |
| font-family | `--fontStack-sansSerifDisplay` | Mona Sans VF |
| **简写** | `--text-display-shorthand` | `font: var(--text-display-shorthand)` |

#### Title Large（大标题）

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-title-size-large` | `2rem` (32px) |
| font-weight | `--text-title-weight-large` | `600` (semibold) |
| line-height | `--text-title-lineHeight-large` | `1.5` (normal) |
| font-family | `--fontStack-sansSerifDisplay` | Mona Sans VF |
| **简写** | `--text-title-shorthand-large` | — |

#### Title Medium（中标题）

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-title-size-medium` | `1.25rem` (20px) |
| font-weight | `--text-title-weight-medium` | `600` (semibold) |
| line-height | `--text-title-lineHeight-medium` | `1.625` (relaxed) |
| font-family | `--fontStack-sansSerifDisplay` | Mona Sans VF |
| **简写** | `--text-title-shorthand-medium` | — |

#### Title Small（小标题）

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-title-size-small` | `1rem` (16px) |
| font-weight | `--text-title-weight-small` | `600` (semibold) |
| line-height | `--text-title-lineHeight-small` | `1.5` (normal) |
| font-family | `--fontStack-sansSerif` | Mona Sans VF |
| **简写** | `--text-title-shorthand-small` | — |

#### Subtitle（副标题）

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-subtitle-size` | `1.25rem` (20px) |
| font-weight | `--text-subtitle-weight` | `400` (normal) |
| line-height | `--text-subtitle-lineHeight` | `1.625` (relaxed) |
| font-family | `--fontStack-sansSerifDisplay` | Mona Sans VF |
| **简写** | `--text-subtitle-shorthand` | — |

#### Body Large（大正文）

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-body-size-large` | `1rem` (16px) |
| line-height | `--text-body-lineHeight-large` | `1.5` (normal) |
| font-family | `--fontStack-sansSerif` | Mona Sans VF |
| **简写** | `--text-body-shorthand-large` | — |

#### Body Medium（中正文）— 默认

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-body-size-medium` | `0.875rem` (14px) |
| line-height | `--text-body-lineHeight-medium` | `1.5` (normal) |
| font-family | `--fontStack-sansSerif` | Mona Sans VF |
| **简写** | `--text-body-shorthand-medium` | — |

#### Body Small（小正文）

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-body-size-small` | `0.75rem` (12px) |
| line-height | `--text-body-lineHeight-small` | `1.625` (relaxed) |
| font-family | `--fontStack-sansSerif` | Mona Sans VF |
| **简写** | `--text-body-shorthand-small` | — |

#### Caption（说明文字）

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-caption-size` | `0.75rem` (12px) |
| font-weight | `--text-caption-weight` | `400` (normal) |
| line-height | `--text-caption-lineHeight` | `1.25` (tight) |
| font-family | `--fontStack-sansSerif` | Mona Sans VF |
| **简写** | `--text-caption-shorthand` | — |

#### Code Block（代码块）

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-codeBlock-size` | `0.8125rem` (13px) |
| font-weight | `--text-codeBlock-weight` | `400` (normal) |
| line-height | `--text-codeBlock-lineHeight` | `1.5` (normal) |
| font-family | `--fontStack-monospace` | 系统等宽字体 |
| **简写** | `--text-codeBlock-shorthand` | — |

#### Inline Code（行内代码）

| 属性 | CSS 变量 | 值 |
|---|---|---|
| font-size | `--text-codeInline-size` | `0.9285em` (相对值) |
| font-weight | `--text-codeInline-weight` | `400` (normal) |
| font-family | `--fontStack-monospace` | 系统等宽字体 |
| **简写** | `--text-codeInline-shorthand` | — |

### 2.6 排版样式总览表

| 样式 | 字号 | 字重 | 行高 | 字体族 |
|---|---|---|---|---|
| Display | 2.5rem / 40px | 500 | 1.375 | Display |
| Title L | 2rem / 32px | 600 | 1.5 | Display |
| Title M | 1.25rem / 20px | 600 | 1.625 | Display |
| Title S | 1rem / 16px | 600 | 1.5 | Sans |
| Subtitle | 1.25rem / 20px | 400 | 1.625 | Display |
| Body L | 1rem / 16px | 400 | 1.5 | Sans |
| Body M | 0.875rem / 14px | 400 | 1.5 | Sans |
| Body S | 0.75rem / 12px | 400 | 1.625 | Sans |
| Caption | 0.75rem / 12px | 400 | 1.25 | Sans |
| Code Block | 0.8125rem / 13px | 400 | 1.5 | Monospace |

---

## 3. 间距系统

### 3.1 基础尺寸阶梯（Base Size Scale）

Primer 的间距系统基于 4px 网格，使用 `rem` 单位以确保无障碍缩放体验。

| CSS 变量 | rem 值 | px 值 |
|---|---|---|
| `--base-size-2` | `0.125rem` | 2px |
| `--base-size-4` | `0.25rem` | 4px |
| `--base-size-6` | `0.375rem` | 6px |
| `--base-size-8` | `0.5rem` | 8px |
| `--base-size-12` | `0.75rem` | 12px |
| `--base-size-16` | `1rem` | 16px |
| `--base-size-20` | `1.25rem` | 20px |
| `--base-size-24` | `1.5rem` | 24px |
| `--base-size-28` | `1.75rem` | 28px |
| `--base-size-32` | `2rem` | 32px |
| `--base-size-36` | `2.25rem` | 36px |
| `--base-size-40` | `2.5rem` | 40px |
| `--base-size-44` | `2.75rem` | 44px |
| `--base-size-48` | `3rem` | 48px |
| `--base-size-64` | `4rem` | 64px |
| `--base-size-80` | `5rem` | 80px |
| `--base-size-96` | `6rem` | 96px |
| `--base-size-112` | `7rem` | 112px |
| `--base-size-128` | `8rem` | 128px |

> 同时提供负值：`--base-size-negative-2` 到 `--base-size-negative-48`，值为对应的负 rem/px。

### 3.2 语义间距令牌（Semantic Space Tokens）

基于 W3C Design Token Format，6 级统一语义间距：

| Token 名称 | px 值 | 引用来源 | T-shirt 尺寸 |
|---|---|---|---|
| `space.xxs` | 2px | `{base.size.2}` | XXS |
| `space.xs` | 4px | `{base.size.4}` | XS |
| `space.sm` | 8px | `{base.size.8}` | SM |
| `space.md` | 12px | `{base.size.12}` | MD |
| `space.lg` | 16px | `{base.size.16}` | LG |
| `space.xl` | 24px | `{base.size.24}` | XL |

> 覆盖 github-ui 中 95% 的有意间距用途。

### 3.3 Stack 布局间距

| CSS 变量 | 值 | 语义 |
|---|---|---|
| `--stack-gap-condensed` | `0.5rem` (8px) | 紧凑间距 |
| `--stack-gap-normal` | `1rem` (16px) | 常规间距 |
| `--stack-gap-spacious` | `1.5rem` (24px) | 宽松间距 |
| `--stack-padding-condensed` | `0.5rem` (8px) | 紧凑内边距 |
| `--stack-padding-normal` | `1rem` (16px) | 常规内边距 |
| `--stack-padding-spacious` | `1.5rem` (24px) | 宽松内边距 |

---

## 4. 圆角规范

| CSS 变量 | rem 值 | px 值 | 语义 |
|---|---|---|---|
| `--borderRadius-small` | `0.1875rem` | 3px | 小圆角 |
| `--borderRadius-medium` | `0.375rem` | 6px | 中圆角（默认） |
| `--borderRadius-default` | `0.375rem` | 6px | 默认圆角（= medium） |
| `--borderRadius-large` | `0.75rem` | 12px | 大圆角 |
| `--borderRadius-full` | `624.9375rem` | 9999px | 全圆角（药丸形） |

---

## 5. 边框宽度规范

| CSS 变量 | rem 值 | px 值 | 语义 |
|---|---|---|---|
| `--borderWidth-thin` | `0.0625rem` | 1px | 细（默认） |
| `--borderWidth-default` | `0.0625rem` | 1px | 默认（= thin） |
| `--borderWidth-thick` | `0.125rem` | 2px | 粗 |
| `--borderWidth-thicker` | `0.25rem` | 4px | 加粗 |

### 边框的 boxShadow 写法

| CSS 变量 | 值 |
|---|---|
| `--boxShadow-thin` | `inset 0 0 0 0.0625rem` |
| `--boxShadow-thick` | `inset 0 0 0 0.125rem` |
| `--boxShadow-thicker` | `inset 0 0 0 0.25rem` |

### 焦点轮廓

| CSS 变量 | 值 |
|---|---|
| `--outline-focus-width` | `0.125rem` (2px) |
| `--outline-focus-offset` | `-0.125rem` (-2px) |

---

## 6. 阴影层级

Primer 将阴影分为两大类：**Resting**（静止态，轻微深度）和 **Floating**（浮动态，强深度）。

### 6.1 Resting 阴影（静止态）

| CSS 变量 | 值 | 用途 |
|---|---|---|
| `--shadow-resting-xsmall` | `0 1px 1px 0 #1f23280d` | 极轻微 |
| `--shadow-resting-small` | `0 1px 1px 0 #1f23280a, 0 1px 2px 0 #1f232808` | 轻微（按钮默认态） |
| `--shadow-resting-medium` | `0 1px 1px 0 #25292e1a, 0 3px 6px 0 #25292e1f` | 中等 |
| `--shadow-inset` | `inset 0 1px 0 0 #1f23280a` | 内嵌阴影 |

### 6.2 Floating 阴影（浮动态）

| CSS 变量 | 值 | 用途 |
|---|---|---|
| `--shadow-floating-small` | `0 0 0 1px #d1d9e040, 0 6px 12px -3px #25292e0a, 0 6px 18px 0 #25292e1f` | 小型浮层（Tooltip、Popover） |
| `--shadow-floating-medium` | `0 0 0 1px #d1d9e000, 0 8px 16px -4px #25292e14, 0 4px 32px -4px #25292e14, 0 24px 48px -12px #25292e14, 0 48px 96px -24px #25292e14` | 中型浮层（下拉菜单、对话框） |
| `--shadow-floating-large` | `0 0 0 1px #d1d9e000, 0 40px 80px 0 #25292e3d` | 大型浮层 |
| `--shadow-floating-xlarge` | `0 0 0 1px #d1d9e000, 0 56px 112px 0 #25292e52` | 超大型浮层 |

---

## 7. 动效规范

### 7.1 持续时间（Duration）

> **核心原则**：UI 交互必须 ≤ 300ms。micro 用于悬停/聚焦，short 用于状态变化，medium 用于进入/退出。绝不超过 500ms 用于 UI 交互。

| Token | CSS 引用 | 值 | 语义 | 使用场景 |
|---|---|---|---|---|
| `motion.duration.micro` | `{base.duration.100}` | **100ms** | 微交互 | 悬停、聚焦环、颜色变化、透明度变化 |
| `motion.duration.short` | `{base.duration.200}` | **200ms** | 短过渡 | 展开/折叠、开关切换、可见性变化 |
| `motion.duration.medium` | `{base.duration.300}` | **300ms** | 中等 | 模态框打开、下拉出现、Tooltip 显示（UI 交互最大推荐值） |
| `motion.duration.long` | `{base.duration.500}` | **500ms** | 长 | 复杂多步动画、大规模布局变化、页面过渡（谨慎使用） |

### 7.2 缓动函数（Easing）

> **缓动决策树**：进入/退出 → `enter`；移动/变形 → `move`；悬停 → `hover`；恒定 → `linear`。

| Token | CSS 引用 | 类型 | 语义 | 使用场景 |
|---|---|---|---|---|
| `motion.easing.hover` | `{base.easing.ease}` | cubicBezier | 悬停 | 悬停状态变化、按钮悬停、链接悬停 |
| `motion.easing.enter` | `{base.easing.easeOut}` | cubicBezier | 进入（减速） | 元素出现、模态框打开、下拉展开、Tooltip 显示 |
| `motion.easing.exit` | `{base.easing.easeIn}` | cubicBezier | 退出（加速） | 元素消失、模态框关闭、下拉收起 |
| `motion.easing.move` | `{base.easing.easeInOut}` | cubicBezier | 移动/变形 | 位置变化、尺寸变化、展开折叠、滑动过渡 |
| `motion.easing.linear` | `{base.easing.linear}` | cubicBezier | 线性 | 进度条、加载器、连续动画、滚动 |

> `base.easing.ease` ≈ CSS `ease` = `cubic-bezier(0.25, 0.1, 0.25, 1)`
> `base.easing.easeOut` ≈ CSS `ease-out` = `cubic-bezier(0, 0, 0.58, 1)`
> `base.easing.easeIn` ≈ CSS `ease-in` = `cubic-bezier(0.42, 0, 1, 1)`
> `base.easing.easeInOut` ≈ CSS `ease-in-out` = `cubic-bezier(0.42, 0, 0.58, 1)`
> `base.easing.linear` = CSS `linear` = `cubic-bezier(0, 0, 1, 1)`

### 7.3 复合过渡令牌（Transition）

> 使用复合令牌而非原始 duration + easing 值。必须配合 `transition-property` 并尊重 `prefers-reduced-motion`。

| Token | 持续时间 | 缓动函数 | 语义 | 使用场景 |
|---|---|---|---|---|
| `motion.transition.hover` | 100ms (micro) | hover (ease) | 悬停过渡 | 按钮悬停、链接悬停、颜色过渡 |
| `motion.transition.stateChange` | 200ms (short) | move (easeInOut) | 状态变化 | 开关、折叠、手风琴、标签切换 |
| `motion.transition.enter` | 300ms (medium) | enter (easeOut) | 进入过渡 | 模态框打开、下拉出现、Tooltip 显示 |
| `motion.transition.exit` | 200ms (short) | exit (easeIn) | 退出过渡 | 模态框关闭、下拉消失、Tooltip 隐藏 |

> **注意**：退出动画（exit）比进入动画（enter）更短（200ms vs 300ms），使关闭感觉更敏捷。

### 7.4 CSS 导入

```css
@import '@primer/primitives/dist/css/base/motion/motion.css';
```

---

## 8. 响应式断点与视口

### 8.1 断点（Breakpoints）

| CSS 变量 | rem 值 | px 值 | 语义 |
|---|---|---|---|
| `--breakpoint-xsmall` | `20rem` | 320px | 超小（手机竖屏） |
| `--breakpoint-small` | `34rem` | 544px | 小（手机横屏） |
| `--breakpoint-medium` | `48rem` | 768px | 中（平板） |
| `--breakpoint-large` | `63.25rem` | 1012px | 大（桌面） |
| `--breakpoint-xlarge` | `80rem` | 1280px | 超大（宽屏桌面） |
| `--breakpoint-xxlarge` | `87.5rem` | 1400px | 超超大（超宽屏） |

### 8.2 视口范围（Viewport Range）

| CSS 变量 | 媒体查询 | 语义 |
|---|---|---|
| `--viewportRange-narrow` | `(max-width: calc(48rem - 0.02px))` | 窄屏（< 768px） |
| `--viewportRange-regular` | `(min-width: 48rem)` | 常规屏（≥ 768px） |
| `--viewportRange-wide` | `(min-width: 87.5rem)` | 宽屏（≥ 1400px） |
| `--viewportRange-narrowLandscape` | `((max-width: calc(63.25rem - 0.02px)) and (max-height: calc(34rem - 0.02px)) and (orientation: landscape))` | 窄屏横屏 |
| `--viewportRange-landscape` | `(orientation: landscape)` | 横屏 |
| `--viewportRange-portrait` | `(orientation: portrait)` | 竖屏 |

---

## 9. 主题系统

### 9.1 主题属性

```html
<body
  data-color-mode="auto"
  data-light-theme="light"
  data-dark-theme="dark"
>
```

- `data-color-mode`: `auto` | `light` | `dark` — 设置色彩模式
- `data-light-theme`: 浅色主题名称（连字符转下划线）
- `data-dark-theme`: 深色主题名称

### 9.2 可用主题（9 种）

| 主题 | CSS 导入路径 | 说明 |
|---|---|---|
| `light` | `dist/css/functional/themes/light.css` | 浅色默认 |
| `light_tritanopia` | `dist/css/functional/themes/light-tritanopia.css` | 浅色——蓝黄色盲 |
| `light_high_contrast` | `dist/css/functional/themes/light-high-contrast.css` | 浅色——高对比度 |
| `light_colorblind` | `dist/css/functional/themes/light-colorblind.css` | 浅色——色盲友好 |
| `dark` | `dist/css/functional/themes/dark.css` | 深色默认 |
| `dark_colorblind` | `dist/css/functional/themes/dark-colorblind.css` | 深色——色盲友好 |
| `dark_dimmed` | `dist/css/functional/themes/dark-dimmed.css` | 深色——暗淡 |
| `dark_high_contrast` | `dist/css/functional/themes/dark-high-contrast.css` | 深色——高对比度 |
| `dark_tritanopia` | `dist/css/functional/themes/dark-tritanopia.css` | 深色——蓝黄色盲 |

### 9.3 CSS 导入

```css
/* 尺寸与排版 */
@import '@primer/primitives/dist/css/base/size/size.css';
@import '@primer/primitives/dist/css/base/typography/typography.css';
@import '@primer/primitives/dist/css/base/motion/motion.css';

/* 功能性尺寸 */
@import '@primer/primitives/dist/css/functional/size/border.css';
@import '@primer/primitives/dist/css/functional/size/breakpoints.css';
@import '@primer/primitives/dist/css/functional/size/size-coarse.css';
@import '@primer/primitives/dist/css/functional/size/size-fine.css';
@import '@primer/primitives/dist/css/functional/size/size.css';
@import '@primer/primitives/dist/css/functional/size/viewport.css';

/* 功能性排版 */
@import '@primer/primitives/dist/css/functional/typography/typography.css';

/* 间距 */
@import '@primer/primitives/dist/css/functional/spacing/space.css';

/* 主题颜色（按需选择） */
@import '@primer/primitives/dist/css/functional/themes/light.css';
@import '@primer/primitives/dist/css/functional/themes/dark.css';
```

---

## 10. 组件规范

### Button

#### 变体（Variants）

| 变体 | 说明 | 使用场景 |
|---|---|---|
| `primary` | 最高优先级操作，使用最少 | 每组按钮最多 1 个，每页罕见超过 1 个 |
| `default` | 通用操作默认样式 | 常规操作，与 primary 搭配做次要操作 |
| `invisible` | 透明背景，极简 UI | 极简界面、复合组件（如 ActionList） |
| `danger` | 破坏性操作 | 删除等危险操作，通常需确认对话框 |
| `outline` | 轮廓按钮 | 次要强调操作 |
| `link` | 链接样式按钮 | 链接外观的按钮 |

#### 尺寸（Sizes）

| 尺寸 | 高度 | 说明 |
|---|---|---|
| `small` | 1.75rem (28px) | 紧凑空间或次要操作 |
| `medium` (默认) | 2rem (32px) | 大多数界面 |
| `large` | 2.5rem (40px) | 强调操作，谨慎使用 |

#### Props

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `variant` | `'default' \| 'primary' \| 'danger' \| 'invisible' \| 'link'` | `'default'` | 视觉样式 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 尺寸 |
| `alignContent` | `'start' \| 'center'` | — | 有视觉元素时的内容对齐 |
| `block` | `boolean` | — | 宽度填充容器 |
| `loading` | `boolean` | — | 加载状态（设置 aria-disabled） |
| `loadingAnnouncement` | `string` | — | 加载时屏幕阅读器播报内容 |
| `inactive` | `boolean` | — | 视觉禁用但可交互（用于系统错误） |
| `disabled` | `boolean` | — | 完全禁用 |
| `leadingVisual` | `React.ElementType` | — | 前导视觉元素 |
| `trailingVisual` | `React.ElementType` | — | 后置视觉元素 |
| `trailingAction` | `React.ElementType` | — | 后置操作（如下拉箭头） |
| `labelWrap` | `boolean` | `false` | 标签是否换行 |
| `count` | `number` | — | 计数器显示 |
| `as` | `React.ElementType` | `'button'` | 渲染元素类型 |
| `href` | `string` | — | 当 as='a' 时的链接 URL |

#### Button 颜色令牌（Primary 变体）

| 状态 | CSS 变量 | 背景色 | 边框色 | 前景色 |
|---|---|---|---|---|
| Rest | `--button-primary-bgColor-rest` | `#1f883d` | `#1f232826` | `#ffffff` |
| Hover | `--button-primary-bgColor-hover` | `#1c8139` | `#1f232826` | `#ffffff` |
| Active | `--button-primary-bgColor-active` | `#197935` | `#1f232826` | `#ffffff` |
| Disabled | `--button-primary-bgColor-disabled` | `#95d8a6` | `#95d8a6` | `#ffffffcc` |
| Selected | — | — | — | — |

#### Button 颜色令牌（Default 变体）

| 状态 | 背景色 | 边框色 | 前景色 |
|---|---|---|---|
| Rest | `#f6f8fa` | `#d1d9e0` | `#25292e` |
| Hover | `#eff2f5` | `#d1d9e0` | `#25292e` |
| Active | `#e6eaef` | `#d1d9e0` | `#25292e` |
| Disabled | `#eff2f5` | `#818b981a` | `#818b98` |
| Selected | `#e6eaef` | — | — |

#### Button 颜色令牌（Danger 变体）

| 状态 | 背景色 | 边框色 | 前景色 |
|---|---|---|---|
| Rest | `#f6f8fa` | `#d1d9e0` | `#d1242f` |
| Hover | `#cf222e` | `#1f232826` | `#ffffff` |
| Active | `#a40e26` | `#1f232826` | `#ffffff` |
| Disabled | `#eff2f5` | — | `#d1242f80` |

#### Button 颜色令牌（Invisible 变体）

| 状态 | 背景色 | 前景色 |
|---|---|---|
| Rest | `transparent` | `#25292e` |
| Hover | `#818b981a` | `#25292e` |
| Active | `#818b9826` | `#25292e` |
| Disabled | `transparent` | `#818b98` |

---

### ActionMenu

由 ActionList 和 Overlay 模式组成，用于快速操作和选择。

#### 结构

```
ActionMenu
├── ActionMenu.Button    — 触发按钮
├── ActionMenu.Anchor    — 替代 Button 的锚点
└── ActionMenu.Overlay   — 浮层菜单
    └── ActionList        — 菜单项列表
```

#### 功能模式

| 模式 | 说明 |
|---|---|
| Default | 基础菜单 |
| Single-select | 单选菜单，选择显示在 Button 中 |
| Multi-select | 多选菜单 |
| With dividers | 分隔符增强可读性 |
| With submenus | 多级嵌套菜单 |
| Context menu | 右键触发 |
| Loading item | 加载状态项 |
| Inactive item | 系统错误导致不可用项 |

#### Props（ActionMenu）

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `children` | `React.ReactElement[]` | — | 推荐 Button/Anchor + Overlay |
| `open` | `boolean` | `false` | 受控开关状态 |
| `onOpenChange` | `(open: boolean) => void` | — | 开关回调 |
| `anchorRef` | `React.RefObject` | — | 外部锚点引用 |

#### Props（ActionMenu.Overlay）

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | 对齐方式 |
| `side` | `'outside-bottom' \| 'inside-top' \| ...` | `'outside-bottom'` | 出现方向 |
| `onPositionChange` | `function` | — | 位置变化回调 |

---

### FormControl

带标签的输入控件包装器，确保一致的布局和正确的 ARIA 属性。

#### 结构

```
FormControl
├── FormControl.Label          — 标签
├── FormControl.Caption        — 说明文字
├── FormControl.Validation     — 验证消息
├── FormControl.LeadingVisual  — 前导视觉
└── TextInput | Select | Checkbox | Radio | Autocomplete | TextInputWithTokens
```

#### Props（FormControl）

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `children` | `React.ReactNode` | — | 子组件 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `required` | `boolean` | `false` | 是否必填 |
| `id` | `string` | 自动生成 | 唯一标识符 |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | 布局方向（水平用于 checkbox/radio） |

#### Props（FormControl.Label）

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `visuallyHidden` | `boolean` | `false` | 视觉隐藏（保留无障碍） |
| `as` | `'label' \| 'legend' \| 'span'` | `'label'` | 元素类型 |
| `requiredText` | `string` | `'*'` | 必填指示符 |
| `requiredIndicator` | `boolean` | `true` | 无障碍树中是否显示必填文本 |
| `htmlFor` | `string` | — | 关联输入 ID |

#### Props（FormControl.Validation）

| 属性 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `variant` | `'error' \| 'success'` | — | 验证状态 |
| `children` | `React.ReactNode` | — | 验证消息内容 |

---

## 11. 布局令牌

### 11.1 控件尺寸（Control Sizes）

| 尺寸 | CSS 变量 | 高度 | paddingBlock | paddingInline (normal) | gap |
|---|---|---|---|---|---|
| XSmall | `--control-xsmall-*` | 1.5rem (24px) | 0.125rem (2px) | 0.5rem (8px) | 0.25rem (4px) |
| Small | `--control-small-*` | 1.75rem (28px) | 0.25rem (4px) | 0.75rem (12px) | 0.25rem (4px) |
| Medium | `--control-medium-*` | 2rem (32px) | 0.375rem (6px) | 0.75rem (12px) | 0.5rem (8px) |
| Large | `--control-large-*` | 2.5rem (40px) | 0.625rem (10px) | 0.75rem (12px) | 0.5rem (8px) |
| XLarge | `--control-xlarge-*` | 3rem (48px) | 0.875rem (14px) | 0.75rem (12px) | 0.5rem (8px) |

> 每个尺寸还提供 `paddingInline-condensed` 和 `paddingInline-spacious` 变体。

### 11.2 Control Stack 间距

| CSS 变量 | 常规值 | 宽松值 |
|---|---|---|
| `--controlStack-small-gap-auto` | 0.5rem (8px) | 1rem (16px) |
| `--controlStack-medium-gap-auto` | 0.5rem (8px) | 0.75rem (12px) |
| `--controlStack-large-gap-auto` | 0.5rem (8px) | 0.75rem (12px) |

### 11.3 Control 颜色令牌

| CSS 变量 | 值 |
|---|---|
| `--control-bgColor-rest` | `#f6f8fa` |
| `--control-bgColor-hover` | `#eff2f5` |
| `--control-bgColor-active` | `#e6eaef` |
| `--control-bgColor-disabled` | `#eff2f5` |
| `--control-bgColor-selected` | `#f6f8fa` |
| `--control-borderColor-rest` | `#d1d9e0` |
| `--control-borderColor-emphasis` | `#818b98` |
| `--control-borderColor-disabled` | `#818b981a` |
| `--control-borderColor-danger` | `#cf222e` |
| `--control-borderColor-success` | `#1a7f37` |
| `--control-borderColor-warning` | `#9a6700` |
| `--control-checked-bgColor-rest` | `#0969da` |
| `--control-checked-bgColor-hover` | `#0860ca` |
| `--control-checked-bgColor-active` | `#0757ba` |
| `--control-fgColor-rest` | `#25292e` |
| `--control-fgColor-placeholder` | `#59636e` |
| `--control-fgColor-disabled` | `#818b98` |

---

## 12. 数据可视化调色板

18 种颜色系列，每种提供 `emphasis`（强调）和 `muted`（柔和）两个色阶。

| 颜色系列 | emphasis 值 | muted 值 |
|---|---|---|
| Auburn | `#9d615c` | `#f2e9e9` |
| Blue | `#006edb` | `#d1f0ff` |
| Brown | `#856d4c` | `#eeeae2` |
| Coral | `#d43511` | `#ffe5db` |
| Gray | `#808fa3` | `#e8ecf2` |
| Green | `#30a147` | `#caf7ca` |
| Lemon | `#866e04` | `#f7eea1` |
| Lime | `#527a29` | `#e3f2b5` |
| Olive | `#64762d` | `#f0f0ad` |
| Orange | `#eb670f` | `#ffe7d1` |
| Pine | `#167e53` | `#bff8db` |
| Pink | `#ce2c85` | `#ffe5f1` |
| Plum | `#a830e8` | `#f8e5ff` |
| Purple | `#894ceb` | `#f1e5ff` |
| Red | `#df0c24` | `#ffe2e0` |
| Teal | `#179b9b` | `#c7f5ef` |
| Yellow | `#b88700` | `#ffec9e` |

---

## 13. Overlay 令牌

### 尺寸

| CSS 变量 | 值 | 语义 |
|---|---|---|
| `--overlay-width-xsmall` | `12rem` (192px) | 超小宽度 |
| `--overlay-width-small` | `20rem` (320px) | 小宽度 |
| `--overlay-width-medium` | `30rem` (480px) | 中宽度 |
| `--overlay-width-large` | `40rem` (640px) | 大宽度 |
| `--overlay-width-xlarge` | `60rem` (960px) | 超大宽度 |
| `--overlay-height-small` | `16rem` (256px) | 小高度 |
| `--overlay-height-medium` | `20rem` (320px) | 中高度 |
| `--overlay-height-large` | `27rem` (432px) | 大高度 |
| `--overlay-height-xlarge` | `37.5rem` (600px) | 超大高度 |

### 其他

| CSS 变量 | 值 | 语义 |
|---|---|---|
| `--overlay-borderRadius` | `0.375rem` (6px) | 圆角 |
| `--overlay-offset` | `0.25rem` (4px) | 偏移 |
| `--overlay-padding-condensed` | `0.5rem` (8px) | 紧凑内边距 |
| `--overlay-padding-normal` | `1rem` (16px) | 常规内边距 |
| `--overlay-paddingBlock-condensed` | `0.25rem` (4px) | 紧凑块级内边距 |
| `--overlay-paddingBlock-normal` | `0.75rem` (12px) | 常规块级内边距 |

---

## 附录：安装与使用

### 安装

```bash
npm install @primer/primitives
# 或
yarn add @primer/primitives
```

### 使用 CSS 变量

```css
.Text {
  color: var(--fgColor-default);
  background: var(--bgColor-default);
  font: var(--text-body-shorthand-medium);
  padding: var(--base-size-16);
  border-radius: var(--borderRadius-medium);
  border: var(--borderWidth-thin) solid var(--borderColor-default);
}
```

### 使用简写令牌

```css
.Heading {
  font: var(--text-display-shorthand);
}

.Button {
  font: var(--text-body-shorthand-medium);
  transition: var(--motion-transition-hover);
}
```

### 技术规格

- **令牌格式**：W3C Design Token Format 2025.10 (Candidate Recommendation)
- **构建工具**：Style Dictionary v5.0.0
- **包名**：`@primer/primitives`
- **版本**：11.9.0
- **分发格式**：CSS Variables、JSON5 源文件
- **分发路径**：`dist/css/base/`（基础令牌）、`dist/css/functional/`（功能令牌）

---

> **备注**：以上所有令牌值均来自 Primer 官方文档和 `@primer/primitives` 仓库的公开数据。深色主题下的值不同，请参考对应主题 CSS 文件。部分基础色阶（raw color scale，如 gray.0-9）的完整数值未在文档页面公开列出，需查阅 `src/tokens/base/color/` 下的 JSON5 源文件获取。
