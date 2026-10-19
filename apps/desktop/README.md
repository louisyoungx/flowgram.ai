# FlowGram Desktop

围绕工作流搭建、试运行和复用的桌面 Agent 工作台。项目是一份有真实目录的工作流工程。工作流、会话与运行分别导航；会话可以引用多个流程，手动运行独立于会话。

前端使用 React 19、TypeScript、Vite、Tailwind CSS 4、Radix UI 和 Lucide。FlowGram 提供真实画布。Tauri 2 仅提供桌面窗口和后端进程托管。

业务后端、Agent Runtime、Workflow Runtime 和 Workflow Tools 均在独立 Rust crate `apps/desktop-backend` 中，能够脱离 UI 运行。

## 项目与工作区

新建项目选择工程目录；留空时使用应用管理的位置。打开项目选择包含 `flowgram.project.json` 的目录。工作流文档位于 `workflows/<workflowId>/workflow.json`，共享文件位于 `assets/`，会话和运行数据库位于 `.flowgram/state.sqlite`。项目可以独立重新打开，模型连接仍由应用统一管理，不写入工程。

单一项目侧栏顶部提供项目切换、搜索和收起；下方依次为主页、新建会话、新建工作流、搜索、运行记录与项目资源，再同时展示工作流和会话列表，两组均可直接新建。主页承载项目的工作流总览与模板入口；分组标题不再承担页面跳转。设置固定在底部。项目新建、打开与详情集中在项目菜单，工程路径仅在详情中显示。

会话在左，按需工作台在右。会话成功读取、创建、修改、校验或运行具体流程后自动在右侧打开；目录查询和历史恢复不会撑开画布。手动选文档和收起后，本轮后台更新不抢视图。每段会话独立恢复文档与开合状态，切换画布不修改输入引用。侧栏或搜索打开流程进入独立编辑器，不带会话；“让助手修改”明确选择新会话或已有会话，并附加流程引用。

手动运行不附加会话，历史提供结果、执行时主流程定义与编辑当前流程的独立入口。切换入口或项目保留已挂载画布、草稿与队列。项目打开失败留在打开界面，可重试，成功取得工程后才写入最近项目。

原型升级不兼容旧 Task 数据模型：服务启动清理应用旧原型数据库，前端清理旧对象选择和草稿键；保留模型连接、密钥及语言、主题、动效和布局偏好。新工程和会话不自动填充演示数据。

工程模型完整目标见 [信息架构](../../design/agent-workflow-app-information-architecture.md)。当前尚未实现项目复制 / 导出、嵌套文件夹整理、完整依赖发布包、资源绑定和产物库；执行快照目前仅覆盖主流程或单节点定义，不应视为可复现的发布版本。

## 语言

在「设置 → 通用 → 界面语言」选择跟随系统、English 或简体中文，立即生效并保存在本机。未设置时跟随系统；不支持的系统语言使用英文。切换语言保留未发送输入、节点编辑状态与画布视口，不修改用户内容或已保存的工作流。

Agent 默认指令位于 `apps/desktop-backend/prompts/`，系统提示词、工具定义、共享节点契约与运行诊断使用英文。助手按照用户消息或明确指令选择回复语言，与界面语言独立。新增界面文案补齐 `src/lib/locales/messages.json`，并保持 `localized` 的展示字段边界；禁止翻译执行字段、操作枚举、端口 ID 和用户内容。

## 开发

需要仓库指定的 Node.js / pnpm、Rust stable（支持 edition 2024）及 Tauri 对应平台的编译环境。先在仓库根目录运行：

```sh
node common/scripts/install-run-rush.js install
node common/scripts/install-run-rush.js build --to @flowgram.ai/free-layout-editor
```

桌面开发，在本目录运行：

```sh
node ../../common/scripts/install-run-rushx.js desktop
```

此命令编译 Rust 服务、准备 sidecar、启动 Vite 和 Tauri。首次打开设置，连接兼容 Responses API 的模型服务。模型凭证只存储在本机 Rust 服务的数据目录中，前端不会读取已保存的模型密钥。

只开发前端时，在仓库根目录启动服务：

```sh
FLOWGRAM_DATA_DIR="$PWD/.flowgram-local" cargo run -p flowgram-desktop-backend
```

另一个终端进入本目录：

