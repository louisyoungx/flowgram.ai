import { ExecutionContext, ExecutionResult, FlowGramNode, INodeExecutor } from '@workflow/type';

export class EndExecutor implements INodeExecutor {
  public type = FlowGramNode.End;

  public async execute(context: ExecutionContext): Promise<ExecutionResult> {
    context.io.setOutputs(context.inputs);
    return {
      outputs: context.inputs,
    };
  }
}
