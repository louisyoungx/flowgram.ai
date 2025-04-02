'use client';
import { useEffect, useState } from 'react';

import { Editor } from './editor';

export const EditorClient = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // 确保只在客户端渲染 Editor
    return null;
  }

  return <Editor />;
};