```sh
node ../../common/scripts/install-run-rushx.js dev
```

浏览器访问 `http://127.0.0.1:1420`。Vite 在本机代理 API，并从 `.flowgram-local/connection.json` 读取地址与授权。自定义服务连接文件可设置 `FLOWGRAM_CONNECTION_FILE`。

## 构建与验证

```sh
# 本目录
node ../../common/scripts/install-run-rushx.js lint
node ../../common/scripts/install-run-rushx.js test
node ../../common/scripts/install-run-rushx.js build
node ../../common/scripts/install-run-rushx.js desktop:build

# 仓库根目录
cargo test -p flowgram-desktop-backend
cargo clippy -p flowgram-desktop-backend --all-targets -- -D warnings
```

macOS App 生成在 `target/release/bundle/macos/FlowGram.app`。当前包供本地开发验证，尚未配置发布签名、公证与自动更新。

## 当前可用范围

- 新建 / 打开工程目录，切换项目恢复各自的工作区；工作流、会话、运行、资源分别导航，项目内搜索；独立设置页面，包含模型、外观、动效、MCP 和快捷键。
- 按轮次组织流式回复和工具调用；运行中内联展示，连续工具合为摘要，按需逐层展开调用与原始结果。正常完成收起过程，保留最终回复与成果；失败、中断或最新无最终回复时保留过程。输入框两行起步并自动增高，手动展开详情不触发尾部跳转。
- 运行中继续输入：下一轮待办、本轮补充、编辑或移除待办、停止后暂停与明确继续。补充在安全边界接收，刷新和重连恢复服务端状态。
- 可拖拽并记忆尺寸的侧栏、对话、节点配置和运行结果；官方 FlowGram 标志。
- 自然语言创建、读取、保存、校验和试运行工作流。
- FlowGram 画布、节点名称编辑和连线；注册定义驱动的节点配置、输出与测试页签、展开编辑、分类节点库、操作搜索与常用节点；草稿自动保存和版本冲突检测。
- Rust 执行 15 类节点：流程输入输出、变量、文本模板、JSON 解析与生成、文本、列表、LLM、Agent、HTTP、子工作流、条件、循环、等待。
- 29 个扩展原子节点：对象映射/选择/合并/提取/默认值/转换/JSON/校验；12 种列表操作；文本处理/正则/模板；数学/日期/编码/哈希；文档分块。全部接入配置、输出、单节点测试和完整流程执行。
- 结构化控制流：多路选择（首个/全部命中）、并行分叉、互斥归并、并行汇合（全部/首个成功/成功数达标）、串行/并发遍历、条件循环、break/continue。支持循环与分支嵌套，后端校验端口和作用域；画布仅使用显式静态端口。
- 执行实例记录父执行、分支路径、循环轮次和作用域；面板按实例选择样本。完整运行保存冻结的图定义。
- 四个可运行模板：清理文本、解析客户数据、列表去重、内容摘要。HTTP 支持 GET / POST / PUT / PATCH / DELETE / HEAD、Query 参数、请求头与请求体。
- 工作流定义保存在工程文件中；项目内 SQLite 持久化会话、运行、执行时主流程定义和有序事件；SSE 推送、重连补发、取消、运行结果和节点轨迹。
- MCP Server 对外复用相同的 Workflow Tools。

现有节点统一使用共享取值、变量选择、字段映射、Schema 和条件编辑器；未完成的输入在会话中保留。节点测试使用独立 Rust 接口和正式执行器，只执行当前节点，支持取消、超时、测试快照和旧配置提示；同一能力通过 test_node Workflow Tool 向 MCP 暴露。工作流内 Agent 复用只读工具，最多 8 步；外部 Agent 通过 MCP Server 复用完整工具集。表达式、Code、断点续跑、审批、MCP Client 与团队协作尚未实现。服务重启会将未完成运行标记为中断，不自动重放外部操作。

遍历最多 1000 项；每个并行作用域最多 32 个分支，并发执行器总上限为每次运行 32 个叶节点。图最多 1000 个节点、16 层子流程，运行最多 10000 次节点执行；条件循环最多 1000 轮，并受节点超时限制。HTTP 响应限制 2 MB，模型响应限制 8 MB，单轮 Agent 最多 12 次模型请求。普通路径串行，显式分叉和并发遍历才创建并发作用域。

