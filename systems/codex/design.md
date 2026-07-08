# Codex 设计系统

> 基于 OpenAI 生产环境前端提取的设计规范。高对比极简主义——纯粹的黑白画布上，仅以一个实色 CTA 作为标点。

## 1. 设计哲学

| 原则 | 说明 |
|------|------|
| 色彩纪律 | UI 不引入多余颜色，视觉冲击力来自内容本身 |
| 功能至上 | 每个组件都是功能性的，无装饰性渐变 |
| 留白即设计 | 大间距创造专注阅读环境，章节间用留白区隔 |
| 编辑感排版 | 排版承担视觉层级，而非依赖颜色 |
| 交互克制 | 阴影仅在 hover 时出现，动效微妙短暂 |

## 2. 色彩系统

### 核心调色板

| 角色 | 名称 | Hex | 用途 |
|------|------|-----|------|
| 主色 | Obsidian | `#000000` | 主要文本、主按钮、Logo |
| 主色悬停 | Black Hover | `#1A1A1A` | 主按钮 hover |
| 背景 | Paper | `#FFFFFF` | 页面画布、卡片表面 |
| 次级表面 | Ash | `#F1F1F1` | 次级表面、hover 背景 |
| 次级文本 | Graphite | `#6E6E6E` | 说明文字、辅助标签 |
| 静默文本 | Slate | `#767881` | 元数据、禁用状态 |
| 边框 | Hairline | `rgba(0,0,0,0.12)` | 所有边框（半透明黑） |

### 品牌强调色

| 角色 | Hex | 用途 |
|------|-----|------|
| 品牌主色 | `#10A37F` | 品牌链接、高亮徽章 |
| 品牌悬停 | `#0A7A5E` | hover/pressed |
| 品牌柔色 | `#E8F5F0` | 成功徽章表面 |

### 语义色

| 语义 | Hex | 用途 |
|------|-----|------|
| Success | `#10A37F` | 成功状态 |
| Warning | `#F5A623` | 建议状态 |
| Danger | `#EF4146` | 错误、破坏性操作 |

## 3. 排版系统

### 字体家族

- 主字体：`"OpenAI Sans"`, -apple-system, sans-serif
- 展示字体：`"Signifier"`, Georgia, serif（仅编辑标题）
- 等宽字体：`"SF Mono"`, Consolas, monospace

### 排版层级

| 角色 | 字号 | 字重 | 行高 | 字间距 |
|------|------|------|------|--------|
| Display | 48px | 600 | 1.16 | -0.03em |
| H1 | 40px | 600 | 1.15 | -0.02em |
| H2 | 28px | 600 | 1.21 | -0.01em |
| H3 | 22px | 500 | 1.26 | -0.01em |
| Body | 17px | 400 | 1.65 | 0 |
| Label | 14px | 500 | 1.40 | +0.01em |
| Caption | 13px | 500 | 1.51 | +0.01em |

> 字重上限 600，禁止 700/800。

## 4. 间距系统

基础单位 4px。刻度：4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 96 / 128 px。

## 5. 圆角系统

| Token | 值 | 用途 |
|-------|----|------|
| `--radius-sm` | 6px | 卡片（建筑感） |
| `--radius-md` | 16px | 内容容器 |
| `--radius-lg` | 24px | 大型容器 |
| `--radius-pill` | 9999px | 所有按钮、标签、输入框 |

> 药丸形是签名几何元素。卡片用 6px 近零圆角。

## 6. 阴影与层级

- 默认状态：无阴影
- `--elev-hover`：仅在交互时出现
- 阴影非装饰性，仅传达层级提升

## 7. 组件规范

### Primary Button

```css
.btn-primary {
  padding: 12px 24px;
  background: #000;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  border-radius: 9999px;
}
```

### Card

```css
.card {
  border: 1px solid #EDEDED;
  border-radius: 6px;
  box-shadow: none;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--elev-hover);
}
```

### Input

```css
.text-input {
  padding: 16px 24px;
  border: 1px solid #DDDEE1;
  border-radius: 40px;
}
```

## 8. 动效系统

| 属性 | 时长 | 缓动 |
|------|------|------|
| background-color | 200ms | ease-out |
| transform | 200ms | ease-out |
| opacity | 250ms | ease-out |

`--ease-standard: cubic-bezier(0.16, 1, 0.3, 1)`

## 9. 使用准则

- 所有按钮和输入框使用 9999px 药丸圆角
- 卡片使用 6px 圆角
- 正文 17px / 400 / 1.65 行高
- 仅在 hover 时应用阴影
- 章节间用 64px 或 96px 留白
- 边框用 rgba(0,0,0,0.12) 而非灰色 Hex
- 不使用渐变、不使用 700+ 字重
- 不在按钮内放置图标
