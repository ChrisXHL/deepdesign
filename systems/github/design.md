# GitHub Primer 设计系统

> GitHub 的官方设计系统，深色模式下的代码仓库美学。Mona Sans 字体阅读感极佳，绿色点缀作为唯一强调色。1px 发丝边框分隔层级，大面积留白保持专注。

Primer 是跨 GitHub 全平台使用的设计系统，包含色彩、排版、间距、组件、品牌等完整设计令牌。所有令牌以 CSS 变量的形式分发。

## 1. 色彩系统

### 语义前景色

| Token | 色值 | 用途 |
|-------|------|------|
| `--fgColor-default` | `#1f2328` | 默认文字 |
| `--fgColor-muted` | `#59636e` | 次要文字 |
| `--fgColor-disabled` | `#818b98` | 禁用文字 |
| `--fgColor-accent` | `#0969da` | 强调/链接 |
| `--fgColor-link` | `#0969da` | 链接文字 |
| `--fgColor-success` | `#1a7f37` | 成功状态 |
| `--fgColor-danger` | `#d1242f` | 危险/错误 |
| `--fgColor-attention` | `#9a6700` | 注意/警告 |
| `--fgColor-done` | `#8250df` | 已完成 |
| `--fgColor-closed` | `#d1242f` | 已关闭 |
| `--fgColor-open` | `#1a7f37` | 进行中 |
| `--fgColor-draft` | `#59636e` | 草稿 |
| `--fgColor-neutral` | `#59636e` | 中性 |
| `--fgColor-onEmphasis` | `#ffffff` | 强调背景上文字 |
| `--fgColor-onInverse` | `#ffffff` | 反色背景上文字 |
| `--fgColor-white` | `#ffffff` | 纯白 |
| `--fgColor-black` | `#1f2328` | 纯黑 |

### 背景色

| Token | 色值 | 用途 |
|-------|------|------|
| `--bgColor-default` | `#ffffff` | 页面默认背景 |
| `--bgColor-muted` | `#f6f8fa` | 柔和背景 |
| `--bgColor-inset` | `#f6f8fa` | 内嵌区域背景 |
| `--bgColor-emphasis` | `#25292e` | 强调背景（深色） |
| `--bgColor-inverse` | `#25292e` | 反色背景 |
| `--bgColor-disabled` | `#eff2f5` | 禁用状态背景 |
| `--bgColor-accent-muted` | `#ddf4ff` | 强调柔和背景 |
| `--bgColor-accent-emphasis` | `#0969da` | 强调背景（蓝） |
| `--bgColor-success-muted` | `#dafbe1` | 成功柔和背景 |
| `--bgColor-success-emphasis` | `#1f883d` | 成功强调背景 |
| `--bgColor-danger-muted` | `#ffebe9` | 危险柔和背景 |
| `--bgColor-danger-emphasis` | `#cf222e` | 危险强调背景 |
| `--bgColor-attention-muted` | `#fff8c5` | 警告柔和背景 |
| `--bgColor-attention-emphasis` | `#9a6700` | 警告强调背景 |
| `--bgColor-done-muted` | `#fbefff` | 已完成柔和背景 |
| `--bgColor-done-emphasis` | `#8250df` | 已完成强调背景 |

### 边框色

| Token | 色值 | 用途 |
|-------|------|------|
| `--borderColor-default` | `#d1d9e0` | 默认边框 |
| `--borderColor-muted` | `#d1d9e0b3` | 柔和边框 |
| `--borderColor-emphasis` | `#818b98` | 强调边框 |
| `--borderColor-disabled` | `#818b981a` | 禁用边框 |
| `--borderColor-accent-emphasis` | `#0969da` | 强调/聚焦边框 |
| `--borderColor-accent-muted` | `#54aeff66` | 柔和强调边框 |
| `--borderColor-translucent` | `#1f232826` | 半透明边框 |
| `--focus-outlineColor` | `#0969da` | 聚焦环颜色 |

### 阴影层级

| Token | CSS 值 |
|-------|--------|
| `--shadow-resting-xsmall` | `0 1px 1px 0 #1f23280d` |
| `--shadow-resting-small` | `0 1px 1px 0 #1f23280a, 0 1px 2px 0 #1f232808` |
| `--shadow-resting-medium` | `0 1px 1px 0 #25292e1a, 0 3px 6px 0 #25292e1f` |
| `--shadow-floating-small` | `0 0 0 1px #d1d9e040, 0 6px 12px -3px #25292e0a, 0 6px 18px 0 #25292e1f` |
| `--shadow-floating-medium` | `0 0 0 1px #d1d9e000, 0 8px 16px -4px #25292e14, 0 4px 32px -4px #25292e14, 0 24px 48px -12px #25292e14, 0 48px 96px -24px #25292e14` |
| `--shadow-floating-large` | `0 0 0 1px #d1d9e000, 0 40px 80px 0 #25292e3d` |
| `--shadow-floating-xlarge` | `0 0 0 1px #d1d9e000, 0 56px 112px 0 #25292e52` |
| `--shadow-inset` | `inset 0 1px 0 0 #1f23280a` |

