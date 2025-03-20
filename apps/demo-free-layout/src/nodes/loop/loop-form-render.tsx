import { FormRenderProps, FlowNodeJSON } from '@flowgram.ai/free-layout-editor';

import { FormHeader, FormContent, FormInputs, FormOutputs, SubCanvas } from '../../form-components';

export const LoopFormRender = ({ form }: FormRenderProps<FlowNodeJSON>) => (
  <>
    <FormHeader />
    <FormContent>
      <FormInputs />
      <SubCanvas />
      <FormOutputs />
    </FormContent>
  </>
);
