import { CSSProperties, FC } from 'react';

import { CommandRegistry, useService, WorkflowNodeEntity } from '@flowgram.ai/free-layout-editor';
import { Button, Tooltip } from '@douyinfe/semi-ui';

import { FlowCommandId } from '../../../shortcuts';
import { IconUngroup } from '../../../assets/icon-group';

interface UngroupButtonProps {
  node: WorkflowNodeEntity;
  style?: CSSProperties;
}

export const UngroupButton: FC<UngroupButtonProps> = ({ node, style }) => {
  const commandRegistry = useService(CommandRegistry);
  return (
    <Tooltip content="Ungroup">
      <div className="workflow-group-ungroup" style={style}>
        <Button
          icon={<IconUngroup size={14} />}
          style={{ height: 30, width: 30 }}
          theme="borderless"
          type="tertiary"
          onClick={() => {
            commandRegistry.executeCommand(FlowCommandId.UNGROUP, node);
          }}
        />
      </div>
    </Tooltip>
  );
};
