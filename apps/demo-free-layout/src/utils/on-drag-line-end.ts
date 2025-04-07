import {
  WorkflowNodePanelService,
  WorkflowNodePanelUtils,
} from '@flowgram.ai/free-node-panel-plugin';
import {
  FreeLayoutPluginContext,
  onDragLineEndParams,
  WorkflowDragService,
  WorkflowLinesManager,
  WorkflowNodeEntity,
  WorkflowNodeJSON,
} from '@flowgram.ai/free-layout-editor';

/**
 * Drag the end of the line to create an add panel (feature optional)
 * 拖拽线条结束需要创建一个添加面板 （功能可选）
 */
export const onDragLineEnd = async (ctx: FreeLayoutPluginContext, params: onDragLineEndParams) => {
  const nodePanelService = ctx.get(WorkflowNodePanelService);
  const document = ctx.document;
  const dragService = ctx.get(WorkflowDragService);
  const linesManager = ctx.get(WorkflowLinesManager);
  const { fromPort, toPort, mousePos, line, originLine } = params;
  if (originLine || !line) {
    return;
  }
  if (toPort) {
    return;
  }
  const containerNode = WorkflowNodePanelUtils.getContainerNode({
    fromPort,
  });
  // Open add panel
  const result = await nodePanelService.singleSelectNodePanel({
    position: mousePos,
    containerNode,
    panelProps: {
      enableNodePlaceholder: true,
      enableScrollClose: true,
    },
  });
  if (!result) {
    return;
  }
  const { nodeType, nodeJSON } = result;
  const nodePosition = WorkflowNodePanelUtils.adjustNodePosition({
    nodeType,
    position: mousePos,
    fromPort,
    toPort,
    containerNode,
    document,
    dragService,
  });
  const node: WorkflowNodeEntity = document.createWorkflowNodeByType(
    nodeType,
    nodePosition,
    nodeJSON ?? ({} as WorkflowNodeJSON),
    containerNode?.id
  );
  await WorkflowNodePanelUtils.waitNodeRender();
  WorkflowNodePanelUtils.buildLine({
    fromPort,
    node,
    toPort,
    linesManager,
  });
};
