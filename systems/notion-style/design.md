# Notion 设计系统

> 暖纸上的工作台。奶白画布、发丝边框、单一蓝色强调。SF Pro 排版的克制与 Source Serif 的编辑感混排，让工具回归到纸笔的质朴。

Notion 的设计哲学：**工具应当像纸一样安静**。暖白色画布（#f6f5f4）代替纯白，1px 发丝边框代替粗重分隔，仅一个蓝色（#0075de）用作所有交互强调。

## 1. 色彩系统

### 品牌色

| 角色 | Hex | 用途 |
|------|-----|------|
| 品牌蓝 | `#0075de` | 所有交互、链接、按钮 CTA |
| 蓝色悬浮 | `#006dc7` | 主按钮悬浮态 |
| 蓝色按下 | `#005fb8` | 主按钮按下态 |

### 画布与表面

| 色阶 | Hex | 用途 |
|------|-----|------|
| Paper (画布) | `#f6f5f4` | 主背景——暖纸色 |
| Card (表面) | `#ffffff` | 卡片、页面表面 |
| Canvas (编辑器) | `#ffffff` | 编辑器页面 |
| Hover | `#efeeed` | 悬浮态背景 |
| Pressed | `#e1dfdd` | 按下态背景 |

### 文本系统

| 角色 | Hex | 用途 |
|------|-----|------|
| Text Primary | `#37352f` | 正文、标题（深灰褐） |
| Text Secondary | `rgba(55,53,47,0.65)` | 次要文字 |
| Text Tertiary | `rgba(55,53,47,0.45)` | 占位文字、禁用 |
| Text Link | `#0075de` | 链接文字 |
| Text Code | `#eb5757` | 行内代码（红色高亮） |
| Text Mention | `rgba(55,53,47,0.5)` | @提及文字 |

### 边框与分隔

| Token | Hex / 表达式 | 用途 |
|-------|-------------|------|
| Border Default | `rgba(55,53,47,0.09)` | 卡片/面板边框 |
| Border Hover | `rgba(55,53,47,0.16)` | 悬浮态边框 |
| Border Focus | `#0075de` | 聚焦/选中边框 |
| Divider | `rgba(55,53,47,0.09)` | 分隔线 |

### 语义色

| 角色 | Hex | 背景 |
|------|-----|------|
| Blue (Info) | `#0075de` | `#e3f0fd` |
| Brown (Warning) | `#9f6b2e` | `#fff2da` |
| Red (Error) | `#e03e3e` | `#fdebec` |
| Green (Success) | `#0f7b6c` | `#ddedea` |
| Purple (Info) | `#6940a5` | `#f1ecf8` |
| Orange (Alert) | `#d9730d` | `#faeccd` |
| Yellow (Highlight) | `#dfab01` | `#fbf3db` |
| Pink (Special) | `#c24d8b` | `#f9e6f1` |

## 2. 排版

### 字体家族

| 角色 | 字体 |
|------|------|
| 无衬线正文 | SF Pro, Inter, -apple-system, BlinkMacSystemFont, sans-serif |
| 衬线（编辑） | Source Serif Pro, Georgia, serif |
| 等宽代码 | SF Mono, Menlo, Monaco, monospace |
| UI 界面 | SF Pro Display, Inter, sans-serif |

### 字号阶梯

| 角色 | 字号 | 行高 | 字重 |
|------|------|------|------|
| Page Title (H1) | 40px | 1.2 | 700 |
| Heading 1 | 1.875em | 1.3 | 600 |
| Heading 2 | 1.5em | 1.3 | 600 |
| Heading 3 | 1.25em | 1.3 | 600 |
| **Body Text** | **16px** | 1.5 | 400 |
| Small Text | 14px | 1.4 | 400 |
| Caption | 12px | 1.35 | 400 |
| Code Inline | 85% of body | 1.45 | 400 (SF Mono) |
| Sidebar Item | 14px | 1.2 | 400 |
| Database Cell | 14px | 1.4 | 400 |

### Letter Spacing

