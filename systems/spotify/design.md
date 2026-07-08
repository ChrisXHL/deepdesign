# Spotify 设计系统

> 纯黑背景上跳动着标志性 Spotify 绿。Circular 字体的圆润几何感，卡片封面即内容——音乐本身就是最好的设计。

Spotify 的设计语言以暗色画布为基调，Signature Green 作为唯一强调色，Circular 圆润字体的几何感贯穿整个产品。

## 1. 色彩系统

| 角色 | Hex | 用途 |
|------|-----|------|
| Signature Green | `#1ED760` | 播放按钮、品牌强调 |
| Green Hover | `#1FDF64` | 悬浮态 |
| Background Base | `#121212` | 主画布 |
| Background Elevated | `#181818` | 卡片、面板 |
| Background Highlight | `#282828` | 悬浮元素 |
| Background Pressed | `#333333` | 按下状态 |
| Text Primary | `#FFFFFF` | 主文字 |
| Text Secondary | `#B3B3B3` | 次要文字 |
| Text Subdued | `#727272` | 三级文字 |
| Error Red | `#E91429` | 错误状态 |
| Heart Like | `#1ED760` | 喜欢（绿色实心） |

### 色彩使用分布

**97% 中性色**（黑/白/灰）+ **3% 签名绿**

## 2. 排版

### 字体家族

| 角色 | 字体 | 字重 |
|------|------|------|
| 所有 UI 文本 | Spotify Circular (Circular), -apple-system, sans-serif | Light, Book, Medium, Bold, Black |

### 字号阶梯

| 角色 | 字号 | 行高 | 字重 |
|------|------|------|------|
| Display | 48px | 1.15 | 900 (Black) |
| H1 | 32px | 1.25 | 700 |
| H2 | 24px | 1.3 | 700 |
| H3 | 18px | 1.35 | 700 |
| Body | 16px | 1.5 | 400 (Book) |
| Body S | 14px | 1.45 | 400 |
| Caption | 12px | 1.4 | 400 |
| Small/Meta | 11px | 1.35 | 400 |
| Button | 14px | — | 700 |

### Letter Spacing

| 级别 | 值 |
|------|-----|
| Display/标题 | `-0.04em` |
| 正文 | `0` |
| Caption | `0.015em` |
| UPPERCASE 标签 | `0.1em` |
| 导航标签 | `-0.01em` |

## 3. 间距系统

**基准**：4px（8px 常用）

| Token | 值 |
|-------|-----|
| micro | 4px |
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
| `radius-xs` | 2px |
| `radius-sm` | 4px |
| `radius-md` | 8px |
| `radius-lg` | 16px |
| `radius-full` | 999px |

## 5. 阴影系统

Spotify 使用极简阴影，因为暗色背景天然提供深度：

| Token | CSS 值 |
|-------|--------|
| Elevation 1 | `0 2px 4px rgba(0,0,0,0.5)` |
| Elevation 2 | `0 4px 12px rgba(0,0,0,0.5)` |
| Elevation 3 | `0 8px 32px rgba(0,0,0,0.5)` |

## 6. 动效规范

| 类型 | 持续 | 缓动 |
|------|------|------|
| 播放按钮缩放 | 200ms | `cubic-bezier(0.3,0,0,1)` |
| 卡片悬浮 | 300ms | `ease-out` |
| 菜单展开 | 200ms | `ease-in-out` |
| 页面过渡 | 400ms | `ease-in-out` |

## 7. 核心组件

**Play Button**
```css
.spotify-play {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #1ED760;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  transition: transform 200ms cubic-bezier(0.3,0,0,1);
}
.spotify-play:hover {
  transform: scale(1.06);
  background: #1FDF64;
}
```

**Track Row**
```css
.spotify-track {
  display: grid;
  grid-template-columns: 16px 1fr 1fr 120px 48px;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border-radius: 4px;
  transition: background 200ms ease;
}
.spotify-track:hover {
  background: rgba(255,255,255,0.1);
}
```

**Album Card**
```css
.spotify-album {
  background: #181818;
  border-radius: 8px;
  padding: 16px;
  transition: background 300ms ease;
}
.spotify-album:hover {
  background: #282828;
}
.spotify-album img {
  border-radius: 4px;
  width: 100%;
  aspect-ratio: 1;
}
```

## 8. 使用准则

### Do
- 纯黑画布（#121212）作为基础背景
- Signature Green（#1ED760）仅用于关键交互（播放、喜欢）
- Circular 字体圆润几何感，字间紧凑
- 专辑封面即内容，最小化 UI 干扰
- 使用 `#181818 → #282828 → #333333` 三级背景建立深度

### Don't
- 不使用除绿色外的其他强调色
- 不使用尖锐圆角（最小 4px，常用 8px）
- 不在暗色背景下使用纯白文字（用轻微降低的白色）
- 不过度使用阴影（暗色背景提供天然对比）
