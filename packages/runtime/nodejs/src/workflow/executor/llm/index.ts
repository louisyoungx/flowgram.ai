import { FlowGramNode } from '@flowgram.ai/runtime-interface';

import { ExecutionContext, ExecutionResult, INodeExecutor } from '@workflow/type';
import { delay } from '@workflow/infra';

export class LLMExecutor implements INodeExecutor {
  public type = FlowGramNode.LLM;

  public async execute(context: ExecutionContext): Promise<ExecutionResult> {
    await delay(100); // TODO mock node run
    return {
      outputs: {
        result: 'Hi, I am an AI assistant',
      },
    };
  }
}
