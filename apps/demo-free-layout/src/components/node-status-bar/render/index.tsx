import { FC, useMemo } from 'react';

import { NodeReport, WorkflowStatus } from '@flowgram.ai/runtime-interface';
import { Tag } from '@douyinfe/semi-ui';
import { IconSpin } from '@douyinfe/semi-icons';

import { IconWarningFill } from '../icon/warning';
import { IconSuccessFill } from '../icon/success';
import { NodeStatusHeader } from '../header';
import './index.css';
import { DataStructureViewer } from '../viewer';
import { NodeStatusGroup } from '../group';

interface NodeStatusRenderProps {
  report: NodeReport;
}

const msToSeconds = (ms: number): string => (ms / 1000).toFixed(2) + 's';

export const NodeStatusRender: FC<NodeStatusRenderProps> = ({ report }) => {
  const { status: nodeStatus } = report;

  // 节点 4 个状态
  const isNodeSucceed = nodeStatus === WorkflowStatus.Succeeded;
  const isNodeProcessing = nodeStatus === WorkflowStatus.Processing;
  const isNodeFailed = nodeStatus === WorkflowStatus.Failed;
  const isNodePending = nodeStatus === WorkflowStatus.Pending;

  const tagColor = useMemo(() => {
    if (isNodeSucceed) {
      return 'node-status-succeed';
    }
    if (isNodeFailed) {
      return 'node-status-failed';
    }
    if (isNodeProcessing) {
      return 'node-status-processing';
    }
  }, [isNodeSucceed, isNodeFailed, isNodeProcessing]);

  const renderIcon = () => {
    if (isNodeProcessing) {
      return (
        <IconSpin
          spin
          style={{
            color: 'rgba(77,83,232,1',
          }}
        />
      );
    }
    if (isNodeSucceed) {
      return <IconSuccessFill />;
    }
    return <IconWarningFill className={tagColor} />;
  };
  const renderDesc = () => {
    const getDesc = () => {
      if (isNodeProcessing) {
        return 'Running';
      } else if (isNodePending) {
        return 'Run terminated';
      } else if (isNodeSucceed) {
        return 'Succeed';
      } else if (isNodeFailed) {
        return 'Failed';
      }
    };

    const desc = getDesc();

    return desc ? <p style={{ margin: 0 }}>{desc}</p> : null;
  };
  const renderCost = () => (
    <Tag size="small" className={tagColor}>
      {msToSeconds(report.timeCost)}
    </Tag>
  );

  if (!report) {
    return null;
  }

  return (
    <NodeStatusHeader
      header={
        <>
          {renderIcon()}
          {renderDesc()}
          {renderCost()}
        </>
      }
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          padding: '0px 2px 10px 2px',
        }}
      >
        <NodeStatusGroup title="Inputs" data={report.snapshots[0].inputs} />
        <NodeStatusGroup title="Outputs" data={report.snapshots[0].outputs} />
        <NodeStatusGroup title="Data" data={report.snapshots[0].data} />
      </div>
    </NodeStatusHeader>
  );
};
