import { FormRenderProps, FlowNodeJSON } from '@flowgram.ai/free-layout-editor';

export const GroupFormRender = ({ form }: FormRenderProps<FlowNodeJSON>) => (
  <>
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
      }}
    ></div>
  </>
);
