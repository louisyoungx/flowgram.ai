import { FlowGramNode } from '@flowgram.ai/runtime-interface';

import { ExecutionContext, ExecutionResult, INodeExecutor } from '@workflow/type';

export class EndExecutor implements INodeExecutor {
  public type = FlowGramNode.End;

  public async execute(context: ExecutionContext): Promise<ExecutionResult> {
    context.state.setWorkflowOutputs(context.inputs);
    return {
      outputs: context.inputs,
    };
  }
}
