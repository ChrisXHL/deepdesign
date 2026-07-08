# Ant Design 设计系统完整规范

> 本文档基于 Ant Design 官方文档（v5/v6）抓取整理，涵盖色彩、排版、间距、圆角、阴影、动效、组件规范、响应式断点及暗色模式等全部设计令牌。

---

## 目录

1. [系统概述](#1-系统概述)
2. [色彩系统](#2-色彩系统)
3. [排版系统](#3-排版系统)
4. [间距系统](#4-间距系统)
5. [尺寸系统](#5-尺寸系统)
6. [圆角规范](#6-圆角规范)
7. [边框与线条](#7-边框与线条)
8. [阴影层级](#8-阴影层级)
9. [动效规范](#9-动效规范)
10. [响应式断点](#10-响应式断点)
11. [Z-Index 层级](#11-z-index-层级)
12. [组件规范](#12-组件规范)
   - [Button 按钮](#121-button-按钮)
   - [Input 输入框](#122-input-输入框)
   - [Table 表格](#123-table-表格)
   - [Form 表单](#124-form-表单)
13. [暗色模式](#13-暗色模式)
14. [Token 三层架构](#14-token-三层架构)

---

## 1. 系统概述

Ant Design 是蚂蚁集团开发的企业级 React UI 组件库，遵循 Ant Design 设计语言。

**核心特性：**
- 企业级 UI 设计，面向 Web 应用
- 60+ 高质量 React 组件
- TypeScript 编写，完整静态类型支持
- 支持数十种语言国际化
- 全方位主题定制能力（Design Token 系统）

**设计价值观：**
- 自然（Natural）— 基于自然规律
- 高效（Performant）— 最小过渡时间
- 简洁（Concise）— 有意义的动画，避免过度装饰

**环境支持：**
- 现代浏览器（Edge / Firefox / Chrome / Safari / Opera，最近 2 个版本）
- 服务端渲染（SSR）
- Electron

---

## 2. 色彩系统

Ant Design 色彩系统分为**系统级**和**产品级**两个层级。系统级定义基础色板、中性色板和数据可视化色板；产品级在此基础上定义产品调性。

色彩模型采用 **HSB（色相/饱和度/明度）** 模型，便于设计师调色时心理预期清晰。

### 2.1 基础色板（12 色系 × 10 阶 = 120 色）

Ant Design 基础色板共 120 色，包含 12 个主色及其衍生色。每个色系有 10 个梯度（色阶 1-10，1 最浅，10 最深）。

> **推荐主色：** 选择色阶第 6 个颜色作为主色。

#### Dust Red / 薄暮红（斗志、奔放）

| 色阶 | Hex 值 |
|------|--------|
| red-1 | `#FFF1F0` |
| red-2 | `#FFCCC7` |
| red-3 | `#FFA39E` |
| red-4 | `#FF7875` |
| red-5 | `#FF4D4F` |
| red-6 | `#F5222D` |
| red-7 | `#CF1322` |
| red-8 | `#A8071A` |
| red-9 | `#820014` |
| red-10 | `#5C0011` |

#### Volcano / 火山色（醒目、澎湃）

| 色阶 | Hex 值 |
|------|--------|
| volcano-1 | `#FFF2E8` |
| volcano-2 | `#FFD8BF` |
| volcano-3 | `#FFBB96` |
| volcano-4 | `#FF9C6E` |
| volcano-5 | `#FF7A45` |
| volcano-6 | `#FA541C` |
| volcano-7 | `#D4380D` |
| volcano-8 | `#AD2102` |
| volcano-9 | `#871400` |
| volcano-10 | `#610B00` |

#### Sunset Orange / 日暮橙（温暖、欢快）

| 色阶 | Hex 值 |
|------|--------|
| orange-1 | `#FFF7E6` |
| orange-2 | `#FFE7BA` |
| orange-3 | `#FFD591` |
| orange-4 | `#FFC069` |
| orange-5 | `#FFA940` |
| orange-6 | `#FA8C16` |
| orange-7 | `#D46B08` |
| orange-8 | `#AD4E00` |
| orange-9 | `#873800` |
| orange-10 | `#612500` |

#### Calendula Gold / 金盏花金（活力、积极）

| 色阶 | Hex 值 |
|------|--------|
| gold-1 | `#FFFBE6` |
| gold-2 | `#FFF1B8` |
| gold-3 | `#FFE58F` |
| gold-4 | `#FFD666` |
| gold-5 | `#FFC53D` |
| gold-6 | `#FAAD14` |
| gold-7 | `#D48806` |
| gold-8 | `#AD6800` |
| gold-9 | `#874D00` |
| gold-10 | `#613400` |

#### Sunrise Yellow / 日出黄（诞生、阳光）

| 色阶 | Hex 值 |
|------|--------|
| yellow-1 | `#FEFFE6` |
| yellow-2 | `#FFFFB8` |
| yellow-3 | `#FFFB8F` |
| yellow-4 | `#FFEC3D` |
| yellow-5 | `#FADB14` |
| yellow-6 | `#D4B106` |
| yellow-7 | `#AD8B00` |
| yellow-8 | `#876800` |
| yellow-9 | `#614700` |
| yellow-10 | `#3D3104` |

#### Lime / 青柠色（自然、活力）

| 色阶 | Hex 值 |
|------|--------|
| lime-1 | `#FCFFE6` |
| lime-2 | `#F4FFB8` |
| lime-3 | `#EAFF8F` |
| lime-4 | `#D3F261` |
| lime-5 | `#BAE637` |
| lime-6 | `#A0D911` |
| lime-7 | `#7CB305` |
| lime-8 | `#5B8C00` |
| lime-9 | `#3F6600` |
| lime-10 | `#254000` |

#### Polar Green / 极光绿（健康、创新）

| 色阶 | Hex 值 |
|------|--------|
| green-1 | `#F6FFED` |
| green-2 | `#D9F7BE` |
| green-3 | `#B7EB8F` |
| green-4 | `#95DE64` |
| green-5 | `#73D13D` |
| green-6 | `#52C41A` |
| green-7 | `#389E0D` |
| green-8 | `#237804` |
| green-9 | `#135200` |
| green-10 | `#092B00` |

#### Cyan / 明青色（希望、坚强）

| 色阶 | Hex 值 |
|------|--------|
| cyan-1 | `#E6FFFB` |
| cyan-2 | `#B5F5EC` |
| cyan-3 | `#87E8DE` |
| cyan-4 | `#5CDBD3` |
| cyan-5 | `#36CFC9` |
| cyan-6 | `#13C2C2` |
| cyan-7 | `#08979C` |
| cyan-8 | `#006D75` |
| cyan-9 | `#00474F` |
| cyan-10 | `#002329` |

#### Daybreak Blue / 拂晓蓝（包容、科技、通用）

| 色阶 | Hex 值 |
|------|--------|
| blue-1 | `#E6F4FF` |
| blue-2 | `#BAE0FF` |
| blue-3 | `#91CAFF` |
| blue-4 | `#69B1FF` |
| blue-5 | `#4096FF` |
| blue-6 | `#1677FF` |
| blue-7 | `#0958D9` |
| blue-8 | `#003EB3` |
| blue-9 | `#002C8C` |
| blue-10 | `#001D66` |

#### Geek Blue / 极客蓝（探索、研究）

| 色阶 | Hex 值 |
|------|--------|
| geekblue-1 | `#F0F5FF` |
| geekblue-2 | `#D6E4FF` |
| geekblue-3 | `#ADC6FF` |
| geekblue-4 | `#85A5FF` |
| geekblue-5 | `#597EF7` |
| geekblue-6 | `#2F54EB` |
| geekblue-7 | `#1D39C4` |
| geekblue-8 | `#10239E` |
| geekblue-9 | `#061178` |
| geekblue-10 | `#030852` |

#### Golden Purple / 酱紫（优雅、浪漫）

| 色阶 | Hex 值 |
|------|--------|
| purple-1 | `#F9F0FF` |
| purple-2 | `#EFDBFF` |
| purple-3 | `#D3ADF7` |
| purple-4 | `#B37FEB` |
| purple-5 | `#9254DE` |
| purple-6 | `#722ED1` |
| purple-7 | `#531DAB` |
| purple-8 | `#391085` |
| purple-9 | `#22075E` |
| purple-10 | `#120338` |

#### French Magenta / 法式洋红（明亮、情感）

| 色阶 | Hex 值 |
|------|--------|
| magenta-1 | `#FFF0F6` |
| magenta-2 | `#FFD6E7` |
| magenta-3 | `#FFADD2` |
| magenta-4 | `#FF85C0` |
| magenta-5 | `#F759AB` |
| magenta-6 | `#EB2F96` |
| magenta-7 | `#C41D7F` |
| magenta-8 | `#9E1068` |
| magenta-9 | `#780650` |
| magenta-10 | `#520339` |

### 2.2 中性色板（Gray）

| 色阶 | Hex 值 |
|------|--------|
| gray-1 | `#FFFFFF` |
| gray-2 | `#FAFAFA` |
| gray-3 | `#F5F5F5` |
| gray-4 | `#F0F0F0` |
| gray-5 | `#D9D9D9` |
| gray-6 | `#BFBFBF` |
| gray-7 | `#8C8C8C` |
| gray-8 | `#595959` |
| gray-9 | `#434343` |
| gray-10 | `#262626` |
| gray-11 | `#1F1F1F` |
| gray-12 | `#141414` |
| gray-13 | `#000000` |

### 2.3 功能色（Seed Token 基础色）

| Token | 描述 | Hex 值 |
|-------|------|--------|
| `colorPrimary` | 品牌主色 | `#1677FF` |
| `colorSuccess` | 成功色 | `#52C41A` |
| `colorWarning` | 警告色 | `#FAAD14` |
| `colorError` | 错误色 | `#FF4D4F` |
| `colorInfo` | 信息色 | `#1677FF` |
| `colorLink` | 超链接色 | `#1677FF` |
| `colorHighlight` | 高亮色 | `#FF4D4F` |
| `colorTextBase` | 文本基础色 | `#000000` |
| `colorBgBase` | 背景基础色 | `#FFFFFF` |
| `colorWhite` | 纯白色（不随主题变化） | `#FFFFFF` |

### 2.4 主色（Primary）渐变体系

| Token | 描述 | Hex 值 |
|-------|------|--------|
| `colorPrimaryBg` | 主色浅背景色 | `#E6F4FF` |
| `colorPrimaryBgHover` | 主色浅背景悬浮色 | `#BAE0FF` |
| `colorPrimaryBorder` | 主色描边色 | `#91CAFF` |
| `colorPrimaryBorderHover` | 主色描边悬浮色 | `#69B1FF` |
| `colorPrimaryHover` | 主色悬浮色 | `#4096FF` |
| `colorPrimaryActive` | 主色激活色 | `#0958D9` |
| `colorPrimaryText` | 主色文本色 | `#1677FF` |
| `colorPrimaryTextHover` | 主色文本悬浮色 | `#4096FF` |
| `colorPrimaryTextActive` | 主色文本激活色 | `#0958D9` |

### 2.5 成功色（Success）渐变体系

| Token | Hex 值 |
|-------|--------|
| `colorSuccessBg` | `#F6FFED` |
| `colorSuccessBgHover` | `#D9F7BE` |
| `colorSuccessBorder` | `#B7EB8F` |
| `colorSuccessBorderHover` | `#95DE64` |
| `colorSuccessHover` | `#95DE64` |
| `colorSuccessActive` | `#389E0D` |
| `colorSuccessText` | `#52C41A` |
| `colorSuccessTextHover` | `#73D13D` |
| `colorSuccessTextActive` | `#389E0D` |

### 2.6 警告色（Warning）渐变体系

| Token | Hex 值 |
|-------|--------|
| `colorWarningBg` | `#FFFBE6` |
| `colorWarningBgHover` | `#FFF1B8` |
| `colorWarningBorder` | `#FFE58F` |
| `colorWarningBorderHover` | `#FFD666` |
| `colorWarningHover` | `#FFD666` |
| `colorWarningActive` | `#D48806` |
| `colorWarningText` | `#FAAD14` |
| `colorWarningTextHover` | `#FFC53D` |
| `colorWarningTextActive` | `#D48806` |

### 2.7 错误色（Error）渐变体系

| Token | Hex 值 |
|-------|--------|
| `colorErrorBg` | `#FFF2F0` |
| `colorErrorBgHover` | `#FFF1F0` |
| `colorErrorBgActive` | `#FFCCC7` |
| `colorErrorBgFilledHover` | `#FFDFDC` |
| `colorErrorBorder` | `#FFCCC7` |
| `colorErrorBorderHover` | `#FFA39E` |
| `colorErrorHover` | `#FF7875` |
| `colorErrorActive` | `#D9363E` |
| `colorErrorText` | `#FF4D4F` |
| `colorErrorTextHover` | `#FF7875` |
| `colorErrorTextActive` | `#D9363E` |

### 2.8 信息色（Info）渐变体系

| Token | Hex 值 |
|-------|--------|
| `colorInfoBg` | `#E6F4FF` |
| `colorInfoBgHover` | `#BAE0FF` |
| `colorInfoBorder` | `#91CAFF` |
| `colorInfoBorderHover` | `#69B1FF` |
| `colorInfoHover` | `#69B1FF` |
| `colorInfoActive` | `#0958D9` |
| `colorInfoText` | `#1677FF` |
| `colorInfoTextHover` | `#4096FF` |
| `colorInfoTextActive` | `#0958D9` |

### 2.9 文本颜色

| Token | 描述 | 值 |
|-------|------|-----|
| `colorText` | 默认文本色 | `rgba(0, 0, 0, 0.88)` |
| `colorTextSecondary` | 二级文本色 | `rgba(0, 0, 0, 0.65)` |
| `colorTextTertiary` | 三级文本色 | `rgba(0, 0, 0, 0.45)` |
| `colorTextQuaternary` | 四级文本色（最浅） | `rgba(0, 0, 0, 0.25)` |
| `colorTextHeading` | 标题文本色 | `rgba(0, 0, 0, 0.88)` |
| `colorTextLabel` | 标签文本色 | `rgba(0, 0, 0, 0.65)` |
| `colorTextDescription` | 描述文本色 | `rgba(0, 0, 0, 0.45)` |
| `colorTextLightSolid` | 高亮文本色（带背景） | `#FFFFFF` |
| `colorTextDisabled` | 禁用态文本色 | `rgba(0, 0, 0, 0.25)` |
| `colorTextPlaceholder` | 占位符文本色 | `rgba(0, 0, 0, 0.25)` |

### 2.10 背景颜色

| Token | 描述 | 值 |
|-------|------|-----|
| `colorBgContainer` | 容器背景色 | `#FFFFFF` |
| `colorBgElevated` | 浮层背景色 | `#FFFFFF` |
| `colorBgLayout` | 页面布局背景色 | `#F5F5F5` |
| `colorBgMask` | 遮罩背景色 | `rgba(0, 0, 0, 0.45)` |
| `colorBgBlur` | 毛玻璃容器背景色 | `transparent` |
| `colorBgSpotlight` | 强关注背景色（Tooltip） | `rgba(0, 0, 0, 0.85)` |
| `colorBgContainerDisabled` | 禁用态容器背景色 | `rgba(0, 0, 0, 0.04)` |
| `colorBgTextActive` | 文本激活态背景色 | `rgba(0, 0, 0, 0.15)` |
| `colorBgTextHover` | 文本悬浮态背景色 | `rgba(0, 0, 0, 0.06)` |
| `colorBgSolid` | 实心背景色 | `rgb(0, 0, 0)` |
| `colorBgSolidActive` | 实心背景激活态 | `rgba(0, 0, 0, 0.95)` |
| `colorBgSolidHover` | 实心背景悬浮态 | `rgba(0, 0, 0, 0.75)` |

### 2.11 边框颜色

| Token | 描述 | 值 |
|-------|------|-----|
| `colorBorder` | 默认边框色 | `#D9D9D9` |
| `colorBorderSecondary` | 次级边框色 | `#F0F0F0` |
| `colorBorderBg` | 元素背景边框色 | `#FFFFFF` |
| `colorBorderDisabled` | 禁用态边框色 | `#D9D9D9` |
| `colorSplit` | 分隔线色 | `rgba(5, 5, 5, 0.06)` |

### 2.12 填充颜色

| Token | 描述 | 值 |
|-------|------|-----|
| `colorFill` | 最深填充色 | `rgba(0, 0, 0, 0.15)` |
| `colorFillSecondary` | 二级填充色 | `rgba(0, 0, 0, 0.06)` |
| `colorFillTertiary` | 三级填充色 | `rgba(0, 0, 0, 0.04)` |
| `colorFillQuaternary` | 四级填充色（最浅） | `rgba(0, 0, 0, 0.02)` |
| `colorFillAlter` | 替代背景色 | `rgba(0, 0, 0, 0.02)` |
| `colorFillContent` | 内容区背景色 | `rgba(0, 0, 0, 0.06)` |
| `colorFillContentHover` | 内容区悬浮背景色 | `rgba(0, 0, 0, 0.15)` |

### 2.13 链接颜色

| Token | 描述 | Hex 值 |
|-------|------|--------|
| `colorLink` | 超链接色 | `#1677FF` |
| `colorLinkHover` | 超链接悬浮色 | `#69B1FF` |
| `colorLinkActive` | 超链接点击色 | `#0958D9` |

### 2.14 控件项背景色

| Token | 值 |
|-------|-----|
| `controlItemBgHover` | `rgba(0, 0, 0, 0.04)` |
| `controlItemBgActive` | `#E6F4FF` |
| `controlItemBgActiveHover` | `#BAE0FF` |
| `controlItemBgActiveDisabled` | `rgba(0, 0, 0, 0.15)` |

### 2.15 其他颜色 Token

| Token | 描述 | 值 |
|-------|------|-----|
| `colorIcon` | 弱操作图标色 | `rgba(0, 0, 0, 0.45)` |
| `colorIconHover` | 弱操作图标悬浮色 | `rgba(0, 0, 0, 0.88)` |
| `colorErrorAffix` | 错误态表单前后缀色 | `#FF4D4F` |
| `colorWarningAffix` | 警告态表单前后缀色 | `#FAAD14` |
| `colorErrorOutline` | 错误态输入框轮廓色 | `rgba(255, 38, 5, 0.06)` |
| `colorWarningOutline` | 警告态输入框轮廓色 | `rgba(255, 215, 5, 0.1)` |
| `controlOutline` | 输入框轮廓色 | `rgba(5, 145, 255, 0.1)` |

### 2.16 不透明度

| Token | 描述 | 值 |
|-------|------|-----|
| `opacityImage` | 图片不透明度 | `1` |
| `opacityLoading` | 加载态不透明度 | `0.65` |

### 2.17 中性色产品级规范

| 场景 | 亮色模式 | 暗色模式 |
|------|----------|----------|
| 标题文本 | `#000000E0` | `#FFFFFFD9` |
| 正文文本 | `#000000E0` | `#FFFFFFD9` |
| 次要文本 | `#000000A6` | `#FFFFFFA6` |
| 禁用文本 | `#00000040` | `#FFFFFF40` |
| 默认边框 | `#D9D9D9` | `#424242` |
| 分隔线 | `#0505050F` | `#FDFDFD1F` |
| 布局背景 | `#F5F5F5` | `#000000` |

---

## 3. 排版系统

### 3.1 字体族

| Token | 描述 | 值 |
|-------|------|-----|
| `fontFamily` | 系统字体族 | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'` |
| `fontFamilyCode` | 代码字体族 | `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace` |

### 3.2 字号阶梯

| Token | 描述 | 值 |
|-------|------|-----|
| `fontSize` | 基础字号 | `14px` |
| `fontSizeSM` | 小字号 | `12px` |
| `fontSizeLG` | 大字号 | `16px` |
| `fontSizeXL` | 超大字号 | `20px` |
| `fontSizeHeading1` | H1 字号 | `38px` |
| `fontSizeHeading2` | H2 字号 | `30px` |
| `fontSizeHeading3` | H3 字号 | `24px` |
| `fontSizeHeading4` | H4 字号 | `20px` |
| `fontSizeHeading5` | H5 字号 | `16px` |
| `fontSizeIcon` | 操作图标字号 | `12px` |

### 3.3 行高

| Token | 描述 | 值 |
|-------|------|-----|
| `lineHeight` | 基础行高 | `1.5715`（即 22px / 14px） |
| `lineHeightLG` | 大文本行高 | `1.5` |
| `lineHeightSM` | 小文本行高 | `1.6667` |
| `lineHeightHeading1` | H1 行高 | `1.2105` |
| `lineHeightHeading2` | H2 行高 | `1.2667` |
| `lineHeightHeading3` | H3 行高 | `1.3333` |
| `lineHeightHeading4` | H4 行高 | `1.4` |
| `lineHeightHeading5` | H5 行高 | `1.5` |

### 3.4 字重

| Token | 描述 | 值 |
|-------|------|-----|
| `fontWeightStrong` | 标题/选中项字重 | `600` |
| `fontWeight` (Button) | 按钮默认字重 | `400` |

### 3.5 链接文本装饰

| Token | 值 |
|-------|-----|
| `linkDecoration` | `none` |
| `linkHoverDecoration` | `none` |
| `linkFocusDecoration` | `none` |

### 3.6 字号—行高对应速查

| 层级 | 字号 | 行高 | 行高像素值 |
|------|------|------|-----------|
| H1 | 38px | 1.2105 | 46px |
| H2 | 30px | 1.2667 | 38px |
| H3 | 24px | 1.3333 | 32px |
| H4 | 20px | 1.4 | 28px |
| H5 | 16px | 1.5 | 24px |
| 正文（基础） | 14px | 1.5715 | 22px |
| 正文（大） | 16px | 1.5 | 24px |
| 正文（小） | 12px | 1.6667 | 20px |

---

## 4. 间距系统

Ant Design 间距系统基于 **4px 基准单位**（非 8px），通过 4 的倍数递增。

### 4.1 Padding 阶梯

| Token | 描述 | 值 |
|-------|------|-----|
| `paddingXXS` | 最小 padding | `4px` |
| `paddingXS` | 超小 padding | `8px` |
| `paddingSM` | 小 padding | `12px` |
| `padding` | 中等 padding | `16px` |
| `paddingMD` | 中大 padding | `20px` |
| `paddingLG` | 大 padding | `24px` |
| `paddingXL` | 超大 padding | `32px` |

### 4.2 内容区 Padding

| Token | 描述 | 值 |
|-------|------|-----|
| `paddingContentHorizontalSM` | 小屏水平内容 padding | `16px` |
| `paddingContentHorizontal` | 水平内容 padding | `16px` |
| `paddingContentHorizontalLG` | 大屏水平内容 padding | `24px` |
| `paddingContentVerticalSM` | 小屏垂直内容 padding | `8px` |
| `paddingContentVertical` | 垂直内容 padding | `12px` |
| `paddingContentVerticalLG` | 大屏垂直内容 padding | `16px` |

### 4.3 控件 Padding

| Token | 描述 | 值 |
|-------|------|-----|
| `controlPaddingHorizontal` | 控件水平 padding | `12px` |
| `controlPaddingHorizontalSM` | 小尺寸控件水平 padding | `8px` |

### 4.4 Margin 阶梯

| Token | 描述 | 值 |
|-------|------|-----|
| `marginXXS` | 最小 margin | `4px` |
| `marginXS` | 小 margin | `8px` |
| `marginSM` | 中小 margin | `12px` |
| `margin` | 中等 margin | `16px` |
| `marginMD` | 中大 margin | `20px` |
| `marginLG` | 大 margin | `24px` |
| `marginXL` | 超大 margin | `32px` |
| `marginXXL` | 最大 margin | `48px` |

### 4.5 间距阶梯速查

```
4 → 8 → 12 → 16 → 20 → 24 → 32 → 48
└── XXS ── XS ── SM ── MD ── LG ── XL ── XXL
```

> **注意：** Ant Design 的间距基准单位为 **4px**（`sizeUnit = 4`），而非 8px。所有间距值均为 4 的倍数。

---

## 5. 尺寸系统

### 5.1 通用尺寸阶梯

| Token | 描述 | 值 |
|-------|------|-----|
| `sizeUnit` | 尺寸变化单位 | `4` |
| `sizeStep` | 尺寸变化基础步长 | `4` |
| `sizeXXS` | 最小尺寸 | `4px` |
| `sizeXS` | 小尺寸 | `8px` |
| `sizeSM` | 中小尺寸 | `12px` |
| `sizeMS` | 中尺寸 | `16px` |
| `size` | 中等尺寸 | `16px` |
| `sizeMD` | 中大尺寸 | `20px` |
| `sizeLG` | 大尺寸 | `24px` |
| `sizeXL` | 超大尺寸 | `32px` |
| `sizeXXL` | 最大尺寸 | `48px` |
| `sizePopupArrow` | 组件箭头尺寸 | `16px` |

### 5.2 控件高度

| Token | 描述 | 值 |
|-------|------|-----|
| `controlHeightXS` | 超小控件高度 | `16px` |
| `controlHeightSM` | 小控件高度 | `24px` |
| `controlHeight` | 默认控件高度 | `32px` |
| `controlHeightLG` | 大控件高度 | `40px` |
| `controlInteractiveSize` | 控件交互尺寸 | `16px` |

### 5.3 控件尺寸速查

| 尺寸档位 | 高度 | 对应场景 |
|----------|------|----------|
| XS | 16px | 极少使用 |
| SM | 24px | 小尺寸输入框/按钮 |
| 默认 | 32px | 标准控件 |
| LG | 40px | 大尺寸输入框/按钮 |

---

## 6. 圆角规范

| Token | 描述 | 值 |
|-------|------|-----|
| `borderRadiusXS` | 超小圆角 | `2px` |
| `borderRadiusSM` | 小圆角 | `4px` |
| `borderRadius` | 基础圆角 | `6px` |
| `borderRadiusLG` | 大圆角 | `8px` |
| `borderRadiusOuter` | 外圆角 | `4px` |

### 圆角使用规则

| 组件场景 | 圆角 Token | 值 |
|----------|-----------|-----|
| 小尺寸按钮/输入框 | `borderRadiusSM` | 4px |
| 默认尺寸按钮/输入框 | `borderRadius` | 6px |
| 大尺寸按钮/输入框 | `borderRadiusLG` | 8px |
| 卡片/模态框 | `borderRadiusLG` | 8px |

---

## 7. 边框与线条

| Token | 描述 | 值 |
|-------|------|-----|
| `lineWidth` | 基础线宽 | `1px` |
| `lineWidthBold` | 粗线宽 | `2px` |
| `lineWidthFocus` | 聚焦态线宽 | `3px` |
| `lineType` | 线条样式 | `solid` |
| `controlOutlineWidth` | 输入框轮廓宽度 | `2px` |

---

## 8. 阴影层级

Ant Design 定义了三个层级的阴影，用于表达不同的高度感。

| Token | 描述 | 值 |
|-------|------|-----|
| `boxShadow` | 基础阴影（二级阴影） | `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)` |
| `boxShadowSecondary` | 次级阴影（与基础相同） | `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)` |
| `boxShadowTertiary` | 三级阴影（最浅） | `0 1px 2px 0 rgba(0,0,0,0.05), 0 1px 6px -1px rgba(0,0,0,0.03), 0 2px 4px 0 rgba(0,0,0,0.03)` |

### 阴影使用场景

| 层级 | 场景 |
|------|------|
| 三级阴影 | 轻微浮起（如卡片悬停） |
| 基础/二级阴影 | 弹出层、下拉菜单、Tooltip |
| 基础阴影 | 模态框、抽屉 |

### 组件级特殊阴影

| Token | 值 | 场景 |
|-------|-----|------|
| `primaryShadow` | `0 2px 0 rgba(5,145,255,0.1)` | Primary 按钮底部阴影 |
| `defaultShadow` | `0 2px 0 rgba(0,0,0,0.02)` | Default 按钮底部阴影 |
| `dangerShadow` | `0 2px 0 rgba(255,38,5,0.06)` | Danger 按钮底部阴影 |

---

## 9. 动效规范

### 9.1 设计原则

1. **自然（Natural）** — 基于自然规律，如按钮按压如水面落叶
2. **高效（Performant）** — 最小过渡时间，消失动画比出现动画更快
3. **简洁（Concise）**— 有意义的动画，避免复杂花哨的效果

### 9.2 运动控制

| Token | 描述 | 值 |
|-------|------|-----|
| `motion` | 是否开启动画 | `true` |
| `motionBase` | 基础动画时长 | `0` |
| `motionUnit` | 动画时长变化单位 | `0.1s` |

### 9.3 运动时长

| Token | 描述 | 值 |
|-------|------|-----|
| `motionDurationFast` | 快速动画 | `0.1s` |
| `motionDurationMid` | 中速动画 | `0.2s` |
| `motionDurationSlow` | 慢速动画 | `0.3s` |

### 9.4 运动曲线（贝塞尔缓动函数）

| Token | 描述 | cubic-bezier 值 |
|-------|------|-----------------|
| `motionEaseInOut` | 缓入缓出 | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
| `motionEaseOut` | 缓出 | `cubic-bezier(0.215, 0.61, 0.355, 1)` |
| `motionEaseIn` | 缓入 | — |
| `motionEaseInOutCirc` | 缓入缓出环形 | `cubic-bezier(0.78, 0.14, 0.15, 0.86)` |
| `motionEaseOutCirc` | 缓出环形 | `cubic-bezier(0.08, 0.82, 0.17, 1)` |
| `motionEaseInQuint` | 缓入五次方 | `cubic-bezier(0.755, 0.05, 0.855, 0.06)` |
| `motionEaseOutQuint` | 缓出五次方 | `cubic-bezier(0.23, 1, 0.32, 1)` |
| `motionEaseInBack` | 缓入回弹 | `cubic-bezier(0.71, -0.46, 0.88, 0.6)` |
| `motionEaseOutBack` | 缓出回弹 | `cubic-bezier(0.12, 0.4, 0.29, 1.46)` |

### 9.5 动效使用建议

| 场景 | 时长 | 曲线 |
|------|------|------|
| 按钮悬停/点击 | `0.2s` | `motionEaseInOut` |
| 输入框聚焦过渡 | `0.3s` | `motionEaseInOut` |
| 弹出层出现 | `0.3s` | `motionEaseOut` / `motionEaseOutBack` |
| 弹出层消失 | `0.2s` | `motionEaseIn` |
| 列表项出现 | `0.3s` | `motionEaseOut` |
| 列表项消失 | `0.1s` | 无延迟，同时消失 |

---

## 10. 响应式断点

Ant Design 采用移动优先的响应式策略，断点基于 `grid` 系统。

### 10.1 断点定义

| 断点 | Token | 最小宽度 | 最大宽度 | 典型设备 |
|------|-------|----------|----------|----------|
| XS | `screenXS` | `480px` | `575px` | 小手机 |
| SM | `screenSM` | `576px` | `767px` | 大手机 |
| MD | `screenMD` | `768px` | `991px` | 平板竖屏 |
| LG | `screenLG` | `992px` | `1199px` | 平板横屏/小桌面 |
| XL | `screenXL` | `1200px` | `1599px` | 桌面 |
| XXL | `screenXXL` | `1600px` | `1919px` | 大桌面 |
| XXXL | `screenXXXL` | `1920px` | — | 超大屏 |

### 10.2 详细 Token

| Token | 值 |
|-------|-----|
| `screenXSMin` | `480` |
| `screenXS` | `480` |
| `screenXSMax` | `575` |
| `screenSMMin` | `576` |
| `screenSM` | `576` |
| `screenSMMax` | `767` |
| `screenMDMin` | `768` |
| `screenMD` | `768` |
| `screenMDMax` | `991` |
| `screenLGMin` | `992` |
| `screenLG` | `992` |
| `screenLGMax` | `1199` |
| `screenXLMin` | `1200` |
| `screenXL` | `1200` |
| `screenXLMax` | `1599` |
| `screenXXLMin` | `1600` |
| `screenXXL` | `1600` |
| `screenXXLMax` | `1919` |
| `screenXXXLMin` | `1920` |
| `screenXXXL` | `1920` |

### 10.3 栅格系统

Ant Design 栅格系统采用 **24 列**布局，通过 `Row` / `Col` 组件实现响应式布局。

```jsx
<Row>
  <Col xs={24} sm={12} md={8} lg={6} xl={4}>...</Col>
</Row>
```

---

## 11. Z-Index 层级

| Token | 描述 | 值 |
|-------|------|-----|
| `zIndexBase` | 所有组件基础 Z 轴值 | `0` |
| `zIndexPopupBase` | 弹出层基础 Z 轴值 | `1000` |

### 组件 Z-Index 层级（参考值）

| 组件 | Z-Index |
|------|---------|
| 基础组件 | 0 |
| Dropdown | 1050 |
| Sticky | 1050 |
| Drawer | 1100 |
| Modal | 1200 |
| Popover | 1030 |
| Tooltip | 1070 |
| Notification | 2000 |
| Message | 2000 |

---

## 12. 组件规范

### 12.1 Button 按钮

#### 按钮类型

| 类型 | 用途 | 视觉表现 |
|------|------|----------|
| `primary` | 主操作按钮 | 实心填充主色 |
| `default` | 常规操作 | 描边 |
| `dashed` | 添加操作 | 虚线描边 |
| `text` | 最次要操作 | 无背景无边框 |
| `link` | 外部链接 | 文字链接样式 |

#### 附加属性

| 属性 | 效果 |
|------|------|
| `danger` | 红色危险样式 |
| `ghost` | 透明背景（用于深色背景） |
| `disabled` | 禁用状态 |
| `loading` | 加载状态 |

#### 按钮尺寸

| 尺寸 | 高度 | 字号 | 水平内边距 | 圆角 |
|------|------|------|-----------|------|
| `large` | 40px | 16px | 15px | 8px |
| `middle`（默认） | 32px | 14px | 15px | 6px |
| `small` | 24px | 14px | 7px | 4px |

#### 按钮形状

| 形状 | 说明 |
|------|------|
| `default` | 矩形圆角 |
| `circle` | 圆形 |
| `round` | 大圆角 |

#### 颜色与变体（v5.13+）

**Color 选项：** `default` / `primary` / `danger` + 预设色（`blue`, `purple`, `cyan`, `green`, `magenta`, `pink`, `red`, `orange`, `yellow`, `volcano`, `geekblue`, `lime`, `gold`）

**Variant 选项：** `outlined` / `dashed` / `solid` / `filled` / `text` / `link`

#### 各状态颜色

**Default 按钮：**

| 状态 | 背景色 | 边框色 | 文字色 |
|------|--------|--------|--------|
| 默认 | `#FFFFFF` | `#D9D9D9` | `rgba(0,0,0,0.88)` |
| 悬停 | `#FFFFFF` | `#4096FF` | `#4096FF` |
| 激活 | `#FFFFFF` | `#0958D9` | `#0958D9` |
| 禁用 | `rgba(0,0,0,0.04)` | — | `rgba(0,0,0,0.25)` |

**Primary 按钮：**

| 状态 | 背景色 | 文字色 |
|------|--------|--------|
| 默认 | `#1677FF` | `#FFFFFF` |
| 悬停 | `#4096FF` | `#FFFFFF` |
| 激活 | `#0958D9` | `#FFFFFF` |
| 禁用 | `rgba(0,0,0,0.04)` | `rgba(0,0,0,0.25)` |

**Text 按钮：**

| 状态 | 背景色 | 文字色 |
|------|--------|--------|
| 默认 | transparent | `rgba(0,0,0,0.88)` |
| 悬停 | `rgba(0,0,0,0.04)` | `rgba(0,0,0,0.88)` |

**Loading 状态：** 透明度 `0.65`

#### 按钮组件 Token 速查

| Token | 值 |
|-------|-----|
| `contentFontSize` | `14` |
| `contentFontSizeLG` | `16` |
| `contentFontSizeSM` | `14` |
| `paddingInline` | `15` |
| `paddingInlineLG` | `15` |
| `paddingInlineSM` | `7` |
| `iconGap` | `8` |
| `fontWeight` | `400` |

---

### 12.2 Input 输入框

#### 尺寸规格

| 尺寸 | 高度 | 字号 | 垂直内边距 | 水平内边距 |
|------|------|------|-----------|-----------|
| `large` | 40px | 16px | 7px | 11px |
| `middle`（默认） | 32px | 14px | 4px | 11px |
| `small` | 24px | 14px | 0px | 7px |

#### 圆角

| 尺寸 | 圆角 |
|------|------|
| 默认 | `borderRadius` = 6px |
| 小 | `borderRadiusSM` = 4px |
| 大 | `borderRadiusLG` = 8px |

#### 状态颜色

| 状态 | 背景色 | 边框色 | 文字色 | 阴影 |
|------|--------|--------|--------|------|
| 默认 | `#FFFFFF` | `#D9D9D9` | `rgba(0,0,0,0.88)` | — |
| 悬停 | `#FFFFFF` | `#4096FF` | — | — |
| 聚焦 | `#FFFFFF` | `#1677FF` | — | `0 0 0 2px rgba(5,145,255,0.1)` |
| 禁用 | `rgba(0,0,0,0.04)` | `#D9D9D9` | `rgba(0,0,0,0.25)` | — |
| 错误 | `#FFF2F0` | `#FF4D4F` | `#FF4D4F` | `0 0 0 2px rgba(255,38,5,0.06)` |
| 警告 | `#FFFBE6` | `#FAAD14` | `#FAAD14` | `0 0 0 2px rgba(255,215,5,0.1)` |

#### 变体

| 变体 | 说明 |
|------|------|
| `outlined`（默认） | 带边框轮廓 |
| `filled` | 填充背景样式 |
| `borderless` | 无边框 |
| `underlined`（v5.24+） | 下划线样式 |

#### 前后置标签

| Token | 值 |
|-------|-----|
| `addonBg` | `rgba(0,0,0,0.02)` |

#### Input 组件 Token 速查

| Token | 值 |
|-------|-----|
| `paddingBlock` | `4` |
| `paddingBlockLG` | `7` |
| `paddingBlockSM` | `0` |
| `paddingInline` | `11` |
| `paddingInlineLG` | `11` |
| `paddingInlineSM` | `7` |
| `inputFontSize` | `14` |
| `inputFontSizeLG` | `16` |
| `inputFontSizeSM` | `14` |

---

### 12.3 Table 表格

#### 尺寸

| 尺寸 | 说明 |
|------|------|
| `middle` | 中等尺寸（默认） |
| `small` | 小尺寸（仅用于 Modal 内） |

#### 表格相关 Token（从全局 Token 推导）

| 场景 | 来源 Token | 值 |
|------|-----------|-----|
| 表头背景色 | `tableHeaderBg` | `#FAFAFA` |
| 行悬停背景色 | `tableRowHoverBg` | `#FAFAFA` |
| 表格边框色 | `colorBorderSecondary` | `#F0F0F0` |
| 表格文字色 | `colorText` | `rgba(0,0,0,0.88)` |
| 表格字号 | `fontSize` | `14px` |
| 表格行高 | `lineHeight` | `1.5715` |

#### 功能特性

| 特性 | 说明 |
|------|------|
| 边框 | `bordered` 属性添加边框 |
| 省略号 | `column.ellipsis` 设置内容省略 |
| 固定列 | `fixed: 'left'` / `fixed: 'right'` |
| 排序 | `sorter` + `sortDirections` |
| 筛选 | `filters` + `onFilter` |
| 树形数据 | `childrenColumnName` + `indentSize` |
| 列合并 | `colSpan` |
| 行合并 | `rowSpan` |
| 总结栏 | `summary` |

---

### 12.4 Form 表单

#### 布局类型

| 布局 | 说明 | 默认 |
|------|------|------|
| `horizontal` | 水平布局（标签与控件横向） | ✅ |
| `vertical` | 垂直布局（标签在控件上方） | — |
| `inline` | 行内布局（表单项水平排列） | — |

#### 表单 Token

| Token | 描述 | 值 |
|-------|------|-----|
| `itemMarginBottom` | 表单项底部间距 | `24px` |
| `inlineItemMarginBottom` | 行内布局底部间距 | `0` |
| `labelHeight` | 标签高度 | `32px` |
| `labelFontSize` | 标签字号 | `14px` |
| `labelColor` | 标签颜色 | `rgba(0,0,0,0.88)` |
| `labelRequiredMarkColor` | 必填标记颜色 | `#FF4D4F` |
| `labelColonMarginInlineEnd` | 冒号右间距 | `8px` |
| `labelColonMarginInlineStart` | 冒号左间距 | `2px` |
| `verticalLabelPadding` | 垂直布局标签 padding | `0 0 8px` |

#### 验证状态

| 状态 | 颜色 |
|------|------|
| `success` | `#52C41A` |
| `warning` | `#FAAD14` |
| `error` | `#FF4D4F` |
| `validating` | — |

#### 表单尺寸

| 尺寸 | 控件高度 |
|------|----------|
| `small` | 24px |
| `medium`（默认） | 32px |
| `large` | 40px |

#### 必填标记

| 选项 | 说明 |
|------|------|
| `true`（默认） | 显示必填星号（`#FF4D4F`） |
| `false` | 不显示 |
| `'optional'` | 在可选字段显示 "(optional)" |

---

## 13. 暗色模式

### 13.1 暗色算法

Ant Design 通过 `theme.darkAlgorithm` 实现暗色模式。算法接收 Seed Token 作为输入，输出适配暗色主题的 Map Token。

```tsx
import { ConfigProvider, theme } from 'antd';

const App = () => (
  <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
    {/* 组件 */}
  </ConfigProvider>
);
```

### 13.2 算法组合

```tsx
// 暗色 + 紧凑模式
const themeConfig = {
  algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
};

// 暗色 + 自定义主色
const themeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#1890ff',
  },
};
```

### 13.3 暗色模式变化规律

| 类别 | 亮色模式 | 暗色模式 |
|------|----------|----------|
| 背景基础色 | `#FFFFFF` | 深色基调（`#141414`） |
| 容器背景 | `#FFFFFF` | 深色（比布局背景稍亮） |
| 浮层背景 | `#FFFFFF` | 比 `colorBgContainer` 稍亮 |
| 页面布局背景 | `#F5F5F5` | 深色 |
| 文字基础色 | `#000000` | 浅色基调（`#FFFFFF`） |
| 默认文字 | `rgba(0,0,0,0.88)` | `rgba(255,255,255,0.85)` |
| 二级文字 | `rgba(0,0,0,0.65)` | `rgba(255,255,255,0.65)` |
| 三级文字 | `rgba(0,0,0,0.45)` | `rgba(255,255,255,0.45)` |
| 边框色 | `#D9D9D9` | 深色边框 |
| 填充色 | `rgba(0,0,0,0.xx)` | `rgba(255,255,255,0.xx)` |
| 分隔线 | `rgba(5,5,5,0.06)` | `rgba(255,255,255,0.06)` |
| 纯白色 | `#FFFFFF` | `#FFFFFF`（不变） |

### 13.4 暗色色板示例（Blue）

以下为 Blue 色系在暗色模式下的色板（背景色 `#141414`）：

| 色阶 | Hex 值 |
|------|--------|
| blue-1 | `#111D2C` |
| blue-2 | `#112A45` |
| blue-3 | `#15395B` |
| blue-4 | `#164C7E` |
| blue-5 | `#1765AD` |
| blue-6 | `#177DDC` |
| blue-7 | `#3C9AE8` |
| blue-8 | `#65B7F3` |
| blue-9 | `#8DCFF8` |
| blue-10 | `#B7E3FA` |

> **暗色色板特点：** 色阶顺序反转——浅色阶变为深色，深色阶变为浅色，以适应深色背景。

### 13.5 暗色模式关键 Token 变化

#### 背景色变化

| Token | 亮色值 | 暗色变化 |
|-------|--------|----------|
| `colorBgBase` | `#FFFFFF` | 深色基调 |
| `colorBgContainer` | `#FFFFFF` | 深色 |
| `colorBgElevated` | `#FFFFFF` | 比 `colorBgContainer` **稍亮** |
| `colorBgLayout` | `#F5F5F5` | 深色 |
| `colorBgMask` | `rgba(0,0,0,0.45)` | 适配暗色 |
| `colorBgContainerDisabled` | `rgba(0,0,0,0.04)` | 适配暗色 |

#### 文字色变化

| Token | 亮色值 | 暗色变化 |
|-------|--------|----------|
| `colorTextBase` | `#000000` | 浅色基调 |
| `colorText` | `rgba(0,0,0,0.88)` | 浅色文字 |
| `colorTextSecondary` | `rgba(0,0,0,0.65)` | 适配暗色 |
| `colorTextTertiary` | `rgba(0,0,0,0.45)` | 适配暗色 |
| `colorTextQuaternary` | `rgba(0,0,0,0.25)` | 适配暗色 |
| `colorTextLightSolid` | `#FFFFFF` | **不变** |

#### 边框/填充色变化

| Token | 亮色值 | 暗色变化 |
|-------|--------|----------|
| `colorBorder` | `#D9D9D9` | 深色边框 |
| `colorBorderSecondary` | `#F0F0F0` | 深色次级边框 |
| `colorFill` | `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` |
| `colorFillSecondary` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.06)` |
| `colorSplit` | `rgba(5,5,5,0.06)` | `rgba(255,255,255,0.06)` |

---

## 14. Token 三层架构

Ant Design 的 Design Token 采用**三层推导结构**：

```
Seed Token（种子令牌）
    ↓ 通过 algorithm 算法推导
Map Token（映射令牌）
    ↓ 进一步推导
Alias Token（别名令牌）
    ↓ 组件消费
Component Token（组件令牌）
```

### 14.1 架构层级说明

| 层级 | 说明 | 示例 |
|------|------|------|
| **Seed Token** | 设计意图的源头，最少的变量 | `colorPrimary`, `fontSize`, `borderRadius` |
| **Map Token** | 从 Seed 派生的梯度变量 | `colorPrimaryBg`, `fontSizeSM`, `borderRadiusLG` |
| **Alias Token** | 用于批量控制组件样式的别名 | `colorLink`, `boxShadow`, `margin` |
| **Component Token** | 组件级别的专用令牌 | `button paddingInline`, `input paddingBlock` |

### 14.2 预设算法

| 算法 | 说明 |
|------|------|
| `theme.defaultAlgorithm` | 默认算法（亮色） |
| `theme.darkAlgorithm` | 暗色算法 |
| `theme.compactAlgorithm` | 紧凑算法 |

算法可单独使用，也可任意组合（如暗色 + 紧凑）。

### 14.3 Seed Token 完整列表

以下为全部 Seed Token，是整个设计系统的最基础变量：

| Seed Token | 默认值 | 说明 |
|------------|--------|------|
| `colorPrimary` | `#1677FF` | 品牌主色 |
| `colorSuccess` | `#52C41A` | 成功色 |
| `colorWarning` | `#FAAD14` | 警告色 |
| `colorError` | `#FF4D4F` | 错误色 |
| `colorInfo` | `#1677FF` | 信息色 |
| `colorTextBase` | `#000` | 文本基础色 |
| `colorBgBase` | `#FFF` | 背景基础色 |
| `fontSize` | `14` | 基础字号 |
| `lineWidth` | `1` | 基础线宽 |
| `lineHeight` | `1.5715` | 基础行高 |
| `borderRadius` | `6` | 基础圆角 |
| `sizeUnit` | `4` | 尺寸单位 |
| `sizeStep` | `4` | 尺寸步长 |
| `motionUnit` | `0.1` | 动画单位 |
| `motionBase` | `0` | 动画基础值 |
| `fontFamily` | 系统字体栈 | 字体族 |
| `controlHeight` | `32` | 控件高度 |

### 14.4 紧凑算法（CompactAlgorithm）

紧凑算法会缩小所有尺寸相关的 Token 值，适合信息密度高的后台界面：

```tsx
const themeConfig = {
  algorithm: theme.compactAlgorithm,
};
```

紧凑算法主要影响：
- 控件高度减小（如 `controlHeight` 从 32 → 28）
- Padding 值减小
- 字号可能略微缩小

---

## 附录：编程使用方式

### 安装色彩包

```bash
npm install @ant-design/colors
```

### 使用色板

```js
import { blue, presetPalettes, presetDarkPalettes, generate } from '@ant-design/colors';

// 获取蓝色色板（10阶）
console.log(blue);
// ['#E6F4FF', '#BAE0FF', '#91CAFF', '#69B1FF', '#4096FF', '#1677FF', '#0958D9', '#003EB3', '#002C8C', '#001D66']

// 获取主色
console.log(blue.primary); // '#1677FF'

// 获取全部预设色板
console.log(presetPalettes);
// { red, volcano, orange, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta }

// 获取暗色色板
console.log(presetDarkPalettes);

// 根据任意颜色生成色板
const colors = generate('#1890ff');
// ['#E6F7FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']

// 生成暗色色板
const darkColors = generate('#1890ff', {
  theme: 'dark',
  backgroundColor: '#141414',
});
// ['#111D2C', '#112A45', '#15395B', '#164C7E', '#1765AD', '#177DDC', '#3C9AE8', '#65B7F3', '#8DCFF8', '#B7E3FA']
```

### 使用主题令牌

```tsx
import { ConfigProvider, theme } from 'antd';

const App = () => (
  <ConfigProvider
    theme={{
      // 基础令牌覆盖
      token: {
        colorPrimary: '#1677ff',
        borderRadius: 6,
        fontSize: 14,
      },
      // 算法
      algorithm: theme.defaultAlgorithm,
      // 组件级令牌覆盖
      components: {
        Button: {
          colorPrimary: '#00b96b',
          algorithm: true,
        },
      },
    }}
  >
    {/* 应用 */}
  </ConfigProvider>
);
```

---

> **文档来源：** Ant Design 官方文档 https://ant.design  
> **版本：** Ant Design 5.x / 6.x  
> **整理日期：** 2026-07-08
