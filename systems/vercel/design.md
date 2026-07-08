# Vercel Geist 设计系统

> 纯黑画布上的几何渐变光晕，Geist 字体家族贯穿始终。命令行美学与卡片网格完美排列，每一个部署状态都如代码般精确。

Vercel 的 Geist 设计系统由 Vercel 设计团队打造，强调几何精确性、代码美学和高性能。Geist 字体家族（无衬线 + 等宽）是系统核心。

## 1. 色彩系统

| 角色 | Hex | 用途 |
|------|-----|------|
| Background | `#000000` | 主画布（纯黑） |
| Surface | `#111111` | 卡片、面板表面 |
| Foreground | `#ffffff` | 主文字 |
| Secondary | `#888888` | 次要文字 |
| Accent | `#0070F3` | 蓝色强调 |
| Accent Hover | `#0761D1` | 悬浮态 |
| Success | `#0070F3` | 部署成功 |
| Warning | `#F5A623` | 构建警告 |
| Error | `#EE0000` | 构建失败/错误 |
| Border | `#333333` | 卡片/面板边框 |
| Accent Gradient | `#0070F3 → #00C6FF` | 渐变强调 |
| Purple | `#7928CA` | 紫色点缀 |
| Pink | `#FF0080` | 粉色点缀 |
| Cyan | `#50E3C2` | 青色点缀 |

### 几何渐变光晕色

| 色名 | 起始色 | 结束色 |
|------|--------|--------|
| Blue Glow | `#0070F3` | `#00C6FF` |
| Purple Glow | `#7928CA` | `#FF0080` |
| Green Glow | `#00DF81` | `#00E599` |

## 2. 排版（Geist 字体）

| 角色 | 字体 | 字号 | 行高 | 字重 |
|------|------|------|------|------|
| Hero | Geist Sans | 72px | 1.0 | 800 |
| H1 | Geist Sans | 48px | 1.1 | 700 |
| H2 | Geist Sans | 36px | 1.2 | 600 |
| H3 | Geist Sans | 24px | 1.3 | 600 |
| Body L | Geist Sans | 18px | 1.55 | 400 |
| Body | Geist Sans | 16px | 1.5 | 400 |
| Body S | Geist Sans | 14px | 1.45 | 400 |
| Code | Geist Mono | 14px | 1.6 | 400 |
| Caption | Geist Sans | 12px | 1.4 | 500 |

### Letter Spacing

| 级别 | 值 |
|------|-----|
| Display/Hero | `-0.04em` |
| 标题 | `-0.02em` |
| 正文 | `0` |
| Caption/Code | `0` |

## 3. 间距系统

**基准**：4px

| Token | 值 | Token | 值 |
|-------|-----|-------|-----|
| 0 | 0 | 8 | 32px |
| 1 | 4px | 10 | 40px |
| 2 | 8px | 12 | 48px |
| 3 | 12px | 16 | 64px |
| 4 | 16px | 20 | 80px |
| 5 | 20px | 24 | 96px |
| 6 | 24px | 32 | 128px |

## 4. 圆角规范

| Token | 值 |
|-------|-----|
| `radius-sm` | 5px |
| `radius-md` | 6px |
| `radius-lg` | 12px |
| `radius-full` | 999px |

## 5. 阴影层级

| Token | CSS 值 |
|-------|--------|
| Small | `0 2px 4px rgba(0,0,0,0.5)` |
| Medium | `0 4px 14px rgba(0,0,0,0.5)` |
| Large | `0 8px 30px rgba(0,0,0,0.5)` |
| XLarge | `0 20px 60px rgba(0,0,0,0.5)` |

## 6. 动效规范

| 类型 | 持续 | 缓动 |
|------|------|------|
| Instant | 100ms | ease |
| Fast | 200ms | ease-out |
| Normal | 300ms | `cubic-bezier(0.16,1,0.3,1)` |
| Slow | 500ms | `cubic-bezier(0.16,1,0.3,1)` |

## 7. 使用准则

### Do
- Geist Sans 用于所有 UI 文本，Geist Mono 用于代码/终端
- 纯黑画布 (#000) 作为基础背景
- 蓝色/青色几何渐变用于品牌强调
- 命令行美学卡片（1px 边框 + 微妙阴影）

### Don't
- 不使用灰度文本（纯白到半透白即可）
- 不使用大于 12px 的卡片圆角
- 不使用复杂渐变（单色或双色几何渐变）
