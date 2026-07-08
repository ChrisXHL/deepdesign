# Airbnb 设计系统

> 大面积摄影作为主视觉，Cereal 字体的优雅衬线。暖粉渐变作为品牌签名，搜索框居中设计暗示出发——旅行从选目的地开始。

Airbnb 的设计语言：以摄影为核心，暖粉渐变贯穿品牌，Cereal 字体兼备衬线的优雅与无衬线的现代感。

## 1. 色彩系统

| 角色 | Hex | 用途 |
|------|-----|------|
| 品牌粉红 | `#FF385C` | CTA、Logo、品牌强调 |
| 品牌深粉 | `#E31C5F` | 渐变结束色、悬浮态 |
| 品牌渐变 | `#FF385C → #E31C5F` | 品牌渐变签名 |
| Background | `#FFFFFF` | 主背景 |
| Surface | `#F7F7F7` | 卡片背景、分隔区域 |
| Text Primary | `#222222` | 主文字 |
| Text Secondary | `#717171` | 次要文字 |
| Border | `#DDDDDD` | 边框/分隔线 |
| Success | `#008A05` | 预订成功 |
| Warning | `#E07912` | 提醒 |
| Error | `#C13515` | 取消/错误 |
| Star | `#FF385C` | 评分星星 |

## 2. 排版

### 字体家族

| 角色 | 字体 |
|------|------|
| 主字体 | Airbnb Cereal (Cereal), -apple-system, sans-serif |
| 衬线 | Cereal (Book/Medium/Bold weights) |

### 字号阶梯

| 角色 | 字号 | 行高 | 字重 |
|------|------|------|------|
| Display | 48px | 1.1 | 800 |
| H1 | 32px | 1.2 | 700 |
| H2 | 26px | 1.25 | 600 |
| H3 | 22px | 1.3 | 600 |
| H4 | 18px | 1.35 | 600 |
| Body L | 16px | 1.45 | 400 |
| Body | 14px | 1.4 | 400 |
| Caption | 12px | 1.35 | 400 |
| Small | 10px | 1.3 | 500 |

## 3. 间距系统

**基准**：8px

| Token | 值 |
|-------|-----|
| none | 0 |
| xxs | 4px |
| xs | 8px |
| sm | 12px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |

## 4. 圆角规范

| Token | 值 |
|-------|-----|
| `rounded-sm` | 8px |
| `rounded-md` | 12px |
| `rounded-lg` | 16px |
| `rounded-xl` | 24px |
| `rounded-full` | 9999px |

## 5. 阴影层级

| Token | CSS 值 |
|-------|--------|
| Card | `0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)` |
| Card Hover | `0 2px 4px rgba(0,0,0,0.18)` |
| Fixed (header) | `0 1px 0 rgba(0,0,0,0.08)` |
| Dropdown/Modal | `0 8px 28px rgba(0,0,0,0.14)` |

## 6. 动效规范

| 类型 | 持续 | 缓动 |
|------|------|------|
| Hover | 200ms | Ease Out |
| Expand/Collapse | 250ms | Ease In Out |
| Modal Enter | 250ms | `cubic-bezier(0.0, 0.0, 0.2, 1)` |
| Page Transition | 400ms | `cubic-bezier(0.4, 0.0, 0.2, 1)` |

## 7. 核心组件

**Search Bar（居中搜索框）**：
```css
.airbnb-search {
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 40px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05);
  padding: 8px 8px 8px 32px;
  display: flex;
  align-items: center;
  max-width: 850px;
  margin: 0 auto;
}
```

**Listing Card（房源卡片）**：
```css
.airbnb-card {
  border-radius: 12px;
  overflow: hidden;
  background: #FFFFFF;
}
.airbnb-card img {
  border-radius: 12px;
  aspect-ratio: 1/1;
  object-fit: cover;
}
```

## 8. 使用准则

### Do
- 摄影为主视觉，大面积使用真实照片
- 暖粉色系（#FF385C）作为品牌签名色
- 居中搜索框暗示「出发」
- 圆角慷慨使用（12-24px），营造温馨感
- Cereal 字体保持温和优雅的阅读体验

### Don't
- 不使用冷色调作为主色
- 不过度使用阴影（1-2 层即可）
- 不用纯黑文字（#222 代替 #000）
- 不限制栅格宽度——让摄影呼吸
