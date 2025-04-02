import { useState } from 'react';

import { Button } from '@douyinfe/semi-ui';

export const Tools = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRun = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/runtime', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || '处理失败');
      }

      console.log('run success', data.data);
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'run failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mastra-workflow-tools absolute z-999">
      <Button onClick={handleRun} loading={isLoading}>
        run
      </Button>
    </div>
  );
};
