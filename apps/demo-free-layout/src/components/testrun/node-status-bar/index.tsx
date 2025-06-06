import { useEffect, useState } from 'react';

import { NodeReport } from '@flowgram.ai/runtime-interface';
import { useCurrentEntity, useService } from '@flowgram.ai/free-layout-editor';

import { RunningService } from '../../../services';
import { NodeStatusRender } from './render';

const useNodeReport = () => {
  const node = useCurrentEntity();
  const [report, setReport] = useState<NodeReport>();

  const runningService = useService(RunningService);

  useEffect(() => {
    const reportDisposer = runningService.onNodeReportChange((nodeReport) => {
      if (nodeReport.id !== node.id) {
        return;
      }
      setReport(nodeReport);
    });
    const resetDisposer = runningService.onReset(() => {
      setReport(undefined);
    });
    return () => {
      reportDisposer.dispose();
      resetDisposer.dispose();
    };
  }, []);

  return report;
};

export const NodeStatusBar = () => {
  const report = useNodeReport();

  if (!report) {
    return null;
  }

  return <NodeStatusRender report={report} />;
};
