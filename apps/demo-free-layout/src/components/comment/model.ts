import { Emitter } from '@flowgram.ai/free-layout-editor';

import { CommentEditorEventParams } from './type';
import { CommentEditorDefaultValue, CommentEditorEvent } from './constant';

export class CommentEditorModel {
  private innerValue: string = CommentEditorDefaultValue;

  private emitter: Emitter<CommentEditorEventParams> = new Emitter();

  private dom: HTMLDivElement | null = null;

  /** 注册事件 */
  public on = this.emitter.event;

  /** 获取当前值 */
  public get value(): string {
    return this.innerValue;
  }

  /** 外部设置模型值 */
  public setValue(newValue?: string): void {
    const value = newValue ?? CommentEditorDefaultValue;
    if (value === this.innerValue) {
      return;
    }
    this.innerValue = value;
    this.emitter.fire({
      type: CommentEditorEvent.Change,
      value: this.innerValue,
    });
  }

  public set element(el: HTMLDivElement) {
    if (Boolean(this.dom)) {
      return;
    }
    this.dom = el;
  }

  /** 获取编辑器 DOM 节点 */
  public get element(): HTMLDivElement | null {
    return this.dom;
  }

  /** 编辑器聚焦/失焦 */
  public setFocus(focused: boolean): void {
    if (focused && !this.focused) {
      // ReactEditor.focus(this.editor);
    } else if (!focused && this.focused) {
      // ReactEditor.blur(this.editor);
      // ReactEditor.deselect(this.editor);
      // this.emitter.emit(CommentEditorEvent.Blur, {});
    }
  }

  /** 选择末尾 */
  public selectEnd(): void {
    // TODO
    return;
  }

  /** 获取聚焦状态 */
  public get focused(): boolean {
    // return ReactEditor.isFocused(this.editor);
    return false;
  }
}
