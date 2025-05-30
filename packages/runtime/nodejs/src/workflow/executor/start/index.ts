import { FlowGramNode } from '@flowgram.ai/runtime-interface';

import { ExecutionContext, ExecutionResult, INodeExecutor } from '@workflow/type';

export class StartExecutor implements INodeExecutor {
  public type = FlowGramNode.Start;

  public async execute(context: ExecutionContext): Promise<ExecutionResult> {
    return {
      outputs: context.state.workflowInputs,
    };
  }
}
