/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useEffect, useState, type FC } from 'react';

import { usePlayground, useService } from '@flowgram.ai/free-layout-editor';
import { IconButton, Toast, Dropdown, Tooltip } from '@douyinfe/semi-ui';
import { IconArrowDown } from '@douyinfe/semi-icons';

import { ExportImageFormat, ExportImageService } from '@/services/export-image/type';

const formatOptions = [
  {
    label: 'PNG',
    value: ExportImageFormat.Png,
  },
  {
    label: 'JPEG',
    value: ExportImageFormat.Jpeg,
  },
  {
    label: 'SVG',
    value: ExportImageFormat.Svg,
  },
];

export const ExportImage: FC = () => {
  const [exporting, setExporting] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const playground = usePlayground();
  const { readonly } = playground.config;
  const exportImageService = useService<ExportImageService>(ExportImageService);

  useEffect(() => {
    const subscription = exportImageService.onExportingChange((v) => {
      setExporting(v);
    });

    return () => {
      subscription.dispose();
    };
  }, [exportImageService]);

  const handleExportImage = (type: ExportImageFormat) => {
    setVisible(false);
    exportImageService.export({
      format: type,
      onSuccess: () => {
        const formatOption = formatOptions.find((option) => option.value === type);
        Toast.success(`Export ${formatOption?.label} image successfully`);
      },
    });
  };

  const button = (
    <IconButton
      color="secondary"
      className={visible ? '!coz-mg-secondary-pressed' : undefined}
      onClick={() => setVisible(true)}
      loading={exporting}
      icon={<IconArrowDown data-testid="workflow.detail.toolbar.export-image" />}
    />
  );

  return (
    <Dropdown
      trigger="custom"
      visible={visible}
      position="topLeft"
      onClickOutSide={() => setVisible(false)}
      render={
        <Dropdown.Menu className="min-w-[120px]">
          {formatOptions.map((item) => (
            <Dropdown.Item
              disabled={exporting || readonly}
              key={item.value}
              onClick={() => handleExportImage(item.value)}
              data-testid={`workflow.detail.toolbar.export-image.options.${item.value}`}
            >
              {item.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      }
    >
      {visible ? (
        button
      ) : (
        <div>
          <Tooltip content="Export image">{button}</Tooltip>
        </div>
      )}
    </Dropdown>
  );
};
