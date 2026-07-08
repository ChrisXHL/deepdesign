# Linear 设计系统完整规范

> 数据来源：linear.app 生产环境 DOM/CSSOM 提取（2026年5月17日快照）+ 品牌页面官方规范 + 多源交叉验证。所有值反映捕获时刻的源样式表。

---

## 目录

1. [设计哲学与整体风格](#1-设计哲学与整体风格)
2. [完整色彩系统](#2-完整色彩系统)
3. [排版系统](#3-排版系统)
4. [间距系统](#4-间距系统)
5. [圆角规范](#5-圆角规范)
6. [阴影与边框层级](#6-阴影与边框层级)
7. [动效规范](#7-动效规范)
8. [组件规范](#8-组件规范)
9. [响应式断点](#9-响应式断点)
10. [图标系统](#10-图标系统)
11. [键盘交互规范](#11-键盘交互规范)
12. [CSS 变量总表](#12-css-变量总表)
13. [WCAG 可访问性](#13-wcag-可访问性)

---

## 1. 设计哲学与整体风格

| 维度 | 描述 |
|------|------|
| **核心美学** | 深色优先（Dark-mode-first）、高密度、高性能工程美学 |
| **设计语言** | 极简主义、功能驱动、去装饰化 |
| **深度策略** | 依赖分层灰度背景 + 1px 发丝边框创造层次，而非投影 |
| **色彩哲学** | 极度克制的调色板，亮色仅用于关键状态（错误/活动/主操作） |
| **排版哲学** | 为小尺寸下的最大可读性而设计，标题与正文尺寸接近，用字重而非字号建立层级 |
| **间距哲学** | 紧凑间距定义了"快速"感，减少视觉扫描距离，适合密集技术数据展示 |
| **推荐场景** | SaaS 后台 / 工作台 / 项目管理工具 / 产品介绍页 |
| **技术栈** | Next.js |

---

## 2. 完整色彩系统

### 2.1 品牌色（Brand Colors）

来源：linear.app/brand 官方品牌指南

| 色名 | 色值 | RGB | 用途 |
|------|------|-----|------|
| **Mercury White** | `#F4F5F8` | 244, 245, 248 | 亮模式品牌色，单色 wordmark 首选 |
| **Nordic Gray** | `#222326` | 35, 35, 38 | 暗模式品牌色，单色 wordmark 首选 |

> 品牌页面描述主品牌色为"subtle desaturated blue"（微妙去饱和蓝），用于背景而非前景。

### 2.2 功能色（Functional Colors）

| 令牌名 | 色值 | RGB | HSL | 用途 |
|--------|------|-----|-----|------|
| `--color-primary` | `#5E6AD2` | 94, 106, 210 | 234°, 56%, 60% | 主交互品牌色：链接、焦点环、主操作 |
| `--color-accent-indigo` | `#6366F1` | 99, 102, 241 | 239°, 84%, 67% | 高亮状态、特定 UI 强调 |
| `--color-accent-purple` | `#8B5CF6` | 139, 92, 246 | 258°, 90%, 66% | 用户头像、功能标注、进行中状态 |
| `--color-accent-red` | `#EB5757` | 235, 87, 87 | 0°, 78%, 63% | 破坏性操作、错误状态、紧急状态 |

### 2.3 状态扩展色（从全调色板提取）

| 色值 | RGB | 语义用途 |
|------|-----|----------|
| `#27A644` | 39, 166, 68 | 成功状态 / 完成状态 |
| `#F34E52` | 243, 78, 82 | 错误/危险（与 accent-red 互补） |
| `#10B981` | 16, 185, 129 | 成功/正向指标 |
| `#02B8CC` | 2, 184, 204 | 信息/提示 |
| `#FF8849` | 255, 136, 73 | 警告/注意（CSS 变量 `--sx-1ijrdvx`） |
| `#E4F222` | 228, 242, 34 | 高亮强调色（霓虹黄绿，营销页/landing 使用） |
| `#00FF05` | 0, 255, 5 | 极端强调（极少使用） |

### 2.4 暗色主题 — 中性色阶（Dark Theme Neutrals）

| 令牌名 | 色值 | 用途 |
|--------|------|------|
| `--color-dark-surface` | `#0F1011` | 主内容区、应用外壳背景 |
| `--color-dark-surface-secondary` | `#08090A` | header/footer 背景，制造微妙分隔 |
| `--color-dark-text-primary` | `#F7F8F8` | 正文、标题、标签的主文本色 |
| `--color-dark-text-secondary` | `#D0D6E0` | 次要信息和低优先级标签 |
| `--color-dark-text-muted` | `#8A8F98` | 占位符、禁用状态、三级元数据 |
| `--color-dark-border` | `#2A2E33` | UI 面板和组件分隔的主边框色 |
| `--color-dark-border-subtle` | `#24282C` | 组件内更细微的分隔 |
| `--color-dark-border-hover` | `#383B3F` | hover 状态边框色（推断） |

### 2.5 亮色主题 — 中性色阶（Light Theme Neutrals）

| 令牌名 | 色值 | 用途 |
|--------|------|------|
| `--color-background` | `#FFFFFF` | 亮模式标准白背景 |
| `--color-text-primary` | `#62666D` | 亮模式正文文本色 |
| `--color-text-secondary` | `#E2E4E7` | 亮模式次要文本 |
| `--color-border` | `#E5E5E6` | 亮模式默认边框色 |

### 2.6 完整调色板（从生产环境提取的全部 30 色）

```
#F7F8F8  #62666D  #D0D6E0  #E2E4E7  #8A8F98  #F79CE0
#08090A  #F7BF8B  #8FA6FF  #FFDF9F  #83DCDC  #00FF05
#5E6AD2  #23252A  #F34E52  #27A644  #383B3F  #000000
#FF0000  #6366F1  #121414  #02B8CC  #8B5CF6  #55CCFF
#6D78D5  #E4F222  #10B981  #0F3338  #F4F5F8  #222326
```

### 2.7 透明度色值（交互状态）

| 色值 | 透明度 | 用途 |
|------|--------|------|
| `rgba(255, 255, 255, ...)` | `0.02` | active 状态背景 |
| `rgba(255, 255, 255, ...)` | `0.04` | 次级 active 背景 |
| `rgba(255, 255, 255, ...)` | `0.05` | hover 状态背景 |
| `rgba(139, 92, 246, ...)` | `0.1` | Purple 徽章背景 |
| `rgba(235, 87, 87, ...)` | `0.1` | Red 徽章背景 |
| `rgba(94, 106, 210, ...)` | `0.3` | 焦点环阴影 |
| `rgba(0, 0, 0, ...)` | `0.05` | 主按钮阴影 |
| `rgba(0, 0, 0, ...)` | `0.1` | 弹出层阴影第一层 |
| `rgba(0, 0, 0, ...)` | `0.2` | 卡片 inset 阴影 / 弹出层阴影第二层 |

---

## 3. 排版系统

### 3.1 字体家族

| 角色 | 字体栈 |
|------|--------|
| **UI / Display** | `Inter Variable`, `"SF Pro Display"`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `"Roboto"`, `"Oxygen"`, `"Ubuntu"`, `sans-serif` |
| **Code / Mono** | `Berkeley Mono`, `"Menlo"`, `"Consolas"`, `"Monaco"`, `monospace` |
| **Font Variations** | `"opsz" auto`（通过 CSS 变量 `--font-variations` 控制，光学尺寸轴自动适配） |

### 3.2 完整字号层级

| 令牌/角色 | 字号 | 字重 | 行高 | 字间距 | 用途 |
|-----------|------|------|------|--------|------|
| `t00` / Display | `64px` | `590` | `1.1` | `-0.02em` | 主营销页大标题 |
| `t01` | `40px` | `590` | `1.1` | `-0.02em` | 大型营销标题 |
| `t02` | `32px` | `590` | `1.1` | `-0.02em` | 营销页章节标题 |
| `t03` / Heading H2 | `24px` | `510` | `1.2` | `-0.015em` | 子标题、大组件标题 |
| `t04` / Heading H3 | `20px` | `510` | `1.4` | `-0.01em` | 卡片标题、中优先级标签 |
| `t05` | `18px` | `510` | `1.5` | `-0.011em` | 大号正文/副标题 |
| `t06` | `17px` | `400` | `1.5` | `-0.011em` | 中号正文 |
| `t07` / Body | `16px` | `400` | `1.5` | `-0.011em` | 主段落和正文 |
| `t08` | `15px` | `400` | `1.5` | `-0.01em` | 次要正文 |
| `t09` / Small | `13px` | `400` | `1.5` | `-0.01em` | 元数据、说明、次要标签 |
| Caption / Micro | `12px` | `400` | `1.5` | `normal` | 三级信息、辅助文本 |
| Code/Mono | `13px` | `400` | `1.5` | `normal` | 所有代码块和行内代码 |

> **注意**：Linear 使用非标准字重值 `510` 和 `590`（而非传统的 500/600），这是 Inter Variable 字体的特性，提供更精细的字重控制。

### 3.3 其他排版 CSS 变量

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `--title-1-line-height` | `1.4` | Title 1 级别行高 |
| `--text-micro-size` | `0.75rem` (12px) | 微型文本字号 |
| `--font-size-title1` | `2.25rem` (36px) | Title 1 字号 |

### 3.4 字重使用规则

| 字重值 | 用途 |
|--------|------|
| `400` | 正文文本、次要信息、导航链接 |
| `510` | 标题（H2、H3）、次要按钮、表单标签、徽章、导航链接（激活态） |
| `590` | Display 和 H1 大标题 |
| `300` | 轻量级文本（极少使用，marketing 场景） |

---

## 4. 间距系统

### 4.1 基础间距刻度

**基准单位：`4px`** — 所有 padding、margin 和 gap 均使用此基准的倍数。

| 值 | 倍数 | 使用场景 |
|----|------|----------|
| `2px` | 0.5x | Badge padding（垂直）、精细微调 |
| `4px` | 1x | 图标与文本间距、Badge gap、精细对齐 |
| `6px` | 1.5x | 次要按钮 padding、输入框 padding |
| `8px` | 2x | 紧凑组件内边距、元素间小间距、Badge padding（水平）、导航链接 padding |
| `12px` | 3x | 主按钮/输入框 padding、导航链接 padding、表单标签 margin |
| `16px` | 4x | 标准元素间距、小容器内边距、移动端水平 padding |
| `20px` | 5x | 中等间距（间距刻度中使用） |
| `24px` | 6x | 卡片和容器主内容内边距、导航栏水平 padding |
| `32px` | 8x | 主要区块间距、大卡片间距、section 水平 padding |
| `64px` | 16x | section 垂直 padding（标准） |
| `96px` | 24x | section 垂直 padding（大间距） |

### 4.2 容器与布局间距

| 参数 | 值 |
|------|-----|
| 营销页最大宽度 | `1440px` |
| 内容列宽 | `1100px`（居中） |
| 水平 Section Padding | `32px` |
| 垂直 Section Padding | `64px` 或 `96px` |
| 导航栏 Padding | `12px 24px` |
| 移动端水平 Padding（降级） | `16px`（从 `24px`/`32px` 降级） |

### 4.3 其他测量到的间距值

从设计语言分析中提取的额外间距值（用于特定布局场景）：

```
1px, 39px, 47px, 51px, 56px, 69px, 79px, 91px, 95px, 99px
```

> 这些值多为复合计算的间距结果，而非基础令牌。

---

## 5. 圆角规范

| 令牌/级别 | 值 | 用途 |
|-----------|-----|------|
| `xs` / hairline | `1px` | 极细微圆角（特殊场景） |
| `sm` | `4px` | 小型内联元素：标签、Tag |
| `md` (default) | `6px` | 默认圆角：按钮、输入框等交互控件 |
| `md-alt` | `7px` | 测量到的变体（部分组件） |
| `lg` | `12px` | 大型容器：卡片、面板、模态框 |
| `xl` | `16px` | 超大容器（特殊卡片） |
| `2xl` | `20px` | 最大圆角容器（营销页大区块） |
| `full` | `9999px` | 药丸形：徽章、导航链接、Chip |

---

## 6. 阴影与边框层级

### 6.1 深度层级系统（Elevation Tiers）

Linear 的核心设计原则：**用发丝边框（1px solid border）和分层背景色代替投影**，仅在弹出层和模态框使用实际阴影。

| 级别 | 处理方式 | z-index | 用途 |
|------|----------|---------|------|
| **z-0** | 平面，无阴影，无边框 | `0` | 基础页面背景 |
| **z-1** | `1px solid border` (`#2A2E33`) | `1-10` | 卡片、面板、输入框、静态元素 |
| **z-2** | `1px border` + `inset shadow` | `50` | footer、sticky header |
| **z-3** | Focus ring: `0 0 0 3px rgba(94,106,210,0.3)` | `100` | 交互元素的焦点状态 |
| **z-4** | 弹出阴影: `rgba(0,0,0,0.1) 0 4px 12px, rgba(0,0,0,0.2) 0 0 0 2px` | `5000+` | 工具提示、下拉菜单、弹出框 |
| **z-5** | Backdrop overlay + shadow | `10000+` | 模态框、命令面板（Cmd+K） |

### 6.2 测量到的实际 z-index 阶梯

| z-index | 元素 |
|---------|------|
| `1` | 内容区块 |
| `3` | 纹理覆盖层（Grain） |
| `50` | Footer |
| `100` | Header |
| `5000` | 跳过导航链接 |
| `10000` | 视口定位元素（浮动 UI） |

### 6.3 边框规格

| 参数 | 值 |
|------|-----|
| 标准边框宽度 | `1px` |
| 标准边框样式 | `solid` |
| 暗色主题边框色 | `#2A2E33` |
| 暗色主题微妙边框色 | `#24282C` |
| 暗色主题 hover 边框色 | `#383B3F` |
| 亮色主题边框色 | `#E5E5E6` |

### 6.4 阴影规格汇总

| 类型 | 值 | 用途 |
|------|-----|------|
| 主按钮阴影 | `0px 1px 2px rgba(0, 0, 0, 0.05)` | Primary Button 微浮效果 |
| 卡片内阴影 | `rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset` | Card 内部深度 |
| 焦点环阴影 | `0 0 0 3px rgba(94, 106, 210, 0.3)` | Input/Button focus 状态 |
| 弹出层阴影 (z-4) | `rgba(0,0,0,0.1) 0 4px 12px, rgba(0,0,0,0.2) 0 0 0 2px` | Tooltip / Dropdown / Popover |

---

## 7. 动效规范

### 7.1 时长刻度（Duration Scale）

| 令牌 | 值 | 用途 |
|------|-----|------|
| `fast` | `100ms` (0.1s) | transform 变换：按钮按压、缩放 |
| `normal` | `150ms` (0.15s) | 颜色/边框/阴影过渡：hover/focus 状态变化 |
| `slow` | `160ms` | 通用过渡（测量值） |
| `deliberate` | `400ms` | 大面积展开/折叠动画 |

### 7.2 缓动函数（Easing Functions）

| 令牌 | 值 | 用途 |
|------|-----|------|
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | transform 动画（元素出现/移动） |
| `ease` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | 颜色/背景/边框过渡 |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | 展开/折叠动画 |

### 7.3 过渡规则详情

| 属性 | 时长 | 缓动函数 |
|------|------|----------|
| `transform` | `0.1s` | `ease-out` |
| `background-color` | `0.15s` | `ease` |
| `color` | `0.15s` | `ease` |
| `border-color` | `0.15s` | `ease` |
| `box-shadow` | `0.15s` | `ease` |
| `filter` | `0.15s` | `ease` |

### 7.4 交互状态变换值

| 状态 | 属性 | 值 |
|------|------|-----|
| **Active (按下)** | `transform` | `scale(0.97)` |
| **Hover (按钮)** | `transform` | `translateY(-1px)` |
| **Hover (卡片)** | `filter` | `brightness(1.2)` / `brightness(120%)` / `brightness(125%)` |
| **Disabled** | `opacity` | `0.5` / `0.4` |

### 7.5 关键帧动画

从源 CSS 中识别到 **20 个 `@keyframes` 动画**，已知名称：

| 动画名 | 用途 |
|--------|------|
| `Author_close` | 作者面板关闭动画 |
| `Author_open` | 作者面板展开动画 |
| `Blink_blink` | 光标闪烁动画 |
| `CTA_fadeIn` | CTA 元素淡入动画 |
| `Collapsible_slideDown` | 折叠区域向下滑出 |
| `Collapsible_slideUp` | 折叠区域向上收起 |

### 7.6 动效设计原则

- **快速响应**：所有交互反馈在 100-150ms 内完成，营造"即时响应"感
- **克制的动效**：不使用弹跳、弹性等夸张缓动
- **亮度替代位移**：卡片 hover 使用 `brightness` 滤镜而非位移变换
- **缩放反馈**：按钮按下使用 `scale(0.97)` 微缩，模拟物理按压

---

## 8. 组件规范

### 8.1 Primary Button（主按钮）

| 属性 | 值 |
|------|-----|
| `background-color` | `var(--color-dark-text-primary, #F7F8F8)` |
| `color` | `var(--color-dark-surface, #0F1011)` |
| `font-size` | `14px` |
| `font-weight` | `510` |
| `padding` | `8px 16px` |
| `border-radius` | `6px` |
| `border` | `1px solid #E5E5E6` |
| `box-shadow` | `0px 1px 2px rgba(0, 0, 0, 0.05)` |
| `cursor` | `pointer` |
| `transition` | `transform 0.1s ease-out, background-color 0.15s ease` |
| **:hover** `background` | `#FFFFFF` |
| **:hover** `transform` | `translateY(-1px)` |
| **:active** `transform` | `scale(0.97)` |
| **:active** `background` | `#E5E5E6` |
| **:disabled** `opacity` | `0.5` |
| **:disabled** `cursor` | `not-allowed` |
| **:disabled** `transform` | `none` |

### 8.2 Secondary Button（次按钮）

| 属性 | 值 |
|------|-----|
| `background-color` | `transparent` |
| `color` | `var(--color-dark-text-secondary, #D0D6E0)` |
| `font-size` | `13px` |
| `font-weight` | `510` |
| `padding` | `6px 12px` |
| `border-radius` | `6px` |
| `border` | `1px solid var(--color-dark-border, #2A2E33)` |
| `cursor` | `pointer` |
| `transition` | `background-color 0.15s ease, color 0.15s ease, transform 0.1s ease-out` |
| **:hover** `background` | `rgba(255, 255, 255, 0.05)` |
| **:hover** `color` | `var(--color-dark-text-primary, #F7F8F8)` |
| **:active** `transform` | `scale(0.97)` |
| **:active** `background` | `rgba(255, 255, 255, 0.02)` |
| **:disabled** `opacity` | `0.5` |
| **:disabled** `background` | `transparent` |

### 8.3 Ghost Button（幽灵按钮）

| 属性 | 值 |
|------|-----|
| `background-color` | `transparent` |
| `color` | `var(--color-dark-text-muted, #8A8F98)` |
| `font-size` | `13px` |
| `font-weight` | `400` |
| `padding` | `4px 8px` |
| `border-radius` | `6px` |
| `border` | `none` |
| `cursor` | `pointer` |
| `transition` | `background-color 0.15s ease, color 0.15s ease` |
| **:hover** `background` | `rgba(255, 255, 255, 0.05)` |
| **:hover** `color` | `var(--color-dark-text-primary, #F7F8F8)` |
| **:active** `background` | `rgba(255, 255, 255, 0.02)` |
| **:disabled** `opacity` | `0.4` |

### 8.4 Card / Panel（卡片/面板）

| 属性 | 值 |
|------|-----|
| `background-color` | `var(--color-dark-surface, #0F1011)` |
| `border-radius` | `12px` |
| `border` | `1px solid var(--color-dark-border, #2A2E33)` |
| `box-shadow` | `rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset` |
| `padding` | `24px` |
| `transition` | `filter 0.15s ease, border-color 0.15s ease` |
| **:hover** `filter` | `brightness(1.2)` |
| **:hover** `border-color` | `var(--color-dark-border-subtle, #383B3F)` |

### 8.5 Text Input（文本输入框）

| 属性 | 值 |
|------|-----|
| `background-color` | `var(--color-dark-surface-secondary, #08090A)` |
| `color` | `var(--color-dark-text-primary, #F7F8F8)` |
| `font-size` | `14px` |
| `font-weight` | `400` |
| `padding` | `8px 12px` |
| `border-radius` | `6px` |
| `border` | `1px solid var(--color-dark-border, #2A2E33)` |
| `transition` | `border-color 0.15s ease, box-shadow 0.15s ease` |
| `outline` | `none` |
| **:focus** `border-color` | `var(--color-primary, #5E6AD2)` |
| **:focus** `box-shadow` | `0 0 0 3px rgba(94, 106, 210, 0.3)` |
| **:disabled** `opacity` | `0.5` |
| **:disabled** `cursor` | `not-allowed` |
| **:disabled** `background-color` | `var(--color-dark-border, #2A2E33)` |

### 8.6 Form Label（表单标签）

| 属性 | 值 |
|------|-----|
| `color` | `var(--color-dark-text-secondary, #D0D6E0)` |
| `font-size` | `13px` |
| `font-weight` | `510` |
| `margin-bottom` | `8px` |

### 8.7 Badge（徽章）

| 属性 | 值 |
|------|-----|
| `display` | `inline-flex` |
| `align-items` | `center` |
| `gap` | `4px` |
| `font-size` | `12px` |
| `font-weight` | `510` |
| `padding` | `2px 8px` |
| `border-radius` | `9999px`（药丸形） |

#### Badge 变体

| 变体 | background-color | color |
|------|------------------|-------|
| In Progress | `rgba(139, 92, 246, 0.1)` | `var(--color-accent-purple, #8B5CF6)` |
| High Priority | `rgba(235, 87, 87, 0.1)` | `var(--color-accent-red, #EB5757)` |

### 8.8 Navigation Bar（导航栏）

| 属性 | 值 |
|------|-----|
| `background-color` | `var(--color-dark-surface-secondary, #08090A)` |
| `padding` | `12px 24px` |
| `display` | `flex` |
| `align-items` | `center` |
| `justify-content` | `space-between` |
| `border-bottom` | `1px solid var(--color-dark-border, #2A2E33)` |

### 8.9 Navigation Link（导航链接）

| 属性 | 值 |
|------|-----|
| `color` | `var(--color-dark-text-muted, #8A8F98)` |
| `font-size` | `13px` |
| `font-weight` | `400` |
| `padding` | `8px 12px` |
| `border-radius` | `9999px`（药丸形） |
| `text-decoration` | `none` |
| `transition` | `color 0.15s ease, background-color 0.15s ease` |
| **:hover** `color` | `var(--color-dark-text-primary, #F7F8F8)` |
| **:hover** `background` | `rgba(255, 255, 255, 0.05)` |
| **[aria-current="page"]** `color` | `var(--color-dark-text-primary, #F7F8F8)` |

### 8.10 Standard Link（标准文本链接）

| 属性 | 值 |
|------|-----|
| `color` | `var(--color-primary, #5E6AD2)` |
| `text-decoration` | `none` |
| `transition` | `color 0.15s ease` |
| **:hover** `color` | `var(--color-accent-indigo, #6366F1)` |
| **:hover** `text-decoration` | `underline` |
| **:visited** `color` | `var(--color-primary, #5E6AD2)` |

### 8.11 组件尺寸对比总结

| 组件 | font-size | padding | border-radius |
|------|-----------|---------|---------------|
| Primary Button | 14px / 510 | 8px 16px | 6px |
| Secondary Button | 13px / 510 | 6px 12px | 6px |
| Ghost Button | 13px / 400 | 4px 8px | 6px |
| Text Input | 14px / 400 | 8px 12px | 6px |
| Badge | 12px / 510 | 2px 8px | 9999px |
| Card | — | 24px | 12px |
| Nav Link | 13px / 400 | 8px 12px | 9999px |

---

## 9. 响应式断点

### 9.1 断点定义

| 名称 | 宽度 | 关键行为变化 |
|------|------|-------------|
| **Mobile** | `< 640px` | 单列布局，导航折叠为汉堡菜单，字号显著缩小，水平 padding 降为 16px |
| **Tablet** | `641px - 768px` | 可能双列布局，水平 padding 减小 |
| **Laptop** | `769px - 1024px` | 主导航可见，多列视图标准 |
| **Desktop** | `1025px - 1280px` | 更多留白，侧边栏可永久可见 |
| **Desktop Large** | `> 1280px` | 主内容容器最大 1440px，两侧 margin 增加 |

### 9.2 从源 CSS 测量的实际 @media 断点

| 断点值 | 媒体查询规则数 |
|--------|---------------|
| `600px` | 7 条 |
| `640px` | 184 条 |
| `768px` | 121 条 |
| `1024px` | 88 条 |
| `1280px` | 40 条 |
| **总计** | **8 个断点，554 条媒体查询规则** |

### 9.3 容器宽度

| 参数 | 值 |
|------|-----|
| 营销页最大宽度 | `1440px` |
| 内容列宽 | `1100px`（居中） |

### 9.4 触摸目标规格

| 参数 | 值 |
|------|-----|
| 最小交互区域 | `32px × 32px` |
| 可点击元素间最小间距 | `8px` |

### 9.5 移动端折叠策略

| 元素 | 移动端行为 |
|------|-----------|
| 导航 | 文字链接折叠为移动菜单图标，主 CTA 保持可见 |
| 卡片 | 单列垂直堆叠 |
| Display 标题 | `64px` → 显著缩小 |
| H1 标题 | `48px` → 显著缩小 |
| Section 水平 Padding | `24px`/`32px` → `16px` |
| 表单 | 输入框和标签垂直堆叠，输入框占满容器宽度 |

---

## 10. 图标系统

### 10.1 已知规格

| 参数 | 值/描述 |
|------|---------|
| 描边风格 | `fill`（填充型为主） |
| 捕获到的图标数量 | 24 个（从页面提取） |
| 图标库 | 未明确（推测为自研 SVG 图标集） |
| 图标与文本间距 | `4px`（gap） |

### 10.2 推测的图标尺寸

基于组件 padding 和间距推断：

| 场景 | 推测尺寸 |
|------|----------|
| 按钮内图标 | `16px × 16px` |
| 导航图标 | `16px × 16px` 或 `20px × 20px` |
| Badge 内图标 | `12px × 12px` |
| 卡片标题图标 | `20px × 20px` |

> **注意**：Linear 的图标系统在源 CSS 中未暴露明确的尺寸令牌。以上尺寸为基于组件布局的合理推断。

---

## 11. 键盘交互规范

### 11.1 全局快捷键（Global）

| 操作 | Mac | Windows |
|------|-----|---------|
| 命令面板 / 搜索 | `⌘K` | `Ctrl+K` |
| 创建新 Issue | `C` | `C` |
| 创建子 Issue | `⌥C` | `Alt+C` |
| 跳转到 Inbox | `G` `I` | `G` `I` |
| 跳转到 My Issues | `G` `M` | `G` `M` |
| 跳转到 All Issues | `G` `A` | `G` `A` |
| 跳转到 Backlog | `G` `B` | `G` `B` |
| 跳转到 Projects | `G` `P` | `G` `P` |
| 跳转到 Roadmap | `G` `R` | `G` `R` |
| 跳转到 Cycles | `G` `C` | `G` `C` |
| 跳转到 Views | `G` `V` | `G` `V` |

### 11.2 Issue 操作快捷键

| 操作 | Mac | Windows |
|------|-----|---------|
| 编辑 Issue 标题 | `E` | `E` |
| 分配给… | `A` | `A` |
| 设置优先级 | `P` | `P` |
| 设置状态 | `S` | `S` |
| 添加标签 | `L` | `L` |
| 设置截止日期 | `D` | `D` |
| 移动到项目 | `⇧P` | `Shift+P` |
| 移动到 Cycle | `⇧C` | `Shift+C` |
| 添加到收藏 | `F` | `F` |
| 复制 Issue | `⌘D` | `Ctrl+D` |
| 删除 Issue | `Delete` | `Backspace` / `Delete` |
| 取消 / 关闭模态框 | `Esc` | `Esc` |

### 11.3 优先级快捷键

| 操作 | 快捷键 |
|------|--------|
| 无优先级 | `0` |
| Urgent | `1` |
| High | `2` |
| Medium | `3` |
| Low | `4` |

### 11.4 视图控制快捷键

| 操作 | Mac | Windows |
|------|-----|---------|
| 切换侧边栏 | `⌘\` | `Ctrl+\` |
| 保存并关闭（模态框中） | `⌘↵` | `Ctrl+Enter` |
| 选择 Issue（列表中） | `X` | `X` |
| 打开 Issue 详情 | `↵` / `O` | `Enter` / `O` |
| 上移焦点 | `K` / `↑` | `K` / `Up` |
| 下移焦点 | `J` / `↓` | `J` / `Down` |
| 切换到看板视图 | `⌘⇧B` | `Ctrl+Shift+B` |
| 切换到列表视图 | `⌘⇧L` | `Ctrl+Shift+L` |

### 11.5 键盘交互设计原则

- **Vim 风格导航**：使用 `J`/`K` 上下移动，遵循 Vim 惯例
- **单键快捷键**：常用操作（C/E/A/P/S/L/D/F）无需修饰键，减少按键次数
- **G 键前缀**：导航类操作使用 `G` + 字母的两步式快捷键（类似 Vim 的 leader key）
- **Cmd+K 命令面板**：核心交互入口，可搜索并执行所有操作
- **所有快捷键可在 Preferences > Keyboard 中自定义**

---

## 12. CSS 变量总表

### 12.1 语义令牌（Semantic Tokens）

```css
:root {
  /* Primary / Accent */
  --color-primary: #5E6AD2;
  --color-accent-indigo: #6366F1;
  --color-accent-purple: #8B5CF6;
  --color-accent-red: #EB5757;

  /* Dark Theme - Surfaces */
  --color-dark-surface: #0F1011;
  --color-dark-surface-secondary: #08090A;

  /* Dark Theme - Text */
  --color-dark-text-primary: #F7F8F8;
  --color-dark-text-secondary: #D0D6E0;
  --color-dark-text-muted: #8A8F98;

  /* Dark Theme - Borders */
  --color-dark-border: #2A2E33;
  --color-dark-border-subtle: #24282C;
  --color-dark-border-hover: #383B3F;

  /* Light Theme */
  --color-background: #FFFFFF;
  --color-text-primary: #62666D;
  --color-border: #E5E5E6;

  /* Typography */
  --font-variations: "opsz" auto;
  --title-1-line-height: 1.4;
  --text-micro-size: 0.75rem;
  --font-size-title1: 2.25rem;

  /* Motion */
  --btn-overlay-shadow-hover: none;
  --zoom-in: default;

  /* Brand */
  --sx-1ijrdvx: #FF8849;
}
```

### 12.2 Tailwind 配置等价物

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#5E6AD2',
        'accent-indigo': '#6366F1',
        'accent-purple': '#8B5CF6',
        'accent-red': '#EB5757',
        'dark-surface': '#0F1011',
        'dark-surface-secondary': '#08090A',
        'dark-text-primary': '#F7F8F8',
        'dark-text-secondary': '#D0D6E0',
        'dark-text-muted': '#8A8F98',
        'dark-border': '#2A2E33',
        'dark-border-subtle': '#24282C',
      },
      fontFamily: {
        display: ['Inter Variable', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Berkeley Mono', 'Menlo', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.1', fontWeight: '590', letterSpacing: '-0.02em' }],
        'h1': ['48px', { lineHeight: '1.1', fontWeight: '590', letterSpacing: '-0.02em' }],
        'h2': ['24px', { lineHeight: '1.2', fontWeight: '510', letterSpacing: '-0.015em' }],
        'h3': ['20px', { lineHeight: '1.4', fontWeight: '510', letterSpacing: '-0.01em' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '-0.011em' }],
        'small': ['13px', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '-0.01em' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '16': '64px',
        '24': '96px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        'full': '9999px',
      },
      transitionDuration: {
        'fast': '100ms',
        'normal': '150ms',
        'slow': '160ms',
        'deliberate': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
        'normal': 'ease',
        'in-out': 'ease-in-out',
      },
      zIndex: {
        'base': '0',
        'content': '1',
        'footer': '50',
        'header': '100',
        'overlay': '5000',
        'modal': '10000',
      },
    },
  },
};
```

---

## 13. WCAG 可访问性

### 13.1 对比度测量结果

| 前景色 | 背景色 | 对比比 | WCAG 级别 |
|--------|--------|--------|-----------|
| `#F7F8F8` | `#08090A` | 18.73:1 | AAA |
| `#D0D6E0` | `#08090A` | 13.64:1 | AAA |
| `#E2E4E7` | `#0F1011` | 14.95:1 | AAA |
| `#8A8F98` | `#08090A` | 6.13:1 | AA |
| `#62666D` | `#0F1011` | 3.3:1 | AA-large（不适用于正常文本） |
| `#62666D` | `#08090A` | 3.45:1 | AA-large |

### 13.2 已知不通过的对

| 前景色 | 背景色 | 对比比 | 失败规则 |
|--------|--------|--------|----------|
| `#6D78D5` | `#232534` | 3.82:1 | AA-normal（正常文本需要 4.5:1） |

### 13.3 焦点可见性

- 焦点环：`0 0 0 3px rgba(94, 106, 210, 0.3)`（3px 宽，30% 不透明度的品牌色）
- 所有交互元素均使用 `:focus` 状态的 box-shadow 焦点环
- `outline: none` 后使用 box-shadow 替代

---

## 附录：数值索引

### 所有字号值
`12px`, `13px`, `14px`, `15px`, `16px`, `17px`, `18px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`

### 所有字重值
`300`, `400`, `510`, `590`

### 所有行高值
`1.1`, `1.2`, `1.4`, `1.5`

### 所有字间距值
`-0.02em`, `-0.015em`, `-0.011em`, `-0.01em`, `normal`

### 所有间距/padding 值
`2px`, `4px`, `6px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `64px`, `96px`

### 所有圆角值
`1px`, `4px`, `6px`, `7px`, `12px`, `16px`, `20px`, `9999px`

### 所有过渡时长
`100ms`, `150ms`, `160ms`, `400ms`

### 所有缓动函数
`ease`, `ease-out`, `ease-in-out`

### 所有 transform 值
`scale(0.97)`, `translateY(-1px)`, `none`

### 所有 filter 值
`brightness(1.2)`, `brightness(120%)`, `brightness(125%)`

### 所有 z-index 值
`0`, `1`, `3`, `10`, `50`, `100`, `5000`, `10000`

### 所有 opacity 值
`0.02`, `0.04`, `0.05`, `0.1`, `0.3`, `0.4`, `0.5`

### 所有断点值
`600px`, `640px`, `768px`, `1024px`, `1280px`, `1440px`

---

*文档生成时间：2026-07-08*
*数据来源：linear.app 生产环境 CSS 提取 + linear.app/brand 官方品牌指南 + shortcutref.com 键盘快捷键 + designlang.app / designmd.cc / designmd.run 多源交叉验证*
