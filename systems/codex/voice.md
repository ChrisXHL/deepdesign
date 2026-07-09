# Codex (OpenAI) 语言风格系统 · Voice & Tone

> **一句话人格**：一位不废话的资深工程师同事，用大白话告诉你"它能替你干什么"，用真实数字证明，绝不吹。

Codex 的文案和它的设计系统一样——高对比、零装饰。语言是英文原生（面向全球开发者），核心是**功能直给 + 动词开头 + 具体数字**，把"营销"降到最低，让开发者觉得"这是同行在跟我说话"，而不是市场部在推销。把这套规则丢进 prompt，就能产出这种"克制、可信、开发者同侪"的调性。

> 说明：Codex 面向开发者，母语文案为**英文**。下方例句保留官网英文原文（这是"去 AI 味"的锚点）；写中文版时，沿用同一套语气——动词开头、给数字、不堆形容词。

---

## 一、人格轴

| 维度 | 取值 | 说明 |
|---|---|---|
| 营销 ↔ 事实 | **事实** | 陈述能力，不做承诺。用"it can help you…"而非"revolutionize your workflow"。 |
| 抽象 ↔ 具体 | **具体** | 永远给动作、给场景、给数字（"cutting iteration time by 30–50%"）。 |
| 华丽 ↔ 朴素 | **朴素** | 几乎不用形容词。名词 + 动词就能说完的，绝不加副词。 |
| 居高 ↔ 同侪 | **同侪** | 像资深工程师对同行说话，默认你懂上下文，不解释常识。 |
| 情绪 ↔ 冷静 | **冷静** | 不用感叹号，不制造兴奋，让能力本身说话。 |

---

## 二、语气基调

- **动词开头，直给能力**：`Write code:` / `build and ship` / `Describe what you want to build`。句子从动作起手，读者立刻知道"我能拿它做什么"。
- **一句话定义，不绕**：`One agent for everywhere you code.` —— 一个短句说清定位，不铺垫。
- **让用户证言带数字**：不自夸，把最强的话交给客户说，并且一定带可验证的量化（"ship in a weekend what previously took a quarter"）。

---

## 三、人称与句式

- **对读者**：`you / your`，直接、平等。
- **自称**：`Codex` 作主语（"Codex generates code…" / "Codex handled the refactor"），把产品当成一个会干活的"人"。
- **招牌句式——冒号定义法**：`能力动词 + 冒号 + 一句话展开`。
  - `Write code: Describe what you want to build, and Codex generates code that matches your intent.`
- **短句 + 破折号收束**：用 `—powered by ChatGPT` 这类破折号补语，干脆地补一个关键限定。

---

## 四、遣词偏好

**爱用**
- 动作动词：build、ship、write、refactor、handle、generate
- 具体名词：agent、codebase、refactor、test generation、intent
- 可验证的量化：`30–50%`、`in a weekend`、`on schedule`
- 定位式短断言：`One agent for everywhere you code.`

**禁用（一出现就是 AI 腔 / 营销腔）**
- ❌ 空洞最高级：`revolutionary`、`cutting-edge`、`state-of-the-art`、`seamless`
- ❌ 情绪化承诺：`unleash your potential`、`supercharge your workflow`
- ❌ 副词堆砌：`incredibly powerful`、`blazingly fast`
- ❌ 感叹号、Emoji、营销大字

---

## 五、Do / Don't

✅ **Do**
- 用动词开头描述"它替你做什么"
- 给具体场景和真实数字
- 一句话说清定位，然后停
- 把最强的背书交给带数据的客户证言

❌ **Don't**
- 不要用形容词的最高级自证厉害
- 不要承诺"改变一切"，只陈述"能做什么"
- 不要向开发者解释常识、居高临下
- 不要制造兴奋感——冷静本身就是可信

---

## 六、真实例句（openai.com/codex 官网原文）

- **定位**：`One agent for everywhere you code.`
- **一句话介绍**：`A coding agent that helps you build and ship with AI—powered by ChatGPT.`
- **能力（冒号定义法）**：`Write code: Describe what you want to build, and Codex generates code that matches your intent, adapting to your existing project structure and conventions.`
- **客户证言（带数字）**：
  - `"Codex transformed how we build by cutting early iteration time by 30–50%, freeing engineers to focus on system design and high-leverage decisions."`
  - `"With Codex, we ship in a weekend what previously took a quarter."`
  - `"Codex handled the refactor and test generation, delivering fully tested code I handed back fast—keeping the feature on schedule without added risk."`

---

## 七、改写示例（AI 腔 → Codex 腔）

**产品定位**
- ❌ AI 腔：`Codex is a revolutionary AI-powered platform that seamlessly supercharges your entire development workflow!`
- ✅ Codex 腔：`One agent for everywhere you code.`

**能力介绍**
- ❌ AI 腔：`Leverage the power of cutting-edge AI to unlock unprecedented productivity in your coding journey.`
- ✅ Codex 腔：`Describe what you want to build, and Codex generates code that matches your intent.`

**中文版（沿用同一套语气：动词开头、给数字、不堆形容词）**
- ❌ AI 腔：「Codex 是一款革命性的 AI 编程助手，为您带来前所未有的高效开发体验，全面赋能您的工作流。」
- ✅ Codex 腔：「一个 agent，管到你写代码的每个地方。描述你想做什么，Codex 按你的意图生成代码，并贴合你现有的项目结构。」
