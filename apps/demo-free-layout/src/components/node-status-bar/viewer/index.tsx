import React from 'react';

import './index.css';
import { Toast } from '@douyinfe/semi-ui';

interface DataStructureViewerProps {
  data: any;
  level?: number;
}

export const DataStructureViewer: React.FC<DataStructureViewerProps> = ({ data, level = 0 }) => {
  const handleDoubleClick = (value: string) => {
    navigator.clipboard.writeText(value);
    Toast.success('Copied');
  };

  const renderValue = (value: any): JSX.Element => {
    if (value === null) return <span className="node-status-data-null">null</span>;
    if (value === undefined) return <span className="node-status-data-undefined">undefined</span>;

    switch (typeof value) {
      case 'string':
        return (
          <span className="node-status-data-string">
            <span>{'"'}</span>
            <span className="node-status-data-value" onDoubleClick={() => handleDoubleClick(value)}>
              {value}
            </span>
            <span>{'"'}</span>
          </span>
        );
      case 'number':
        return (
          <span className="node-status-data-number">
            <span
              className="node-status-data-value"
              onDoubleClick={() => handleDoubleClick(String(value))}
            >
              {value}
            </span>
          </span>
        );
      case 'boolean':
        return (
          <span className="node-status-data-boolean">
            <span
              className="node-status-data-value"
              onDoubleClick={() => handleDoubleClick(value.toString())}
            >
              {value.toString()}
            </span>
          </span>
        );
      case 'object':
        if (Array.isArray(value)) {
          if (value.length === 0) return <span className="node-status-data-array">[]</span>;
          return (
            <div className="node-status-data-array">
              [
              <div className="node-status-data-children">
                {value.map((item, index) => (
                  <div key={index} className="node-status-data-item">
                    {renderValue(item)}
                    {index < value.length - 1 ? ',' : ''}
                  </div>
                ))}
              </div>
              ]
            </div>
          );
        }
        if (Object.keys(value).length === 0)
          return <span className="node-status-data-object">{}</span>;
        return (
          <div className="node-status-data-object">
            {
              <div className="node-status-data-children">
                {Object.entries(value).map(([key, val], index, arr) => (
                  <div key={key} className="node-status-data-item">
                    <span
                      className="node-status-data-key"
                      onDoubleClick={() => handleDoubleClick(key)}
                    >
                      {key}
                    </span>
                    : {renderValue(val)}
                    {index < arr.length - 1 ? ',' : ''}
                  </div>
                ))}
              </div>
            }
          </div>
        );
      default:
        return (
          <span>
            <span
              className="node-status-data-value"
              onDoubleClick={() => handleDoubleClick(String(value))}
            >
              {String(value)}
            </span>
          </span>
        );
    }
  };

  return (
    <div className="node-status-data-structure-viewer" style={{ paddingLeft: level * 20 }}>
      {renderValue(data)}
    </div>
  );
};
