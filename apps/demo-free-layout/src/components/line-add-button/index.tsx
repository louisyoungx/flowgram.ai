import { useCallback } from 'react';

import {
  WorkflowNodePanelService,
  WorkflowNodePanelUtils,
} from '@flowgram.ai/free-node-panel-plugin';
import { LineRenderProps } from '@flowgram.ai/free-lines-plugin';
import {
  HistoryService,
  useService,
  WorkflowDocument,
  WorkflowDragService,
  WorkflowLinesManager,
  WorkflowNodeEntity,
  WorkflowNodeJSON,
} from '@flowgram.ai/free-layout-editor';

import './index.less';
import { useVisible } from './use-visible';
import { IconPlusCircle } from './button';

export const LineAddButton = (props: LineRenderProps) => {
  const { line, selected, color } = props;
  const visible = useVisible({ line, selected, color });
  const nodePanelService = useService<WorkflowNodePanelService>(WorkflowNodePanelService);
  const document = useService(WorkflowDocument);
  const dragService = useService(WorkflowDragService);
  const linesManager = useService(WorkflowLinesManager);
  const historyService = useService(HistoryService);

  const { fromPort, toPort } = line;

  const onClick = useCallback(async () => {
    const position = {
      x: (line.position.from.x + line.position.to.x) / 2,
      y: (line.position.from.y + line.position.to.y) / 2,
    };
    const containerNode = WorkflowNodePanelUtils.getContainerNode({
      fromPort,
    });
    const result = await nodePanelService.singleSelectNodePanel({
      position,
      containerNode,
      panelProps: {
        enableScrollClose: true,
      },
    });
    if (!result) {
      return;
    }
    const { nodeType, nodeJSON } = result;
    const nodePosition = WorkflowNodePanelUtils.adjustNodePosition({
      nodeType,
      position,
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
    if (fromPort && toPort) {
      WorkflowNodePanelUtils.subNodesAutoOffset({
        node,
        fromPort,
        toPort,
        containerNode,
        historyService,
        dragService,
        linesManager,
      });
    }
    await WorkflowNodePanelUtils.waitNodeRender();
    WorkflowNodePanelUtils.buildLine({
      fromPort,
      node,
      toPort,
      linesManager,
    });
    line.dispose();
  }, []);

  if (!visible) {
    return <></>;
  }

  return (
    <div
      className="line-add-button"
      style={{
        left: '50%',
        top: '50%',
        color,
      }}
      data-testid="sdk.workflow.canvas.line.add"
      data-line-id={line.id}
      onClick={onClick}
    >
      <IconPlusCircle />
    </div>
  );
};