| 场景 | 值 |
|------|-----|
| 标题 | `-0.01em` |
| 正文 | `0` |
| UI 标签 | `0.01em` |
| 数据库表头 | `0.02em` |

## 3. 间距系统

**基准**：几乎不使用固定间距——Notion 的内容间距由块级间距定义。

| 间距类型 | 值 |
|----------|-----|
| 页面水平内边距 | 96px (large) / 64px (medium) |
| 块间间距 | 3px — 非常紧凑 |
| 段落间距 | 8px |
| 卡片内边距 | 12px |
| Sidebar 间距 | 4px |

**特殊**：Notion 没有传统 margin/padding 系统，内容块之间用 3px 间距紧凑排列，段落间 8px 分隔。

## 4. 圆角规范

| Token | 值 |
|-------|-----|
| `radius-sm` | 3px (代码块、标签) |
| `radius-md` | 4px (按钮、输入框、块) |
| `radius-lg` | 6px (卡片、模态框) |
| `radius-xl` | 8px (大面板) |

**圆角原则**：极其克制，3-6px 为主，避免过度圆润。

## 5. 阴影系统

Notion 极少使用阴影，依靠 1px 边框和背景色差异区分层级：

| Token | CSS 值 |
|-------|--------|
| Panel Hover | `box-shadow: rgba(15,15,15,0.05) 0px 0px 0px 1px, rgba(15,15,15,0.1) 0px 3px 6px, rgba(15,15,15,0.2) 0px 9px 24px` |
| Floating Menu | `box-shadow: rgba(15,15,15,0.05) 0px 0px 0px 1px, rgba(15,15,15,0.1) 0px 3px 6px, rgba(15,15,15,0.2) 0px 9px 24px` |
| Tooltip | `box-shadow: rgba(15,15,15,0.05) 0px 0px 0px 1px, rgba(15,15,15,0.1) 0px 4px 8px` |
| Board Card | `box-shadow: rgba(15,15,15,0.1) 0px 0px 0px 1px, rgba(15,15,15,0.1) 0px 2px 4px` |

## 6. 动效规范

| 类型 | 持续 | 缓动 |
|------|------|------|
| Hover 过渡 | 100ms | ease |
| 菜单展开 | 200ms | ease-out |
| 模态框出现 | 150ms | ease-out |
| Sidebar 切换 | 200ms | ease-in-out |
| Drag & Drop | 即时 (0ms) | — |
| 页面加载 | 300ms | ease-out |

**动效原则**：极短、极轻、不可见。动效不应让用户"注意到"它们在动。

## 7. 核心组件

**Notion Button**
```css
.notion-btn {
  background: #0075de;
  color: #ffffff;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  transition: background 100ms ease;
}
.notion-btn:hover { background: #006dc7; }
.notion-btn:active { background: #005fb8; }
```

**Notion Card / Block**
```css
.notion-block {
  background: #ffffff;
  border: 1px solid rgba(55,53,47,0.09);
  border-radius: 4px;
  padding: 12px;
  transition: background 100ms ease;
}
.notion-block:hover {
  background: #efeeed;
}
```

**Notion Input**
```css
.notion-input {
  background: rgba(55,53,47,0.05);
  border: 1px solid rgba(55,53,47,0.09);
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 14px;
  color: #37352f;
  transition: border-color 100ms ease;
}
.notion-input:focus {
  border-color: #0075de;
  outline: none;
}
```

## 8. 使用准则

### Do
- 暖纸色（#f6f5f4）作为基础画布
- 仅一个蓝色（#0075de）用于所有交互
- 1px 发丝边框（rgba(55,53,47,0.09)）区分层级
- 3-6px 圆角保持克制
- 动效极短（100-200ms），让用户感觉「无延迟」
- SF Pro 无衬线 + Source Serif 衬线混排，营造编辑感

### Don't
- 不使用纯白（#fff）作为背景色
- 不使用超过 2 种品牌色
- 不使用大圆角（> 8px）
- 不使用大量阴影（Notion 是平面设计）
- 不在同一页面使用超过 3 种字号
- 不过度动效——Notion 追求「隐形」交互
