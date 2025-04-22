import { type FC, type CSSProperties, useEffect, useRef } from 'react';

import { usePlayground } from '@flowgram.ai/free-layout-editor';

import { CommentEditorModel } from '../model';
import { CommentEditorEvent } from '../constant';

interface ICommentEditor {
  model: CommentEditorModel;
  style?: CSSProperties;
  value?: string;
  onChange?: (value: string) => void;
}

export const CommentEditor: FC<ICommentEditor> = (props) => {
  const { model, style, onChange } = props;
  const playground = usePlayground();
  const editorRef = useRef<HTMLDivElement | null>(null);

  // 同步编辑器内部值变化
  useEffect(() => {
    const disposer = model.on((params) => {
      if (params.type !== CommentEditorEvent.Change) {
        return;
      }
      onChange?.(model.value);
    });
    return () => disposer.dispose();
  }, [model, onChange]);

  useEffect(() => {
    if (!editorRef.current) {
      return;
    }
    model.element = editorRef.current;
  }, [editorRef]);

  return (
    <div className="workflow-comment-editor" ref={editorRef}>
      <textarea style={style} readOnly={playground.config.readonly} />
    </div>
  );
};