## 原子节点契约

扩展节点的公共定义在 [atomic-nodes.json](../desktop-backend/catalog/atomic-nodes.json)，控制节点在 [control-nodes.json](../desktop-backend/catalog/control-nodes.json)。Rust 内嵌同一份定义，前端通过注册适配器生成配置面板、默认值、搜索和输出结构。`GET /api/nodes` 返回目录；`list_node_types` Workflow Tool 默认返回精简列表，传入 `nodeType` 后返回该节点的完整契约，避免向模型一次注入全部字段。

`inputsValues.*` 字段使用固定值、引用或文本模板绑定；`mapping`、`predicate`、`keys`、`metrics` 等结构配置直接保存在 `data` 下。操作枚举必须静态配置，不能由变量或测试样本覆盖。`list.filter` 和 `list.map` 在每项执行时提供 `item` 与从 0 开始的 `index`，不会提前解析这些局部引用；AND/OR 条件按顺序短路求值。

路径支持点路径、JSON Pointer 和提取节点中的 `*` 通配符，不执行脚本。字段缺失与 null 分开处理，只有默认值和存在性判断允许显式处理缺失；未执行的上游节点仍然报错。列表结果仍是一次节点激活，不会隐式执行下游多次。列表最多 10000 项，节点输入输出最多 2 MB；关联和映射在展开过程中检查结果预算。

当前日期节点使用显式 IANA 时区（默认 UTC）；日/月/年按日历计算，夏令时歧义报错。编码和哈希支持 UTF-8 文本；文件、HMAC 凭证资源和 Token 分块没有伪装成可用选项。Schema 使用内联定义，不加载远程引用。文本模板采用有预算的 [MiniJinja](https://docs.rs/minijinja/2/)，HTML 模式默认转义；正则使用受限的 [regex](https://docs.rs/regex/1/)，文本截取使用 [Unicode 字素簇](https://docs.rs/unicode-segmentation/1/)。

## 控制流约束

分叉的出口和汇合的入口使用稳定分支 ID；改名和重排不改变连线。`sourcePortID`、`targetPortID` 都进入后端图模型和测试快照签名。普通节点的同一出口只能连接一条路径；需要多路执行时使用并行分叉。每个结构化分叉绑定一个对应汇合，分支不可在汇合前交叉，也不能从外部进入其内部。

`control.switch` 使用 `branches[{id,label,predicate}]`、`mode=first|all`、`joinId`；固定 `else` 出口。`first` 对应 `control.merge-branches`，`all` 对应 `control.join`。汇合设置 `forkId`，入边的 `targetPortID` 必须匹配来源分支。`mappings[branchId]` 按所选分支作用域求值；不设置映射时返回该路径末尾节点的输出。互斥归并校验统一输出 Schema；并行汇合按分支 ID 保存状态、输出或错误，提前达标后停止派发并取消剩余工作。已发生的外部副作用不会撤销。

`loop` 配置 `mode=serial|parallel`、`concurrency`、`errorMode=fail|collect|skip`；收集模式保留失败项空位，移除模式仍保留错误记录的原始索引。`control.repeat` 使用 `initialState`、`stateSchema`、`stateUpdates`、退出 `predicate`、`check=before|after`、`maxIterations`；轮内引用 `state/index`。达到次数上限按失败处理。break/continue 仅作用于最近的串行循环；穿过并行作用域的控制信号在运行前被拒绝。continue 跳过当前轮结果收集；条件循环的控制节点可显式返回下一轮状态。

分支、循环局部值不能直接泄漏到外层；必须通过归并、汇合或循环结果映射导出。循环内节点的历史样本按执行实例选择，默认外层样本不包含某一轮的最后一次输出。汇合节点不能独立测试，完整试运行使用正式作用域。服务重启恢复、通用 Retry/Catch、持久化等待与子工作流固定发布版本仍是未实现能力；冻结图定义不代表可恢复执行。

界面与动效遵循 [桌面设计规范](../../design/desktop-design-system.md)，后续 UI 修改应一起维护该规范并完成截图验收。

轮次交互遵循 [对话信息架构](../../design/conversation-information-architecture.md)。当前已实现基础生命周期和输入投递；询问、审批、工作流差异和检查点恢复仍待后续迭代。
