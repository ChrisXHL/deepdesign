# Linear 设计系统

> 深黑画布上悬浮着发丝边框面板，淡紫和青色微光点缀。SF Mono 等宽字体读取数据如同精密仪器，键盘优先的交互让鼠标成了备选项。

Linear 的设计哲学：**每一个像素都有目的**。午夜黑画布上，半透面板以 1px 发丝边框悬浮，微妙的紫/青色彩仅在键盘焦点和选中状态一闪而过。

## 1. 色彩系统

### 品牌与功能色

| 角色 | 名称 | Hex | 用途 |
|------|------|-----|------|
| 品牌主色 | Linear Purple | `#5E6AD2` | 品牌链接、选中态、主按钮 |
| 品牌深色 | — | `#464FC7` | 主按钮悬浮/激活 |
| Focus | Focus Blue | `#4C9AFF` | 输入框聚焦环、选中态边框 |
| Success | Green | `#0EAD69` | Issue 完成状态 |
| Warning | Amber | `#F2C94C` | 待处理/警告 |
| Danger | Red | `#EB5757` | 删除/错误/高优先级 |
| Info | Cyan | `#56CCF2` | 信息提示 |

### 背景系统

| 色阶 | Hex | 用途 |
|------|-----|------|
| Midnight (画布) | `#1F2023` | 主画布、最深背景 |
| Charcoal (表面) | `#2C2D30` | 面板、卡片表面 |
| Dark Gray (浮层) | `#36373B` | 悬浮面板、弹出层 |
| Light Gray (代码) | `#45464A` | 代码块背景、输入框 |
| Subdued (柔和) | `#16171A` | 侧边栏、次要区域 |

### 文本系统

| 角色 | Hex | 透明度 | 用途 |
|------|-----|--------|------|
| Primary | `#ffffff` | 100% | 主要文字 |
| Secondary | `#828282` | — | 次要描述文字 |
| Tertiary | `#636363` | — | 三级辅助文字 |
| Disabled | `#444444` | — | 禁用文字 |
| Accent | `#5E6AD2` | — | 链接、提及、状态标签 |

### 边框系统

| Token | 值 | 用途 |
|-------|-----|------|
| Hairline (Default) | `rgba(255,255,255,0.06)` | 所有面板/卡片边框 |
| Border Emphasis | `rgba(255,255,255,0.10)` | 悬浮/聚焦边框 |
| Border Focus | `rgba(76,154,255,0.4)` | 键盘聚焦环 |
| Border Divider | `rgba(255,255,255,0.04)` | 列表分隔线 |
| Border Active | `rgba(94,106,210,0.4)` | 选中状态边框 |

### 状态色系统

| 状态 | Hex | 背景色 | 用途 |
|------|-----|--------|------|
| Todo | `#E2E2E2` | — | 待处理 |
| In Progress | `#F2C94C` | `rgba(242,201,76,0.15)` | 进行中 |
| Done | `#5E6AD2` | `rgba(94,106,210,0.15)` | 已完成 |
| Canceled | `#828282` | — | 取消 |
| Backlog | `#636363` | — | 积压 |
| Urgent | `#EB5757` | `rgba(235,87,87,0.15)` | 紧急 |
| High | `#F2C94C` | — | 高优先级 |
| Medium | `#0EAD69` | — | 中优先级 |
| Low | `#828282` | — | 低优先级 |

## 2. 排版

### 字体家族

| 角色 | 字体 | 字重 |
|------|------|------|
| UI 正文 | Inter | 400, 500, 600 |
| 等宽/ID/代码 | SF Mono | 400, 500, 600 |
| 编辑器 | JetBrains Mono (可选) | 400 |

### 字号阶梯（向精密仪器靠拢）

