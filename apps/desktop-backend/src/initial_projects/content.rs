use super::{graphs, history::Walkthrough};
use crate::{
    error::{Error, Result},
    store::Store,
};
use serde_json::{Value, json};

#[derive(Clone, Copy)]
pub(super) struct Copy(bool);
impl Copy {
    pub fn text(self, zh: &str, en: &str) -> String {
        if self.0 { zh } else { en }.into()
    }
}
pub(super) struct Scenario {
    pub name: String,
    copy: Copy,
    kind: usize,
}
pub(super) fn scenarios(locale: &str) -> Vec<Scenario> {
    let copy = Copy(locale == "zh-CN");
    [
        ("示例 · 订单运营", "Example · Order operations"),
        ("示例 · 内容运营", "Example · Content operations"),
        ("示例 · 客户支持", "Example · Customer support"),
    ]
    .into_iter()
    .enumerate()
    .map(|(kind, (zh, en))| Scenario {
        name: copy.text(zh, en),
        copy,
        kind,
    })
    .collect()
}
struct Blueprint {
    child: Option<String>,
    schema: Value,
    input: Value,
    name: String,
    prompt: String,
    answer: String,
    followup: String,
    followup_answer: String,
}
pub(super) async fn populate(store: &Store, project: &str, scenario: Scenario) -> Result<()> {
    let l = scenario.copy;
    let Blueprint { child, schema, input, name, prompt, answer, followup, followup_answer } = match scenario.kind {
        0=>{
            let worker=store.create_workflow(project,&l.text("单笔订单 · 库存与金额分流","Single order · Stock and amount routing"),graphs::order_route(l)).await?;
            Blueprint {
                child: Some(worker.id.clone()),
                schema: graphs::order_batch(l,&worker.id),
                input: json!({"orders":graphs::orders()}),
                name: l.text("批量订单 · 去重、分流与汇总","Batch orders · Deduplicate, route and summarize"),
                prompt: l.text("用示例订单搭建批处理：按订单号去重，逐笔判断缺货和大额订单，最后汇总。","Build a batch workflow from sample orders: deduplicate order IDs, route out-of-stock and high-value orders, and summarize the results."),
                answer: l.text("已用示例数据完成试运行：4 条输入去掉 1 条重复订单，3 条订单分别进入可履约、大额复核、缺货等待。\n\n这个流程使用有界并行循环调用单笔订单子流程，分支结果再按状态汇总。你可以打开右侧工作流，修改分支阈值后重新运行。这里没有调用真实订单系统，也没有产生外部业务写入。","The sample run removed one duplicate from four inputs. Three orders routed to ready, review, and backorder.\n\nA bounded parallel loop calls the single-order workflow; results are grouped by status. Open the workflow to change thresholds and rerun it. No real order system was contacted and no external business data was changed."),
                followup: l.text("单笔订单的分叉和循环之间是什么关系？","How do single-order branches relate to the loop?"),
                followup_answer: l.text("循环负责逐笔调度，单笔子流程负责业务决策。缺货分支先判断，大额分支随后判断，其余走默认出口；对应的合并节点只接收选中的分支。\n\n每一轮都有独立数据作用域，结果保持输入顺序。改成串行或调整并发数，不需要改写分流规则。","The loop schedules orders; the child workflow makes each decision. It checks stock first, then high value, then the default route. The paired merge receives only the selected branch.\n\nEach iteration has its own data scope and results preserve input order. Serial mode or a different concurrency limit does not require rewriting routing rules."),
            }
        },
        1=>{
            store.create_workflow(project,&l.text("文档 · 清理与段落切分","Documents · Clean and split paragraphs"),graphs::document(l)).await?;
            store.create_workflow(project,&l.text("AI · 发布说明摘要（需模型连接）","AI · Release note summary (model required)"),graphs::ai_summary(l)).await?;
            Blueprint {
                child: None,
                schema: graphs::content_report(l),
                input: json!({"text":graphs::articles().to_string()}),
                name: l.text("内容报表 · 解析、去重与渠道汇总","Content report · Parse, deduplicate and aggregate"),
                prompt: l.text("把示例内容数据整理成渠道报表，重复的内容不要计数两次。","Turn the sample content data into a channel report without counting duplicate content twice."),
                answer: l.text("示例报表已运行完成：4 条输入保留 3 条唯一内容，newsletter 共 1,800 次浏览，community 共 800 次浏览。\n\n原子节点依次负责 JSON 解析、按 ID 去重和按渠道聚合。文档清理流程可以独立运行；AI 摘要流程需要先在设置中连接模型，初始化没有调用模型。","The sample report kept three unique records from four inputs: 1,800 newsletter views and 800 community views.\n\nAtomic nodes parse JSON, deduplicate IDs, and aggregate channels. Document cleanup runs independently. The AI summary workflow requires a model connection in Settings; initialization did not call a model."),
                followup: l.text("我想把报表名称改得直白一点，工作流引用会丢吗？","Can I rename the report without losing workflow references?"),
                followup_answer: l.text("可以。示例已通过正常保存接口更新报表名称并保留同一工作流 ID，随后重新校验。名称用于展示，引用依赖稳定的 ID。\n\n继续修改节点或新增会话都使用普通项目逻辑；这些内容没有只读限制。","Yes. This walkthrough used the normal save operation to update the report name while keeping its workflow ID, then validated it again. Names are for display; references use stable IDs.\n\nNode edits and new chats use ordinary project behavior. These examples are fully editable."),
            }
        },
        _=>Blueprint {
                child: None,
                schema: graphs::support(l),
                input: json!({"ticket":graphs::ticket()}),
                name: l.text("工单 · 并行上下文与优先级分流","Tickets · Parallel context and priority routing"),
                prompt: l.text("用示例工单并行准备客户资料和知识条目，再根据优先级和问题类型分流。","Use a sample ticket to prepare customer and knowledge context in parallel, then route by priority and topic."),
                answer: l.text("示例高优先级工单进入 priority 队列。客户资料和知识条目从运行输入中的示例数据并行读取，汇合后只选择一条处理分支。\n\n输出是处理建议，没有发送消息或修改工单。接入真实系统时，可将这两个示例数据节点替换成 HTTP 节点；保留后续输入输出契约即可。","The sample high-priority ticket routed to the priority queue. Customer and knowledge context came from sample run inputs and was prepared in parallel; the joined context then followed one routing branch.\n\nThe output is a recommendation. No message was sent and no ticket was modified. For a real integration, replace the two sample data nodes with HTTP nodes while preserving their output contracts."),
                followup: l.text("低优先级账单问题会走哪里？可以再验证一次吗？","Where does a normal-priority billing ticket go? Can you verify it?"),
                followup_answer: l.text("第二次试运行将 priority 改为 normal，topic 保持 billing，结果进入 billing 队列。高优先级规则不会再命中；如果既非高优先级也非账单问题，则走 general 默认出口。\n\n这两次运行保留独立输入、结果和执行快照，可从运行记录对比。","The second run changed priority to normal and kept topic as billing. It routed to the billing queue. Tickets matching neither rule use the general default route.\n\nBoth runs retain separate inputs, outputs, and execution snapshots for comparison in run history."),
            }
    };
    let session = store
        .create_session(
            project,
            &l.text("从需求搭建到试运行", "From requirements to a working run"),
        )
        .await?;
    let turn = Walkthrough::begin(store, project, &session.id, prompt, None).await?;
    let workflow = turn
        .call("create_workflow", json!({"name":name,"schema":schema}))
        .await?;
    let workflow_id = workflow["id"].as_str().unwrap();
    let valid = turn
        .call("validate_workflow", json!({"workflowId":workflow_id}))
        .await?;
    if valid["valid"] != true {
        return Err(Error::Execution(format!(
            "Initial workflow validation failed: {}",
            valid["errors"]
        )));
    }
    let result = turn.run(workflow_id, input.clone()).await?;
    require_status(&result, "succeeded")?;
    turn.finish(answer).await?;
    let turn = Walkthrough::begin(store, project, &session.id, followup, Some(workflow_id)).await?;
    turn.call(
        "inspect_workflow",
        json!({"workflowId":child.as_deref().unwrap_or(workflow_id)}),
    )
    .await?;
    if scenario.kind == 1 {
        turn.call("save_workflow",json!({"workflowId":workflow_id,"revision":1,"name":l.text("渠道报表 · 内容去重与浏览量汇总","Channel report · Unique content and total views"),"schema":schema})).await?;
        turn.call("validate_workflow", json!({"workflowId":workflow_id}))
            .await?;
    } else if scenario.kind == 2 {
        let mut input = input.clone();
        input["ticket"]["priority"] = json!("normal");
        let result = turn.run(workflow_id, input).await?;
        require_status(&result, "succeeded")?;
    }
    turn.finish(followup_answer).await?;

    if scenario.kind == 1 {
        let debug = store
            .create_session(
                project,
                &l.text(
                    "排错 · 无效 JSON 到重新运行",
                    "Debugging · Invalid JSON to a successful rerun",
                ),
            )
            .await?;
        let turn = Walkthrough::begin(
            store,
            project,
            &debug.id,
            l.text(
                "这份输入为什么失败：{items: [1, 2]}？",
                "Why does this input fail: {items: [1, 2]}?",
            ),
            Some(workflow_id),
        )
        .await?;
        let result = turn
            .run(workflow_id, json!({"text":"{items: [1, 2]}"}))
            .await?;
        require_status(&result, "failed")?;
        turn.finish(l.text("失败发生在 JSON 解析节点：对象键需要双引号。这次失败没有修改工作流；可以在运行详情看到失败节点和原始输入。\n\n修复时还要符合业务数据结构：这里需要内容对象数组，包含 id、channel 和 views 字段。","The JSON parser failed because object keys require double quotes. The workflow was not changed. Run details retain the failed node and original input.\n\nValid syntax must also match the business data shape: an array of content objects with id, channel, and views.")).await?;
        let turn = Walkthrough::begin(
            store,
            project,
            &debug.id,
            l.text(
                "换成项目里的示例内容数据，重新执行。",
                "Use the project's sample content data and rerun it.",
            ),
            Some(workflow_id),
        )
        .await?;
        let result = turn.run(workflow_id, input).await?;
        require_status(&result, "succeeded")?;
        turn.finish(l.text("重新运行成功。失败记录仍保留，可以与这次成功结果对比；不需要删除工作流，也没有自动重试旧输入。","The rerun succeeded. The failed run remains available for comparison. The workflow was preserved and the old input was not retried automatically.")).await?;
    } else {
        let review = store
            .create_session(
                project,
                &l.text("阅读与复用现有工作流", "Understand and reuse a workflow"),
            )
            .await?;
        let turn = Walkthrough::begin(
            store,
            project,
            &review.id,
            l.text(
                "项目里有哪些流程，哪些部分可以复用？",
                "Which workflows are available, and what can I reuse?",
            ),
            Some(workflow_id),
        )
        .await?;
        turn.call("list_workflows", json!({})).await?;
        turn.call("inspect_workflow", json!({"workflowId":workflow_id}))
            .await?;
        turn.finish(l.text("这些都是普通工作流。可以从侧栏打开查看节点配置，在新会话中引用它们，或通过子工作流节点复用。\n\n修改后保存新 revision；已有运行保留执行时快照。导出项目可以将流程、资源和可选的会话与运行历史交给其他人。","These are ordinary workflows. Open their node configuration from the sidebar, reference them in a new chat, or reuse them through a subworkflow node.\n\nSaving edits creates a new revision; existing runs retain their execution snapshots. Project export includes workflows, resources, and optional conversation and run history.")).await?;
    }
    let guide = store
        .create_session(
            project,
            &l.text(
                "接入真实业务前需要什么",
                "Before connecting a real business system",
            ),
        )
        .await?;
    let turn = Walkthrough::begin(
        store,
        project,
        &guide.id,
        l.text(
            "这些示例能直接用于真实业务吗？",
            "Can these examples be used in a real business system?",
        ),
        None,
    )
    .await?;
    turn.finish(l.text("这是预置示例讲解，对话文字为人工编写；工具结果和运行记录在初始化时真实生成。项目资源中的 README 和 JSON 文件提供输入示例。\n\n离线流程可直接试运行。接入真实业务需要自行配置 HTTP 地址、认证与输入契约；AI 节点和继续与助手聊天需要在设置中连接模型。发布前还应补齐业务规则、错误处理与授权范围。示例没有创建部署、凭证或外部调用。","This is an authored example walkthrough. Conversation text is prewritten; tool results and run history were generated by real execution during initialization. Project resources include a README and sample JSON inputs.\n\nOffline workflows can run immediately. Real integrations require your HTTP endpoints, authentication, and input contracts. AI nodes and new assistant replies require a model connection in Settings. Before publishing, complete business rules, error handling, and authorization. The examples created no deployments, credentials, or external calls.")).await?;
    let readme=l.text("# 示例项目\n\n这是可编辑的普通项目。会话文字是预置讲解；工具结果、运行记录与快照由本地实际执行产生。\n\n- 从侧栏打开工作流，点击试运行，输入框包含示例默认值。\n- 会话展示需求搭建、工具调用、结果说明、排错与业务接入讨论。\n- 离线流程不需要模型；AI 摘要节点和新聊天需要在设置中配置模型连接。\n- 示例不连接真实业务系统，不创建凭证、部署或外部副作用。\n- 可重命名、编辑、归档、导出或删除，与其他项目完全一致。\n- 名称和对话使用初始化时的界面语言，作为项目内容保存，之后不会随语言切换被改写。\n","# Example project\n\nThis is an ordinary editable project. Conversation text is an authored walkthrough. Tool results, runs, and snapshots come from real local execution.\n\n- Open a workflow from the sidebar and run it using its sample input defaults.\n- Chats cover building, tools, results, debugging, and integration planning.\n- Offline workflows need no model. AI summary nodes and new assistant replies need a model connection in Settings.\n- Examples contact no real business system and create no credentials, deployments, or external side effects.\n- Rename, edit, archive, export, or delete this project like any other.\n- Names and conversations use the interface language at initialization. They are saved project content and are not rewritten when the language changes.\n");
    tokio::fs::write(store.project_root.join("assets/README.md"), readme).await?;
    tokio::fs::write(
        store.project_root.join("assets/sample-input.json"),
        serde_json::to_vec_pretty(&match scenario.kind {
            0 => json!({"orders":graphs::orders()}),
            1 => json!({"text":graphs::articles().to_string()}),
            _ => json!({"ticket":graphs::ticket()}),
        })?,
    )
    .await?;
    Ok(())
}
fn require_status(result: &Value, status: &str) -> Result<()> {
    if result["run"]["status"] != status {
        return Err(Error::Execution(format!(
            "Initial example expected {status}, received {}: {}",
            result["run"]["status"], result["run"]["error"]
        )));
    }
    Ok(())
}
