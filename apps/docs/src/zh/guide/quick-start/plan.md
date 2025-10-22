# Quick Start 2 文档编写计划

本计划用于重写 Quick Start，目标是“复制即可运行”，以清晰、统一、可维护为核心。以下为写作原则、内容结构、示例规范与交付流程。

## 1. 核心目标与写作原则
- 快速成功：每页提供最小可运行示例，复制即可看到画布。
- 统一与正确：统一导入路径、术语与用法，避免歧义与隐式依赖。
- 可维护：所有示例源自 demo 或 e2e，保证与代码库同步。
- 渐进学习：从安装 → 基础画布 → 工具 → 表单 → 数据与类型 → 常见问题。
- 明确弃用：标注已弃用/不推荐的 API，并给出新用法。

## 2. 目标读者与前置要求
- 目标读者：第一次接触 Flowgram 的前端工程师；需要快速落地的团队。
- 前置要求：能运行一个 Vite/React 项目；能阅读 TypeScript 基本类型。

## 3. 目录结构（quick-start-2）
- `install.mdx`：安装与创建项目，样式引入与运行命令。
- `free-layout-basic.mdx`：自由布局最小示例（含工具与表单）。
- `fixed-layout-basic.mdx`：固定布局最小示例（含工具与表单）。
- `tools.mdx`：画布工具（zoom、fitView、autoLayout、changeLayout）。
- `node-engine-basic.mdx`：节点表单引擎的最小用法与校验触发。
- `data-and-types.mdx`：文档/节点/线条/端口数据结构与关键类型。
- `faq.mdx`：常见错误速查与迁移提示。

说明：以上页名为计划建议，可根据导航需求调整；本计划聚焦于“内容应该如何编写与组织”。

## 4. 统一导入与版本规范
- UI/Provider/工具：从各自布局的编辑器包导入。
  - 自由布局：`@flowgram.ai/free-layout-editor`
  - 固定布局：`@flowgram.ai/fixed-layout-editor`
- 表单与校验：从 `@flowgram.ai/editor` 导入（统一入口）。
  - 例如：`Field`, `ValidateTrigger`, `useField`, `useWatch`
- 类型（仅在需要时）：直接用编辑器包 re-export 的类型即可。
  - 自由布局：`WorkflowNodeRegistry`
  - 固定布局：`FlowNodeRegistry`
- 明确弃用：不再在示例中直接调用 `document.fitView()`，统一用 `tools.fitView()`。

## 5. 页面模板（每页必须包含）
- 学习目标：读完本页你将解决什么问题。
- 前置条件：需安装哪些包、准备哪些文件。
- 最小可运行示例：最短代码片段（含样式引入与容器大小）。
- 关键点解释：本页涉及的 3–5 个核心概念/API。
- 常见坑：1–3 条易错点与规避方式。
- 下一步：继续学习的页面链接与实践建议。

## 6. 最小示例的统一规范
- 必须引入样式：`import '@flowgram.ai/<layout>-editor/index.css'`。
- 必须渲染容器：`<EditorRenderer className="demo-editor" />` 或设置父容器高度。
- 使用 Provider：`<FreeLayoutEditorProvider>` 或 `<FixedLayoutEditorProvider>`。
- 首屏自适应视区：`onAllLayersRendered: (ctx) => ctx.tools.fitView(true)`。
- Tools 用法：
  - 自由布局：`tools.autoLayout()`（默认随 preset 提供）、`tools.fitView()`。
  - 固定布局：`tools.fitView()`；`usePlaygroundTools().changeLayout()` 切换横/纵布局。
- 表单引擎最小用法：
  - 在节点注册中使用 `formMeta`，`validateTrigger: ValidateTrigger.onChange`；
  - 表单渲染用 `Field`（从 `@flowgram.ai/editor` 导入）。

## 7. 数据结构与端口（只在需要处轻提示）
- 文档数据（自由布局）：`nodes` + `edges`，示例包含最小三节点两边。
- 文档数据（固定布局）：树形 `nodes`，可包含 `blocks`。
- 端口（自由布局）：
  - 默认端口：`defaultPorts: [{ type: 'output' }]`
  - 动态端口：DOM 上添加 `data-port-id`, `data-port-type`, `data-port-location`（`top|right|bottom|left`）。
  - 在 Quick Start 中只提示与链接，详解放入 Ports 章节（后续概念文档）。

## 8. 常见坑与规避
- 未引入样式导致画布不可见：务必在示例顶部引入 `index.css`。
- 错误调用 `document.fitView()`：统一通过 `tools.fitView()`。
- 表单组件未导入：`Field`、`ValidateTrigger` 统一从 `@flowgram.ai/editor` 导入。
- 拼写错误：`document`（避免写成 `docuemnt`）、`data-port-location`（避免 `righ`）。

## 9. 示例来源与质量保障
- 所有示例代码从 `apps/demo-*` 或 `e2e` 测试选取/提炼，避免手写偏差。
- 每次文档更新需验证：本地启动 demo，确保示例可复制运行。
- 代码片段带有文件名说明与关键 import，保证独立复制即可运行。

## 10. 编写顺序与交付里程碑
1) 搭建 `install.mdx`：包含 npx 创建项目、样式引入、启动命令。
2) 完成 `free-layout-basic.mdx`：最小画布 + Tools + 表单渲染。
3) 完成 `fixed-layout-basic.mdx`：最小画布 + Tools + 布局切换。
4) 编写 `tools.mdx`：统一说明 zoom/fitView/autoLayout/changeLayout 的来源与用法。
5) 编写 `node-engine-basic.mdx`：`formMeta`、校验触发、`Field` 渲染的最小例子。
6) 编写 `data-and-types.mdx`：以 1 页“速览”形式呈现关键结构（更深入放概念区）。
7) 编写 `faq.mdx`：收敛所有踩坑与迁移提示。

## 11. 维护策略
- 示例更新：优先修改 demo/e2e，再同步文档引用，保证一致性。
- API 变更：在计划页维护一份“弃用对照表”，更新到 FAQ 与相关页面。
- 链接策略：每页底部提供 2–3 个“下一步”链接，形成学习路径。

---

### 页面骨架（通用模板）
- 目标：一句话说明本页解决的核心问题。
- 前置：所需包与最小项目结构。
- 代码：最小可运行示例（含样式、Provider、Renderer、工具）。
- 解释：关键 API 的 3–5 个要点。
- 坑点：本页相关的 1–3 个常见错误与规避方式。
- 下一步：建议阅读的后续页面与实践任务。

### 统一导入示例（自由布局）
```tsx
import {
  FreeLayoutEditorProvider,
  EditorRenderer,
  usePlaygroundTools,
  useClientContext,
  WorkflowNodeRenderer,
} from '@flowgram.ai/free-layout-editor';
import { Field, ValidateTrigger } from '@flowgram.ai/editor';
import '@flowgram.ai/free-layout-editor/index.css';
```

### 统一导入示例（固定布局）
```tsx
import {
  FixedLayoutEditorProvider,
  EditorRenderer,
  usePlaygroundTools,
  useClientContext,
} from '@flowgram.ai/fixed-layout-editor';
import { Field, ValidateTrigger } from '@flowgram.ai/editor';
import '@flowgram.ai/fixed-layout-editor/index.css';
```

### 首屏自适应视区示例
```ts
onAllLayersRendered: (ctx) => ctx.tools.fitView(true)
```

### 动态端口属性（自由布局）
```html
<div
  data-port-id="my-port"
  data-port-type="output"
  data-port-location="right"
/>
```

> 本计划为重写的约束与蓝图，后续将按上述里程碑依次交付页面内容。