| 角色 | 字号 | 行高 | 字重 |
|------|------|------|------|
| Page Title | 24px | 1.2 | 600 |
| Section Header | 18px | 1.25 | 600 |
| Card Title | 15px | 1.3 | 600 |
| **Body** | **13px** | 1.5 | 400 |
| Small / Meta | 12px | 1.3 | 500 |
| Caption / Label | 11px | 1.2 | 500 |
| Code / ID | 13px | 1.4 | 400 (SF Mono) |

> 核心：12-14px 为主，刻意营造精密仪器般的紧凑感。

### Letter Spacing

| 场景 | 值 |
|------|-----|
| 标题 | `-0.01em` |
| 正文 | `0` |
| 标签/徽章 | `0.02em` |
| UPPERCASE | `0.04em` |

## 3. 间距系统

**基准**：4px

| Token | 值 | 使用场景 |
|-------|-----|----------|
| `space-0` | 0 | 无间距 |
| `space-1` | 4px | 内联间距、图标与文字 |
| `space-2` | 8px | 紧密相关元素 |
| `space-3` | 12px | 组件内间距 |
| `space-4` | 16px | 面板内边距 |
| `space-5` | 20px | 区块间距 |
| `space-6` | 24px | 卡片间距 |
| `space-8` | 32px | 大区块间距 |
| `space-10` | 40px | 页面段落间距 |

## 4. 圆角规范

| Token | 值 | 使用场景 |
|-------|-----|----------|
| `radius-xs` | 3px | 键盘快捷键提示 |
| `radius-sm` | 5px | 标签、徽章、小按钮 |
| **`radius-md`** | **6px** | 按钮、输入框、列表项 |
| `radius-lg` | 8px | 卡片、面板、模态框 |
| `radius-xl` | 12px | 大卡片、特色面板 |

## 5. 阴影层级（替代方案）

Linear 不使用传统 drop-shadow。层级通过以下方式建立：
- **1px 半透明边框**定义面板边界
- **2px 偏移**（悬浮面板向右下偏移）
- **背景色变化**（#1F2023 → #2C2D30 → #36373B）

## 6. 动效规范

| 类型 | 持续 | 缓动 |
|------|------|------|
| 键盘聚焦环 | 120ms | ease-out |
| 悬浮卡片出现 | 200ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Issue 展开/收起 | 250ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| 模态框入场 | 200ms | `ease-out` |
| 列表项拖拽重排 | 200ms | `cubic-bezier(0.2, 0, 0, 1)` |

## 7. 核心组件规范

**Panel**
```css
.linear-panel {
  background: #2C2D30;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 8px;
  padding: 16px;
}
```

**Input Field**
```css
.linear-input {
  background: #1F2023;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 13px;
  font-family: Inter, sans-serif;
  color: #ffffff;
}
.linear-input:focus {
  border-color: rgba(76,154,255,0.4);
  outline: none;
}
```

**Status Label**
```css
.linear-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.02em;
  padding: 2px 8px;
  border-radius: 5px;
  text-transform: uppercase;
}
```

## 8. 键盘交互规范

Linear 所有功能必须键盘可达：

| 快捷键 | 操作 |
|--------|------|
| `⌘K` | 全局命令面板 |
| `⌘↵` | 创建 Issue |
| `⌘1-9` | 切换视图 |
| `⌘[` / `⌘]` | 前进/后退 |
| `⌘/` | 帮助菜单 |
| `Esc` | 关闭面板/退出编辑 |
| `Shift+Tab` | 上一个输入框 |

## 9. 使用准则

### Do
- 1px 半透明边框代替阴影定义层级
- 键盘聚焦使用淡蓝光晕（#4C9AFF, 40% 透明度）
- 13px 为正文字号，保持界面紧凑精密
- SF Mono 用于所有 ID、数值、代码字段
- 所有操作提供键盘快捷键（⌘+字母）

### Don't
- 不使用任何形式的 drop-shadow
- 不使用超过 2 种强调色（紫 + 青）
- 不使用大圆角（最大 12px）
- 不依赖鼠标悬浮——hover 状态只是视觉提示
- 不使用动画持续超过 300ms
