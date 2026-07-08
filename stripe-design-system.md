# Stripe 设计系统完整规范

> 本文档通过抓取 `stripe.com` 和 `docs.stripe.com` 的实际 CSS 样式表和内联样式块提取而来。
> 共提取 **2000+** 个设计令牌，涵盖两个独立设计系统：
> - **HDS (Homepage Design System)** — 用于 `stripe.com` 主站，前缀 `--hds-`
> - **Sail** — 用于 `docs.stripe.com` 文档站，前缀 `--jybopzu-`

---

## 目录

1. [色彩系统](#1-色彩系统)
2. [排版系统](#2-排版系统)
3. [间距系统](#3-间距系统)
4. [圆角规范](#4-圆角规范)
5. [阴影层级](#5-阴影层级)
6. [动效规范](#6-动效规范)
7. [组件规范](#7-组件规范)
8. [响应式断点](#8-响应式断点)
9. [图标系统](#9-图标系统)
10. [Z-Index 层级](#10-z-index-层级)

---

## 1. 色彩系统

### 1.1 HDS 主站色彩系统 (`stripe.com`)

HDS 采用 **双主题** 设计：Light Mode（默认）和 Dark Mode，通过 `.hds-mode--light` / `.hds-mode--dark` 类切换。

#### 1.1.1 Brand 色阶（品牌主色 — 紫色系）

| Token | Hex 值 | 用途 |
|---|---|---|
| `--hds-color-core-brand-25` | `#f5f5ff` | 最浅背景 |
| `--hds-color-core-brand-50` | `#e8e9ff` | quiet 背景 |
| `--hds-color-core-brand-50A` | `#a3a7ff40` | 半透明 quiet 背景 |
| `--hds-color-core-brand-75` | `#e2e4ff` | subdued 背景 |
| `--hds-color-core-brand-100` | `#d6d9fc` | quiet 边框 |
| `--hds-color-core-brand-100A` | `#7680f54d` | 半透明 quiet 边框 |
| `--hds-color-core-brand-200` | `#b9b9f9` | subdued 边框 |
| `--hds-color-core-brand-300` | `#9a9afe` | 中间色 |
| `--hds-color-core-brand-400` | `#7f7dfc` | soft 色调 |
| `--hds-color-core-brand-400A` | `#5452fbbf` | 半透明 soft |
| `--hds-color-core-brand-500` | `#665efd` | soft 强调色 |
| `--hds-color-core-brand-600` | `#533afd` | **主色 (solid)** |
| `--hds-color-core-brand-700` | `#4032c8` | hover 深色 |
| `--hds-color-core-brand-800` | `#2e2b8c` | emphasized 深色 |
| `--hds-color-core-brand-900` | `#1c1e54` | 最深色 |
| `--hds-color-core-brand-925` | `#1c1e54` | |
| `--hds-color-core-brand-950` | `#161741` | |
| `--hds-color-core-brand-975` | `#0f1137` | |

#### 1.1.2 BrandDark 色阶（暗色主题品牌色 — 蓝紫色系）

| Token | Hex 值 |
|---|---|
| `--hds-color-core-brandDark-25` | `#f6f7ff` |
| `--hds-color-core-brandDark-50` | `#e4eaff` |
| `--hds-color-core-brandDark-75` | `#ccdaff` |
| `--hds-color-core-brandDark-100` | `#c3d3ff` |
| `--hds-color-core-brandDark-200` | `#a8bfff` |
| `--hds-color-core-brandDark-300` | `#92adff` |
| `--hds-color-core-brandDark-400` | `#7389ff` |
| `--hds-color-core-brandDark-500` | `#5d64fe` |
| `--hds-color-core-brandDark-600` | `#533afd` |
| `--hds-color-core-brandDark-700` | `#362baa` |
| `--hds-color-core-brandDark-700A` | `#4834dbb2` |
| `--hds-color-core-brandDark-800` | `#2c2484` |
| `--hds-color-core-brandDark-800A` | `#4b31d080` |
| `--hds-color-core-brandDark-900` | `#222069` |
| `--hds-color-core-brandDark-925` | `#1c1b5a` |
| `--hds-color-core-brandDark-925A` | `#582be233` |
| `--hds-color-core-brandDark-950` | `#191a51` |
| `--hds-color-core-brandDark-975` | `#171055` |

#### 1.1.3 Neutral 色阶（中性色 — 浅色主题）

| Token | Hex 值 | 用途 |
|---|---|---|
| `--hds-color-core-neutral-0` | `#fff` | 纯白 |
| `--hds-color-core-neutral-25` | `#f8fafd` | quiet 背景 |
| `--hds-color-core-neutral-25A` | `#1658bc08` | |
| `--hds-color-core-neutral-50` | `#e5edf5` | subdued 背景 / quiet 边框 |
| `--hds-color-core-neutral-50A` | `#a8c3de4d` | 半透明 subdued |
| `--hds-color-core-neutral-100` | `#d4dee9` | soft 背景 / disabled 边框 |
| `--hds-color-core-neutral-200` | `#bac8da` | |
| `--hds-color-core-neutral-200A` | `#7591b580` | |
| `--hds-color-core-neutral-300` | `#95a4ba` | disabled 图标/文字 |
| `--hds-color-core-neutral-400` | `#7d8ba4` | quiet 文字 |
| `--hds-color-core-neutral-500` | `#64748d` | subdued 文字 |
| `--hds-color-core-neutral-600` | `#50617a` | soft 文字 |
| `--hds-color-core-neutral-700` | `#3c4f69` | |
| `--hds-color-core-neutral-800` | `#273951` | solid 边框 |
| `--hds-color-core-neutral-900` | `#1a2c44` | |
| `--hds-color-core-neutral-950` | `#11273e` | |
| `--hds-color-core-neutral-975` | `#0d253d` | |
| `--hds-color-core-neutral-990` | `#061b31` | solid 文字（最深） |

#### 1.1.4 NeutralDark 色阶（中性色 — 暗色主题）

| Token | Hex 值 |
|---|---|
| `--hds-color-core-neutralDark-25` | `#f2f7fe` |
| `--hds-color-core-neutralDark-50` | `#e3ecf7` |
| `--hds-color-core-neutralDark-100` | `#d4deef` |
| `--hds-color-core-neutralDark-200` | `#c0cee6` |
| `--hds-color-core-neutralDark-300` | `#a3b5d6` |
| `--hds-color-core-neutralDark-400` | `#839bc8` |
| `--hds-color-core-neutralDark-500` | `#6480b2` |
| `--hds-color-core-neutralDark-600` | `#45639d` |
| `--hds-color-core-neutralDark-700` | `#273f73` |
| `--hds-color-core-neutralDark-800` | `#23356e` |
| `--hds-color-core-neutralDark-800A` | `#2f458ba6` |
| `--hds-color-core-neutralDark-900` | `#182659` |
| `--hds-color-core-neutralDark-900A` | `#23357a80` |
| `--hds-color-core-neutralDark-950` | `#122054` |
| `--hds-color-core-neutralDark-950A` | `#17297080` |
| `--hds-color-core-neutralDark-975` | `#101d4e` |
| `--hds-color-core-neutralDark-990` | `#0d1738` |

#### 1.1.5 功能色阶

**Error（错误/红色系）**

| Token | Hex 值 |
|---|---|
| `--hds-color-core-error-100` | `#feb9ac` |
| `--hds-color-core-error-400` | `#f3432a` |
| `--hds-color-core-error-500` | `#d8351e` |
| `--hds-color-core-error-600` | `#a01400` |

**Success（成功/绿色系）**

| Token | Hex 值 |
|---|---|
| `--hds-color-core-success-100` | `#b6f2c7` |
| `--hds-color-core-success-400` | `#00b261` |
| `--hds-color-core-success-600` | `#006f3a` |

**Lemon（柠檬黄强调色）**

| Token | Hex 值 |
|---|---|
| `--hds-color-core-lemon-25` | `#fff2d8` |
| `--hds-color-core-lemon-100` | `#ffe1a3` |
| `--hds-color-core-lemon-200` | `#f9b900` |
| `--hds-color-core-lemon-300` | `#e8a30b` |
| `--hds-color-core-lemon-500` | `#9b6829` |
| `--hds-color-core-lemon-800` | `#483414` |

**Magenta（品红强调色）**

| Token | Hex 值 |
|---|---|
| `--hds-color-core-magenta-50` | `#ffe6f5` |
| `--hds-color-core-magenta-100` | `#ffd7ef` |
| `--hds-color-core-magenta-350` | `#f44bcc` |
| `--hds-color-core-magenta-500` | `#cf2cab` |
| `--hds-color-core-magenta-600` | `#a51d85` |
| `--hds-color-core-magenta-800` | `#4f2055` |

**Orange（橙色强调色）**

| Token | Hex 值 |
|---|---|
| `--hds-color-core-orange-50` | `#ffe5da` |
| `--hds-color-core-orange-100` | `#ffd8c6` |
| `--hds-color-core-orange-350` | `#ff6118` |
| `--hds-color-core-orange-500` | `#d04900` |
| `--hds-color-core-orange-600` | `#ab3500` |
| `--hds-color-core-orange-800` | `#56281b` |

**Ruby（宝石红强调色）**

| Token | Hex 值 |
|---|---|
| `--hds-color-core-ruby-50` | `#fee8eb` |
| `--hds-color-core-ruby-100` | `#fed9de` |
| `--hds-color-core-ruby-400` | `#ea2261` |
| `--hds-color-core-ruby-500` | `#e2225f` |
| `--hds-color-core-ruby-600` | `#b51145` |
| `--hds-color-core-ruby-800` | `#5d1c3c` |

#### 1.1.6 语义化 Action 色彩映射

```css
/* 背景色 */
--hds-color-action-bg-solid:          var(--hds-color-core-brand-600);   /* #533afd */
--hds-color-action-bg-solidHover:     var(--hds-color-core-brand-700);   /* #4032c8 */
--hds-color-action-bg-quiet:          var(--hds-color-core-brand-50);    /* #e8e9ff */
--hds-color-action-bg-quietHover:     var(--hds-color-core-brand-100);   /* #d6d9fc */
--hds-color-action-bg-subdued:        var(--hds-color-core-brand-75);    /* #e2e4ff */
--hds-color-action-bg-subduedHover:   var(--hds-color-core-brand-200);   /* #b9b9f9 */
--hds-color-action-bg-disabled:       var(--hds-color-core-neutral-50A);
--hds-color-action-bg-translucent:    #ffffffa6;
--hds-color-action-bg-transparent:    #ffffff00;

/* 边框色 */
--hds-color-action-border-solid:      var(--hds-color-core-brand-600);
--hds-color-action-border-solidHover: var(--hds-color-core-brand-700);
--hds-color-action-border-quiet:      var(--hds-color-core-brand-100);
--hds-color-action-border-subdued:    var(--hds-color-core-brand-200);
--hds-color-action-border-disabled:   var(--hds-color-core-neutral-100);

/* 图标色 */
--hds-color-action-icon-solid:        var(--hds-color-core-brand-600);
--hds-color-action-icon-solidHover:   var(--hds-color-core-brand-800);
--hds-color-action-icon-onSolid:      var(--hds-color-core-neutral-0);   /* 白色 */
--hds-color-action-icon-disabled:     var(--hds-color-core-neutral-300);

/* 文字色 */
--hds-color-action-text-solid:        var(--hds-color-core-brand-600);
--hds-color-action-text-solidHover:   var(--hds-color-core-brand-800);
--hds-color-action-text-onSolid:      var(--hds-color-core-neutral-0);   /* 白色 */
--hds-color-action-text-disabled:     var(--hds-color-core-neutral-300);

/* Focus 环 */
--hds-color-action-focus-outer:       var(--hds-color-core-brand-600);
--hds-color-action-focus-outerSoft:   var(--hds-color-core-brand-400A);
--hds-color-action-focus-outerSubdued: var(--hds-color-core-brand-50A);
```

#### 1.1.7 语义化 Surface & Text 色彩

```css
/* Surface */
--hds-color-surface-bg-quiet:         var(--hds-color-util-white);       /* #fff */
--hds-color-surface-bg-subdued:       var(--hds-color-core-neutral-25);  /* #f8fafd */
--hds-color-surface-border-quiet:     var(--hds-color-core-neutral-50);  /* #e5edf5 */

/* Text */
--hds-color-text-solid:               var(--hds-color-core-neutral-990); /* #061b31 */
--hds-color-text-soft:                var(--hds-color-core-neutral-600); /* #50617a */
--hds-color-text-subdued:             var(--hds-color-core-neutral-500); /* #64748d */
--hds-color-text-quiet:               var(--hds-color-core-neutral-400); /* #7d8ba4 */
```

#### 1.1.8 Accent Color Mode（强调色模式）

Stripe 支持多种 accent 色彩模式，每种模式定义了图标渐变和表面色：

| 模式 | gradientStart | gradientMiddle | gradientEnd |
|---|---|---|---|
| **default** | `--hds-color-core-brand-400` | `--hds-color-core-brand-600` | `--hds-color-core-brand-700` |
| **lemon** | `#ffd552` | `#ffaf2d` | `#ff9014` |
| **magenta** | `#f98bf9` | `#f96bee` | `#b262f9` |
| **orange** | `#fe8c2d` | `#fd6252` | `#fd5d7c` |
| **ruby** | `#fd7184` | `--hds-color-core-ruby-400` | `--hds-color-core-ruby-600` |

---

### 1.2 Sail 文档站色彩系统 (`docs.stripe.com`)

文档站使用 **Sail** 设计系统，采用 **6 大色相** 的 50-950 完整色阶。

#### 1.2.1 Gray 色阶（中性色）

| Token | Hex 值 | 语义映射 |
|---|---|---|
| `--jybopzu-hue-gray0` | `#ffffff` | `neutral0` — 纯白 |
| `--jybopzu-hue-gray50` | `#f6f8fa` | `neutral50` — 容器背景 |
| `--jybopzu-hue-gray100` | `#ebeef1` | `neutral100` |
| `--jybopzu-hue-gray150` | `#d5dbe1` | `neutral150` — 默认边框 |
| `--jybopzu-hue-gray200` | `#c0c8d2` | `neutral200` — disabled 图标 |
| `--jybopzu-hue-gray300` | `#a3acba` | `neutral300` — disabled 文字 |
| `--jybopzu-hue-gray400` | `#87909f` | `neutral400` — 次要图标 |
| `--jybopzu-hue-gray500` | `#687385` | `neutral500` — 次要文字 |
| `--jybopzu-hue-gray600` | `#545969` | `neutral600` — 主要图标 |
| `--jybopzu-hue-gray700` | `#414552` | `neutral700` — 主要文字 |
| `--jybopzu-hue-gray800` | `#30313d` | `neutral800` |
| `--jybopzu-hue-gray900` | `#1a1b25` | `neutral900` |
| `--jybopzu-hue-gray950` | `#10111a` | `neutral950` |

#### 1.2.2 Purple 色阶（品牌色）

| Token | Hex 值 | 语义映射 |
|---|---|---|
| `--jybopzu-hue-purple50` | `#f9f7ff` | `brand50` |
| `--jybopzu-hue-purple100` | `#f2ebff` | `brand100` |
| `--jybopzu-hue-purple150` | `#dfd3fc` | |
| `--jybopzu-hue-purple200` | `#d1befe` | `brand200` |
| `--jybopzu-hue-purple300` | `#b49cfc` | `brand300` |
| `--jybopzu-hue-purple400` | `#8d7ffa` | `brand400` — 品牌图标 |
| `--jybopzu-hue-purple500` | `#625afa` | `brand500` — 品牌文字 |
| `--jybopzu-hue-purple600` | `#513dd9` | `brand600` |
| `--jybopzu-hue-purple700` | `#3f32a1` | `brand700` |
| `--jybopzu-hue-purple800` | `#302476` | `brand800` |
| `--jybopzu-hue-purple900` | `#14134e` | `brand900` |

#### 1.2.3 Blue 色阶（信息色）

| Token | Hex 值 | 语义映射 |
|---|---|---|
| `--jybopzu-hue-blue50` | `#ddfffe` | `info50` |
| `--jybopzu-hue-blue100` | `#cff5f6` | `info100` |
| `--jybopzu-hue-blue150` | `#a2e5ef` | |
| `--jybopzu-hue-blue200` | `#75d5e8` | `info200` |
| `--jybopzu-hue-blue300` | `#06b9ef` | `info300` |
| `--jybopzu-hue-blue400` | `#0096eb` | `info400` — 信息图标 |
| `--jybopzu-hue-blue500` | `#0570de` | `info500` — 信息文字 |
| `--jybopzu-hue-blue600` | `#0055bc` | `info600` |
| `--jybopzu-hue-blue700` | `#04438c` | `info700` |
| `--jybopzu-hue-blue800` | `#003262` | `info800` |
| `--jybopzu-hue-blue900` | `#011c3a` | `info900` |

#### 1.2.4 Green 色阶（成功色）

| Token | Hex 值 | 语义映射 |
|---|---|---|
| `--jybopzu-hue-green50` | `#ecfed7` | `success50` |
| `--jybopzu-hue-green100` | `#d7f7c2` | `success100` |
| `--jybopzu-hue-green150` | `#a6eb84` | |
| `--jybopzu-hue-green200` | `#76df47` | `success200` |
| `--jybopzu-hue-green300` | `#48c404` | `success300` |
| `--jybopzu-hue-green400` | `#3fa40d` | `success400` — 成功图标 |
| `--jybopzu-hue-green500` | `#228403` | `success500` — 成功文字 |
| `--jybopzu-hue-green600` | `#006908` | `success600` |
| `--jybopzu-hue-green700` | `#0b5019` | `success700` |
| `--jybopzu-hue-green800` | `#043b15` | `success800` |
| `--jybopzu-hue-green900` | `#02220d` | `success900` |

#### 1.2.5 Orange 色阶（注意色）

| Token | Hex 值 | 语义映射 |
|---|---|---|
| `--jybopzu-hue-orange50` | `#fef9da` | `attention50` |
| `--jybopzu-hue-orange100` | `#fcedb9` | `attention100` |
| `--jybopzu-hue-orange150` | `#fcd579` | |
| `--jybopzu-hue-orange200` | `#fcbd3a` | `attention200` |
| `--jybopzu-hue-orange300` | `#ff8f0e` | `attention300` |
| `--jybopzu-hue-orange400` | `#ed6704` | `attention400` — 注意图标 |
| `--jybopzu-hue-orange500` | `#c84801` | `attention500` — 注意文字 |
| `--jybopzu-hue-orange600` | `#a82c00` | `attention600` |
| `--jybopzu-hue-orange700` | `#842106` | `attention700` |
| `--jybopzu-hue-orange800` | `#5f1a05` | `attention800` |
| `--jybopzu-hue-orange900` | `#331302` | `attention900` |

#### 1.2.6 Red 色阶（危险色）

| Token | Hex 值 | 语义映射 |
|---|---|---|
| `--jybopzu-hue-red50` | `#fff5fa` | `critical50` |
| `--jybopzu-hue-red100` | `#ffe7f2` | `critical100` |
| `--jybopzu-hue-red150` | `#ffccdf` | |
| `--jybopzu-hue-red200` | `#ffb1cd` | `critical200` |
| `--jybopzu-hue-red300` | `#fe87a1` | `critical300` |
| `--jybopzu-hue-red400` | `#fc526a` | `critical400` — 危险图标 |
| `--jybopzu-hue-red500` | `#df1b41` | `critical500` — 危险文字/边框 |
| `--jybopzu-hue-red600` | `#b3093c` | `critical600` |
| `--jybopzu-hue-red700` | `#890d37` | `critical700` |
| `--jybopzu-hue-red800` | `#68052b` | `critical800` |
| `--jybopzu-hue-red900` | `#3e021a` | `critical900` |

#### 1.2.7 语义化映射

```css
/* 背景色 */
--jybopzu-backgroundColor-container: var(--jybopzu-color-neutral50);   /* #f6f8fa */
--jybopzu-backgroundColor-surface:   var(--jybopzu-color-neutral0);    /* #ffffff */

/* 边框色 */
--jybopzu-borderColor-neutral:       var(--jybopzu-color-neutral150);  /* #d5dbe1 */
--jybopzu-borderColor-critical:      var(--jybopzu-color-critical500); /* #df1b41 */

/* 文字色 */
--jybopzu-textColor-primary:         var(--jybopzu-color-neutral700);  /* #414552 */
--jybopzu-textColor-secondary:       var(--jybopzu-color-neutral500);  /* #687385 */
--jybopzu-textColor-disabled:        var(--jybopzu-color-neutral300);  /* #a3acba */
--jybopzu-textColor-brand:           var(--jybopzu-color-brand500);    /* #625afa */
--jybopzu-textColor-critical:        var(--jybopzu-color-critical500); /* #df1b41 */
--jybopzu-textColor-success:         var(--jybopzu-color-success500);  /* #228403 */
--jybopzu-textColor-info:            var(--jybopzu-color-info500);     /* #0570de */
--jybopzu-textColor-attention:       var(--jybopzu-color-attention500); /* #c84801 */

/* 图标色 */
--jybopzu-iconColor-primary:         var(--jybopzu-color-neutral600);  /* #545969 */
--jybopzu-iconColor-secondary:       var(--jybopzu-color-neutral400);  /* #87909f */
--jybopzu-iconColor-disabled:        var(--jybopzu-color-neutral200);  /* #c0c8d2 */
--jybopzu-iconColor-brand:           var(--jybopzu-color-brand400);    /* #8d7ffa */
--jybopzu-iconColor-critical:        var(--jybopzu-color-critical400); /* #fc526a */
--jybopzu-iconColor-success:         var(--jybopzu-color-success400);  /* #3fa40d */
--jybopzu-iconColor-info:            var(--jybopzu-color-info400);     /* #0096eb */
--jybopzu-iconColor-attention:       var(--jybopzu-color-attention400); /* #ed6704 */
```

---

## 2. 排版系统

### 2.1 HDS 主站排版 (`stripe.com`)

#### 2.1.1 字体族

```css
--hds-font-family:      "sohne-var", "SF Pro Display", sans-serif;
--hds-font-family-code: "SourceCodePro", "SFMono-Regular", monospace;
--fontFamily:           sohne-var, "Helvetica Neue", Arial, sans-serif;
```

> **主字体**: `sohne-var` — Stripe 定制的可变字体，fallback 为 SF Pro Display
> **代码字体**: `SourceCodePro`，fallback 为 SFMono-Regular

#### 2.1.2 字重

```css
--hds-font-weight-normal: 300;   /* 常规 */
--hds-font-weight-bold:   400;   /* 加粗（注意: HDS 中 bold=400） */
```

#### 2.1.3 Heading 排版阶梯

| 级别 | size | lineHeight | weight | letterSpacing |
|---|---|---|---|---|
| `heading-xxs` | `0.875rem` (14px) | `1.2` | `400` | `0em` |
| `heading-xs` | `1rem` (16px) | `1.2` | `400` | `0em` |
| `heading-sm` | `1.125rem` (18px) | `1.25` | `300` | `0em` |
| `heading-md` | `1.25rem` (20px) | `1.2` | `300` | `-0.01em` |
| `heading-lg` | `1.375rem` (22px) | `1.2` | `300` | `-0.01em` |
| `heading-xl` | `1.75rem` (28px) | `1.07` | `300` | `-0.01em` |
| `heading-xxl` | `2.125rem` (34px) | `1.03` | `300` | `-0.02em` |
| `hero-sm` | `1.625rem` (26px) | `1.12` | `300` | `-0.01em` |
| `hero-md` | `1.625rem` (26px) | `1.12` | `300` | `-0.01em` |
| `hero-lg` | `1.75rem` (28px) | `1.1` | `300` | `-0.01em` |

#### 2.1.4 Body Text 排版阶梯

| 级别 | size | lineHeight | weight | letterSpacing |
|---|---|---|---|---|
| `text-xxs` | `0.75rem` (12px) | `1.45` | `300` | `0em` |
| `text-xs` | `0.75rem` (12px) | `1.45` | `300` | `0em` |
| `text-sm` | `0.875rem` (14px) | `1.4` | `300` | `0em` |
| `text-md` | `1rem` (16px) | `1.4` | `300` | `0em` |
| `text-lg` | `1rem` (16px) | `1.35` | `300` | `0em` |
| `text-xl` | `1.125rem` (18px) | `1.4` | `300` | `0em` |
| `text-xxl` | `1.75rem` (28px) | `1.07` | `300` | `-0.01em` |

#### 2.1.5 Quote 排版

| 级别 | size | lineHeight | weight | letterSpacing |
|---|---|---|---|---|
| `quote-md` | `1.125rem` (18px) | `1.4` | `300` | `0em` |
| `quoteAttribution-md` | `1rem` (16px) | `1.35` | `300` | `0em` |

#### 2.1.6 Input 排版

| 级别 | size | lineHeight | weight | letterSpacing |
|---|---|---|---|---|
| `input-text-sm` | `0.75rem` (12px) | `1.35` | `300` | `0px` |
| `input-text-md` | `0.875rem` (14px) | `1.05` | `300` | `0px` |
| `input-text-lg` | `1rem` (16px) | `1` | `300` | `0px` |
| `input-text-lgTextarea` | `1rem` (16px) | `1.4` | `300` | `0px` |
| `input-label-sm` | `0.75rem` (12px) | `1.35` | `400` | `0px` |
| `input-label-md` | `0.875rem` (14px) | `1.3` | `400` | `0px` |
| `input-label-lg` | `1rem` (16px) | `1.2` | `400` | `0px` |
| `input-description` | `0.875rem` (14px) | `1.3` | `300` | `0px` |
| `input-groupHeading` | `0.75rem` (12px) | `1.35` | `300` | `0px` |

---

### 2.2 Sail 文档站排版 (`docs.stripe.com`)

#### 2.2.1 字体族

```css
--jybopzu-typeface-ui:         -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
--jybopzu-typeface-monospace:  'Source Code Pro', Menlo, Monaco, monospace;
```

> 文档站使用 **系统字体栈** 而非 sohne-var，代码块使用 **Source Code Pro**。

#### 2.2.2 字重

```css
--jybopzu-weight-regular: 400;
--jybopzu-weight-semibold: 600;
--jybopzu-weight-bold: 700;
```

#### 2.2.3 字号使用

文档站中实际使用的 `font-size` 值：

| 值 | 用途推断 |
|---|---|
| `12px` | 小文本/标签 |
| `14px` | 正文（主要） |
| `16px` | 大文本 |
| `18px` | 强调文本 |
| `32px` | 页面标题 |

#### 2.2.4 行高

| 值 |
|---|
| `14px` |
| `20px` |
| `24px` |
| `28px` |
| `40px` |

---

## 3. 间距系统

### 3.1 HDS 主站间距 (`stripe.com`)

HDS 使用 **Core Spacing Scale**，从 0 到 2500，单位为 `px`：

#### 3.1.1 基础间距阶梯

| Token | 值 | 常见用途 |
|---|---|---|
| `--hds-space-core-0` | `0px` | 无间距 |
| `--hds-space-core-1` | `1px` | 细线 |
| `--hds-space-core-25` | `2px` | 极小间距 |
| `--hds-space-core-50` | `4px` | 小间距 |
| `--hds-space-core-75` | `6px` | |
| `--hds-space-core-100` | `8px` | **基准间距** |
| `--hds-space-core-150` | `12px` | 紧凑间距 |
| `--hds-space-core-200` | `16px` | **默认间距** |
| `--hds-space-core-250` | `20px` | |
| `--hds-space-core-300` | `24px` | 中等间距 |
| `--hds-space-core-350` | `28px` | |
| `--hds-space-core-400` | `32px` | 大间距 |
| `--hds-space-core-450` | `36px` | |
| `--hds-space-core-500` | `40px` | |
| `--hds-space-core-550` | `44px` | **按钮高度** |
| `--hds-space-core-600` | `48px` | |
| `--hds-space-core-700` | `56px` | section 间距 |
| `--hds-space-core-800` | `64px` | |
| `--hds-space-core-900` | `72px` | |
| `--hds-space-core-1000` | `80px` | |
| `--hds-space-core-1100` | `88px` | |
| `--hds-space-core-1200` | `96px` | |
| `--hds-space-core-1300` | `104px` | |
| `--hds-space-core-1400` | `112px` | |
| `--hds-space-core-1500` | `120px` | |
| `--hds-space-core-1600` | `128px` | |
| `--hds-space-core-1700` | `136px` | |
| `--hds-space-core-1800` | `144px` | |
| `--hds-space-core-1900` | `152px` | |
| `--hds-space-core-2000` | `160px` | |
| `--hds-space-core-2100` | `168px` | |
| `--hds-space-core-2200` | `176px` | |
| `--hds-space-core-2300` | `184px` | |
| `--hds-space-core-2400` | `192px` | |
| `--hds-space-core-2500` | `200px` | |

#### 3.1.2 边框宽度

| Token | 值 |
|---|---|
| `--hds-space-core-border-none` | `0px` |
| `--hds-space-core-border-sm` | `1px` |
| `--hds-space-core-border-md` | `1.25px` |
| `--hds-space-core-border-lg` | `2px` |

#### 3.1.3 布局间距

```css
--hds-space-layout-columns:          4;                          /* 移动端默认列数 */
--hds-space-layout-content-margin:   var(--hds-space-core-200);  /* 16px */
--hds-space-layout-gap:              var(--hds-space-core-200);  /* 16px */
--hds-space-layout-page-margin:      var(--hds-space-core-0);    /* 0px */
```

#### 3.1.4 组件间距

```css
/* Button */
--hds-space-button-height:           var(--hds-space-core-550);  /* 44px */
--hds-space-button-border:           1px;
--hds-space-button-radius-lg:        var(--hds-space-core-radius-sm);  /* 4px */
--hds-space-button-radius-sm:        var(--hds-space-core-radius-xs);  /* 2px */

/* Input */
--hds-space-input-minHeight:         var(--hds-space-button-height);   /* 44px */
--hds-space-input-border-default:    1px;
--hds-space-input-focus-outline-offset: 1px;
--hds-space-input-focus-shadowOuter: 4px;
--hds-space-input-focus-shadowSingle: 2px;
--hds-space-input-gap-labelVertical: var(--hds-space-core-100);  /* 8px */
--hds-space-input-gap-errorMessage:  var(--hds-space-core-50);   /* 4px */
--hds-space-input-popover-width:     240px;

/* Input padding (by size) */
--hds-space-input-text-paddingX-sm:      10px;
--hds-space-input-text-paddingX-md:      13px;
--hds-space-input-text-paddingX-lg:      16px;
--hds-space-input-text-paddingX-listbox: 12px;
--hds-space-input-text-paddingY-sm:      8px;
--hds-space-input-text-paddingY-md:      10px;
--hds-space-input-text-paddingY-lg:      12px;
--hds-space-input-text-paddingY-listbox: 8px;

/* Layered Input */
--hds-space-input-layered-gap:           24px;
--hds-space-input-layered-input-maxWidth:  360px;
--hds-space-input-layered-input-minWidth:  300px;
--hds-space-input-layered-label-maxWidth:  196px;
--hds-space-input-layered-label-minWidth:  120px;

/* Section */
--hds-space-section-gap-top:    var(--hds-space-core-700);  /* 56px */
--hds-space-section-gap-bottom: var(--hds-space-core-700);  /* 56px */

/* Block */
--hds-space-block-column-gap:     var(--hds-space-layout-gap);   /* 16px */
--hds-space-block-stack-gap-md:   var(--hds-space-layout-gap);   /* 16px */
--hds-space-block-stack-gap-lg:   var(--hds-space-core-600);     /* 48px */
--hds-space-block-stack-gap-xl:   var(--hds-space-core-800);     /* 64px */

/* Dialog */
--hds-dialog-padding-inline: var(--hds-space-core-300);  /* 24px */
--hds-dialog-pbs:            var(--hds-space-core-700);  /* 56px */
--hds-dialog-blur-height:    30px;

/* Navigation */
--navigation-height:              76px;
--navigation-content-padding:     var(--hds-space-core-300);  /* 24px */
--navigation-menu-footer-height:  80px;
```

---

### 3.2 Sail 文档站间距 (`docs.stripe.com`)

```css
/* 基础间距阶梯 */
--jybopzu-space-0:    0px;
--jybopzu-space-1:    1px;
--jybopzu-space-25:   2px;
--jybopzu-space-50:   4px;
--jybopzu-space-75:   6px;
--jybopzu-space-100:  8px;
--jybopzu-space-150:  12px;
--jybopzu-space-200:  16px;
--jybopzu-space-250:  20px;
--jybopzu-space-300:  24px;
--jybopzu-space-350:  28px;
--jybopzu-space-400:  32px;
--jybopzu-space-500:  40px;
--jybopzu-space-600:  48px;

/* 语义化间距映射 */
--jybopzu-space-xxsmall:  var(--jybopzu-space-25);   /* 2px */
--jybopzu-space-xsmall:   var(--jybopzu-space-50);   /* 4px */
--jybopzu-space-small:    var(--jybopzu-space-100);  /* 8px */
--jybopzu-space-medium:   var(--jybopzu-space-200);  /* 16px */
--jybopzu-space-large:    var(--jybopzu-space-300);  /* 24px */
--jybopzu-space-xlarge:   var(--jybopzu-space-400);  /* 32px */
--jybopzu-space-xxlarge:  var(--jybopzu-space-600);  /* 48px */
```

---

## 4. 圆角规范

### 4.1 HDS 主站 (`stripe.com`)

| Token | 值 | 用途 |
|---|---|---|
| `--hds-space-core-radius-none` | `0px` | 无圆角 |
| `--hds-space-core-radius-xs` | `2px` | 小按钮 (sm) |
| `--hds-space-core-radius-sm` | `4px` | 大按钮 (lg) |
| `--hds-space-core-radius-md` | `6px` | **卡片、输入框** |
| `--hds-space-core-radius-lg` | `16px` | 大容器 |
| `--hds-space-core-radius-xl` | `32px` | 超大容器 |
| `--hds-space-core-radius-round` | `99999px` | 圆形 (pill) |

**组件特定圆角**：
```css
--card-radius:                   var(--hds-space-core-radius-md);  /* 6px */
--card-radius-inner:             5px;
--navigation-border-radius:      0;
--phone-graphic-border-radius-outer: 36px;
```

### 4.2 Sail 文档站 (`docs.stripe.com`)

| Token | 值 | 用途 |
|---|---|---|
| `--jybopzu-radius-none` | `none` | 无圆角 |
| `--jybopzu-radius-xsmall` | `4px` | 极小圆角 |
| `--jybopzu-radius-small` | `4px` | 小圆角 |
| `--jybopzu-radius-medium` | `8px` | 中等圆角 |
| `--jybopzu-radius-large` | `10px` | 大圆角 |
| `--jybopzu-radius-rounded` | `999em` | 全圆角 (pill) |

---

## 5. 阴影层级

### 5.1 HDS 主站阴影 (`stripe.com`)

HDS 阴影系统采用 **双层设计**（top shadow + bottom shadow），营造立体悬浮效果。

#### 完整阴影定义

每个阴影层级由两组阴影组成，颜色使用蓝灰色调 `rgba(0,55,112,x)` 和 `rgba(0,59,137,x)`。

| 层级 | offset-y (top) | blur (top) | spread (top) | offset-y (bottom) | blur (bottom) | spread (bottom) |
|---|---|---|---|---|---|---|
| **xs** | `2px` | `10px` | `0px` | `1px` | `4px` | `0px` |
| **sm** | `5px` | `14px` | `0px` | `2px` | `8px` | `0px` |
| **md** | `6px` | `22px` | `0px` | `4px` | `8px` | `0px` |
| **lg** | `15px` | `40px` | `-2px` | `5px` | `20px` | `-2px` |
| **xl** | `20px` | `80px` | `-16px` | `10px` | `60px` | `-16px` |

#### 阴影颜色

```css
--hds-color-shadow-xs-top:       #0037700f;  /* rgba(0,55,112,0.06) */
--hds-color-shadow-xs-bottom:    #003b890a;  /* rgba(0,59,137,0.04) */
--hds-color-shadow-sm-top:       #00377014;  /* rgba(0,55,112,0.08) */
--hds-color-shadow-sm-bottom:    #003b890d;  /* rgba(0,59,137,0.05) */
--hds-color-shadow-md-top:       #0037701a;  /* rgba(0,55,112,0.10) */
--hds-color-shadow-md-bottom:    #003b8905;  /* rgba(0,59,137,0.02) */
--hds-color-shadow-lg-top:       #0037701a;  /* rgba(0,55,112,0.10) */
--hds-color-shadow-lg-bottom:    #003b890a;  /* rgba(0,59,137,0.04) */
--hds-color-shadow-xl-top:       #00377024;  /* rgba(0,55,112,0.14) */
--hds-color-shadow-xl-bottom:    #003b890f;  /* rgba(0,59,137,0.06) */
```

#### 完整阴影 CSS 值

```css
--hds-shadow-xs:
  0px 2px 10px 0px rgba(0,55,112,0.06),
  0px 1px 4px 0px rgba(0,59,137,0.04);

--hds-shadow-sm:
  0px 5px 14px 0px rgba(0,55,112,0.08),
  0px 2px 8px 0px rgba(0,59,137,0.05);

--hds-shadow-md:
  0px 6px 22px 0px rgba(0,55,112,0.10),
  0px 4px 8px 0px rgba(0,59,137,0.02);

--hds-shadow-lg:
  0px 15px 40px -2px rgba(0,55,112,0.10),
  0px 5px 20px -2px rgba(0,59,137,0.04);

--hds-shadow-xl:
  0px 20px 80px -16px rgba(0,55,112,0.14),
  0px 10px 60px -16px rgba(0,59,137,0.06);
```

#### 额外阴影

```css
/* Popover 阴影 */
--hds-color-shadow-popoverTop:    #27395114;  /* rgba(39,57,81,0.08) */
--hds-color-shadow-popoverBottom: #061b311f;  /* rgba(6,27,49,0.12) */

/* Agentic Commerce 阴影 */
--agentic-box-shadow: 0 20.187px 40.374px -20.187px rgba(0,0,0,0.1);

/* Canary UI 阴影 */
--hds-canary-ui-shadow: 0px 16px 32px rgba(50,50,93,0.12);
```

### 5.2 Sail 文档站阴影 (`docs.stripe.com`)

```css
--jybopzu-shadow-none:    none;
--jybopzu-shadow-top:     rgb(0 0 0 / 12%) 0px 1px 1px 0px;
--jybopzu-shadow-base:    rgb(64 68 82 / 8%) 0px 2px 5px 0px, 0 0 0 0 transparent;
--jybopzu-shadow-hover:   rgb(64 68 82 / 8%) 0px 2px 5px 0px, rgb(64 68 82 / 8%) 0px 3px 9px 0px;
--jybopzu-shadow-focus:   0 0 0 4px rgb(1 150 237 / 36%);

/* 额外在 CSS 中使用的阴影值 */
0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 5px 0px rgba(48, 49, 61, 0.08);
0px 5px 15px 0px rgba(0, 0, 0, 0.12), 0px 15px 35px 0px rgba(48, 49, 61, 0.08);
0px 5px 15px 0px rgba(0, 0, 0, 0.12), 0px 15px 35px 0px rgba(48, 49, 61, 0.08), 0px 50px 100px 0px rgba(48, 49, 61, 0.08);
0px 3px 6px 0px rgba(0, 0, 0, 0.12), 0px 7px 14px 0px rgba(48, 49, 61, 0.08);
```

---

## 6. 动效规范

### 6.1 HDS 主站动效 (`stripe.com`)

#### 6.1.1 Duration（持续时间）

| Token / 值 | 用途 |
|---|---|
| `0ms` | 无动画 |
| `0s` | 无动画（reduce motion） |
| `0.15s` (150ms) | 微交互 |
| `0.2s` (200ms) | 快速过渡 |
| `0.25s` (250ms) | 汉堡菜单 / 导航菜单内容 |
| `0.3s` (300ms) | Dialog overlay |
| `0.4s` (400ms) | 中等过渡 |
| `0.5s` (500ms) | 导航菜单 |
| `0.8s` (800ms) | 卡片动画 |
| `1s` (1000ms) | 时间选择器图标 |
| `1.2s` (1200ms) | 统计区域过渡 |
| `2s` (2000ms) | 开发系统动画 |
| `3.25s` (3250ms) | 连接路径动画 |

#### 6.1.2 Easing（缓动函数）

| Token / 值 | 用途 |
|---|---|
| `cubic-bezier(0.45, 0.05, 0.55, 0.95)` | `--navigation-easing` — 导航 |
| `cubic-bezier(0.25, 1, 0.5, 1)` | `--ease` — 通用缓动 |
| `cubic-bezier(0.165, 0.84, 0.44, 1)` | `--card-ease` — 卡片动画 |
| `cubic-bezier(0.65, 0, 0.35, 1)` | 时间选择器 |
| `cubic-bezier(0.4, 0, 0.2, 1)` | Material 标准缓动 |
| `cubic-bezier(0.3, 0, 0.2, 1)` | Material 减速缓动 |
| `cubic-bezier(0.22, 1, 0.36, 1)` | Dialog |
| `cubic-bezier(0.66, 0, 0.34, 1)` | 连接路径 |
| `cubic-bezier(0.78, 0, 0.22, 1)` | PSP 连接路径 |
| `cubic-bezier(0.9, 0, 0.1, 1)` | 激进缓动 |
| `cubic-bezier(0.2, 0, 0, 1)` | 动画 timing |
| `cubic-bezier(0, 0.09, 0.4, 1)` | 变换动画 |

#### 6.1.3 Keyframe 动画

```
@keyframes agentic-commerce-graphic-border-spin
@keyframes bento-dialog-reveal-fade-in-up
@keyframes bento-overlay-gradient-opacity-animation
@keyframes book-of-the-week-fade-in
@keyframes detect-scroll
@keyframes nav-hover-arrow-in
@keyframes nav-hover-arrow-out
@keyframes navigation-menu-delay-reset
@keyframes opacityAnimation
```

#### 6.1.4 Navigation 动效

```css
--navigation-duration:           240ms;
--navigation-duration-slow:      300ms;
--navigation-easing:             cubic-bezier(0.45, 0.05, 0.55, 0.95);
--navigation-hamburger-duration: 0.25s;
--navigation-menu-transition-delay: 0.1s;
```

#### 6.1.5 无障碍动效

```css
@media (prefers-reduced-motion: reduce) {
  /* 统计区域过渡设为 0s */
  --stats-section-transition-duration: 0s;
}

@media (prefers-reduced-motion: no-preference) {
  /* 仅在用户不偏好减少动效时启用动画 */
}
```

### 6.2 Sail 文档站动效 (`docs.stripe.com`)

```css
/* Duration */
50ms     /* 极快微交互 */
80ms     /* 快速微交互 */
150ms    /* 标准微交互 */
240ms    /* box-shadow 过渡 */
300ms    /* 通用过渡 */
500ms    /* 较慢过渡 */

/* Easing */
cubic-bezier(0, 0, 0.4, 1)       /* 输入缓动 */
cubic-bezier(0, 0.09, 0.4, 1)    /* 变换缓动 */
cubic-bezier(0.4, 0, 1, 1)       /* 加速缓动 */
ease-in-out                        /* 通用 */
ease-out                           /* 透明度过渡 */

/* Transition 示例 */
transition: 0.2s ease-out opacity;
transition: 150ms ease-in-out;
transition: box-shadow 240ms;
transition: transform 0.12s cubic-bezier(0, 0.09, 0.4, 1);
```

---

## 7. 组件规范

### 7.1 Button 组件

#### 7.1.1 尺寸

```css
--hds-space-button-height:     var(--hds-space-core-550);  /* 44px — 标准高度 */
--hds-button-border-width:     1px;
--hds-button-padding-block-start: 15.5px;
--hds-button-padding-block-end:   16.5px;
```

#### 7.1.2 圆角

```css
--hds-space-button-radius-sm: var(--hds-space-core-radius-xs);  /* 2px */
--hds-space-button-radius-lg: var(--hds-space-core-radius-sm);  /* 4px */
```

#### 7.1.3 Primary Button 色彩

```css
--hds-color-button-primary-bg:           var(--hds-color-action-bg-solid);        /* #533afd */
--hds-color-button-primary-bgHover:      var(--hds-color-action-bg-solidHover);   /* #4032c8 */
--hds-color-button-primary-bgDisabled:   var(--hds-color-action-bg-disabled);
--hds-color-button-primary-text:         var(--hds-color-action-text-onSolid);    /* #fff */
--hds-color-button-primary-textHover:    var(--hds-color-action-text-onSolid);    /* #fff */
--hds-color-button-primary-textDisabled: var(--hds-color-action-text-disabled);
--hds-color-button-primary-icon:         var(--hds-color-util-white);             /* #fff */
--hds-color-button-primary-iconHover:    var(--hds-color-util-white);             /* #fff */
--hds-color-button-primary-iconDisabled: var(--hds-color-action-icon-disabled);
```

#### 7.1.4 Secondary Button 色彩

```css
--hds-color-button-secondary-bg:              transparent;
--hds-color-button-secondary-bgHover:          transparent;
--hds-color-button-secondary-border:           var(--hds-color-action-border-quiet);     /* brand-100 */
--hds-color-button-secondary-borderHover:      var(--hds-color-action-border-solidHover); /* brand-700 */
--hds-color-button-secondary-borderDisabled:   var(--hds-color-action-border-disabled);
--hds-color-button-secondary-borderOnSubdued:  var(--hds-color-action-border-subdued);   /* brand-200 */
--hds-color-button-secondary-text:             var(--hds-color-action-text-solidAlternate);
--hds-color-button-secondary-textHover:        var(--hds-color-action-text-solidHover);
--hds-color-button-secondary-textDisabled:     var(--hds-color-action-text-disabled);
--hds-color-button-secondary-icon:             var(--hds-color-action-icon-solid);
--hds-color-button-secondary-iconHover:        var(--hds-color-action-icon-solidHover);
```

#### 7.1.5 UI Button 色彩

```css
--hds-color-button-ui-bg:                var(--hds-color-action-bg-quiet);        /* brand-50 */
--hds-color-button-ui-bgHover:           var(--hds-color-action-bg-quietHover);   /* brand-100 */
--hds-color-button-ui-bgOnSubdued:       var(--hds-color-action-bg-subdued);      /* brand-75 */
--hds-color-button-ui-bgOnSubduedHover:  var(--hds-color-action-bg-subduedHover); /* brand-200 */
--hds-color-button-ui-borderDisabled:    var(--hds-color-action-border-disabled);
--hds-color-button-ui-icon:              var(--hds-color-action-icon-solid);
--hds-color-button-ui-iconHover:         var(--hds-color-action-icon-solidHover);
--hds-color-button-ui-iconDisabled:      var(--hds-color-action-icon-disabled);
```

#### 7.1.6 Button 动效

```css
transition-duration: 0.3s;
transition-timing-function: cubic-bezier(0.3, 0, 0.2, 1);
```

---

### 7.2 Input 组件

#### 7.2.1 尺寸

```css
--hds-space-input-minHeight:              var(--hds-space-button-height);  /* 44px */
--hds-space-input-border-default:         1px;
--hds-space-input-focus-outline-offset:   1px;
--hds-space-input-focus-shadowSingle:     2px;
--hds-space-input-focus-shadowOuter:      4px;
--hds-space-input-popover-width:          240px;
```

#### 7.2.2 Padding（按尺寸）

| 尺寸 | paddingX | paddingY |
|---|---|---|
| sm | 10px | 8px |
| md | 13px | 10px |
| lg | 16px | 12px |
| listbox | 12px | 8px |

#### 7.2.3 背景色

```css
--hds-color-input-bg-default:   #ffffff40;                    /* 25% 透明 */
--hds-color-input-bg-hover:     var(--hds-color-core-brand-25);
--hds-color-input-bg-focus:     #ffffff80;                    /* 50% 透明 */
--hds-color-input-bg-solid:     var(--hds-color-core-neutral-0);  /* #fff */
--hds-color-input-bg-quiet:     var(--hds-color-core-neutral-100);
--hds-color-input-bg-disabled:  var(--hds-color-core-neutral-50A);
--hds-color-input-bg-inactive:  #d4dee9bf;
--hds-color-input-bg-accent:    var(--hds-color-core-brand-600);
```

#### 7.2.4 边框色

```css
--hds-color-input-border-default:  #d4dee9bf;
--hds-color-input-border-hover:    var(--hds-color-core-brand-500);
--hds-color-input-border-focus:    #d4dee9bf;
--hds-color-input-border-accent:   var(--hds-color-core-brand-600);
--hds-color-input-border-selected: var(--hds-color-core-brand-500);
--hds-color-input-border-error:    var(--hds-color-core-error-500);
--hds-color-input-border-disabled: var(--hds-color-core-neutral-100);
--hds-color-input-border-option:   var(--hds-color-core-neutral-400);
```

#### 7.2.5 文字色

```css
--hds-color-input-text-solid:       var(--hds-color-core-neutral-800);  /* #273951 */
--hds-color-input-text-label:       var(--hds-color-core-neutral-800);
--hds-color-input-text-placeholder: var(--hds-color-core-neutral-400);  /* #7d8ba4 */
--hds-color-input-text-disabled:    var(--hds-color-core-neutral-300);
--hds-color-input-text-error:       var(--hds-color-core-error-500);
--hds-color-input-text-selected:    var(--hds-color-core-neutral-800);
--hds-color-input-text-popover:     var(--hds-color-core-neutral-800);
```

#### 7.2.6 Selector 组件

```css
--hds-color-input-selector-bg-available:       transparent;
--hds-color-input-selector-bg-availableHover:  var(--hds-color-core-brand-100);
--hds-color-input-selector-bg-selected:        var(--hds-color-core-brand-600);
--hds-color-input-selector-bg-selectedHover:   var(--hds-color-core-brand-700);
--hds-color-input-selector-bg-range:           var(--hds-color-core-brand-50);
--hds-color-input-selector-bg-disabled:        var(--hds-color-core-neutral-50A);
```

#### 7.2.7 Tile 选择器

```css
--hds-color-input-tile-bg-selected:       var(--hds-color-core-brand-25A);
--hds-color-input-tile-border-selected:   var(--hds-color-core-brand-400);
--hds-color-input-tile-border-hover:      var(--hds-color-core-brand-600);
--hds-color-input-tile-border-pressed:    var(--hds-color-core-brand-800);
```

---

### 7.3 Card 组件

```css
--card-radius:        var(--hds-space-core-radius-md);  /* 6px */
--card-radius-inner:  5px;
--cardBackground:     #fff;
--card-duration:      800ms;
--card-ease:          cubic-bezier(0.165, 0.84, 0.44, 1);
--card-scale:         1;
--card-mobile-scale-factor: 0.05;
--card-mobile-gap-inset:    7px;
```

#### Carousel Card

```css
--carousel-card-width: clamp(240px, 30.38cqi, 384px);
--carousel-gap:        var(--hds-space-core-200);  /* 16px */
--carousel-gutter:     var(--hds-space-layout-content-margin);
```

---

### 7.4 Badge / Charm 组件

```css
--hds-color-accent-charm-bg:             var(--hds-color-action-bg-solid);
--hds-color-accent-charm-gradientStart:  var(--hds-color-accentColorMode-default-icon-gradientStart);
--hds-color-accent-charm-gradientMiddle: var(--hds-color-accentColorMode-default-icon-gradientMiddle);
--hds-color-accent-charm-gradientEnd:    var(--hds-color-accentColorMode-default-icon-gradientEnd);
```

---

### 7.5 Dialog / Modal 组件

```css
--hds-dialog-padding-inline:  var(--hds-space-core-300);  /* 24px */
--hds-dialog-pbs:             var(--hds-space-core-700);  /* 56px */
--hds-dialog-blur-height:     30px;
--hds-overlay-alpha:          0.9;

/* Dialog 动效 */
transition-duration: 0.3s;
transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
/* close 状态: transform: translateY(100px) */
/* overlay: 0.3s 透明度过渡 */
```

---

### 7.6 Navigation 组件

```css
--navigation-height:              76px;
--navigation-content-padding:     var(--hds-space-core-300);  /* 24px */
--navigation-inline-start:        var(--hds-space-layout-content-margin);
--navigation-menu-footer-height:  80px;
--navigation-border-radius:       0;
--navigation-duration:            240ms;
--navigation-duration-slow:       300ms;
--navigation-easing:              cubic-bezier(0.45, 0.05, 0.55, 0.95);
--navigation-hamburger-duration:  0.25s;
--navigation-menu-transition-delay: 0.1s;
```

---

## 8. 响应式断点

### 8.1 HDS 主站断点 (`stripe.com`)

HDS 使用 **min-width** 和 **max-width** 媒体查询，主要断点如下：

| 断点 | 值 | 类型 |
|---|---|---|
| **Mobile** | `max-width: 639px` / `max-width: 639.9999px` | 最大宽度 |
| **Small** | `min-width: 400px` | 最小宽度 |
| **Small** | `min-width: 480px` | 最小宽度 |
| **Tablet** | `min-width: 600px` | 最小宽度 |
| **Tablet** | `max-width: 706px` | 最大宽度 |
| **Tablet-L** | `min-width: 640px` | 最小宽度 |
| **Tablet-L** | `max-width: 939px` / `max-width: 939.9999px` | 最大宽度 |
| **Desktop** | `min-width: 940px` | 最小宽度 |
| **Desktop** | `min-width: 970px` | 最小宽度 |
| **Desktop** | `min-width: 1051px` | 最小宽度 |
| **Large** | `min-width: 1115px` | 最小宽度 |
| **Large** | `min-width: 1264px` | 最小宽度 |
| **XL** | `min-width: 1300px` | 最小宽度 |

#### 关键断点分组

```
Mobile:     max-width: 639px          (< 640px)
Tablet:     640px – 939px             (min-width: 640px and max-width: 939px)
Desktop:    min-width: 940px           (≥ 940px)
Large:      min-width: 1300px          (≥ 1300px)
```

#### 特殊媒体查询

```css
@media (hover: hover)                              /* 支持悬停设备 */
@media (hover: none), (pointer: coarse)            /* 触摸设备 */
@media (pointer: fine)                             /* 精确指针设备 */
@media (prefers-reduced-motion: reduce)            /* 减少动效偏好 */
@media (prefers-reduced-motion: no-preference)     /* 正常动效 */
@media (color-gamut: p3)                           /* 广色域显示 */
@media (min-resolution: 2x)                        /* Retina 屏幕 */
@media (max-resolution: 1x)                        /* 标准分辨率 */
@media (max-height: 700px)                         /* 短屏 */
```

#### Container Queries

```css
@container developer-systems (min-width: 600px)
@container developer-systems (min-width: 882px)
@container feature-detail (min-width: 248px)
@container feature-detail (min-width: 264px)
@container feature-detail (min-width: 504px)
@container sessions-banner (min-width: 400px)
@container startups-program-card (max-width: 410px)
@container startups-program-card (max-width: 520px)
@container startups-program-card (min-width: 360px)
@container startups-program-card (min-width: 568px)
@container startups-program-card (min-width: 680px)
```

### 8.2 Sail 文档站断点 (`docs.stripe.com`)

```css
@media (max-width: 800px)                    /* 移动端 */
@media (max-width: calc(800px - 0.1px))      /* 移动端（精确） */
@media (min-width: 1000px)                    /* 桌面端 */
@media (min-width: 1001px)                    /* 大桌面端 */
```

**主要断点**：
- **Mobile**: `< 800px`
- **Desktop**: `≥ 1000px`
- **Large Desktop**: `≥ 1001px`

---

## 9. 图标系统

### 9.1 HDS 主站图标系统

HDS 图标系统通过 **accent color mode** 机制支持多色渐变图标：

```css
/* 图标渐变定义 */
--icon-gradient-start:   var(--hds-color-accent-charm-gradientStart);
--icon-gradient-middle:  var(--hds-color-accent-charm-gradientMiddle);

/* 图标纯色 */
--hds-color-accent-icon-solid:    var(--hds-color-action-icon-solid);
--hds-color-accent-icon-solidAlt: var(--hds-color-accentColorMode-default-icon-solidAlt);

/* Action 图标色 */
--hds-color-action-icon-solid:           var(--hds-color-core-brand-600);
--hds-color-action-icon-solidHover:      var(--hds-color-core-brand-800);
--hds-color-action-icon-onSolid:         var(--hds-color-core-neutral-0);
--hds-color-action-icon-disabled:        var(--hds-color-core-neutral-300);
--hds-color-action-icon-navigation-solid:    var(--hds-color-core-neutral-990);
--hds-color-action-icon-navigation-soft:     var(--hds-color-core-neutral-600);
--hds-color-action-icon-navigation-subdued:  var(--hds-color-core-neutral-500);
```

### 9.2 Sail 文档站图标系统

```css
--jybopzu-iconColor-primary:    var(--jybopzu-color-neutral600);   /* #545969 */
--jybopzu-iconColor-secondary:  var(--jybopzu-color-neutral400);   /* #87909f */
--jybopzu-iconColor-disabled:   var(--jybopzu-color-neutral200);   /* #c0c8d2 */
--jybopzu-iconColor-brand:      var(--jybopzu-color-brand400);     /* #8d7ffa */
--jybopzu-iconColor-critical:   var(--jybopzu-color-critical400);  /* #fc526a */
--jybopzu-iconColor-success:    var(--jybopzu-color-success400);   /* #3fa40d */
--jybopzu-iconColor-info:       var(--jybopzu-color-info400);      /* #0096eb */
--jybopzu-iconColor-attention:  var(--jybopzu-color-attention400); /* #ed6704 */
```

### 9.3 图标尺寸

```css
--flag-icon-size: 21px;        /* 国旗图标 */
--icon-size: 16px;             /* 标准图标（推测） */
```

---

## 10. Z-Index 层级

### 10.1 Sail 文档站 Z-Index

```css
--jybopzu-zIndex-overlay: 299;   /* 遮罩层 */
--jybopzu-zIndex-partial: 400;   /* 部分面板 */
```

CSS 中使用的其他 z-index 值：`0`, `1`, `10`, `9999`

### 10.2 HDS 主站其他层级值

在 CSS 中发现的其他 z-index 值（通过引用解析）：
- `1980` — 某些 UI 元素
- `2048` — 高层级元素
- `1078` — 中间层级
- `1120` — 中间层级
- `1493` — 导航相关
- `1443` — 导航相关
- `1556` — 导航相关
- `120` — 低层级

---

## 附录 A: 完整设计令牌统计

| 系统 | 令牌数量 | 前缀 |
|---|---|---|
| HDS 主站 (`stripe.com`) | ~822 | `--hds-` |
| Sail 文档站 (`docs.stripe.com`) | ~1187 | `--jybopzu-`, `--s-` |
| **合计** | **~2009** | |

## 附录 B: 两个系统的对比

| 维度 | HDS (`stripe.com`) | Sail (`docs.stripe.com`) |
|---|---|---|
| **字体** | sohne-var (自定义可变字体) | 系统字体栈 (-apple-system) |
| **代码字体** | SourceCodePro | Source Code Pro |
| **品牌色** | Brand Purple `#533afd` | Purple `#625afa` |
| **间距单位** | px (0–200px) | px (0–48px) |
| **圆角** | 0–32px + round | 0–10px + rounded |
| **阴影** | 5 级 (xs–xl) 双层 | 5 种 (none/hover/base/top/focus) |
| **色阶** | 25–975 (非连续) | 50–950 (连续) |
| **主题** | Light + Dark (双模式) | 单一 Light |
| **动效** | 丰富 (240ms–3.25s) | 简洁 (50ms–500ms) |
| **断点** | 640px / 940px / 1300px | 800px / 1000px |

---

> **数据来源**：通过抓取 `stripe.com` 的 5 个 CSS 样式表文件和 `docs.stripe.com` 的 10 个内联 `<style>` 块提取。所有令牌名称和值均为实际生产环境中使用的真实值。
