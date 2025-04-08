import { useCallback } from 'react';

import { NodePanelResult, WorkflowNodePanelService } from '@flowgram.ai/free-node-panel-plugin';
import {
  useService,
  WorkflowDocument,
  usePlayground,
  getAntiOverlapPosition,
  PositionSchema,
  WorkflowNodeEntity,
  WorkflowSelectService,
  WorkflowNodeJSON,
} from '@flowgram.ai/free-layout-editor';

const useGetPanelPosition = () => {
  const playground = usePlayground();

  return useCallback(
    (targetBoundingRect: DOMRect): PositionSchema =>
      playground.config.getPosFromMouseEvent({
        clientX: targetBoundingRect.left + 64,
        clientY: targetBoundingRect.top - 7,
      }),
    [playground]
  );
};

const useSelectNode = () => {
  const selectService = useService(WorkflowSelectService);
  return useCallback(
    (node?: WorkflowNodeEntity) => {
      if (!node) {
        return;
      }
      selectService.selectNode(node);
    },
    [selectService]
  );
};

const useCustomPosition = () => {
  const workflowDocument = useService(WorkflowDocument);
  const playground = usePlayground();
  return useCallback(
    (params: { selectPosition: PositionSchema; panelPosition: PositionSchema }) => {
      const { selectPosition, panelPosition } = params;
      const nodeWidth = 360;
      const nodePanelOffset = 150 / playground.config.zoom;
      const customPositionX = panelPosition.x + nodeWidth / 2 + nodePanelOffset;
      const customNodePosition = getAntiOverlapPosition(workflowDocument, {
        x: customPositionX,
        y: selectPosition.y,
      });
      return {
        x: customNodePosition.x,
        y: customNodePosition.y,
      };
    },
    []
  );
};

export const useAddNode = () => {
  const workflowDocument = useService(WorkflowDocument);
  const nodePanelService = useService<WorkflowNodePanelService>(WorkflowNodePanelService);
  const playground = usePlayground();
  const getPanelPosition = useGetPanelPosition();
  const customPosition = useCustomPosition();
  const select = useSelectNode();

  return useCallback(
    async (targetBoundingRect: DOMRect): Promise<void> => {
      const panelPosition = getPanelPosition(targetBoundingRect);
      const nodes: WorkflowNodeEntity[] = [];
      await new Promise<void>((resolve) => {
        nodePanelService.callNodePanel({
          position: panelPosition,
          enableMultiAdd: true,
          panelProps: {},
          onSelect: async (panelParams?: NodePanelResult) => {
            if (!panelParams) {
              return;
            }
            const { selectEvent, nodeType, nodeJSON } = panelParams;
            const selectPosition = playground.config.getPosFromMouseEvent(selectEvent);
            const nodePosition = customPosition({
              selectPosition,
              panelPosition,
            });
            const node: WorkflowNodeEntity = workflowDocument.createWorkflowNodeByType(
              nodeType,
              nodePosition,
              nodeJSON ?? ({} as WorkflowNodeJSON)
            );
            select(node);
            nodes.push(node);
          },
          onClose: () => {
            resolve();
          },
        });
      });
    },
    [getPanelPosition, nodePanelService, playground.config.zoom, workflowDocument, select]
  );
};
