import { FC, useState } from 'react';

import { IconSmallTriangleDown } from '@douyinfe/semi-icons';

import { DataStructureViewer } from '../viewer';

import './index.css';
import { Tag } from '@douyinfe/semi-ui';

interface NodeStatusGroupProps {
  title: string;
  data: unknown;
}

const isObjectHasContent = (obj: any = {}): boolean => Object.keys(obj).length > 0;

export const NodeStatusGroup: FC<NodeStatusGroupProps> = ({ title, data }) => {
  const hasContent = isObjectHasContent(data);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="node-status-group" onClick={() => hasContent && setIsExpanded(!isExpanded)}>
        {hasContent && (
          <IconSmallTriangleDown
            style={{
              transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
              transition: 'transform 0.2s',
              cursor: 'pointer',
              marginRight: '4px',
            }}
          />
        )}
        <span>{title}:</span>
        {!hasContent && <Tag size="small">null</Tag>}
      </div>
      {hasContent && isExpanded ? <DataStructureViewer data={data} /> : null}
    </>
  );
};
