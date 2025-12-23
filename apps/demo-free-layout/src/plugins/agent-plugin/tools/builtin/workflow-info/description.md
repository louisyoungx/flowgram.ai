获取当前工作流的信息。

可用操作：

- get_workflow_structure: 获取工作流的整体结构，包括节点和边的基本信息
- get_workflow_schema: 详细列出所有节点与边的信息
- get_workflow_input_definition: 获取工作流的输入定义
- workflow_validate: 验证工作流中所有节点的配置是否正确
- workflow_testrun: 工作流试运行 (需要传入输入参数：testrun_inputs)
