# Stripe 设计系统

> 深蓝到紫罗兰的流体渐变，Inter 字体严整清晰。磨砂玻璃卡片在暗色画布上悬浮，每个像素都为转化设计。

Stripe 的设计哲学：让支付变得优雅。深色画布配合靛蓝到紫罗兰的流体渐变，Inter 字体家族贯穿全文，毛玻璃质感的卡片以微妙的 box-shadow 悬浮在画布之上。

## 1. 色彩系统

### 品牌色

| 角色 | 名称 | Hex | 用途 |
|------|------|-----|------|
| 品牌主色 | Stripe Blue | `#635BFF` | 主要 CTA、链接、品牌标记 |
| 品牌深色 | Dark Blue | `#0A2540` | 深色背景、Hero 区域 |
| 品牌渐变起点 | Indigo | `#635BFF` | 渐变起始色 |
| 品牌渐变终点 | Violet | `#a259ff` | 渐变结束色 |

### 语义色

| 角色 | Hex | 用途 |
|------|-----|------|
| 默认文字 | `#ffffff` | 深色背景上的主文字 |
| 次要文字 | `rgba(255,255,255,0.65)` | 描述文字 |
| 三级文字 | `#425466` | 浅色背景上的描述文字 |
| 链接 | `#635BFF` | 内联链接 |
| 聚焦环 | `rgba(99,91,255,0.4)` | 输入框/按钮聚焦 |
| 成功 | `#00A86B` | 支付成功状态 |
| 警告 | `#FFD700` | 警告/待处理 |
| 错误 | `#DF1B41` | 支付失败/表单错误 |

### 背景色

| 色阶 | Hex | 用途 |
|------|-----|------|
| 画布 | `#0A2540` | 主画布、Hero 区域 |
| 表面 | `#0c2e4e` | 卡片、面板 |
| 悬浮表面 | `#0d3457` | 悬浮卡片 |
| 浅色背景 | `#ffffff` | 文档/营销浅色区域 |
| 柔和浅色 | `#f6f9fc` | 代码块、灰色区域 |

### 边框色

| Token | Hex / 表达式 | 用途 |
|-------|-------------|------|
| 默认边框 | `rgba(255,255,255,0.12)` | 深色画布上的卡片边框 |
| 浅色边框 | `rgba(0,0,0,0.08)` | 浅色区域边框 |
| 聚焦边框 | `#635BFF` | 输入框聚焦 |

## 2. 排版

### 字体家族

| 角色 | 字体 |
|------|------|
| 主字体 | Inter, -apple-system, sans-serif |
| 等宽字体 | Source Code Pro, SF Mono, monospace |
| 衬线（文档） | Source Serif Pro |

### 字号阶梯

| Token | 字号 | 行高 | 字重 | 用途 |
|-------|------|------|------|------|
| Heading XL | 64px | 1.05 | 700 | Hero 标题（营销） |
| Heading L | 48px | 1.1 | 600 | 页面主标题 |
| Heading M | 36px | 1.2 | 600 | 区块标题 |
| Heading S | 24px | 1.3 | 600 | 小标题 |
| Body L | 18px | 1.55 | 400 | 引导正文 |
| Body | 16px | 1.55 | 400 | 默认正文 |
| Body S | 14px | 1.5 | 400 | 辅助文字、标签 |
| Caption | 12px | 1.4 | 500 | 注释、状态标签 |

### Letter Spacing

| 级别 | 值 |
|------|-----|
| 标题 | `-0.02em` |
| 正文 | `0` |
| Caption | `0.02em` |
| UPPERCASE 标签 | `0.04em` |

## 3. 间距系统

**基准**：4px（0.25rem 基数）

| Token | 值 |
|-------|-----|
| `space-0` | 0 |
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 16px |
| `space-4` | 24px |
| `space-5` | 32px |
| `space-6` | 48px |
| `space-7` | 64px |
| `space-8` | 96px |
| `space-9` | 128px |

**内边距规范**：
- 按钮内边距：`12px 20px`（默认）/ `14px 28px`（大）
- 卡片内边距：`24px`（默认）/ `32px`（大）
- 输入框内边距：`8px 12px`

## 4. 圆角规范

| Token | 值 | 使用场景 |
|-------|-----|----------|
| `radius-sm` | 4px | 小按钮、标签、工具提示 |
| `radius-md` | 8px | 卡片、面板、输入框、默认按钮 |
| `radius-lg` | 12px | 模态框、大卡片 |
| `radius-xl` | 16px | Hero 卡片、特色面板 |
| `radius-full` | 999px | 药丸按钮（主要 CTA） |

## 5. 阴影层级

| 级别 | CSS 值 |
|------|--------|
| Card (静态) | `0 2px 5px rgba(0,0,0,0.1)` |
| Card (悬浮) | `0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08)` |
| Dropdown | `0 50px 100px rgba(50,50,93,0.1), 0 15px 35px rgba(50,50,93,0.15), 0 5px 15px rgba(0,0,0,0.1)` |
| Modal overlay | `0 50px 100px rgba(0,0,0,0.12), 0 15px 35px rgba(0,0,0,0.12), 0 5px 15px rgba(0,0,0,0.12)` |

## 6. 动效规范

| 类型 | 持续 | 缓动 |
|------|------|------|
| 微交互 (hover) | 150ms | `ease` |
| 按钮状态切换 | 200ms | `ease-out` |
| 下拉展开 | 250ms | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| 模态框入场 | 300ms | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| 页面过渡 | 400ms | `ease-in-out` |

## 7. 组件关键令牌

**Button（主要 CTA）**：
```css
.stripe-btn {
  background: #635BFF;
  color: #fff;
  border-radius: 9999px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  transition: all 150ms ease;
}
.stripe-btn:hover {
  background: #7B73FF;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(99,91,255,.35);
}
```

**Card（毛玻璃面板）**：
```css
.stripe-card {
  background: rgba(12, 46, 78, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  padding: 24px;
}
```

## 8. 使用准则

### Do
- CTA 按钮使用全圆角（药丸）形状和毛玻璃渐变
- 深色画布为主，浅色区域仅限文档和辅助内容
- Inter 字体贯穿所有 UI 文本
- 使用微妙的 box-shadow 代替粗重边框定义层级
- 渐变色（靛蓝→紫罗兰）用于 Hero 和品牌强调

### Don't
- 不使用超过 2 种品牌色
- 不依赖纯黑/纯白文本（用半透明保持柔软）
- 不使用尖锐圆角（最小 4px）
- 不滥用动效——Stripe 追求「隐形」的交互