### 按钮模式令牌

**默认按钮**：
| State | bg | border | fg | shadow |
|-------|-----|--------|-----|--------|
| rest | `#f6f8fa` | `#d1d9e0` | `#25292e` | `0 1px 0 0 #1f23280a` |
| hover | `#eff2f5` | `#d1d9e0` | — | — |
| active | `#e6eaef` | `#d1d9e0` | — | — |
| disabled | `#eff2f5` | `#818b981a` | `#818b98` | — |
| selected | `#e6eaef` | — | — | — |

**Primary 按钮（绿色）**：
| State | bg | border | fg |
|-------|-----|--------|-----|
| rest | `#1f883d` | `#1f232826` | `#ffffff` |
| hover | `#1c8139` | `#1f232826` | — |
| active | `#197935` | `#1f232826` | — |
| disabled | `#95d8a6` | `#95d8a6` | `#ffffffcc` |

**Danger 按钮（红色）**：
| State | bg | border | fg |
|-------|-----|--------|-----|
| rest | `#f6f8fa` | `#d1d9e0` | `#d1242f` |
| hover | `#cf222e` | `#1f232826` | `#ffffff` |
| active | `#a40e26` | `#1f232826` | `#ffffff` |
| disabled | `#eff2f5` | — | `#d1242f80` |

**Outline 按钮（蓝色）**：
| State | bg | border | fg |
|-------|-----|--------|-----|
| rest | `#f6f8fa` | — | `#0969da` |
| hover | `#0969da` | `#1f232826` | `#ffffff` |
| active | `#0757ba` | `#1f232826` | `#ffffff` |
| disabled | `#eff2f5` | — | `#0969da80` |

### 表单控件令牌

| Token | 色值 | 用途 |
|-------|------|------|
| `--control-bgColor-rest` | `#f6f8fa` | 控件默认背景 |
| `--control-bgColor-hover` | `#eff2f5` | 控件悬停背景 |
| `--control-bgColor-active` | `#e6eaef` | 控件激活背景 |
| `--control-bgColor-disabled` | `#eff2f5` | 控件禁用背景 |
| `--control-borderColor-rest` | `#d1d9e0` | 控件默认边框 |
| `--control-borderColor-emphasis` | `#818b98` | 控件强调边框 |
| `--control-borderColor-success` | `#1a7f37` | 验证成功边框 |
| `--control-borderColor-danger` | `#cf222e` | 验证错误边框 |
| `--control-borderColor-warning` | `#9a6700` | 验证警告边框 |
| `--control-checked-bgColor-rest` | `#0969da` | 已选控件（checkbox/radio）背景 |
| `--control-checked-bgColor-hover` | `#0860ca` | 已选控件悬停 |
| `--control-checked-bgColor-active` | `#0757ba` | 已选控件激活 |
| `--control-checked-fgColor-rest` | `#ffffff` | 已选控件前景 |

### 数据可视化色板（18 色）

Auburn `#9d615c`, Blue `#006edb`, Brown `#856d4c`, Coral `#d43511`, Gray `#808fa3`, Green `#30a147`, Lemon `#866e04`, Lime `#527a29`, Olive `#64762d`, Orange `#eb670f`, Pine `#167e53`, Pink `#ce2c85`, Plum `#a830e8`, Purple `#894ceb`, Red `#df0c24`, Teal `#179b9b`, Yellow `#b88700` + muted variants

## 2. 排版

### 字体家族

| 角色 | 字体 |
|------|------|
| 主字体 | Mona Sans, -apple-system, sans-serif |
| 等宽字体 | Mona Sans Mono, SF Mono, monospace |

### 排版原则

- **行高**：使用 token 变量对齐 4px 网格
- **行长**：建议控制在 80 字符以内
- **对齐**：左对齐、右参差（ragged right），不使用两端对齐
- **层级建立**：不使用颜色作为主要强调方式
- **语义标记**：用语义标题标签（h1-h6）+ 样式 token 组合，而非调整标签顺序追视觉效果

## 3. 间距与布局

- **基准网格**：4px（所有行高、间距对齐 4px 网格）
- **rem 单位**：排版使用 rem 单位，支持浏览器缩放（WCAG 可访问性）
- **微间距**：框架覆盖内联、数值和标签内的间距，维持视觉节奏

## 4. 使用准则

### Do
- 使用 CSS 变量引用所有设计令牌（`var(--fgColor-default)`）
- 按钮使用语义状态 token（rest/hover/active/disabled/selected）
- 聚焦使用 `--focus-outlineColor: #0969da`
- 所有文本必须满足 WCAG AA 对比度（4.5:1 正常文字，3:1 大文字）
- 阴影分 resting（静态）和 floating（浮动）两类

### Don't
- 不使用任意数字设置 font-weight（用 token 变量）
- 不为了视觉效果调整语义标题标签顺序
- 颜色不作为主要信息传递方式（色盲可访问性）
- 不使用 drop shadow 作为层级区分（用 1px 边框 + 浅阴影组合）
