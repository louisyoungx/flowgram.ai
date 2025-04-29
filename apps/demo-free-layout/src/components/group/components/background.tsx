import { CSSProperties, FC, useEffect } from 'react';

import { useWatch } from '@flowgram.ai/free-layout-editor';

import { GroupField } from '../constant';
import { groupColors } from '../color';

interface GroupBackgroundProps {
  style?: CSSProperties;
}

export const GroupBackground: FC<GroupBackgroundProps> = ({ style }) => {
  const colorName = useWatch<string>(GroupField.Color) ?? 'Yellow';
  const color = groupColors[colorName];

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--workflow-group-bg-border-selected-color',
      color['400']
    );
    document.documentElement.style.setProperty('--workflow-group-bg-border-color', color['300']);
  }, [color]);

  return (
    <div
      className="workflow-group-background"
      style={{
        ...style,
        backgroundColor: `${color['300']}29`,
      }}
    />
  );
};
